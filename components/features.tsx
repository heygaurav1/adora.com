import { Truck, RefreshCw, MessageCircle, Shield } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Personal Style Advice",
    description: "Chat online or book an appointment in our store.",
    link: "Ask a Style Expert"
  },
  {
    icon: Truck,
    title: "Fast, Free Shipping",
    description: "Enjoy free shipping on every order. Or pick up in your nearest store.",
    link: "Learn more"
  },
  {
    icon: RefreshCw,
    title: "Free Returns",
    description: "Schedule a courier pick-up, or drop off the products at a store.",
    link: "Learn more"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Shop with confidence using our secure payment methods.",
    link: "Learn more"
  }
]

export function Features() {
  return (
    <section className="py-12 lg:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center lg:text-left">
              <feature.icon className="h-6 w-6 mx-auto lg:mx-0 mb-4 text-foreground" strokeWidth={1.5} />
              <h3 className="text-sm text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
              <a href="#" className="text-sm text-foreground underline underline-offset-4 hover:text-accent transition-colors">
                {feature.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
