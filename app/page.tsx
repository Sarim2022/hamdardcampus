"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/home");
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-white py-12 px-6"
        >
          {/* Top Section: Branding & Scattered Tags */}
          <div className="flex flex-col items-center mt-6 relative w-full max-w-sm h-[380px] justify-center">
            
            {/* Floating Tags Section - Focused on Top White Area */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* --- TOP ROW CHIPS (In the white area) --- */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                className="absolute top-[-10%] left-[5%] bg-slate-50 text-slate-400 px-3 py-1.5 rounded-full text-[10px] font-bold rotate-[-8deg] border border-slate-100 shadow-sm"
              >
                #Events
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                className="absolute top-[-15%] left-[35%] bg-slate-50 text-slate-400 px-3 py-1.5 rounded-full text-[10px] font-bold rotate-3 border border-slate-100"
              >
                #Academics
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
                className="absolute top-[-12%] right-[10%] bg-indigo-50/50 text-indigo-300 px-4 py-1.5 rounded-full text-[10px] font-bold -rotate-6 border border-indigo-100/30"
              >
                #Exams
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
                className="absolute top-[5%] right-[25%] bg-white text-slate-500 border border-slate-200 px-4 py-1.5 rounded-full text-[10px] font-bold rotate-12 shadow-sm"
              >
                #Campus Tour
              </motion.div>

              {/* --- MID SECTION BOLD CHIPS --- */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                className="absolute top-[20%] left-[-2%] bg-black text-white px-5 py-2 rounded-full text-xs font-bold -rotate-12 shadow-xl"
              >
                #Assignment
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                className="absolute top-[25%] right-[-2%] bg-black text-white px-5 py-2 rounded-full text-xs font-bold rotate-12 shadow-xl"
              >
                #Lost & Found 
              </motion.div>

              {/* --- SIDE CHIP --- */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 }}
                className="absolute bottom-[25%] right-[2%] bg-white text-indigo-600 border border-indigo-50 px-3 py-1.5 rounded-full text-[10px] font-bold rotate-[-10deg] shadow-sm"
              >
                #Chats 
              </motion.div>
            </div>

            {/* Main Center Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-[2.2rem] bg-indigo-600 shadow-2xl shadow-indigo-200">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              <div className="absolute inset-0 animate-ping rounded-[2.2rem] bg-indigo-400 opacity-10" />
            </motion.div>

            {/* Text Branding */}
            <div className="mt-12 text-center z-10">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold tracking-tight text-slate-900"
              >
                Hamdard<span className="text-indigo-600">Campus</span>
              </motion.h1>

              <div className="mt-3 flex justify-center overflow-hidden">
                {"Jamia Hamdard University".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.04 }}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400/80"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Action */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="w-full max-w-xs flex flex-col items-center gap-3 mb-4"
          >
            <div className="text-center px-4 mb-4">
              <p className="text-slate-500 text-[15px] leading-relaxed italic">
                Your digital campus companion for academics, marketplace, and community—everything in one place.
              </p>
            </div>

            <Button 
              onClick={handleGetStarted}
              className="w-full h-16 rounded-full bg-[#5D53D6] hover:bg-[#4c44b5] text-white px-8 shadow-xl shadow-indigo-100 flex items-center justify-between group transition-all"
            >
              <span className="text-lg font-semibold">Get Started</span>
              <div className="bg-white/20 p-2 rounded-full">
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>

            <Button 
              variant="ghost"
              className="w-full h-14 rounded-full bg-slate-50 hover:bg-slate-100 text-[#5D53D6] font-medium transition-colors border border-transparent hover:border-slate-200 mt-2"
              onClick={() => window.open('https://your-link-here.com', '_blank')}
            >
              Connect with us
            </Button>
            
            <p className="mt-6 text-[10px] text-slate-400 tracking-[0.2em] font-bold">
              VERSION 1.0.0
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}