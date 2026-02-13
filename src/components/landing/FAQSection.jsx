import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Selamat ke guna Wooman Intimate Perfume?",
    a: "Ya! Wooman dibuat daripada 100% bahan organik dan telah lulus ujian KKM. Selamat untuk kegunaan luaran pada kawasan intim. Lebih 28,000+ wanita Malaysia dah guna tanpa masalah."
  },
  {
    q: "Berapa lama nak nampak hasil?",
    a: "Kebanyakan pengguna rasa perbezaan dalam masa 2-5 minit selepas penggunaan pertama! Basah terus, mood naik, dan lebih selesa. Untuk hasil optimum, gunakan secara konsisten setiap kali sebelum bersama."
  },
  {
    q: "Boleh guna masa hamil atau menyusu?",
    a: "Untuk ibu hamil dan menyusu, kami cadangkan berunding dengan doktor terlebih dahulu walaupun produk ini organik. Ramai pengguna guna lepas bersalin untuk bantu pulihkan kebasahan."
  },
  {
    q: "Macam mana nak guna?",
    a: "Senang je! Roll pada kawasan Miss V 5-10 minit sebelum bersama dengan suami. Goncang botol sebelum guna untuk hasil terbaik. Boleh guna setiap hari untuk jaga kesihatan intim."
  },
  {
    q: "Ada jaminan wang kembali?",
    a: "Ya! Kami beri jaminan 30 hari. Kalau tak puas hati atau ada masalah, kami pulangkan 100% wang anda tanpa soal apa-apa. Kami yakin dengan kualiti produk kami!"
  },
  {
    q: "Berapa botol saya perlu beli?",
    a: "1 botol tahan 1-2 bulan untuk penggunaan biasa. Ramai order 3-4 botol sebab nak jimat dan takut kehabisan stok. Plus dapat free gifts lagi!"
  },
  {
    q: "Kenapa harga ni mahal sikit dari produk lain?",
    a: "Wooman guna 100% bahan organik premium yang diimport khas. Kami tak guna bahan kimia murah atau berbahaya. Kualiti yang sis dapat memang berbaloi - hasil pantas dan selamat!"
  },
  {
    q: "Saya dah cuba banyak produk tapi tak berkesan. Wooman ni lain ke?",
    a: "Wooman berbeza sebab formula unik kami hasil 15 tahun kajian. Ramai yang dah cuba macam-macam produk testimoni Wooman paling berkesan. Cuba sendiri dengan jaminan wang kembali!"
  },
  {
    q: "Suami boleh tahu ke saya pakai perfume ni?",
    a: "Wooman ada wangi lembut yang sedap, tapi tak ketara sangat. Suami cuma rasa sis lebih basah dan mood naik - dia ingat natural! 😊"
  },
  {
    q: "Berapa lama masa penghantaran?",
    a: "Penghantaran 2-5 hari bekerja ke seluruh Malaysia. Kami hantar guna courier terpercaya. Tracking number akan diberi selepas hantar."
  }
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