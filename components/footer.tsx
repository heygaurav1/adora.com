import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-muted-foreground mb-2">JOIN OUR NEWSLETTER</p>
          <h3 className="font-serif text-2xl text-foreground mb-6">Get the latest on products and styling</h3>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
            />
            <button className="bg-foreground text-background px-6 py-3 text-sm tracking-wide hover:bg-foreground/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div>
            <h4 className="text-xs tracking-widest text-foreground mb-4">Contact us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Call: +1 310 555 0147</p>
              <p>Email: hello@adora.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-foreground mb-4">Shop by</h4>
            <div className="space-y-2">
              <Link href="/women" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Women</Link>
              <Link href="/men" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Men</Link>
              <Link href="/kids" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Kids</Link>
              <Link href="/home-decor" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-foreground mb-4">Support</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping & Delivery</Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Returns & Exchanges</Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Size Guide</Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-foreground mb-4">Services</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Personal Styling</Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Gift Cards</Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Store Locator</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-foreground mb-4">About</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Our Story</Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Press</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-foreground mb-4">Flagship Store</h4>
            <div className="text-sm text-muted-foreground">
              <p>456 Rodeo Drive</p>
              <p>Beverly Hills, CA 90210</p>
              <Link href="#" className="underline hover:text-foreground transition-colors mt-2 inline-block">Store details</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 md:mb-0">
            <span>Los Angeles</span>
            <span>English</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {"© 2024 ADORA. All rights reserved."}
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
