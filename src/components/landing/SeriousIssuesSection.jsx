import React from "react";
import { motion } from "framer-motion";

export default function SeriousIssuesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Serius ke <span className="text-red-600">masalah</span> tu sis?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            <img 
              src="https://intimateperfume.com/wp-content/uploads/2024/11/474618084_122156789066292366_4109968974446218990_n.jpg"
              alt="Mati Putik"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#5C1A33] mb-3">
                Mati putik antara masalah ramai wanita
              </h3>
              <p className="text-[#5C1A33]/70 leading-relaxed">
                Kadang masalah mati putik adalah punca berlaku penceraian yang berpunca dari masalah dryness atau susah klimaks
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            <img 
              src="https://intimateperfume.com/wp-content/uploads/2024/11/bahaya-keputihan-kepada-wanita-kemandulan-keguguran.png"
              alt="Keputihan Melampau"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#5C1A33] mb-3">
                Keputihan melampau
              </h3>
              <p className="text-[#5C1A33]/70 leading-relaxed">
                Sis tahu ke ye keputihan melampau boleh menyebabkan masalah kesihatan untuk sis
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}