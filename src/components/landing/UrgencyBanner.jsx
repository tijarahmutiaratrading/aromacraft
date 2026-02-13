import React, { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function UrgencyBanner() {
  const [stock, setStock] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setStock(prev => Math.max(12, prev - Math.floor(Math.random() * 2)));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center animate-pulse">
      <div className="flex items-center justify-center gap-2 text-sm md:text-base">
        <AlertCircle className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
        <span className="font-bold">STOK TINGGAL {stock} BOTOL SAHAJA!</span>
        <span className="hidden sm:inline">🔥 Order sekarang sebelum kehabisan!</span>
      </div>
    </div>
  );
}