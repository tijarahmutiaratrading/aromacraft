import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, CheckCircle2 } from "lucide-react";

const results = [
  {
    name: "Siti, 32 tahun",
    location: "Kuala Lumpur",
    duration: "2 minggu",
    result: "Miss V kembali basah, hubungan dengan suami makin mesra setiap malam 💕",
    rating: 5,
    verified: true,
  },
  {
    name: "Aida, 28 tahun",
    location: "Johor Bahru",
    duration: "1 bulan",
    result: "Senggugut berkurang 80%, mood stabil, tidur lena. Life changer!",
    rating: 5,
    verified: true,
  },
  {
    name: "Nurul, 35 tahun",
    location: "Penang",
    duration: "3 minggu",
    result: "Dari mati putik kepada turn on setiap kali. Suami pun perasan perubahan 🔥",
    rating: 5,
    verified: true,
  },
];

export default function BeforeAfterSection() {
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
            Transformasi Sebenar
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Hasil Yang Terbukti
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/60 text-sm md:text-base max-w-2xl mx-auto">
            Ribuan wanita Malaysia dah rasai perubahan hidup dengan Wooman. Ini cerita sebenar mereka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#FCEDF0] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span className="text-[10px] text-green-700 font-medium">Verified</span>
                  </div>
                )}
              </div>

              <p className="text-[#5C1A33]/70 text-sm leading-relaxed mb-6 italic">
                "{item.result}"
              </p>

              <div className="border-t border-[#FCEDF0] pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#5C1A33]">{item.name}</p>
                    <p className="text-xs text-[#5C1A33]/40">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-[#C9A96E]">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-medium">{item.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-[#FCEDF0] to-white p-6 rounded-3xl border border-[#C9A96E]/20">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/bf69f65e1_IMG_0795.jpg"
              alt="Real Users"
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#5C1A33]">2,847+</p>
                <p className="text-sm text-[#5C1A33]/60">Happy Customers</p>
              </div>
              <div className="text-4xl">🥰</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-3xl border border-green-200">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-3">
              <span className="text-white font-bold text-xl">98%</span>
            </div>
            <p className="text-lg font-semibold text-[#5C1A33] mb-1">Satisfaction Rate</p>
            <p className="text-sm text-[#5C1A33]/60 mb-4">Dari ribuan pengguna verified</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}