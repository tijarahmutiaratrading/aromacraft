import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Truck, Gift, Lock, CreditCard, Shield } from "lucide-react";

const packages = [
  {
    name: "1 Botol",
    price: "RM79",
    originalPrice: "RM120",
    desc: "Sesuai untuk cuba",
    features: ["1x Wooman Perfume (10ml)", "Free Postage", "Manual Penggunaan"],
    popular: false,
  },
  {
    name: "2 Botol",
    price: "RM150",
    originalPrice: "RM240",
    desc: "Best value",
    features: [
      "2x Wooman Perfume (10ml)",
      "Free Postage",
      "Manual Penggunaan",
      "Jimat RM90",
    ],
    popular: false,
  },
  {
    name: "3 Botol",
    price: "RM200",
    originalPrice: "RM360",
    desc: "Paling popular",
    features: [
      "3x Wooman Perfume (10ml)",
      "Free Postage",
      "Manual Penggunaan",
      "Jimat RM160",
      "Free Gift Exclusive",
    ],
    popular: true,
  },
  {
    name: "5 Botol",
    price: "RM300",
    originalPrice: "RM600",
    desc: "Paling berbaloi",
    features: [
      "5x Wooman Perfume (10ml)",
      "Free Postage",
      "Manual Penggunaan",
      "Jimat RM300",
      "Free Gift Exclusive",
      "Priority Support",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="order" className="py-24 md:py-32 bg-gradient-to-b from-[#FCEDF0]/20 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Pakej
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Pilih Pakej Terbaik Untuk Sis
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/60 text-sm md:text-base max-w-2xl mx-auto">
            <span className="font-medium text-[#5C1A33]">Free postage seluruh Malaysia.</span> Lebih banyak order, lebih banyak jimat! 💕
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                pkg.popular
                  ? "bg-[#5C1A33] text-white shadow-2xl shadow-[#5C1A33]/25 scale-[1.02] md:scale-105"
                  : "bg-white border border-gray-100 hover:border-[#C9A96E]/30 hover:shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C9A96E] text-white text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full font-medium">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <p className={`text-sm font-medium mb-1 ${pkg.popular ? "text-[#C9A96E]" : "text-[#C9A96E]"}`}>
                  {pkg.name}
                </p>
                <p className={`text-xs mb-3 ${pkg.popular ? "text-white/60" : "text-[#5C1A33]/40"}`}>
                  {pkg.desc}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className={`text-3xl font-light ${pkg.popular ? "text-white" : "text-[#5C1A33]"}`} style={{ fontFamily: "'Georgia', serif" }}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm line-through ${pkg.popular ? "text-white/40" : "text-[#5C1A33]/30"}`}>
                    {pkg.originalPrice}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 ${pkg.popular ? "text-[#C9A96E]" : "text-[#C9A96E]"}`} />
                    <span className={`text-sm ${pkg.popular ? "text-white/80" : "text-[#5C1A33]/60"}`}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://intimateperfume.com/#beli"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? "bg-[#C9A96E] text-white hover:bg-[#B8963D] shadow-lg"
                    : "bg-[#5C1A33] text-white hover:bg-[#7A2345]"
                }`}
              >
                Order Sekarang
              </a>
              
              <div className="mt-4 flex items-center justify-center gap-2">
                <Lock className={`w-3 h-3 ${pkg.popular ? "text-white/60" : "text-[#5C1A33]/40"}`} />
                <span className={`text-xs ${pkg.popular ? "text-white/60" : "text-[#5C1A33]/40"}`}>
                  Secure Checkout
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 space-y-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: ShieldCheck, text: "Selamat & Organik" },
              { icon: Truck, text: "Free Postage" },
              { icon: Gift, text: "Free Gift" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4 text-[#C9A96E]" />
                <span className="text-[#5C1A33]/50 text-xs tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Payment Security */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 font-medium">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-gray-600 font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <CreditCard className="w-4 h-4 text-purple-600" />
              <span className="text-xs text-gray-600 font-medium">All Cards Accepted</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="text-center">
            <p className="text-xs text-[#5C1A33]/50">
              📦 Dihantar dalam <span className="font-semibold text-[#5C1A33]">1-3 hari bekerja</span> (Semenanjung) | 3-5 hari (Sabah/Sarawak)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}