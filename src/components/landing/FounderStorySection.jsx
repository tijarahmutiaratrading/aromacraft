import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Heart, CheckCircle } from "lucide-react";

export default function FounderStorySection() {
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
            Di Sebalik Wooman
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Kenali Pengasas Wooman
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E8A0BF] to-[#C9A96E] rounded-2xl blur-xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" 
                alt="Founder" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-[#5C1A33] mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                Dra. Sarah Aminah
              </h3>
              <p className="text-[#C9A96E] text-sm tracking-wider uppercase">Founder & Pakar Herba Wanita</p>
            </div>

            <div className="space-y-4 text-[#5C1A33]/70 leading-relaxed">
              <p>
                Selama <strong className="text-[#5C1A33]">15 tahun</strong> saya mendalami bidang perubatan herba wanita dan aromaterapi. 
                Saya faham betul cabaran yang dihadapi wanita Malaysia dalam menjaga kesihatan intim.
              </p>
              <p>
                Wooman dicipta hasil kajian mendalam dan pengalaman membantu lebih <strong className="text-[#5C1A33]">28,000+ wanita</strong> 
                mengatasi masalah kekeringan, hilang mood, dan ketidakselesaan intim.
              </p>
              <p>
                Saya yakin, setiap wanita berhak merasa selesa, yakin, dan bahagia dalam hubungan intim. 
                Itulah sebab Wooman menggunakan 100% bahan organik terbaik yang selamat dan berkesan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: Award, text: "15 Tahun Pengalaman", color: "text-amber-600" },
                { icon: Users, text: "28,000+ Wanita Dibantu", color: "text-pink-600" },
                { icon: Heart, text: "100% Organik Dipercayai", color: "text-rose-600" },
                { icon: CheckCircle, text: "Certified & Approved", color: "text-green-600" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#FCEDF0]/50 rounded-xl p-4">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-xs font-medium text-[#5C1A33]">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}