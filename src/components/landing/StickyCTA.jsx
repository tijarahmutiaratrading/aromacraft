import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#5C1A33] text-white py-4 px-6 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-medium text-sm md:text-base">Wooman Intimate Perfume</p>
              <p className="text-xs text-white/70">Mulai dari RM79 sahaja • Free Postage</p>
            </div>
            <a
              href="#order"
              className="flex items-center gap-2 bg-[#C9A96E] hover:bg-[#B8963D] px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <ShoppingCart className="w-4 h-4" />
              Order Sekarang
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}