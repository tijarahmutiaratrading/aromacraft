import React from "react";
import { motion } from "framer-motion";

const kelebihan = [
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon05.png",
    text: "Bau wangi seperti Rose yang menenangkan"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon04.png",
    text: "Mengurangkan rasa sakit, pedih & tak selesa semasa penetration"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon03.png",
    text: "Membantu sis lebih mudah menghasilkan cairan pelincir semulajadi"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon10.png",
    text: "Meningkatkan aliran darah — Miss V lebih sensitif & ghairah meningkat"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon01.png",
    text: "Mengurangkan risiko jangkitan bakteria & kulat punca gatal dan keputihan"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon06.png",
    text: "Menyah bau Miss V yang kurang menyenangkan, gantikan dengan bau harum menggoda suami"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon07.png",
    text: "Membantu sis & suami lebih bersedia menikmati sesi hubungan intim"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon08.png",
    text: "Menenangkan minda, meningkatkan mood positif & kurangkan stress"
  },
  {
    icon: "https://pikatsuami.com/wp-content/uploads/2025/12/TheWooman-Icon09.png",
    text: "Membantu stabilkan hormon sis"
  },
];

export default function NineKelebihanSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FCEDF0]/20">
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
          <h2 className="text-3xl md:text-5xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            9 Kelebihan Wooman Perfume Yang Ramai Wanita Perlu Tahu
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kelebihan.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-start gap-4 border border-[#FCEDF0]"
            >
              <img
                src={item.icon}
                alt={`Kelebihan ${i + 1}`}
                className="w-14 h-14 object-contain flex-shrink-0"
              />
              <p className="text-[#5C1A33]/75 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}