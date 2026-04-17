import React from "react";
import { motion } from "framer-motion";

const painPoints = [
  { num: ".01", text: "Sis mula tak selesa dengan diri sendiri" },
  { num: ".02", text: "Senyum ada, tapi keyakinan makin hilang" },
  { num: ".03", text: "Dengan suami pula, nak bersama tapi badan tak 'response' macam dulu" },
  { num: ".04", text: "Kadang-kadang sis simpan je dalam hati, sebab isu ni terlalu peribadi untuk diceritakan 😔" },
];

export default function EmotionalIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF8F8]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#5C1A33]/50 italic text-sm mb-4">Sis... pernah rasa tak…</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C1A33] leading-tight mb-4">
            Miss V kerap <span className="bg-[#5C1A33] text-white px-2 rounded">berbau</span>,{" "}
            <span className="bg-[#C9A96E] text-white px-2 rounded">keputihan</span> datang tak tentu masa,
            dan bila dengan suami — rasa{" "}
            <span className="bg-red-600 text-white px-2 rounded">kering</span> & 'tak sampai mood'?
          </h2>
          <p className="text-[#5C1A33]/60 italic text-sm">Bila keadaan ni berlarutan...</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#FCEDF0] hover:shadow-lg transition-all"
            >
              <p className="text-[#C9A96E] text-xs font-bold tracking-widest mb-3">{point.num}</p>
              <p className="text-[#5C1A33]/80 text-base leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-white border border-[#C9A96E]/30 rounded-2xl px-8 py-5 shadow-sm">
            <p className="text-[#5C1A33] font-medium">⭐⭐⭐⭐⭐ Rated 4.9/5 by our customers</p>
            <p className="text-[#5C1A33]/60 text-sm mt-1">28,000+ wanita Malaysia dah rasai manfaatnya</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}