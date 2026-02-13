import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    text: "Sangat wet. My husben cum kan i dulu then baru die but when he cum..im also cum for the 2nd time 😍😍 Stress terus hilang 🥰",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/57f4e861c_IMG_0790.jpg",
  },
  {
    text: "Yupppss!! Hehehe betoi. Lpsni bersalin nnt konfem guna kerap hehe. Ahhaaaahaaa... Smbung balik 'perjuangan' yg blom selesai 👏😍😍",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/2c1e39c22_IMG_0791.jpg",
  },
  {
    text: "After i using MyWooman, mmg WOW 🤩 baru 1st time roll dkt private area, dia punya basah mmg sampai husband pun tegur 'basahnya u sygg' 😭",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/a621ef1f2_IMG_0792.jpg",
  },
  {
    text: "Tp smlm i cepat juga turn on, husband ckp kenapa ye tiba² sebelum ni tak macam ni pun 😁😂 bangun pagi muka banyak senyummm 😂😂",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/e780a555c_IMG_0793.jpg",
  },
  {
    text: "Sebelum ni kan pakai thewooman. Tp mywooman ni penangan wetness die teruk gile kottt. 2 malam berturut² klimaks lebih 10 kali 😍",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/e69aeb1af_IMG_0789.jpg",
  },
];

export default function TestimonialsSection() {
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
            Testimoni
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Apa Kata Pengguna Kami
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl bg-white border border-[#FCEDF0]/60 hover:shadow-xl hover:border-[#C9A96E]/30 transition-all duration-400 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt="Real Testimonial" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#25D366] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <MessageCircle className="w-3 h-3" />
                  <span className="text-xs font-medium">Real WhatsApp</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <p className="text-[#5C1A33]/70 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-2 pt-4 mt-4 border-t border-[#FCEDF0]">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#E8A0BF] to-[#C9A96E]" />
                  <p className="text-[#5C1A33]/40 text-xs font-medium">Verified Customer ✓</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5C1A33]/50 text-sm">
            💬 Ribuan testimoni positif dari pengguna di seluruh Malaysia
          </p>
        </motion.div>
      </div>
    </section>
  );
}