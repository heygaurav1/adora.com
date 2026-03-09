"use client"

import { useEffect, useState } from "react"

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-12">
        <h1 className="font-serif text-5xl lg:text-7xl tracking-[0.3em] text-foreground">
          ADORA
        </h1>
        <p className="text-center text-xs tracking-[0.4em] text-muted-foreground mt-3">
          LOS ANGELES
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-border overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Tagline */}
      <p className="mt-8 text-xs tracking-widest text-muted-foreground">
        LUXURY REDEFINED
      </p>
    </div>
  )
}
