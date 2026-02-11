import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartPulse, Flower2, Moon, Baby, Leaf, Zap } from "lucide-react";

const benefits = [
  { icon: Sparkles, text: "Stabilkan hormon & tingkatkan mood positif" },
  { icon: HeartPulse, text: "Bangkitkan ghairah & lebih bersedia untuk suami" },
  { icon: Flower2, text: "Menyah bau kurang menyenangkan, ganti dengan harum" },
  { icon: ShieldCheck, text: "Kurangkan risiko jangkitan bakteria & kulat" },
  { icon: Zap, text: "Tingkatkan sensitiviti & hasilkan pelincir semulajadi" },
  { icon: Moon, text: "Tidur lebih nyenyak, kurangkan stress & anxiety" },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FCEDF0]/30 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Kelebihan
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Bagaimana Wooman Membantu Sis?
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/50 text-sm md:text-base max-w-lg mx-auto font-light">
            Direka khas untuk wanita dengan formulasi 100% organik yang selamat dan berkesan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group text-center p-6 rounded-2xl bg-white border border-transparent hover:border-[#C9A96E]/20 hover:shadow-md transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-full bg-[#FCEDF0] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5C1A33] transition-colors duration-400">
                <item.icon className="w-5 h-5 text-[#5C1A33] group-hover:text-white transition-colors duration-400" />
              </div>
              <p className="text-[#5C1A33]/70 text-sm leading-relaxed font-light">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}