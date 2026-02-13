import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#FFF8F8] to-[#FFF0F3]">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#E8A0BF] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C9A96E] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-medium bg-[#C9A96E]/10 px-4 py-2 rounded-full">
                100% Organik & Selamat
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#5C1A33] mb-6 leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              WOOMAN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl sm:text-2xl text-[#5C1A33]/80 font-light mb-6"
            >
              Intimate Perfume untuk Wanita
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-[#5C1A33]/70 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Alhamdulillah… Calit sikit je terus turn on. Mengatasi masalah wetness & kekeringan secara semulajadi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <a
                href="#order"
                className="group relative px-8 py-4 bg-[#5C1A33] text-white text-sm tracking-[0.15em] uppercase rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#5C1A33]/20 hover:scale-[1.02]"
              >
                <span className="relative z-10">Order Sekarang</span>
                <div className="absolute inset-0 bg-[#C9A96E] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a
                href="#masalah"
                className="px-8 py-4 text-[#5C1A33] text-sm tracking-[0.15em] uppercase border-2 border-[#5C1A33]/20 rounded-lg hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                Ketahui Lebih
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-[#5C1A33]/60"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                <span>KKM Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                <span>Halal & Selamat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                <span>28,000+ Pengguna</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full"
                autoPlay
                muted
                loop
                playsInline
                poster="https://intimateperfume.com/wp-content/uploads/2024/11/2_20250417_152856_0000.png"
              >
                <source src="https://intimateperfume.com/wp-content/uploads/2025/08/Wooman-Organic-Perfume-Kesan-Sepantas-2-Minit-CIk-Bunga-Dah-Berayaq.mp4" type="video/mp4" />
              </video>
              
              {/* Testimonial overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5C1A33] to-transparent p-6">
                <p className="text-white text-sm font-light italic">
                  "Sangat wet lepas guna.. my husben cum kan i dulu then baru dia.. 😍"
                </p>
                <p className="text-white/60 text-xs mt-2">- Pengguna Verified ✓</p>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <p className="text-2xl font-bold text-[#5C1A33]">2,847+</p>
              <p className="text-xs text-[#5C1A33]/60">Order hari ini</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-6 -right-6 bg-[#C9A96E] rounded-2xl shadow-xl p-4"
            >
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-xs text-white/80">Berpuas Hati</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}