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
      router.push("/onboarding");
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          // "justify-between" pushes the top div and bottom div apart
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-white py-12 px-6"
        >
          {/* Top Section: Branding */}
          <div className="flex flex-col items-center mt-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-indigo-600 shadow-2xl shadow-indigo-200">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              <div className="absolute inset-0 animate-ping rounded-[2rem] bg-indigo-400 opacity-10" />
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tight text-slate-900"
            >
              Hamdard<span className="text-indigo-600">Campus</span>
            </motion.h1>

            <div className="mt-3 flex overflow-hidden">
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

          {/* Bottom Section: Action (Everything here is aligned to bottom) */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="w-full max-w-xs flex flex-col items-center gap-3"
          >
            <div className="text-center px-2 mb-4">
              <p className="text-slate-300 text-[14px] leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                Your digital campus companion for academics, marketplace, and community—everything in one place.
              </p>
            </div>

            {/* Main Action Button */}
            <Button 
              onClick={handleGetStarted}
              className="w-full h-16 rounded-full bg-[#5D53D6] hover:bg-[#4c44b5] text-white px-8 shadow-xl shadow-indigo-100 flex items-center justify-between group transition-all"
            >
              <span className="text-lg font-semibold font-serif">Get Started</span>
              <div className="bg-white/20 p-2 rounded-full">
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>

            {/* Connect Button */}
            <Button 
              variant="ghost"
              className="w-full h-14 rounded-full bg-slate-100 hover:bg-slate-200 text-[#5D53D6] font-serif font-medium transition-colors"
              onClick={() => window.open('https://your-link-here.com', '_blank')}
            >
              Connect with us
            </Button>
            
            <p className="mt-4 text-[10px] text-slate-400  tracking-[0.2em] style={{ fontFamily: 'Arial, sans-serif' }}">
              VERSION 1.0.0
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}