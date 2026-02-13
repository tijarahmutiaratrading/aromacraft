import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function CertificateSection() {
  const organicAwards = [
    "https://intimateperfume.com/wp-content/uploads/2024/11/e051d0de-2835-4df8-8288-d4ab97fc682c.jpeg",
    "https://intimateperfume.com/wp-content/uploads/2024/11/a3e27981-2117-4d8d-9e37-9065a5e0fbc9.jpeg",
    "https://intimateperfume.com/wp-content/uploads/2024/11/ea626f1a-0a8b-417d-9ec5-e54c66b77616.jpeg"
  ];

  const labAnalysis = [
    "https://intimateperfume.com/wp-content/uploads/2024/11/760cc048-ea10-4c85-99c6-313a1b66c81b.jpeg",
    "https://intimateperfume.com/wp-content/uploads/2024/11/a2cd1c8a-718a-409f-975c-fa65f9f2153c.jpeg",
    "https://intimateperfume.com/wp-content/uploads/2024/11/b7a592bd-161a-4218-bb29-1bfe2af4ba7a.jpeg",
    "https://intimateperfume.com/wp-content/uploads/2024/11/90c09abe-59ae-4149-a16b-e5cff8bf1f9a.jpeg",
    "https://intimateperfume.com/wp-content/uploads/2024/11/8b9f2eb5-7b9b-4e97-85fa-4d7f3210ef83.jpeg",
    "https://intimateperfume.com/wp-content/uploads/2024/11/e397ee76-72b1-4e0e-95f2-d046be761347.jpeg"
  ];

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
            Sijil & Kelulusan
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Tak Perlu Risau! Wooman Perfume ni InsyaAllah <span className="text-red-600">Selamat Digunakan 👌🏻</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        {/* Gold Award Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-amber-900">International Recognition</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#5C1A33]">
              <span className="text-red-600">Gold Award</span> dalam <span className="text-red-600">International Organic Award</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organicAwards.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border border-amber-200"
              >
                <img src={img} alt={`Organic Award ${i + 1}`} className="w-full rounded-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vegan Certified Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5C1A33] mb-4">
              <span className="text-red-600">Certified Vegan</span> Oleh <span className="text-red-600">The Vegan Society UK</span>
            </h3>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
            <img 
              src="https://intimateperfume.com/wp-content/uploads/2024/11/af786655-4ae2-4fbf-abf2-3e06c29a6f90.jpeg" 
              alt="Vegan Society Certificate"
              className="w-full rounded-xl mb-6"
            />
            <div className="space-y-3">
              {[
                "100% Bebas unsur haiwan",
                "Tiada ujian ke atas haiwan",
                "Menggunakan bahan yang menepati piawaian etika & selamat digunakan",
                "Sesuai untuk gaya hidup sihat & sustainable"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-[#5C1A33]/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lab Tested Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5C1A33]">
              <span className="text-red-600">Lab Tested.</span> Proven bebas daripada unsur haiwan, heavy metals & microb
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {labAnalysis.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer border border-gray-100"
              >
                <img src={img} alt={`Lab Analysis ${i + 1}`} className="w-full rounded-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}