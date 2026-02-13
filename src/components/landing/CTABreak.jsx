import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Gift } from "lucide-react";

export default function CTABreak() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#5C1A33] via-[#7A2345] to-[#5C1A33]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Ready Nak Cuba Wooman?
          </h3>
          <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ribuan wanita Malaysia dah rasai perubahan. Giliran sis pula! 💕
          </p>

          <a
            href="#order"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#C9A96E] hover:bg-[#B8963D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-xl mb-6 sm:mb-8 touch-manipulation w-full sm:w-auto max-w-md mx-auto min-h-[48px]"
          >
            Order Sekarang - Jimat RM300
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
            {[
              { icon: Shield, text: "100% Selamat" },
              { icon: Truck, text: "Free Postage" },
              { icon: Gift, text: "Free Gift" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                <span className="text-white/70 text-xs sm:text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}