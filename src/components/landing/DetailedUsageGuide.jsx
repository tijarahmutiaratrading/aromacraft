import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const guides = [
  {
    title: "18SX & DRYNESS",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/6-3-e1744845309505.webp",
    content: `<strong>Pastikan goncang Wooman Perfume setiap kali sebelum guna</strong> untuk hasil yang lebih optimum.<br><br>

<strong>1. Sesi Persediaan (20–30 minit sebelum):</strong><br>
Roll Wooman Perfume di kawasan Miss V & nadi-nadi (pergelangan tangan, leher, belakang telinga) untuk beri rasa tenang & naikkan mood.<br>
Kemudian, sapu & urut lembut Miss V yang dah kena roll tu – ini akan bantu aktifkan aliran darah ke kawasan berkenaan.<br><br>

<strong>2. 2–5 minit sebelum bersama:</strong><br>
Roll di kawasan <strong>vulva</strong> (bibir faraj) dan <strong>clitoris</strong> (kelentit) untuk kesan yang maksimum.<br>
Tak perlu roll dalam lubang Miss V.<br>
Sebaiknya roll dalam keadaan <strong>baring</strong> supaya lebih mudah dan selesa.<br><br>

<strong>3. Semasa bersama hubby:</strong><br>
Kalau rasa nak tambah sensasi, boleh roll lagi di mana-mana bahagian badan yang rasa sesuai – termasuk Miss V kalau masih kurang basah.`
  },
  {
    title: "TIPS IKHTIAR HAMIL (TTC)",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/kemeja-dan-rok-plisketinstagramcomcitraciki.jpeg",
    content: `<strong>Gunakan Wooman Perfume setiap hari dengan roll pada titik-titik nadi dan kawasan rahim (uterus)</strong> untuk bantu stabilkan hormon dan betulkan kitaran haid.<br><br>

Selain tu, <strong>amalkan juga setiap hari untuk keintiman (18sx)</strong> – Wooman Potion bantu tingkatkan mood, mudahkan orgasm, dan buat hubungan jadi lebih menyeronokkan.<br><br>

Bila you ladies mula enjoy, secara semula jadi, you'll want it more often 🥰`
  },
  {
    title: "LANCARKAN PERIOD / REDUCE SENGGUGUT",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/depositphotos_687821650-stock-photo-young-asian-muslim-girl-showing.webp",
    content: `<strong>Roll Wooman Perfume di kawasan uterus</strong> (anggaran lebih kurang <strong>3 jari di bawah pusat</strong>) untuk bantu <strong>melancarkan haid</strong> dan <strong>mengurangkan sakit senggugut</strong>.<br><br>

Amalkan secara konsisten terutamanya semasa atau sebelum waktu period.`
  },
  {
    title: "REDUCE KEPUTIHAN",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/shutterstock_2531198639_Large.jpg",
    content: `<strong>Roll Wooman Perfume pada Miss V (terutama di bahagian bibir faraj)</strong> setiap kali selepas cuci bersih, waktu <strong>siang dan malam</strong>.<br><br>

Lakukan secara konsisten selama <strong>1–2 minggu</strong> untuk kesan yang lebih ketara dan berpanjangan.`
  },
  {
    title: "DEEP SLEEP/REDUCE STRESS/CALM/RELAX",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/9-3-e1744845246963.webp",
    content: `<strong>Roll Wooman Perfume di beberapa titik utama seperti nadi, belakang telinga, dahi, kening dan sisi dahi (temple)</strong> untuk kesan yang lebih efektif.<br><br>

Kalau nak rasa lebih powerful, boleh juga buat teknik <strong>cupping</strong> – roll sedikit pada tapak tangan, kemudian tekup tapak tangan dekat dengan wajah (terutama bahagian hidung), dan <strong>tarik nafas dalam-dalam</strong> untuk nikmati aroma Wooman Perfume sepenuhnya.`
  },
  {
    title: "IMPROVE MOOD",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/360_F_627536897_QzFBXE4YkFN13KjNF1F2c5PfRb2sxkep.jpg",
    content: `<strong>Roll Wooman Perfume di titik-titik utama seperti nadi, belakang telinga, dahi, kening dan sisi dahi (temple)</strong> untuk kesan yang lebih menyeluruh.<br><br>

Untuk kesan tambahan, <strong>you ladies boleh juga buat teknik cupping</strong> seperti yang diterangkan di atas – bantu tenangkan minda dan beri rasa lebih relaks.`
  },
  {
    title: "PENGGALAK SUSU IBU",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/breast-milk.jpg",
    content: `<strong>Wooman Perfume membantu merangsang pengeluaran susu badan.</strong><br><br>

Roll secara lembut di <strong>sekeliling payudara</strong> (elakkan bahagian puting), kira-kira <strong>15–30 minit sebelum sesi menyusu</strong>.<br><br>

Amalan ni boleh bantu lancarkan aliran susu dan beri rasa lebih tenang pada sis sebagai ibu.`
  },
  {
    title: "UNTUK BABIES & KIDS",
    image: "https://intimateperfume.com/wp-content/uploads/2025/05/manfaat-minyak-telon-untuk-bayi-yang-jarang-diketahui-main.jpg",
    content: `<strong>Cara Guna Wooman Perfume untuk Baby (Ikut Peringkat Umur):</strong><br><br>

– Untuk baby bawah 6 bulan, cukup dengan <strong>roll sepanjang tulang belakang</strong> secara lembut.<br><br>

– Untuk baby 6 bulan ke atas, boleh <strong>roll di kawasan nadi, belakang telinga dan atas kening</strong>, ikut keperluan.<br><br>

– Ibu juga boleh buat teknik <strong>cupping</strong>: roll wooman perfume pada tapak tangan, rapatkan kedua tapak tangan (macam bentuk mangkuk), dan minta baby/anak <strong>hidu aroma</strong> Wooman Perfume. Cara ni bantu beri kesan <strong>calming & relaxing</strong> kepada baby/anak.`
  }
];

export default function DetailedUsageGuide() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Panduan Lengkap
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Cara Penggunaan Kami Sediakan
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/60 text-sm md:text-base">
            InsyaAllah berkesan untuk sis amalkan
          </p>
        </motion.div>

        <div className="space-y-4">
          {guides.map((guide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 bg-[#750917] hover:bg-[#8B0A1C] transition-colors text-white"
              >
                <span className="text-left font-semibold text-base">{guide.title}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform flex-shrink-0 ${activeIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white">
                      {guide.image && (
                        <img 
                          src={guide.image}
                          alt={guide.title}
                          className="w-full rounded-xl mb-6"
                        />
                      )}
                      <div 
                        className="text-[#5C1A33]/80 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: guide.content }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-[#750917] font-medium bg-[#FFF5F5] p-4 rounded-lg">
            PENAFIAN: KEBERKESANAN WOOMAN PERFUME NI MUNGKIN BERBEZA BAGI SETIAP ORANG. HASIL DAN KESAN TERBAIK, INSYAALLAH BOLEH DIRASAI DENGAN MENGIKUTI CARA PENGGUNAAN YANG BETUL, SEPERTI YANG DISYORKAN DALAM USER-GUIDE DI ATAS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}