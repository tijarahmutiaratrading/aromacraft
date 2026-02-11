import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Hide tooltip after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "60123456789"; // Replace with actual number
  const message = encodeURIComponent("Hi, saya nak tanya tentang Wooman Perfume");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-24 right-6 md:right-8 z-40 max-w-[200px]"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 relative">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <X className="w-3 h-3 text-gray-600" />
              </button>
              <p className="text-xs text-[#5C1A33] leading-relaxed">
                <span className="font-semibold">Ada soalan?</span><br />
                Chat dengan kami sekarang! 💬
              </p>
            </div>
            <div className="w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45 absolute -bottom-2 right-8" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center group hover:shadow-[#25D366]/50 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      </motion.a>
    </>
  );
}