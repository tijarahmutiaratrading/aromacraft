import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const artists = [
  {
    name: "Syatilla Melvin",
    title: "Membantu isu dalaman wanita",
    videoId: "2n_l-sCKYig",
    thumbnail: "https://intimateperfume.com/wp-content/uploads/2025/05/placeholder-5.png"
  },
  {
    name: "Nur Khiriah",
    title: "Mengembalikan kebasahan isteri",
    videoId: "CbYXGLesKfI",
    thumbnail: "https://intimateperfume.com/wp-content/uploads/2025/05/placeholder-6.png"
  },
  {
    name: "Tya Adnan",
    title: "Menaikkan mood bersama",
    videoId: "GRKK3RxANS0",
    thumbnail: "https://intimateperfume.com/wp-content/uploads/2025/05/placeholder-7.png"
  }
];

export default function ArtistTestimonials() {
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
            Testimoni Artis
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Artis Pun Dah Ramai Yang Guna
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/60 text-sm md:text-base max-w-2xl mx-auto">
            Alhamdulillah diarang suka dan repeat! 💕
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artists.map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-red-500"
            >
              <div className="relative bg-white p-2">
                <div className="absolute top-4 left-4 right-4 z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-[#5C1A33] mb-1">
                    {artist.title.split(' ').slice(0, 2).join(' ')}<br />
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                      {artist.title.split(' ').slice(2).join(' ')}
                    </span>
                  </h3>
                </div>
                
                <a 
                  href={`https://youtube.com/watch?v=${artist.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video bg-black rounded-xl overflow-hidden"
                >
                  <img 
                    src={artist.thumbnail}
                    alt={artist.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-red-600 ml-1" />
                    </div>
                  </div>
                </a>

                <div className="bg-gradient-to-r from-[#d77586] to-[#F77169] text-white px-4 py-3 rounded-b-xl">
                  <p className="text-lg font-semibold">{artist.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}