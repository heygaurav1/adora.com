use anyhow::{anyhow, Result};
use async_stripe::{
    self as stripe,
    checkout::session::{
        CheckoutSession, CheckoutSessionMode, CheckoutSessionParams, CreateCheckoutSessionLineItems,
    },
    webhook::Webhook,
    Client,
};
use axum::{
    extract::{HeaderMap, State},
    http::StatusCode,
    routing::{get, post},
    Json, Router,
};
use dotenvy::dotenv;
use serde::{Deserialize, Serialize};
use std::env;
use std::sync::Arc;
use tower_http::cors::{Any, CorsLayer};

// --- MODELS ---

#[derive(Clone)]
struct AppState {
    stripe_client: Client,
    webhook_secret: String,
}

#[derive(Deserialize)]
struct CreateSessionRequest {
    product_name: String,
    price_cents: i64, 
    quantity: i64,
}

#[derive(Serialize)]
struct SessionResponse {
    checkout_url: String,
    session_id: String,
}

// --- HANDLERS ---

/// Create a Stripe Checkout Session and return the URL to the frontend
async fn create_checkout_session(
    State(state): State<Arc<AppState>>,
    Json(payload): Json<CreateSessionRequest>,
) -> Result<Json<SessionResponse>, (StatusCode, String)> {
    let line_item = CreateCheckoutSessionLineItems {
        quantity: Some(payload.quantity),
        price_data: Some(stripe::CreateCheckoutSessionLineItemsPriceData {
            currency: stripe::Currency::USD,
            unit_amount: Some(payload.price_cents),
            product_data: Some(stripe::CreateCheckoutSessionLineItemsPriceDataProductData {
                name: payload.product_name,
                ..Default::default()
            }),
            ..Default::default()
        }),
        ..Default::default()
    };

    let params = CheckoutSessionParams {
        success_url: Some("https://adora.com/payment/success".to_string()),
        cancel_url: Some("https://adora.com/payment/cancel".to_string()),
        mode: Some(CheckoutSessionMode::Payment),
        line_items: Some(vec![line_item]),
        ..Default::default()
    };

    match CheckoutSession::create(&state.stripe_client, params).await {
        Ok(session) => Ok(Json(SessionResponse {
            checkout_url: session.url.unwrap_or_default(),
            session_id: session.id.to_string(),
        })),
        Err(e) => {
            eprintln!("Stripe error: {}", e);
            Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to create Stripe session".into()))
        }
    }
}

/// Handle Stripe Webhooks (e.g., checkout.session.completed)
async fn stripe_webhook(
    headers: HeaderMap,
    State(state): State<Arc<AppState>>,
    body: String,
) -> Result<StatusCode, (StatusCode, String)> {
    let signature = headers
        .get("stripe-signature")
        .and_then(|h| h.to_str().ok())
        .ok_or((StatusCode::BAD_REQUEST, "Missing stripe-signature header".to_string()))?;

    // Verify webhook signature
    let event = Webhook::construct_event(&body, signature, &state.webhook_secret)
        .map_err(|e| (StatusCode::BAD_REQUEST, format!("Invalid signature: {}", e)))?;

    match event.type_ {
        stripe::EventType::CheckoutSessionCompleted => {
            if let stripe::EventObject::CheckoutSession(session) = event.data.object {
                println!("✅ Payment Succeeded for Session: {}", session.id);
                // TODO: Update your database (SQLx/SeaORM) to mark order as PAID
            }
        }
        _ => println!("🔔 Handled other webhook event: {:?}", event.type_),
    }

    Ok(StatusCode::OK)
}

// --- MAIN ---

#[tokio::main]
async fn main() -> Result<()> {
    dotenv().ok();
    tracing_subscriber::fmt::init();

    let stripe_key = env::var("STRIPE_SECRET_KEY")
        .expect("STRIPE_SECRET_KEY not set in .env");
    let webhook_secret = env::var("STRIPE_WEBHOOK_SECRET")
        .expect("STRIPE_WEBHOOK_SECRET not set in .env");

    let stripe_client = Client::new(stripe_key);
    let state = Arc::new(AppState {
        stripe_client,
        webhook_secret,
    });

    // Configure CORS for Next.js frontend
    let cors = CorsLayer::new()
        .allow_origin(Any) // In production, restrict this to your domain
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/health", get(|| async { "OK" }))
        .route("/api/payments/create-session", post(create_checkout_session))
        .route("/api/payments/webhook", post(stripe_webhook))
        .with_state(state)
        .layer(cors);

    let addr = "0.0.0.0:8080";
    println!("🚀 Rust Payment Server running on http://{}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;

    Ok(())
}
