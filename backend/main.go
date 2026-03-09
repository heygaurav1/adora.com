package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type RegisterRequest struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type AuthResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
	Token   string `json:"token,omitempty"`
}

func setupCORS(w *http.ResponseWriter, r *http.Request) bool {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
	if r.Method == "OPTIONS" {
		(*w).WriteHeader(http.StatusOK)
		return true
	}
	return false
}

func main() {
	// Login Handler
	http.HandleFunc("/api/login", func(w http.ResponseWriter, r *http.Request) {
		if setupCORS(&w, r) {
			return
		}

		if r.Method != "POST" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		var req LoginRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		fmt.Printf("ADORA Login Attempt: %s\n", req.Email)

		response := AuthResponse{
			Status:  "success",
			Message: "Authenticated by ADORA CLOUD SERVICE",
			Token:   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})

	// Register Handler
	http.HandleFunc("/api/register", func(w http.ResponseWriter, r *http.Request) {
		if setupCORS(&w, r) {
			return
		}

		if r.Method != "POST" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		var req RegisterRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		fmt.Printf("ADORA Account Creation: %s (%s)\n", req.Name, req.Email)

		response := AuthResponse{
			Status:  "success",
			Message: "Account created successfully. Welcome to ADORA.",
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})

	fmt.Println("ADORA High-Performance Backend running on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
