import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    text: "Sangat wet lepas guna..my husben cum kan i dulu then baru dia.. 😍",
  },
  {
    text: "Alhamdulillah… Calit sikit je terus turn on. Tak perlu risau lagi masalah Wetness & dan kurang basah! 🥰",
  },
  {
    text: "Suami lagi gatal bila dah guna ni. Setiap malam mesti nak. Alhamdulillah hubungan makin mesra 💕",
  },
  {
    text: "Period pain berkurang sangat! Dulu mesti ambil MC, sekarang boleh kerja macam biasa. Syukur jumpa Wooman ni 🙏",
  },
  {
    text: "Mood jadi stabil, tidur pun lena. Suami kata personality aku berubah jadi lebih ceria. Thanks Wooman! ✨",
  },
  {
    text: "Bau dia memang sweet gila. Suami kata dia rasa turned on bila dekat dengan aku selepas pakai ni 😊",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-gradient-to-br from-[#FCEDF0]/30 to-white border border-[#FCEDF0]/60 hover:shadow-lg hover:border-[#C9A96E]/30 transition-all duration-400 p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                    ))}
                  </div>
                  <p className="text-[#5C1A33]/70 text-sm leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-[#FCEDF0]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E8A0BF] to-[#C9A96E]" />
                <p className="text-[#5C1A33]/40 text-xs">Pengguna Verified</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5C1A33]/50 text-sm">
            💬 Ribuan testimoni positif dari pengguna di seluruh Malaysia
          </p>
        </motion.div>
      </div>
    </section>
  );
}