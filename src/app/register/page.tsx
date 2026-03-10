"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Chrome, Apple, Loader2, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  createUserWithEmailAndPassword, 
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update Firebase Auth Profile
      await updateProfile(user, { displayName: name });

      // Save additional info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: new Date().toISOString(),
      });

      router.push("/");
    } catch (err: any) {
      console.error("Registration failed:", err);
      if (err.code === 'auth/email-already-in-use') {
        setError("This email is already registered.");
      } else if (err.code === 'auth/weak-password') {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Failed to create account. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Save to Firestore if new user
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        createdAt: new Date().toISOString(),
      }, { merge: true });

      router.push("/");
    } catch (err: any) {
      console.error("Google register failed:", err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setError("Failed to register with Google.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/30 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Brand Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-12 flex flex-col items-center z-50 pt-2"
      >
        <Link href="/" className="group flex flex-col items-center">
          <h2 className="text-[34px] font-extralight tracking-[0.4em] uppercase text-white group-hover:tracking-[0.5em] transition-all duration-700">
            ADORA
          </h2>
          <span className="text-[9px] uppercase tracking-[0.6em] text-zinc-600 mt-3 font-light">The Redefined Luxury</span>
        </Link>
      </motion.div>

      <main className="w-full max-w-[500px] px-8 relative z-20 mt-20 md:mt-0">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-zinc-950/40 backdrop-blur-3xl border border-white/5 p-12 py-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-[28px] font-extralight tracking-tight mb-3 text-white">Join the House</h1>
            <p className="text-[13px] text-zinc-500 text-center font-light leading-relaxed max-w-[280px]">
              Create your ADORA profile to access exclusive boutique experiences.
            </p>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-[12px] text-red-400 font-light">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-light pl-1">Full Nomenclature</label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alexander McQueen"
                  className="w-full h-14 bg-white/[0.03] border border-white/5 rounded-2xl px-12 text-[14px] font-light placeholder:text-zinc-800 focus:border-white/20 focus:bg-white/[0.05] transition-all outline-none"
                  required
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-white transition-colors" strokeWidth={1} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-light pl-1">Email Residency</label>
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@adora.com"
                  className="w-full h-14 bg-white/[0.03] border border-white/5 rounded-2xl px-12 text-[14px] font-light placeholder:text-zinc-800 focus:border-white/20 focus:bg-white/[0.05] transition-all outline-none"
                  required
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-white transition-colors" strokeWidth={1} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-light pl-1">Cipher Access</label>
              <div className="relative group">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-14 bg-white/[0.03] border border-white/5 rounded-2xl px-12 text-[14px] font-light placeholder:text-zinc-800 focus:border-white/20 focus:bg-white/[0.05] transition-all outline-none"
                  required
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-white transition-colors" strokeWidth={1} />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-14 bg-white text-black rounded-2xl text-[12px] font-normal uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-2xl relative overflow-hidden disabled:opacity-50"
            >
              <span className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                Establish Membership
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                   <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              )}
            </button>
          </form>

          <div className="relative py-12 flex items-center justify-center">
            <div className="absolute inset-x-0 h-px bg-white/5" />
            <span className="relative bg-zinc-950 px-6 text-[9px] text-zinc-700 font-light uppercase tracking-[0.5em]">Selective OAuth</span>
          </div>

          <div className="grid grid-cols-2 gap-5">
             <button 
               onClick={handleGoogleRegister}
               disabled={loading}
               className="h-14 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 hover:border-white/10 transition-all group"
             >
                <Chrome className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <span className="text-[11px] font-light text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">Google</span>
             </button>
             <button 
                disabled={loading}
                className="h-14 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 hover:border-white/10 transition-all group opacity-50 cursor-not-allowed"
             >
                <Apple className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <span className="text-[11px] font-light text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">Apple</span>
             </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[11px] text-zinc-600 font-light uppercase tracking-[0.2em]">
              Already a member of the house? <br />
              <Link href="/login" className="text-white hover:text-blue-400 transition-all font-normal mt-2 inline-block border-b border-white/10 hover:border-blue-400">Sign In</Link>
            </p>
          </div>
        </motion.div>
      </main>

      {/* Subtle Footer */}
      <footer className="absolute bottom-10 w-full px-12 flex justify-between items-center opacity-20 select-none z-10">
         <span className="text-[9px] uppercase tracking-[0.5em] font-light">© 2026 ADORA Boutique Edition</span>
         <div className="flex gap-10">
            <span className="text-[9px] uppercase tracking-[0.3em] font-light hover:text-white cursor-pointer transition-colors">Privacy Privacy</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-light hover:text-white cursor-pointer transition-colors">Digital Ethics Terminology</span>
         </div>
      </footer>
    </div>
  );
}

