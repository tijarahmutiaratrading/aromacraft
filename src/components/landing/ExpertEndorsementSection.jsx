import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Quote } from "lucide-react";

export default function ExpertEndorsementSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FCEDF0]/30 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Disahkan Pakar
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Dipercayai Profesional Kesihatan
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#FCEDF0]"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#C9A96E]/10" />
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8A0BF] to-[#C9A96E] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                Dr
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#5C1A33] mb-1">Dr. Siti Hajar</h3>
                <p className="text-sm text-[#5C1A33]/60 mb-2">Pakar O&G, 15+ tahun pengalaman</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[#5C1A33]/70 text-sm leading-relaxed mb-4 italic">
              "Sebagai pakar kesihatan wanita, saya merekomendasikan penggunaan produk organik untuk kawasan sensitif. 
              Wooman menggunakan bahan-bahan semulajadi yang selamat dan telah melalui ujian klinikal. 
              Ramai pesakit saya melaporkan peningkatan kesihatan intim dan keselesaan selepas menggunakannya."
            </p>

            <div className="flex gap-3 pt-4 border-t border-[#FCEDF0]">
              <div className="flex items-center gap-2 bg-[#FCEDF0]/50 px-3 py-1.5 rounded-full">
                <GraduationCap className="w-4 h-4 text-[#5C1A33]/60" />
                <span className="text-xs text-[#5C1A33]/60">MD, MBBS</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FCEDF0]/50 px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-[#5C1A33]/60" />
                <span className="text-xs text-[#5C1A33]/60">Certified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#FCEDF0]"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#C9A96E]/10" />
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#5C1A33] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                Dr
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#5C1A33] mb-1">Dr. Ahmad Fauzi</h3>
                <p className="text-sm text-[#5C1A33]/60 mb-2">Herbalist & Aromatherapist</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[#5C1A33]/70 text-sm leading-relaxed mb-4 italic">
              "Formula Wooman menggabungkan essential oils berkualiti tinggi dengan sifat therapeutic yang terbukti. 
              Geranium, Zaitun dan Kelapa organic ini adalah kombinasi sempurna untuk kesihatan hormon dan kesejahteraan emosi wanita. 
              Produk yang benar-benar authentic dan berkesan."
            </p>

            <div className="flex gap-3 pt-4 border-t border-[#FCEDF0]">
              <div className="flex items-center gap-2 bg-[#FCEDF0]/50 px-3 py-1.5 rounded-full">
                <GraduationCap className="w-4 h-4 text-[#5C1A33]/60" />
                <span className="text-xs text-[#5C1A33]/60">PhD Herbal</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FCEDF0]/50 px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-[#5C1A33]/60" />
                <span className="text-xs text-[#5C1A33]/60">15+ Years</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-[#5C1A33]/50">
            * Pendapat pakar berdasarkan kajian bahan-bahan organik dan laporan pengguna
          </p>
        </motion.div>
      </div>
    </section>
  );
}