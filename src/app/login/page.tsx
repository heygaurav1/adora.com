"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Chrome, Apple, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      if (data.status === "success") {
        router.push("/");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Ensure backend is running on port 8080.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Brand Logo */}
      <div className="absolute top-12 flex flex-col items-center z-10 transition-opacity hover:opacity-80">
        <Link href="/" className="text-[32px] font-normal tracking-[0.2em] uppercase text-white hover:tracking-[0.3em] transition-all">
          ADORA
        </Link>
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mt-2">The Defined Luxury</span>
      </div>

      <main className="w-full max-w-[420px] px-8 relative z-20">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-[32px] font-medium tracking-tight mb-3">Welcome back</h1>
          <p className="text-[14px] text-gray-400 text-center font-normal leading-relaxed">
            Enter your credentials to access your ADORA profile
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-medium pl-1">Email Address</label>
            <div className="relative group">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full h-14 bg-[#111] border border-gray-800 rounded-xl px-12 text-[14px] font-normal placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-black/50 transition-all outline-none"
                required
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-medium">Password</label>
              <Link href="/forgot" className="text-[11px] text-blue-500 hover:text-blue-400 font-medium tracking-wide">Forgot?</Link>
            </div>
            <div className="relative group">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-14 bg-[#111] border border-gray-800 rounded-xl px-12 text-[14px] font-normal placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-black/50 transition-all outline-none"
                required
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full h-14 bg-white text-black rounded-xl text-[14px] font-medium tracking-wide hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
          >
            Sign in
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <div className="relative py-10 flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-gray-900" />
          <span className="relative bg-black px-4 text-[11px] text-gray-500 font-normal uppercase tracking-[0.2em]">or continue with</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="h-14 border border-gray-800 rounded-xl flex items-center justify-center gap-3 hover:bg-[#111] hover:border-gray-700 transition-all">
              <Chrome className="w-4 h-4" />
              <span className="text-[12px] font-normal text-gray-300">Google</span>
           </button>
           <button className="h-14 border border-gray-800 rounded-xl flex items-center justify-center gap-3 hover:bg-[#111] hover:border-gray-700 transition-all">
              <Apple className="w-4 h-4" />
              <span className="text-[12px] font-normal text-gray-300">Apple</span>
           </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[13px] text-gray-500 font-normal">
            New to ADORA? <Link href="/register" className="text-white hover:underline transition-all">Create Account</Link>
          </p>
        </div>
      </main>

      {/* Subtle Footer */}
      <footer className="absolute bottom-10 w-full px-12 flex justify-between items-center opacity-30 select-none">
         <span className="text-[10px] uppercase tracking-[0.4em] font-normal">© 2026 ADORA INDIA</span>
         <div className="flex gap-8">
            <span className="text-[10px] uppercase font-normal hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="text-[10px] uppercase font-normal hover:text-white cursor-pointer transition-colors">Terms</span>
         </div>
      </footer>
    </div>
  );
}
