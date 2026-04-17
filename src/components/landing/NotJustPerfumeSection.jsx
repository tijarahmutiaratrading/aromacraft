import React from "react";
import { motion } from "framer-motion";

const features = [
  { num: "01", text: "100% Purely Organic" },
  { num: "02", text: "Food-Grade Ingredients" },
  { num: "03", text: "Chemicals FREE" },
  { num: "04", text: "Alcohol FREE" },
  { num: "05", text: "Safe to eat & Safe for ORAL too" },
  { num: "06", text: "Its NOT Just a Fragrance — Its MULTI FUNCTIONS!" },
];

export default function NotJustPerfumeSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#5C1A33] to-[#7A2345] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Lebih Dari Sekadar Perfume
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Wooman Bukan Sekadar Perfume Tau Sis!
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-white/70 max-w-xl mx-auto">
            Wooman Organic Intimate Perfume ni PROVEN BERKESAN taw sis. Ramai yang dah guna since 2018!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <p className="text-[#C9A96E] text-xs font-bold tracking-widest mb-3">.{f.num}</p>
              <p className="text-white font-medium leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative max-w-sm w-full">
            <img
              src="https://pikatsuami.com/wp-content/uploads/2025/12/IMG-20250525-WA0013.jpg"
              alt="Wooman Product"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#C9A96E] text-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-sm font-bold">Since 2018 🏆</p>
              <p className="text-xs opacity-80">Trusted by 28,000+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}