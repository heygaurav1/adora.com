"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Chrome, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: any) {
      console.error("Login failed:", err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError("Invalid email or password.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err: any) {
      console.error("Google login failed:", err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setError("Google sign-in failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      
      {/* Brand Header */}
      <div className="mb-16 text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-[32px] font-extralight tracking-[0.4em] uppercase">ADORA</h1>
        </Link>
      </div>

      <div className="w-full max-w-[400px]">
        <div className="mb-10">
          <h2 className="text-[24px] font-light tracking-tight mb-2">Login</h2>
          <p className="text-[14px] text-zinc-500 font-light">Access your account to continue shopping.</p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-4 h-4 text-white/60" />
            <p className="text-[13px] text-white/80 font-light">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-3">
            <label className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-white/20 py-3 text-[15px] font-light focus:border-white transition-colors outline-none placeholder:text-zinc-800"
              required
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">Password</label>
              <Link href="/forgot" className="text-[11px] text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">Forgot?</Link>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-transparent border-b border-white/20 py-3 text-[15px] font-light focus:border-white transition-colors outline-none placeholder:text-zinc-800"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full h-14 bg-white text-black text-[12px] font-medium uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
            {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          </button>
        </form>

        <div className="relative my-12 flex items-center">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="mx-4 text-[11px] text-zinc-600 font-light uppercase tracking-widest">Or login with</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full h-14 border border-white/10 flex items-center justify-center gap-3 hover:bg-white/5 transition-all text-[12px] uppercase tracking-widest mb-10"
        >
          <Chrome className="w-4 h-4" />
          Google
        </button>

        <div className="text-center pt-4">
          <p className="text-[13px] text-zinc-500 font-light">
            New to ADORA?{" "}
            <Link href="/register" className="text-white hover:border-b hover:border-white transition-all ml-1">Create Account</Link>
          </p>
        </div>
      </div>

      <footer className="mt-24 text-[10px] text-zinc-700 uppercase tracking-widest font-light">
        © 2026 ADORA Boutique Edition
      </footer>
    </div>
  );
}
