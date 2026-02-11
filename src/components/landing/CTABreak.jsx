import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Gift } from "lucide-react";

export default function CTABreak() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#5C1A33] via-[#7A2345] to-[#5C1A33]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Ready Nak Cuba Wooman?
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Ribuan wanita Malaysia dah rasai perubahan. Giliran sis pula! 💕
          </p>

          <a
            href="#order"
            className="inline-flex items-center gap-3 bg-[#C9A96E] hover:bg-[#B8963D] text-white px-8 py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 shadow-xl mb-8"
          >
            Order Sekarang - Jimat Hingga RM300
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: Shield, text: "100% Selamat" },
              { icon: Truck, text: "Free Postage" },
              { icon: Gift, text: "Free Gift" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[#C9A96E]" />
                <span className="text-white/70 text-xs md:text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}