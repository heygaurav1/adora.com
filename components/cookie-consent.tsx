"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }))
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md border border-border p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-lg text-foreground mb-2">We Value Your Privacy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
              <a href="/privacy" className="underline hover:text-foreground ml-1">Privacy Policy</a>
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <button
            onClick={acceptAll}
            className="px-6 py-2.5 bg-foreground text-background text-sm tracking-wider hover:bg-foreground/90 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={acceptEssential}
            className="px-6 py-2.5 border border-border text-sm tracking-wider hover:border-foreground transition-colors"
          >
            Essential Only
          </button>
          <a 
            href="/cookies"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  )
}
