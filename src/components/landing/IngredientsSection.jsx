import React from "react";
import { motion } from "framer-motion";

const ingredients = [
  {
    name: "African Pelargonium Graveolens",
    origin: "Afrika",
    desc: "Minyak pati organik yang membantu seimbangkan hormon dan menenangkan emosi wanita.",
    emoji: "🌺",
  },
  {
    name: "Middle Eastern Olea Europaea",
    origin: "Timur Tengah",
    desc: "Minyak zaitun organik premium yang melembapkan dan menutrisi kulit dari dalam.",
    emoji: "🫒",
  },
  {
    name: "Philippines Coco Nucifera",
    origin: "Filipina",
    desc: "Minyak kelapa organik dengan sifat antibakteria semulajadi untuk perlindungan.",
    emoji: "🥥",
  },
];

export default function IngredientsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Kandungan
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            100% Certified Organic
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/50 text-sm md:text-base max-w-md mx-auto font-light">
            Dipilih dengan teliti dari sumber terbaik di seluruh dunia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCEDF0]/30 via-[#F8D7E0]/20 to-[#FCEDF0]/30 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-[#FCEDF0]/20 to-white rounded-3xl p-12 border border-[#FCEDF0]/40">
            <img
              src="https://intimateperfume.com/wp-content/uploads/2024/11/MW-TW-1-1024x1024-1.png"
              alt="Wooman Product"
              className="w-80 h-80 mx-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-[#FCEDF0]/40 to-white border border-[#FCEDF0] text-center group hover:shadow-lg transition-all duration-500"
            >
              <div className="text-4xl mb-5">{item.emoji}</div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
                {item.origin}
              </p>
              <h3 className="text-base font-medium text-[#5C1A33] mb-3 leading-tight">
                {item.name}
              </h3>
              <p className="text-[#5C1A33]/45 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A96E] group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}