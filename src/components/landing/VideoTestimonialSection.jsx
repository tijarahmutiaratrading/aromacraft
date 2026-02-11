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

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: "2n_l-sCKYig", title: "Pengguna 1" },
            { id: "CbYXGLesKfI", title: "Pengguna 2" },
            { id: "GRKK3RxANS0", title: "Pengguna 3" },
          ].map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-[#FCEDF0] shadow-md">
            <Users className="w-5 h-5 text-[#C9A96E]" />
            <span className="text-sm text-[#5C1A33] font-medium">2,847+ pengguna verified di Malaysia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}