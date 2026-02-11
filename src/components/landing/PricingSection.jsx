import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Truck, Gift } from "lucide-react";

const packages = [
  {
    name: "1 Botol",
    price: "RM89",
    originalPrice: "RM120",
    desc: "Sesuai untuk cuba",
    features: ["1x Wooman Perfume (10ml)", "Free Postage", "Manual Penggunaan"],
    popular: false,
  },
  {
    name: "3 Botol",
    price: "RM199",
    originalPrice: "RM360",
    desc: "Paling popular",
    features: [
      "3x Wooman Perfume (10ml)",
      "Free Postage",
      "Manual Penggunaan",
      "Jimat RM161",
      "Free Gift Exclusive",
    ],
    popular: true,
  },
  {
    name: "5 Botol",
    price: "RM289",
    originalPrice: "RM600",
    desc: "Paling berbaloi",
    features: [
      "5x Wooman Perfume (10ml)",
      "Free Postage",
      "Manual Penggunaan",
      "Jimat RM311",
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
          <h2 className="text-3xl md:text-4xl font-light text-[#5C1A33] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Pilih Pakej Sis
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#5C1A33]/50 text-sm max-w-md mx-auto font-light">
            Semua pakej termasuk penghantaran percuma ke seluruh Malaysia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className={`block w-full text-center py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#C9A96E] text-white hover:bg-[#B8963D]"
                    : "bg-[#5C1A33] text-white hover:bg-[#7A2345]"
                }`}
              >
                Order Sekarang
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-14"
        >
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
        </motion.div>
      </div>
    </section>
  );
}