import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Wooman Perfume ni selamat ke untuk digunakan?",
    a: "Ya, 100% selamat. Wooman Perfume diperbuat daripada bahan-bahan organik yang telah disahkan selamat (Certified Organic). Tiada bahan kimia berbahaya.",
  },
  {
    q: "Berapa lama nampak kesan?",
    a: "Kebanyakan pengguna merasai kesan dalam penggunaan pertama terutamanya untuk kegunaan intimasi. Untuk kesan jangka panjang seperti keseimbangan hormon, disyorkan penggunaan konsisten selama 2-4 minggu.",
  },
  {
    q: "Boleh guna untuk ibu mengandung?",
    a: "Disyorkan untuk berunding dengan doktor terlebih dahulu sebelum menggunakan sebarang produk semasa mengandung.",
  },
  {
    q: "Adakah produk ini ada kelulusan KKM?",
    a: "Ya, produk Wooman telah mendapat kelulusan dan notification daripada KKM Malaysia.",
  },
  {
    q: "Berapa lama tahan satu botol?",
    a: "Satu botol 10ml boleh tahan selama 1-2 bulan bergantung kepada kekerapan penggunaan.",
  },
  {
    q: "Boleh guna setiap hari?",
    a: "Ya, Wooman Perfume selamat untuk kegunaan harian. Malah, penggunaan konsisten memberikan kesan yang lebih baik.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Soalan Lazim
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 rounded-xl bg-[#FCEDF0]/20 hover:bg-[#FCEDF0]/40 transition-colors duration-300 text-left group"
              >
                <span className="text-sm text-[#5C1A33]/80 font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C9A96E] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pt-2 text-sm text-[#5C1A33]/55 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}