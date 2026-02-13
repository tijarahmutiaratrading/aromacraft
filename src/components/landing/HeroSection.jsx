import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#FFF5F5] via-[#FCEDF0] to-[#F8D7E0]">
      {/* Top testimonial banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#5C1A33] text-white py-4 px-6 text-center"
      >
        <p className="text-sm md:text-base font-light">
          Sangat wet lepas guna..my husben cum kan i dulu then baru dia.. 😍
        </p>
      </motion.div>

      <div className="relative flex-1 flex items-center justify-center">
      {/* Floating petals decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-4 rounded-full opacity-20"
            style={{
              background: `linear-gradient(135deg, #E8A0BF, #C9A96E)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: '50% 0 50% 50%',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] sm:tracking-[0.15em] text-[#5C1A33] mb-4 sm:mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          WOOMAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 80 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[1px] bg-[#C9A96E] mx-auto mb-4 sm:mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#5C1A33]/70 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto mb-3 sm:mb-4"
        >
          Rahsia Intimasi Wanita
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl mx-auto mb-6 sm:mb-8"
        >
          <video
            className="w-full rounded-2xl shadow-2xl"
            autoPlay
            muted
            loop
            playsInline
            poster="https://intimateperfume.com/wp-content/uploads/2024/11/2_20250417_152856_0000.png"
          >
            <source src="https://intimateperfume.com/wp-content/uploads/2025/08/Wooman-Organic-Perfume-Kesan-Sepantas-2-Minit-CIk-Bunga-Dah-Berayaq.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#5C1A33] text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10"
        >
          Alhamdulillah… Calit sikit je terus turn on. Tak perlu risau lagi masalah Wetness & dan kurang basah! 🥰
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-3 sm:space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="#order"
              className="group relative px-6 sm:px-10 py-3 sm:py-4 bg-[#5C1A33] text-white text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#5C1A33]/20 hover:scale-105 animate-pulse touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              <span className="relative z-10">🔥 Order Sekarang - Jimat RM300</span>
              <div className="absolute inset-0 bg-[#C9A96E] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#masalah"
              className="px-6 sm:px-10 py-3 sm:py-4 text-[#5C1A33]/60 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase border border-[#5C1A33]/15 rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Ketahui Lebih
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#E8A0BF] to-[#C9A96E] border-2 border-white" />
              ))}
            </div>
            <span className="text-[#5C1A33]/60 text-xs">
              <span className="font-semibold text-[#5C1A33]">2,847+</span> wanita dah order hari ini
            </span>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mt-10 sm:mt-14"
        >
          {["100% Organik", "Certified Safe", "KKM Approved"].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              <span className="text-[#5C1A33]/40 text-[10px] sm:text-xs tracking-wider uppercase">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-[#5C1A33]/30" />
      </motion.div>
      </div>
    </section>
  );
}