import React from "react";
import { motion } from "framer-motion";

const guides = [
  {
    title: "18SX & Dryness",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/6-3-e1744845309505.webp",
    desc: "Roll pada kawasan Miss V & nadi 20-30 minit sebelum bersama. Untuk kesan maksimum, roll di kawasan vulva & clitoris 2-5 minit sebelum."
  },
  {
    title: "Tips Ikhtiar Hamil (TTC)",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/kemeja-dan-rok-plisketinstagramcomcitraciki.jpeg",
    desc: "Gunakan setiap hari dengan roll pada nadi dan kawasan rahim (3 jari di bawah pusat) untuk stabilkan hormon."
  },
  {
    title: "Lancarkan Period / Reduce Senggugut",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/depositphotos_687821650-stock-photo-young-asian-muslim-girl-showing.webp",
    desc: "Roll pada kawasan uterus (3 jari di bawah pusat) untuk melancarkan haid dan mengurangkan sakit senggugut."
  },
  {
    title: "Deep Sleep / Reduce Stress",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/9-3-e1744845246963.webp",
    desc: "Roll di nadi, belakang telinga, dahi & kening. Lakukan cupping - roll pada tapak tangan, tekup dekat hidung & tarik nafas dalam."
  },
  {
    title: "Improve Mood",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/360_F_627536897_QzFBXE4YkFN13KjNF1F2c5PfRb2sxkep.jpg",
    desc: "Roll di nadi, belakang telinga, dahi, kening dan temple. Boleh buat teknik cupping untuk kesan tambahan."
  },
  {
    title: "Reduce Keputihan",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/shutterstock_2531198639_Large.jpg",
    desc: "Roll pada Miss V (bibir faraj) selepas cuci bersih, waktu siang & malam selama 1-2 minggu untuk kesan ketara."
  }
];

export default function UsageGuideSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#FCEDF0]/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Panduan Penggunaan
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Cara Penggunaan Yang Betul
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/50 text-sm max-w-2xl mx-auto font-light">
            Ikuti panduan ini untuk hasil yang maksimum. Goncang botol sebelum guna untuk hasil optimum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#C9A96E]/30 transition-all duration-400"
            >
              <div className="relative w-full h-56 bg-gradient-to-br from-[#FCEDF0]/40 to-[#F8D7E0]/20 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-medium text-[#5C1A33] mb-3">{guide.title}</h3>
                <p className="text-[#5C1A33]/50 text-sm leading-relaxed font-light">{guide.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#5C1A33]/5 to-[#C9A96E]/5 border border-[#C9A96E]/20 text-center"
        >
          <p className="text-[#5C1A33]/70 text-sm">
            💡 <span className="font-medium">Tip Penting:</span> Pastikan goncang Wooman Perfume setiap kali sebelum guna untuk hasil yang lebih optimum.
          </p>
        </motion.div>
      </div>
    </section>
  );
}