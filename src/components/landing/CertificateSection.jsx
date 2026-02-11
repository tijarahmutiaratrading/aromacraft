import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";

export default function CertificateSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#FCEDF0]/10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Sijil & Kelulusan
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Disahkan Selamat & Berkualiti
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: ShieldCheck, title: "KKM Approved", desc: "Lulus ujian keselamatan KKM Malaysia" },
            { icon: Award, title: "Certified Organic", desc: "100% bahan organik yang disahkan" },
            { icon: CheckCircle2, title: "Halal & Safe", desc: "Selamat untuk kegunaan harian" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-white border border-[#FCEDF0] hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#FCEDF0] flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-[#5C1A33]" />
              </div>
              <h3 className="text-base font-medium text-[#5C1A33] mb-2">{item.title}</h3>
              <p className="text-[#5C1A33]/50 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white rounded-2xl p-6 shadow-xl border border-[#FCEDF0] hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/db195df60_IMG_0787.jpg"
              alt="International Organic Awards Certificate"
              className="w-full h-auto object-contain rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white rounded-2xl p-6 shadow-xl border border-[#FCEDF0] hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/66ec706b5_IMG_0786.jpg"
              alt="Vegan Society Certificate"
              className="w-full h-auto object-contain rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-white rounded-2xl p-6 shadow-xl border border-[#FCEDF0] hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/11a8c1222_IMG_0788.jpg"
              alt="Lab Analysis Certificate"
              className="w-full h-auto object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}