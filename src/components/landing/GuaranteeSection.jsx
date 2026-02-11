import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Lock, Smile } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 md:p-14 text-white overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              100% JAMINAN WANG KEMBALI
            </h2>
            
            <div className="w-16 h-[2px] bg-white/40 mx-auto mb-6" />
            
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Cuba Wooman selama <span className="font-bold">30 hari</span>. Kalau tak puas hati atau tak nampak hasil, 
              kami pulangkan <span className="font-bold">100% wang sis</span> tanpa soalan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <RefreshCw className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">30 Hari Cuba</h3>
                <p className="text-sm text-white/80">Masa yang cukup untuk rasa kesan penuh produk</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Lock className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">No Questions Asked</h3>
                <p className="text-sm text-white/80">Proses refund mudah dan cepat</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Smile className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Zero Risk</h3>
                <p className="text-sm text-white/80">Sis tak rugi apa-apa, semua risk on us</p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto">
              <p className="text-sm text-white/90">
                <span className="font-bold">Mengapa kami berani buat jaminan ini?</span><br />
                Sebab kami 100% yakin dengan kualiti Wooman. Ribuan wanita dah buktikan hasilnya. 
                Sekarang giliran sis pula!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}