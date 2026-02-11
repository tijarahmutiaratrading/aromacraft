import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Alhamdulillah… Calit sikit je terus turn on. Tak perlu risau lagi masalah dryness!",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/2_20250417_152856_0000.png",
  },
  {
    text: "Suami makin sayang lepas guna Wooman ni. Hubungan kami jadi lebih mesra dan harmoni.",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/2_20250417_152856_0000.png",
  },
  {
    text: "Period pain berkurang banyak. Dulu setiap bulan mesti ambil MC, sekarang dah ok sangat.",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/2_20250417_152856_0000.png",
  },
  {
    text: "Tidur nyenyak, mood pun baik. Stress kerja dah tak terasa sangat. Suami pun perasan perubahan!",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/2_20250417_152856_0000.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Testimoni
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Apa Kata Pengguna Kami
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-[#FCEDF0]/60 group hover:shadow-lg transition-all duration-400 overflow-hidden"
            >
              <div className="w-full h-80 bg-white overflow-hidden">
                <img src={item.image} alt="Testimoni" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <p className="text-[#5C1A33]/70 text-sm leading-relaxed font-light italic">
                  "{item.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}