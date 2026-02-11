import React from "react";
import { motion } from "framer-motion";
import { Frown, Droplets, Brain, Heart } from "lucide-react";

const problems = [
  {
    icon: Frown,
    title: "Mati Putik & Hilang Nafsu",
    desc: "Hilang ghairah semasa hubungan intim. Masalah ini sering memberi kesan kepada hubungan dengan suami.",
    color: "#E8A0BF",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0000.png",
  },
  {
    icon: Droplets,
    title: "Miss V Kering",
    desc: "Rasa tak selesa, gatal, pedih atau sakit semasa bersama suami. Mengganggu keyakinan diri.",
    color: "#C9A96E",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0002.png",
  },
  {
    icon: Brain,
    title: "Selalu Moody & Stress",
    desc: "Emosi mudah terganggu, malas nak buat kerja. Dalaman rasa tak stabil dan tertekan.",
    color: "#B8A0D2",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0001.png",
  },
  {
    icon: Heart,
    title: "Sakit Senggugut",
    desc: "Kerap mengalami sakit di bahagian bawah perut semasa haid, mengganggu aktiviti harian.",
    color: "#E8A0BF",
    image: "https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0003.png",
  },
];

export default function ProblemsSection() {
  return (
    <section id="masalah" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Masalah Wanita
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Sis ada masalah ni ke?
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/50 text-sm md:text-base max-w-md mx-auto font-light">
            Dah try macam-macam produk tapi masih tak berkesan?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-gray-100 hover:border-[#C9A96E]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#FCEDF0]/50 overflow-hidden bg-white"
            >
              <div className="p-8 pt-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-medium text-[#5C1A33] mb-3">{item.title}</h3>
                <p className="text-[#5C1A33]/50 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}