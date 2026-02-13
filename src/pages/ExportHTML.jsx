import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Check } from "lucide-react";

export default function ExportHTML() {
  const [copied, setCopied] = useState(false);

  const htmlCode = `<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WOOMAN - Intimate Perfume untuk Wanita</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .fade-in { 
            animation: fadeIn 0.8s ease-in; 
        }
        @keyframes fadeIn { 
            from { opacity: 0; transform: translateY(30px); } 
            to { opacity: 1; transform: translateY(0); } 
        }
        .hover-scale { 
            transition: all 0.3s ease; 
        }
        .hover-scale:hover { 
            transform: scale(1.05); 
        }
        .slide-up {
            animation: slideUp 0.6s ease-out;
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        details summary {
            list-style: none;
        }
        details summary::-webkit-details-marker {
            display: none;
        }
    </style>
</head>
<body class="bg-white">

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-pink-50 to-pink-100">
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div class="absolute top-20 right-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-left fade-in">
                <span class="inline-block text-amber-600 text-xs tracking-widest uppercase font-medium bg-amber-100 px-4 py-2 rounded-full mb-4">
                    100% Organik & Selamat
                </span>
                <h1 class="text-6xl lg:text-7xl font-light text-rose-900 mb-6 leading-tight" style="font-family: Georgia, serif;">
                    WOOMAN
                </h1>
                <p class="text-2xl text-rose-800 font-light mb-6">
                    Intimate Perfume untuk Wanita
                </p>
                <p class="text-lg text-rose-700 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                    Alhamdulillah… Calit sikit je terus turn on. Mengatasi masalah wetness & kekeringan secara semulajadi.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                    <a href="#order" class="px-8 py-4 bg-rose-900 text-white text-sm tracking-wider uppercase rounded-lg hover:bg-amber-600 transition-all">
                        Order Sekarang
                    </a>
                    <a href="#masalah" class="px-8 py-4 text-rose-900 text-sm tracking-wider uppercase border-2 border-rose-200 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all">
                        Ketahui Lebih
                    </a>
                </div>
                <div class="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-rose-700">
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-amber-600"></div>
                        <span>KKM Approved</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-amber-600"></div>
                        <span>Halal & Selamat</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-amber-600"></div>
                        <span>28,000+ Pengguna</span>
                    </div>
                </div>
            </div>

            <div class="relative fade-in">
                <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                    <video class="w-full" autoplay muted loop playsinline poster="https://intimateperfume.com/wp-content/uploads/2024/11/2_20250417_152856_0000.png">
                        <source src="https://intimateperfume.com/wp-content/uploads/2025/08/Wooman-Organic-Perfume-Kesan-Sepantas-2-Minit-CIk-Bunga-Dah-Berayaq.mp4" type="video/mp4">
                    </video>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rose-900 to-transparent p-6">
                        <p class="text-white text-sm font-light italic">"Sangat wet lepas guna.. my husben cum kan i dulu then baru dia.. 😍"</p>
                        <p class="text-white/60 text-xs mt-2">- Pengguna Verified ✓</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Problems Section -->
<section id="masalah" class="py-24 bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Sis ada <span class="text-yellow-400">masalah</span> kat bawah ni ke?
            </h2>
            <p class="text-xl text-gray-300 mt-4">
                Dah try macam-macam produk… tapi masih tak ada yang berkesan?
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-600 transition-all hover-scale">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0000.png" class="w-full rounded-xl mb-4">
                <h3 class="text-2xl font-bold text-yellow-400 mb-3">Mati Putik & Hilang Nafsu</h3>
                <p class="text-gray-300">Sis hilang nafsu atau tak rasa ghairah semasa hubungan intim. Problem ni boleh beri kesan pada hubungan dengan suami.</p>
            </div>
            <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-600 transition-all hover-scale">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0002.png" class="w-full rounded-xl mb-4">
                <h3 class="text-2xl font-bold text-yellow-400 mb-3">Miss V Kering</h3>
                <p class="text-gray-300">Sis selalu rasa tak selesa, gatal-gatal, pedih, atau sakit di bahagian Miss V semasa penetrative sex bersama suami.</p>
            </div>
        </div>
    </div>
</section>

<!-- Serious Issues -->
<section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-rose-900 mb-16 fade-in">
            Serius ke <span class="text-red-600">masalah</span> tu sis?
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow hover-scale">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/474618084_122156789066292366_4109968974446218990_n.jpg" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-rose-900 mb-3">Mati putik antara masalah ramai wanita</h3>
                    <p class="text-rose-800/70">Kadang masalah mati putik adalah punca berlaku penceraian yang berpunca dari masalah dryness atau susah klimaks</p>
                </div>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow hover-scale">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/bahaya-keputihan-kepada-wanita-kemandulan-keguguran.png" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-rose-900 mb-3">Keputihan melampau</h3>
                    <p class="text-rose-800/70">Sis tahu ke ye keputihan melampau boleh menyebabkan masalah kesihatan untuk sis</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Benefits Section -->
<section class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl font-light text-rose-900 mb-4" style="font-family: Georgia, serif;">
                Bagaimana Wooman membantu <span class="text-red-600">selesaikan masalah</span> sis tadi? 🥰
            </h2>
            <div class="w-12 h-px bg-amber-600 mx-auto mb-6"></div>
            <p class="text-rose-800/70 max-w-2xl mx-auto">
                Wooman direka khas untuk Wanita bagi membantu mengatasi masalah majoriti wanita masa kini.
            </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div class="text-4xl mb-4">✅</div>
                <p class="text-rose-900">Membantu stabilkan hormon sis</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div class="text-4xl mb-4">✅</div>
                <p class="text-rose-900">Menaikkan mood untuk bersama suami</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div class="text-4xl mb-4">✅</div>
                <p class="text-rose-900">Mengembalikan kebasahan semulajadi</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div class="text-4xl mb-4">✅</div>
                <p class="text-rose-900">Mengurangkan masalah keputihan</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Break -->
<section class="py-16 bg-gradient-to-r from-rose-900 to-rose-800 text-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
        <h3 class="text-3xl font-bold mb-4">Order Sekarang & Rasai Perbezaannya!</h3>
        <p class="text-lg mb-6 opacity-90">Free Postage | Bayar Bila Sampai | Jaminan Wang Kembali</p>
        <a href="#order" class="inline-block px-10 py-4 bg-yellow-400 text-rose-900 font-bold rounded-full hover:bg-yellow-300 transition-all hover-scale">
            DAPATKAN WOOMAN SEKARANG
        </a>
    </div>
</section>

<!-- Video Testimonials -->
<section class="py-24 bg-gradient-to-b from-white to-pink-50">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
            <p class="text-amber-600 tracking-widest uppercase text-xs font-medium mb-4">Video Testimoni</p>
            <h2 class="text-4xl font-light text-rose-900 mb-4" style="font-family: Georgia, serif;">Tengok Sendiri Hasil Sebenar</h2>
            <div class="w-12 h-px bg-amber-600 mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-scale">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/2n_l-sCKYig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full"></iframe>
                <div class="p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white">
                    <p class="font-semibold">Syatilla Melvin</p>
                    <p class="text-xs opacity-90">Membantu isu dalaman wanita</p>
                </div>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-scale">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/CbYXGLesKfI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full"></iframe>
                <div class="p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white">
                    <p class="font-semibold">Nur Khiriah</p>
                    <p class="text-xs opacity-90">Mengembalikan kebasahan</p>
                </div>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-scale">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/GRKK3RxANS0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full"></iframe>
                <div class="p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white">
                    <p class="font-semibold">Tya Adnan</p>
                    <p class="text-xs opacity-90">Menaikkan mood bersama</p>
                </div>
            </div>
        </div>
        <div class="text-center mt-12 slide-up">
            <p class="text-rose-900/50 text-sm">📹 28,000+ pengguna verified di seluruh Malaysia</p>
        </div>
    </div>
</section>

<!-- Testimonials -->
<section class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
            <p class="text-amber-600 tracking-widest uppercase text-xs font-medium mb-4">Testimoni</p>
            <h2 class="text-4xl font-light text-rose-900" style="font-family: Georgia, serif;">Apa Kata Pengguna Kami</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
            <div class="bg-white rounded-3xl border border-pink-100 overflow-hidden hover:shadow-xl transition-all hover-scale">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/57f4e861c_IMG_0790.jpg" class="w-full h-64 object-cover">
                <div class="p-5">
                    <div class="flex gap-0.5 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-rose-900/70 text-sm italic">"Sangat wet. My husben cum kan i dulu then baru die but when he cum..im also cum for the 2nd time 😍😍"</p>
                </div>
            </div>
            <div class="bg-white rounded-3xl border border-pink-100 overflow-hidden hover:shadow-xl transition-all hover-scale">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/2c1e39c22_IMG_0791.jpg" class="w-full h-64 object-cover">
                <div class="p-5">
                    <div class="flex gap-0.5 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-rose-900/70 text-sm italic">"Yupppss!! Hehehe betoi. Lpsni bersalin nnt konfem guna kerap hehe."</p>
                </div>
            </div>
            <div class="bg-white rounded-3xl border border-pink-100 overflow-hidden hover:shadow-xl transition-all hover-scale">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/a621ef1f2_IMG_0792.jpg" class="w-full h-64 object-cover">
                <div class="p-5">
                    <div class="flex gap-0.5 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-rose-900/70 text-sm italic">"After i using MyWooman, mmg WOW 🤩 baru 1st time roll dkt private area"</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Pricing Section -->
<section id="order" class="py-24 bg-gradient-to-b from-pink-50 to-white relative">
    <div class="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 text-center">
        <p class="text-sm md:text-base font-bold">🚚 BAYAR BILA SAMPAI (COD) - Tak perlu risau, tengok dulu baru bayar!</p>
    </div>

    <div class="pt-20 max-w-5xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
            <p class="text-amber-600 tracking-widest uppercase text-xs font-medium mb-4">Pakej</p>
            <h2 class="text-4xl font-light text-rose-900 mb-4" style="font-family: Georgia, serif;">Pilih Pakej Terbaik Untuk Sis</h2>
            <div class="w-12 h-px bg-amber-600 mx-auto mb-6"></div>
        </div>

        <!-- Money Back Guarantee -->
        <div class="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
            <div class="text-4xl mb-2">🛡️</div>
            <h3 class="text-xl font-bold text-rose-900 mb-2">100% JAMINAN WANG KEMBALI</h3>
            <p class="text-rose-800/70 text-sm">Tak puas hati? Dalam 30 hari, kami pulangkan 100% wang anda. No question asked!</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Package 1: BabyWooman -->
            <div class="bg-white rounded-3xl p-8 border border-gray-100 hover:border-amber-400 hover:shadow-xl transition-all hover-scale">
                <div class="-mx-8 -mt-8 mb-6">
                    <img src="https://intimateperfume.com/wp-content/uploads/2025/05/IMG-20250525-WA0010.jpg" class="w-full h-48 object-cover rounded-t-3xl">
                </div>
                <div class="text-center mb-6">
                    <p class="text-sm font-medium text-amber-600 mb-1">BabyWooman</p>
                    <p class="text-xs text-rose-900/40 mb-3">TheWooman Versi Mini</p>
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl font-light text-rose-900">RM79</span>
                        <span class="text-sm line-through text-rose-900/30">RM99</span>
                    </div>
                </div>
                <ul class="space-y-3 mb-8 text-sm text-rose-900/60">
                    <li>✓ Versi MINI bagi TheWooman</li>
                    <li>✓ 100% Organik & Vegan</li>
                    <li>✓ Kandungan 3ml</li>
                    <li>✓ Free Postage</li>
                </ul>
                <a href="https://intimateperfume.com/#beli" target="_blank" class="block w-full text-center py-3.5 bg-rose-900 text-white rounded-full hover:bg-rose-800 transition-all">
                    ORDER SEKARANG
                </a>
            </div>

            <!-- Package 2: TheWooman -->
            <div class="bg-white rounded-3xl p-8 border border-gray-100 hover:border-amber-400 hover:shadow-xl transition-all hover-scale">
                <div class="-mx-8 -mt-8 mb-6">
                    <img src="https://intimateperfume.com/wp-content/uploads/2025/05/IMG-20250525-WA0012.jpg" class="w-full h-48 object-cover rounded-t-3xl">
                </div>
                <div class="text-center mb-6">
                    <p class="text-sm font-medium text-amber-600 mb-1">TheWooman</p>
                    <p class="text-xs text-rose-900/40 mb-3">Signature Brand Since 2018</p>
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl font-light text-rose-900">RM150</span>
                        <span class="text-sm line-through text-rose-900/30">RM180</span>
                    </div>
                </div>
                <ul class="space-y-3 mb-8 text-sm text-rose-900/60">
                    <li>✓ 20 Fungsi</li>
                    <li>✓ FREE Faux-Leather Casing</li>
                    <li>✓ Kandungan 11ml</li>
                    <li>✓ Tahan 3–5 bulan</li>
                </ul>
                <a href="https://intimateperfume.com/#beli" target="_blank" class="block w-full text-center py-3.5 bg-rose-900 text-white rounded-full hover:bg-rose-800 transition-all">
                    ORDER SEKARANG
                </a>
            </div>

            <!-- Package 3: Combo 3 BabyWooman -->
            <div class="bg-white rounded-3xl p-8 border border-gray-100 hover:border-amber-400 hover:shadow-xl transition-all hover-scale">
                <div class="-mx-8 -mt-8 mb-6">
                    <img src="https://intimateperfume.com/wp-content/uploads/2024/11/f9965095-722b-49af-8d98-bbecf8be3961.jpeg" class="w-full h-48 object-cover rounded-t-3xl">
                </div>
                <div class="text-center mb-6">
                    <p class="text-sm font-medium text-amber-600 mb-1">Combo 3 BabyWooman</p>
                    <p class="text-xs text-rose-900/40 mb-3">3x BabyWooman</p>
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl font-light text-rose-900">RM160</span>
                        <span class="text-sm line-through text-rose-900/30">RM297</span>
                    </div>
                </div>
                <ul class="space-y-3 mb-8 text-sm text-rose-900/60">
                    <li>✓ First-Timer Special</li>
                    <li>✓ Jimat RM137!</li>
                    <li>✓ FREE Postage</li>
                </ul>
                <a href="https://intimateperfume.com/#beli" target="_blank" class="block w-full text-center py-3.5 bg-rose-900 text-white rounded-full hover:bg-rose-800 transition-all">
                    ORDER SEKARANG
                </a>
            </div>

            <!-- Package 4: MyWooman (POPULAR) -->
            <div class="bg-rose-900 text-white rounded-3xl p-8 shadow-2xl scale-105 relative">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span class="bg-amber-600 text-white text-xs tracking-wider uppercase px-4 py-1.5 rounded-full font-medium">
                        Popular
                    </span>
                </div>
                <div class="-mx-8 -mt-8 mb-6">
                    <img src="https://intimateperfume.com/wp-content/uploads/2025/05/IMG-20250525-WA0011.jpg" class="w-full h-48 object-cover rounded-t-3xl">
                </div>
                <div class="text-center mb-6">
                    <p class="text-sm font-medium text-amber-400 mb-1">MyWooman</p>
                    <p class="text-xs text-white/60 mb-3">TheWooman Versi Advanced</p>
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl font-light">RM200</span>
                        <span class="text-sm line-through text-white/40">RM250</span>
                    </div>
                </div>
                <ul class="space-y-3 mb-8 text-sm text-white/80">
                    <li>✓ 20 Fungsi</li>
                    <li>✓ Rose Quartz Rollerball</li>
                    <li>✓ Tahan 5–10 bulan</li>
                    <li>✓ FREE Postage</li>
                </ul>
                <a href="https://intimateperfume.com/#beli" target="_blank" class="block w-full text-center py-3.5 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-all">
                    ORDER SEKARANG
                </a>
            </div>

            <!-- Package 5: MyWooman + BabyWooman -->
            <div class="bg-white rounded-3xl p-8 border border-gray-100 hover:border-amber-400 hover:shadow-xl transition-all hover-scale">
                <div class="-mx-8 -mt-8 mb-6">
                    <img src="https://intimateperfume.com/wp-content/uploads/2025/05/IMG-20250510-WA00701-e1755753490154.jpg" class="w-full h-48 object-cover rounded-t-3xl">
                </div>
                <div class="text-center mb-6">
                    <p class="text-sm font-medium text-amber-600 mb-1">MyWooman + BabyWooman</p>
                    <p class="text-xs text-rose-900/40 mb-3">Combo Set</p>
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl font-light text-rose-900">RM250</span>
                        <span class="text-sm line-through text-rose-900/30">RM349</span>
                    </div>
                </div>
                <ul class="space-y-3 mb-8 text-sm text-rose-900/60">
                    <li>✓ For Married Woman</li>
                    <li>✓ Jimat RM99!</li>
                    <li>✓ FREE Casing</li>
                </ul>
                <a href="https://intimateperfume.com/#beli" target="_blank" class="block w-full text-center py-3.5 bg-rose-900 text-white rounded-full hover:bg-rose-800 transition-all">
                    ORDER SEKARANG
                </a>
            </div>

            <!-- Package 6: MyWooman + TheWooman -->
            <div class="bg-white rounded-3xl p-8 border border-gray-100 hover:border-amber-400 hover:shadow-xl transition-all hover-scale">
                <div class="-mx-8 -mt-8 mb-6">
                    <img src="https://intimateperfume.com/wp-content/uploads/2024/11/daab947d-16ba-4c89-9a0f-595226ab3ea1.jpeg" class="w-full h-48 object-cover rounded-t-3xl">
                </div>
                <div class="text-center mb-6">
                    <p class="text-sm font-medium text-amber-600 mb-1">MyWooman + TheWooman</p>
                    <p class="text-xs text-rose-900/40 mb-3">Combo Set Premium</p>
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-3xl font-light text-rose-900">RM300</span>
                        <span class="text-sm line-through text-rose-900/30">RM430</span>
                    </div>
                </div>
                <ul class="space-y-3 mb-8 text-sm text-rose-900/60">
                    <li>✓ Jimat RM130!</li>
                    <li>✓ FREE BabyWooman</li>
                    <li>✓ FREE 2 Casing</li>
                </ul>
                <a href="https://intimateperfume.com/#beli" target="_blank" class="block w-full text-center py-3.5 bg-rose-900 text-white rounded-full hover:bg-rose-800 transition-all">
                    ORDER SEKARANG
                </a>
            </div>
        </div>

        <div class="mt-12 text-center">
            <p class="text-xs text-rose-900/50">📦 Dihantar dalam 1-3 hari bekerja (Semenanjung) | 3-5 hari (Sabah/Sarawak)</p>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="py-24 bg-white">
    <div class="max-w-3xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
            <h2 class="text-4xl font-light text-rose-900" style="font-family: Georgia, serif;">Soalan Lazim</h2>
        </div>
        <div class="space-y-4">
            <details class="bg-pink-50 rounded-xl p-5 hover:bg-pink-100 transition-colors">
                <summary class="font-semibold text-rose-900 cursor-pointer">Selamat ke guna Wooman Intimate Perfume?</summary>
                <p class="mt-3 text-rose-800/70">Ya! Wooman dibuat daripada 100% bahan organik dan telah lulus ujian KKM. Lebih 28,000+ wanita Malaysia dah guna tanpa masalah.</p>
            </details>
            <details class="bg-pink-50 rounded-xl p-5 hover:bg-pink-100 transition-colors">
                <summary class="font-semibold text-rose-900 cursor-pointer">Berapa lama nak nampak hasil?</summary>
                <p class="mt-3 text-rose-800/70">Kebanyakan pengguna rasa perbezaan dalam masa 2-5 minit selepas penggunaan pertama!</p>
            </details>
            <details class="bg-pink-50 rounded-xl p-5 hover:bg-pink-100 transition-colors">
                <summary class="font-semibold text-rose-900 cursor-pointer">Ada jaminan wang kembali?</summary>
                <p class="mt-3 text-rose-800/70">Ya! Kami beri jaminan 30 hari. Kalau tak puas hati atau ada masalah, kami pulangkan 100% wang anda.</p>
            </details>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="bg-rose-900 text-white py-12">
    <div class="max-w-6xl mx-auto px-6 text-center">
        <img src="https://intimateperfume.com/wp-content/uploads/2024/11/2020-THE-WOOMAN-LOGO1.png" class="h-16 mx-auto mb-6">
        <p class="text-sm opacity-80 mb-4">WOOMAN SDN. BHD. | Company Reg. No.: 1429906-A</p>
        <p class="text-xs opacity-60">2025© intimateperfume.com – All Rights Reserved</p>
    </div>
</footer>

</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHTML = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wooman-landing-page.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };

  return (
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">Export HTML Code</h1>
          <p class="text-gray-600 mb-6">
            Complete HTML code untuk landing page Wooman. Copy code di bawah atau download sebagai file HTML.
          </p>
          
          <div class="flex gap-4 mb-6">
            <Button onClick={copyToClipboard} className="flex items-center gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </Button>
            <Button onClick={downloadHTML} variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download HTML
            </Button>
          </div>

          <div class="bg-gray-900 rounded-lg p-6 overflow-auto max-h-96">
            <pre class="text-sm text-green-400">
              <code>{htmlCode}</code>
            </pre>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 class="text-xl font-bold text-blue-900 mb-3">Cara Guna:</h2>
          <ol class="list-decimal list-inside space-y-2 text-blue-800">
            <li>Copy kod HTML di atas atau download file</li>
            <li>Paste dalam text editor atau upload ke hosting</li>
            <li>File ini standalone - semua CSS & styling dah included</li>
            <li>Update link order (#beli) kepada borang order sebenar sis</li>
          </ol>
        </div>
      </div>
    </div>
  );
}