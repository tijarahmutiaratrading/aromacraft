import React, { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Heart, Moon, Smile, Baby, Sparkles, Leaf } from "lucide-react";

const detailedGuides = [
  {
    icon: Droplets,
    title: "18SX & Dryness",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/6-3-e1744845309505.webp",
    steps: [
      {
        title: "Sesi Persediaan (20–30 minit sebelum)",
        desc: "Roll Wooman Perfume di kawasan Miss V & nadi-nadi (pergelangan tangan, leher, belakang telinga) untuk beri rasa tenang & naikkan mood. Kemudian, sapu & urut lembut Miss V yang dah kena roll tu – ini akan bantu aktifkan aliran darah ke kawasan berkenaan."
      },
      {
        title: "2–5 minit sebelum bersama",
        desc: "Roll di kawasan vulva (bibir faraj) dan clitoris (kelentit) untuk kesan yang maksimum. Tak perlu roll dalam lubang Miss V. Sebaiknya roll dalam keadaan baring supaya lebih mudah dan selesa."
      },
      {
        title: "Semasa bersama hubby",
        desc: "Kalau rasa nak tambah sensasi, boleh roll lagi di mana-mana bahagian badan yang rasa sesuai – termasuk Miss V kalau masih kurang basah."
      },
      {
        title: "Tips Tambahan",
        desc: "Rasa hangat? Normal. Kebanyakan wanita akan rasa sedikit hangat dekat Miss V – itu tanda oil tengah 'bekerja'. Adjust kuantiti ikut keselesaan dan tahap sensitif masing-masing."
      }
    ]
  },
  {
    icon: Baby,
    title: "Tips Ikhtiar Hamil (TTC)",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/kemeja-dan-rok-plisketinstagramcomcitraciki.jpeg",
    steps: [
      {
        title: "Penggunaan Harian",
        desc: "Gunakan Wooman Perfume setiap hari dengan roll pada titik-titik nadi dan kawasan rahim (uterus - 3 jari di bawah pusat) untuk bantu stabilkan hormon dan betulkan kitaran haid."
      },
      {
        title: "Untuk Keintiman",
        desc: "Amalkan juga setiap hari untuk keintiman (18sx) – Wooman bantu tingkatkan mood, mudahkan orgasm, dan buat hubungan jadi lebih menyeronokkan. Bila you ladies mula enjoy, secara semula jadi, you'll want it more often 🥰"
      }
    ]
  },
  {
    icon: Smile,
    title: "Lancarkan Period / Reduce Senggugut",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/depositphotos_687821650-stock-photo-young-asian-muslim-girl-showing.webp",
    steps: [
      {
        title: "Cara Penggunaan",
        desc: "Roll Wooman Perfume di kawasan uterus (anggaran lebih kurang 3 jari di bawah pusat) untuk bantu melancarkan haid dan mengurangkan sakit senggugut."
      },
      {
        title: "Konsistensi",
        desc: "Amalkan secara konsisten terutamanya semasa atau sebelum waktu period untuk kesan maksimum."
      }
    ]
  },
  {
    icon: Moon,
    title: "Deep Sleep / Reduce Stress",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/9-3-e1744845246963.webp",
    steps: [
      {
        title: "Roll pada Titik Utama",
        desc: "Roll Wooman Perfume di beberapa titik utama seperti nadi, belakang telinga, dahi, kening dan sisi dahi (temple) untuk kesan yang lebih efektif."
      },
      {
        title: "Teknik Cupping",
        desc: "Kalau nak rasa lebih powerful, boleh juga buat teknik cupping – roll sedikit pada tapak tangan, kemudian tekup tapak tangan dekat dengan wajah (terutama bahagian hidung), dan tarik nafas dalam-dalam untuk nikmati aroma Wooman Perfume sepenuhnya."
      }
    ]
  },
  {
    icon: Sparkles,
    title: "Merawat Wajah & Kulit",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/wajah.jpg",
    steps: [
      {
        title: "Untuk Wajah",
        desc: "Selepas membersihkan muka, roll pada tapak tangan. Tambah krim pelembap & sapu pada bahagian muka untuk kulit yang lebih sihat dan berseri."
      },
      {
        title: "Untuk Eczema, Jerawat & Luka",
        desc: "Roll pada bahagian terjejas pada kulit dengan perlahan. Sesuai untuk merawat eczema, jerawat, gigitan serangga, luka & bengkak."
      }
    ]
  },
  {
    icon: Leaf,
    title: "Reduce Keputihan",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/shutterstock_2531198639_Large.jpg",
    steps: [
      {
        title: "Penggunaan Konsisten",
        desc: "Roll Wooman Perfume pada Miss V (terutama di bahagian bibir faraj) setiap kali selepas cuci bersih, waktu siang dan malam."
      },
      {
        title: "Jangka Masa",
        desc: "Lakukan secara konsisten selama 1–2 minggu untuk kesan yang lebih ketara dan berpanjangan."
      }
    ]
  }
];

export default function DetailedUsageSection() {
  const [activeGuide, setActiveGuide] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FCEDF0]/20 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Panduan Lengkap
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Cara penggunaan kami sediakan sekali untuk sis amalkan insyaAllah berkesan..
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
        </motion.div>

        {/* Animated arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center mb-12"
        >
          <div className="text-[#C9A96E] text-5xl">↓</div>
        </motion.div>

        {/* Guide tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {detailedGuides.map((guide, i) => (
            <button
              key={i}
              onClick={() => setActiveGuide(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeGuide === i
                  ? "bg-[#5C1A33] text-white shadow-lg shadow-[#5C1A33]/20"
                  : "bg-white text-[#5C1A33]/60 hover:bg-[#FCEDF0]/50 border border-gray-100"
              }`}
            >
              <guide.icon className={`w-4 h-4 ${activeGuide === i ? "text-[#C9A96E]" : ""}`} />
              {guide.title}
            </button>
          ))}
        </div>

        {/* Active guide content */}
        <motion.div
          key={activeGuide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={detailedGuides[activeGuide].image}
              alt={detailedGuides[activeGuide].title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                {detailedGuides[activeGuide].title}
              </h3>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {detailedGuides[activeGuide].steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FCEDF0] flex items-center justify-center">
                    <span className="text-[#5C1A33] font-medium text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-medium text-[#5C1A33] mb-2">{step.title}</h4>
                    <p className="text-[#5C1A33]/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#5C1A33]/5 to-[#C9A96E]/5 border border-[#C9A96E]/20 text-center"
        >
          <p className="text-[#5C1A33]/70 text-sm">
            💡 <span className="font-medium">Tip Penting:</span> Pastikan goncang Wooman Perfume setiap kali sebelum guna untuk hasil yang lebih optimum. Ini kerana dalam botol tu mengandungi beberapa jenis minyak semula jadi yang mungkin terpisah bila dibiarkan lama.
          </p>
        </motion.div>
      </div>
    </section>
  );
}