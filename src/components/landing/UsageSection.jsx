import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Heart, Moon, Smile, Baby, Sparkles } from "lucide-react";

const usages = [
  {
    icon: Droplets,
    title: "Miss V Kering",
    desc: "Roll pada kawasan Miss V dan sebelum bersama untuk mengembalikan kebasahan.",
  },
  {
    icon: Heart,
    title: "Mati Putik & Hilang Nafsu",
    desc: "Roll setiap hari pada nadi & bahagian uterus (3 jari di bawah pusat). Bantu naikkan mood untuk bersama.",
  },
  {
    icon: Moon,
    title: "Deep Sleep & Kurangkan Stress",
    desc: "Roll di bahagian nadi, belakang telinga, belakang leher, dahi & kening. Lakukan kaedah cupping untuk kesan maksimum.",
  },
  {
    icon: Smile,
    title: "Kurangkan Sakit Senggugut",
    desc: "Roll pada bahagian uterus (anggaran 3 jari di bawah pusat) untuk melegakan kesakitan.",
  },
  {
    icon: Baby,
    title: "Ikhtiar Hamil (TTC)",
    desc: "Roll setiap hari pada nadi & bahagian uterus. Bantu seimbangkan hormon & pusingan haid.",
  },
  {
    icon: Sparkles,
    title: "Merawat Wajah & Kulit",
    desc: "Selepas bersihkan muka, roll pada tapak tangan. Tambah pelembap & sapu pada muka. Sesuai juga untuk eczema & jerawat.",
  },
];

export default function UsageSection() {
  const [active, setActive] = useState(0);

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
            Cara Guna
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Pelbagai Kegunaan
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/50 text-sm max-w-md mx-auto font-light">
            Satu produk, banyak manfaat untuk sis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {usages.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                  active === i
                    ? "bg-[#5C1A33] text-white shadow-lg shadow-[#5C1A33]/20"
                    : "bg-white text-[#5C1A33]/60 hover:bg-[#FCEDF0]/50 border border-gray-100"
                }`}
              >
                <item.icon className={`w-4 h-4 flex-shrink-0 ${active === i ? "text-[#C9A96E]" : ""}`} />
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm min-h-[280px] flex flex-col justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#FCEDF0] flex items-center justify-center mb-6">
                  {React.createElement(usages[active].icon, { className: "w-6 h-6 text-[#5C1A33]" })}
                </div>
                <h3 className="text-2xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                  {usages[active].title}
                </h3>
                <p className="text-[#5C1A33]/60 leading-relaxed font-light text-base">
                  {usages[active].desc}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-[#C9A96E] text-xs tracking-wider uppercase">
                    Tip: Goncang botol sebelum guna untuk hasil optimum
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}