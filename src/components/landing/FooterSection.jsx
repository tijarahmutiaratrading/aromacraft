import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#5C1A33] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
              Jangan Tunggu Lagi
            </p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Mulakan Perubahan Hari Ini
            </h2>
            <p className="text-white/50 text-sm max-w-md mx-auto mb-8 font-light">
              Ribuan wanita telah merasai perubahan positif. Kini giliran sis pula.
            </p>
            <a
              href="https://intimateperfume.com/#beli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#C9A96E] text-white text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#B8963D] transition-colors duration-300"
            >
              Order Sekarang
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer info */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl tracking-[0.15em] font-light" style={{ fontFamily: "'Georgia', serif" }}>
              WOOMAN
            </h3>
            <p className="text-white/30 text-xs mt-1">Intimate Organic Perfume</p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#masalah" className="text-white/40 text-xs hover:text-[#C9A96E] transition-colors tracking-wider uppercase">
              Masalah
            </a>
            <a href="#order" className="text-white/40 text-xs hover:text-[#C9A96E] transition-colors tracking-wider uppercase">
              Order
            </a>
            <a
              href="https://intimateperfume.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-xs hover:text-[#C9A96E] transition-colors tracking-wider uppercase"
            >
              Website
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-white/25 text-xs">
            <span>Made with</span>
            <Heart className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
            <span>for women</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            © 2025 Wooman Intimate Perfume. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}