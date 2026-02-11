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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#FCEDF0]/40 to-white rounded-2xl p-10 md:p-12 border border-[#FCEDF0]"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#5C1A33]/5 px-4 py-2 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4 text-[#C9A96E]" />
                <span className="text-xs text-[#5C1A33]/70 tracking-wider uppercase">Verified Safe</span>
              </div>
              <h3 className="text-2xl font-light text-[#5C1A33] mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                Dipercayai Ribuan Wanita
              </h3>
              <p className="text-[#5C1A33]/60 text-sm leading-relaxed mb-6">
                Wooman Perfume telah melalui pelbagai ujian keselamatan dan mendapat kelulusan daripada 
                pihak berkuasa untuk memastikan produk ini selamat dan berkesan untuk semua wanita.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C9A96E]/20">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-[#5C1A33]/70">No Harmful Chemicals</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C9A96E]/20">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-[#5C1A33]/70">Lab Tested</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C9A96E]/20">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-[#5C1A33]/70">Clinically Proven</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C9A96E]/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <img
                    src="https://intimateperfume.com/wp-content/uploads/2024/11/MW-TW-1-1024x1024-1.png"
                    alt="Wooman Certificate"
                    className="w-64 h-64 object-contain drop-shadow-2xl mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}