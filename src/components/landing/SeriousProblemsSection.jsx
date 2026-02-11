import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Heart } from "lucide-react";

export default function SeriousProblemsSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#FCEDF0]/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Serius ke masalah tu sis?
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl bg-gradient-to-br from-red-50 to-white p-8 border border-red-100 hover:shadow-lg transition-all duration-400"
          >
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <div className="mb-6 w-full h-56 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/eaeddb4fa_IMG_0780.jpg"
                alt="Mati putik article"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-[#5C1A33] mb-3">
              Mati putik antara masalah ramai wanita
            </h3>
            <p className="text-[#5C1A33]/60 leading-relaxed text-sm">
              Kadang masalah mati putik adalah punca berlaku penceraian yang berpunca dari masalah dryness atau susah klimaks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 border border-orange-100 hover:shadow-lg transition-all duration-400"
          >
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-orange-500" />
            </div>
            <div className="mb-6 w-full h-56 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/44ef55e6f_IMG_0787.jpg"
                alt="Keputihan article"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-[#5C1A33] mb-3">
              Keputihan melampau
            </h3>
            <p className="text-[#5C1A33]/60 leading-relaxed text-sm">
              Sis tahu ke ye keputihan melampau boleh menyebabkan masalah kesihatan untuk sis
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full border border-red-100">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-[#5C1A33]/70 text-sm font-medium">
              Jangan abaikan masalah ini, ambil tindakan sekarang
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}