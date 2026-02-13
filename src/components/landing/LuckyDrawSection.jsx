import React from "react";
import { motion } from "framer-motion";
import { Gift, Sparkles, Award } from "lucide-react";

const prizes = [
  {
    title: "Umrah Syifa Super VIP",
    value: "RM15,000",
    icon: Award,
    desc: "Berpeluang menang pakej umrah eksklusif",
    gradient: "from-amber-500 to-yellow-600"
  },
  {
    title: "Spa Retreat Package",
    value: "RM5,000",
    icon: Sparkles,
    desc: "Pakej spa mewah untuk 2 orang",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    title: "Dinar Emas",
    value: "RM3,000",
    icon: Gift,
    desc: "Simpanan emas untuk masa hadapan",
    gradient: "from-orange-500 to-amber-600"
  }
];

export default function LuckyDrawSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FCEDF0] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Gift className="w-6 h-6 text-[#C9A96E]" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] to-[#E8A0BF] text-white px-6 py-2 rounded-full mb-6 animate-pulse">
            <Gift className="w-5 h-5" />
            <span className="font-bold">CABUTAN BERTUAH</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Hadiah Eksklusif Menanti Anda!
          </h2>
          <p className="text-[#5C1A33]/60 text-lg max-w-2xl mx-auto">
            Setiap pembelian adalah satu peluang untuk menang hadiah bernilai tinggi 🎁
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 border border-[#FCEDF0] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <prize.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#5C1A33] mb-2">{prize.title}</h3>
                <div className="text-3xl font-bold text-[#C9A96E] mb-4">{prize.value}</div>
                <p className="text-[#5C1A33]/60 text-sm">{prize.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#5C1A33] to-[#7A2345] rounded-2xl p-8 text-center text-white"
        >
          <p className="text-lg mb-4">✨ Setiap pembelian = 1 peluang automatik untuk cabutan bertuah!</p>
          <p className="text-white/80 text-sm">*Pemenang akan diumumkan setiap bulan di laman sosial media kami</p>
        </motion.div>
      </div>
    </section>
  );
}