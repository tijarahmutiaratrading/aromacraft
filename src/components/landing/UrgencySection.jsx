import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Package, TrendingUp } from "lucide-react";

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-red-50 via-orange-50 to-red-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-red-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Promosi Terhad</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#5C1A33] mb-2">
                Stok Terhad! Order Sekarang
              </h3>
              <p className="text-[#5C1A33]/70 mb-6">
                Hanya tinggal <span className="font-bold text-red-600">23 unit</span> untuk hari ini. Grab sebelum sold out!
              </p>

              {/* Timer */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="bg-[#5C1A33] text-white rounded-xl p-3 min-w-[70px]">
                  <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs opacity-70">Jam</div>
                </div>
                <div className="text-2xl text-[#5C1A33]/30">:</div>
                <div className="bg-[#5C1A33] text-white rounded-xl p-3 min-w-[70px]">
                  <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs opacity-70">Min</div>
                </div>
                <div className="text-2xl text-[#5C1A33]/30">:</div>
                <div className="bg-[#5C1A33] text-white rounded-xl p-3 min-w-[70px]">
                  <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs opacity-70">Saat</div>
                </div>
              </div>

              <a
                href="#order"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                🔥 Claim Promosi Sekarang
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 rounded-2xl border border-green-100">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-700">FREE Postage</div>
                  <div className="text-xs text-green-600">Semenanjung Malaysia</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 rounded-2xl border border-purple-100">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-purple-700">2,847 Order Hari Ini</div>
                  <div className="text-xs text-purple-600">Trending #1 Malaysia</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}