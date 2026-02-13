import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";

export default function LiveCounter() {
  const [users, setUsers] = useState(28473);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#5C1A33] to-[#7A2345]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-[#C9A96E]">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Live Counter</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">
            {users.toLocaleString()}+
          </h3>
          <p className="text-white/80 text-lg">Pengguna Wooman Seluruh Malaysia</p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-[#C9A96E] mb-2">98.7%</div>
              <div className="text-white/80 text-sm">Kepuasan Pengguna</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-[#C9A96E] mb-2">15,429</div>
              <div className="text-white/80 text-sm">Testimoni Positif</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-[#C9A96E] mb-2">2,847</div>
              <div className="text-white/80 text-sm">Order Hari Ini</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}