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
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-white py-20 px-6"
        >
          {/* Top/Middle Section: Branding */}
          <div className="flex flex-col items-center mt-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-[2.5rem] bg-indigo-600 shadow-2xl shadow-indigo-200">
                <GraduationCap className="h-14 w-14 text-white" />
              </div>
              <div className="absolute inset-0 animate-ping rounded-[2.5rem] bg-indigo-400 opacity-10" />
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

          {/* Bottom Section: Action */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="w-full max-w-xs flex flex-col items-center gap-8"
          >
            <div className="text-center px-2">
              <p className="text-slate-600 text-[13px] leading-relaxed font-Aerial">
                Your digital campus companion for academics, marketplace, and community—everything from PYQs to AI assistance in one place.
              </p>
            </div>

            <Button 
              onClick={handleGetStarted}
              // rounded-full creates the pill shape from image_9e6460.png
              className="w-full h-16 rounded-full bg-[#5D53D6] hover:bg-[#4c44b5] text-white px-8 shadow-xl shadow-indigo-100 flex items-center justify-between group transition-all"
            >
              <span className="text-lg font-semibold font-serif">Join Us</span>
              <div className="bg-white/20 p-2 rounded-full">
                <ArrowRight className="h-4 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
            
            <p className="text-[10px] text-slate-400 font-bold tracking-widest">
              VERSION 1.0.0
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}