import React from "react";
import { motion } from "framer-motion";
import { Play, Users } from "lucide-react";

export default function VideoTestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FCEDF0]/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Pengguna Sebenar
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Ribuan Wanita Malaysia Dah Cuba
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/bf69f65e1_IMG_0795.jpg"
              alt="Real customers"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-semibold">2,847+ Real Users</span>
                </div>
                <p className="text-xs opacity-80">Dipercayai wanita di seluruh Malaysia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#FCEDF0]"
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8A0BF] to-[#C9A96E] flex items-center justify-center mb-4">
                <Play className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-light text-[#5C1A33] mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                Tengok Sendiri Hasilnya
              </h3>
              <p className="text-[#5C1A33]/60 text-sm leading-relaxed mb-6">
                Dengar sendiri pengalaman sebenar dari pengguna Wooman. Bukan testimonial palsu, ini adalah 
                feedback tulen dari wanita yang dah rasai perubahan dalam hidup mereka.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-[#FCEDF0]/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#5C1A33]">98% Satisfaction Rate</p>
                  <p className="text-xs text-[#5C1A33]/50">Dari pengguna verified</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#FCEDF0]/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#5C1A33]">Real WhatsApp Reviews</p>
                  <p className="text-xs text-[#5C1A33]/50">Bukan fake testimonial</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#FCEDF0]/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#5C1A33]">Certified & Lab Tested</p>
                  <p className="text-xs text-[#5C1A33]/50">100% selamat & berkesan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}