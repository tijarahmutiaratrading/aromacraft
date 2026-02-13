import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "60123456789"; // Ganti dengan nombor sebenar
  const message = "Assalamualaikum, saya nak tanya tentang Wooman Intimate Perfume";

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${showPulse ? 'animate-pulse' : ''}`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce">
              1
            </span>
          )}

          {/* Pulse Ring */}
          {showPulse && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          )}
        </button>
      </motion.div>

      {/* Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp Wooman</h4>
                  <p className="text-xs text-white/80">Biasanya reply dalam 1 minit</p>
                </div>
              </div>
            </div>

            {/* Message Preview */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                <p className="text-sm text-gray-700 mb-2">
                  Assalamualaikum! 👋
                </p>
                <p className="text-sm text-gray-700">
                  Ada soalan tentang Wooman? Chat dengan kami sekarang!
                </p>
              </div>
              
              {/* Quick Actions */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-center py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  💬 Chat Sekarang
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-gray-500 text-center py-2 text-sm hover:text-gray-700"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}