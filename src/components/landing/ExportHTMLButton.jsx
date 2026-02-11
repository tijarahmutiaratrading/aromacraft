import React from "react";
import { Download, Copy, FileJson } from "lucide-react";
import { toast } from "sonner";

export default function ExportHTMLButton() {
  const getHTMLContent = () => {
    return `<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wooman - Intimate Organic Perfume</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', system-ui, -apple-system, sans-serif; line-height: 1.6; color: #5C1A33; }
        .georgia { font-family: 'Georgia', serif; }
        .section { padding: 96px 24px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .section-title { text-align: center; margin-bottom: 64px; }
        .section-subtitle { color: #C9A96E; text-transform: uppercase; letter-spacing: 0.3em; font-size: 0.75rem; font-weight: 500; margin-bottom: 16px; }
        .section-heading { font-size: 2rem; font-weight: 300; color: #5C1A33; margin-bottom: 16px; }
        .divider { width: 48px; height: 1px; background: #C9A96E; margin: 0 auto 24px; }
        .section-description { color: rgba(92, 26, 51, 0.5); font-size: 0.875rem; max-width: 500px; margin: 24px auto 0; }
        .grid { display: grid; gap: 24px; }
        .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .grid-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
        .btn-primary { display: inline-block; padding: 16px 40px; background: #5C1A33; color: white; text-decoration: none; border-radius: 50px; font-size: 0.875rem; letter-spacing: 0.2em; text-transform: uppercase; transition: all 0.3s; }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 20px 40px rgba(92, 26, 51, 0.2); }
        .hero { min-height: 100vh; background: linear-gradient(to bottom, #FFF5F5, #FCEDF0, #F8D7E0); display: flex; flex-direction: column; }
        .hero-banner { background: #5C1A33; color: white; text-align: center; padding: 16px 24px; }
        .hero-content { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 24px; text-align: center; }
        .hero-title { font-size: 3rem; letter-spacing: 0.15em; font-weight: 300; color: #5C1A33; margin-bottom: 24px; }
        .card { background: white; border: 1px solid #f3f4f6; border-radius: 16px; padding: 32px; transition: all 0.5s; }
        .card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .testimonial-card { background: white; border: 1px solid rgba(252, 237, 240, 0.6); border-radius: 24px; overflow: hidden; }
        .testimonial-img { width: 100%; height: 256px; object-fit: cover; }
        .testimonial-content { padding: 20px; }
        .pricing-card { background: white; border: 1px solid #f3f4f6; border-radius: 24px; padding: 32px; transition: all 0.5s; position: relative; }
        .pricing-card.popular { background: #5C1A33; color: white; transform: scale(1.05); }
        .faq-question { width: 100%; background: rgba(252, 237, 240, 0.2); border: none; padding: 20px; border-radius: 12px; text-align: left; font-size: 0.875rem; cursor: pointer; display: flex; justify-content: space-between; }
        .faq-answer { max-height: 0; overflow: hidden; transition: all 0.3s; padding: 0 20px; }
        .faq-item.active .faq-answer { max-height: 200px; padding: 20px; }
        .footer { background: #5C1A33; color: white; padding: 80px 24px 40px; text-align: center; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate { opacity: 0; }
        .animate.show { animation: fadeInUp 0.7s ease forwards; }
        .animate-fade.show { animation: fadeIn 0.7s ease forwards; }
        .animate-scale.show { animation: scaleIn 0.6s ease forwards; }
        .animate-left.show { animation: slideInLeft 0.6s ease forwards; }
        .animate-right.show { animation: slideInRight 0.6s ease forwards; }
        .btn-primary.pulse-btn { animation: pulse 2s ease-in-out infinite; }
        @media (min-width: 768px) { .hero-title { font-size: 4.5rem; } .section-heading { font-size: 2.5rem; } }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-banner animate-fade"><p>Sangat wet lepas guna..my husben cum kan i dulu then baru dia.. 😍</p></div>
        <div class="hero-content">
            <div style="max-width: 900px;">
                <p class="section-subtitle animate">Intimate Organic Perfume</p>
                <h1 class="hero-title georgia animate">WOOMAN</h1>
                <div class="divider animate"></div>
                <p class="animate" style="color: rgba(92, 26, 51, 0.7); font-size: 1.125rem; margin-bottom: 16px;">Rahsia Intimasi Wanita</p>
                <p class="animate" style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem; max-width: 500px; margin: 0 auto 40px;">Formulasi khas 100% organik membantu mengatasi masalah dalaman dan luaran wanita. Bangkitkan sensasi bersama suami.</p>
                <a href="#order" class="btn-primary pulse-btn animate">🔥 Order Sekarang - Jimat Hingga RM300</a>
            </div>
        </div>
    </section>
    <section id="masalah" class="section" style="background: white;">
        <div class="container">
            <div class="section-title animate">
                <p class="section-subtitle">Masalah Wanita</p>
                <h2 class="section-heading georgia">Sis Ada Masalah Ni Ke?</h2>
                <div class="divider"></div>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; max-width: 700px; margin: 24px auto 0;">Jangan risau, sis bukan sorang. <span style="font-weight: 500; color: #5C1A33;">Ramai wanita hadapi masalah sama.</span> Dah cuba macam-macam tapi masih tak berkesan?</p>
            </div>
            <div class="grid grid-4">
                <div class="card animate"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Mati Putik & Hilang Nafsu</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Hilang ghairah semasa hubungan intim.</p></div>
                <div class="card animate"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Miss V Kering</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Rasa tak selesa, gatal, pedih atau sakit semasa bersama suami.</p></div>
                <div class="card animate"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Selalu Moody & Stress</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Emosi mudah terganggu, malas nak buat kerja.</p></div>
                <div class="card animate"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Sakit Senggugut</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Kerap mengalami sakit di bahagian bawah perut semasa haid.</p></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: linear-gradient(135deg, #5C1A33, #7A2345); text-align: center; padding: 80px 24px;">
        <div class="container">
            <h2 class="georgia" style="color: white; font-size: 2rem; margin-bottom: 16px; font-weight: 300;">Dah Bersedia Untuk Transformasi?</h2>
            <p style="color: rgba(255,255,255,0.8); font-size: 1rem; margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto;">Sertai ribuan wanita Malaysia yang dah rasai perubahan luar biasa. <strong style="color: white;">Jangan tunggu lagi!</strong></p>
            <a href="#order" class="btn-primary" style="background: #C9A96E; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem; padding: 18px 48px;">Order Sekarang - Jimat RM300 <span style="font-size: 1.25rem;">→</span></a>
            <div style="margin-top: 40px; display: flex; flex-wrap: wrap; align-items: center; justify-center; gap: 32px;">
                <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">🛡️</span><span style="color: rgba(255,255,255,0.7); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">100% Selamat</span></div>
                <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">🚚</span><span style="color: rgba(255,255,255,0.7); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">Free Postage</span></div>
                <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">🎁</span><span style="color: rgba(255,255,255,0.7); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">Free Gift</span></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: linear-gradient(to bottom, rgba(252, 237, 240, 0.3), white);">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Kelebihan</p>
                <h2 class="section-heading georgia">Wooman - Penyelesaian Semulajadi</h2>
                <div class="divider"></div>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; max-width: 700px; margin: 24px auto 0;"><span style="font-weight: 500; color: #5C1A33;">100% organik & selamat.</span> Formulasi khas membantu wanita atasi masalah dalaman & luaran secara semulajadi.</p>
            </div>
            <div class="grid grid-4">
                <div class="card" style="text-align: center;"><div style="font-size: 2rem; margin-bottom: 16px;">✨</div><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem;">Stabilkan hormon & tingkatkan mood positif</p></div>
                <div class="card" style="text-align: center;"><div style="font-size: 2rem; margin-bottom: 16px;">💓</div><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem;">Bangkitkan ghairah & lebih bersedia untuk suami</p></div>
                <div class="card" style="text-align: center;"><div style="font-size: 2rem; margin-bottom: 16px;">🌸</div><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem;">Menyah bau kurang menyenangkan, ganti dengan harum</p></div>
                <div class="card" style="text-align: center;"><div style="font-size: 2rem; margin-bottom: 16px;">🛡️</div><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem;">Kurangkan risiko jangkitan bakteria & kulat</p></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: white;">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Pengguna Sebenar</p>
                <h2 class="section-heading georgia">Ribuan Wanita Malaysia Dah Cuba</h2>
                <div class="divider"></div>
            </div>
            <div class="grid grid-3">
                <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"><iframe width="100%" height="250" src="https://www.youtube.com/embed/2n_l-sCKYig" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
                <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"><iframe width="100%" height="250" src="https://www.youtube.com/embed/CbYXGLesKfI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
                <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"><iframe width="100%" height="250" src="https://www.youtube.com/embed/GRKK3RxANS0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
            </div>
            <div style="text-align: center; margin-top: 48px;"><div style="display: inline-flex; align-items: center; gap: 8px; background: white; padding: 12px 24px; border-radius: 50px; border: 1px solid #FCEDF0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);"><span style="font-size: 1.25rem;">👥</span><span style="font-size: 0.875rem; color: #5C1A33; font-weight: 500;">2,847+ pengguna verified di Malaysia</span></div></div>
        </div>
    </section>
    <section class="section" style="background: white;">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Testimoni</p>
                <h2 class="section-heading georgia">Apa Kata Pengguna Kami</h2>
                <div class="divider"></div>
            </div>
            <div class="grid grid-3">
                <div class="testimonial-card">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/803030ad5_IMG_0788.jpg" alt="Testimonial" class="testimonial-img">
                    <div class="testimonial-content"><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem; font-style: italic; margin-bottom: 16px;">"My husben cum kan i dulu then baru dia..im also cum for the 2nd time 😍😍 Stress terus hilang 🥰"</p><p style="color: rgba(92, 26, 51, 0.4); font-size: 0.75rem;">Verified Customer ✓</p></div>
                </div>
                <div class="testimonial-card">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/4977fb901_IMG_0789.jpg" alt="Testimonial" class="testimonial-img">
                    <div class="testimonial-content"><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem; font-style: italic; margin-bottom: 16px;">"Sebelum ni kan pakai thewooman. Tp mywooman ni penangan wetness die teruk gile kottt 😍"</p><p style="color: rgba(92, 26, 51, 0.4); font-size: 0.75rem;">Verified Customer ✓</p></div>
                </div>
                <div class="testimonial-card">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/454b695b8_IMG_0785.jpg" alt="Testimonial" class="testimonial-img">
                    <div class="testimonial-content"><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem; font-style: italic; margin-bottom: 16px;">"After i using MyWooman, mmg WOW 🤩 baru 1st time roll dkt private area!"</p><p style="color: rgba(92, 26, 51, 0.4); font-size: 0.75rem;">Verified Customer ✓</p></div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" style="background: white;">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Kandungan</p>
                <h2 class="section-heading georgia">100% Certified Organic</h2>
                <div class="divider"></div>
                <p class="section-description">Dipilih dengan teliti dari sumber terbaik di seluruh dunia</p>
            </div>
            <div style="text-align: center; margin-bottom: 64px;"><div style="position: relative; display: inline-block; padding: 48px; background: linear-gradient(135deg, #FCEDF0 0%, rgba(248, 215, 224, 0.3) 100%); border-radius: 24px; border: 1px solid rgba(252, 237, 240, 0.4);"><img src="https://intimateperfume.com/wp-content/uploads/2024/11/MW-TW-1-1024x1024-1.png" alt="Wooman Product" style="width: 320px; height: 320px; object-fit: contain; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));"></div></div>
            <div class="grid grid-3">
                <div class="card" style="text-align: center;"><div style="font-size: 2.5rem; margin-bottom: 20px;">🌺</div><p style="color: #C9A96E; font-size: 0.625rem; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 8px;">Afrika</p><h3 style="font-size: 1rem; color: #5C1A33; margin-bottom: 12px; font-weight: 500;">African Pelargonium Graveolens</h3><p style="color: rgba(92, 26, 51, 0.45); font-size: 0.875rem; line-height: 1.6;">Minyak pati organik yang membantu seimbangkan hormon dan menenangkan emosi wanita.</p></div>
                <div class="card" style="text-align: center;"><div style="font-size: 2.5rem; margin-bottom: 20px;">🫒</div><p style="color: #C9A96E; font-size: 0.625rem; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 8px;">Timur Tengah</p><h3 style="font-size: 1rem; color: #5C1A33; margin-bottom: 12px; font-weight: 500;">Middle Eastern Olea Europaea</h3><p style="color: rgba(92, 26, 51, 0.45); font-size: 0.875rem; line-height: 1.6;">Minyak zaitun organik premium yang melembapkan dan menutrisi kulit dari dalam.</p></div>
                <div class="card" style="text-align: center;"><div style="font-size: 2.5rem; margin-bottom: 20px;">🥥</div><p style="color: #C9A96E; font-size: 0.625rem; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 8px;">Filipina</p><h3 style="font-size: 1rem; color: #5C1A33; margin-bottom: 12px; font-weight: 500;">Philippines Coco Nucifera</h3><p style="color: rgba(92, 26, 51, 0.45); font-size: 0.875rem; line-height: 1.6;">Minyak kelapa organik dengan sifat antibakteria semulajadi untuk perlindungan.</p></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: linear-gradient(to bottom, white, rgba(252, 237, 240, 0.2));">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Cara Guna</p>
                <h2 class="section-heading georgia">Pelbagai Kegunaan</h2>
                <div class="divider"></div>
                <p class="section-description">Satu produk, banyak manfaat untuk sis</p>
            </div>
            <div class="grid grid-2">
                <div class="card"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin-bottom: 16px;"><span style="font-size: 1.5rem;">💧</span></div><h3 style="font-size: 1.25rem; color: #5C1A33; margin-bottom: 12px; font-weight: 300;" class="georgia">Miss V Kering</h3><p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; line-height: 1.6;">Roll pada kawasan Miss V dan sebelum bersama untuk mengembalikan kebasahan.</p></div>
                <div class="card"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin-bottom: 16px;"><span style="font-size: 1.5rem;">💓</span></div><h3 style="font-size: 1.25rem; color: #5C1A33; margin-bottom: 12px; font-weight: 300;" class="georgia">Mati Putik & Hilang Nafsu</h3><p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; line-height: 1.6;">Roll setiap hari pada nadi & bahagian uterus (3 jari di bawah pusat). Bantu naikkan mood untuk bersama.</p></div>
                <div class="card"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin-bottom: 16px;"><span style="font-size: 1.5rem;">🌙</span></div><h3 style="font-size: 1.25rem; color: #5C1A33; margin-bottom: 12px; font-weight: 300;" class="georgia">Deep Sleep & Kurangkan Stress</h3><p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; line-height: 1.6;">Roll di bahagian nadi, belakang telinga, belakang leher, dahi & kening. Lakukan kaedah cupping untuk kesan maksimum.</p></div>
                <div class="card"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin-bottom: 16px;"><span style="font-size: 1.5rem;">😊</span></div><h3 style="font-size: 1.25rem; color: #5C1A33; margin-bottom: 12px; font-weight: 300;" class="georgia">Kurangkan Sakit Senggugut</h3><p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; line-height: 1.6;">Roll pada bahagian uterus (anggaran 3 jari di bawah pusat) untuk melegakan kesakitan.</p></div>
                <div class="card"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin-bottom: 16px;"><span style="font-size: 1.5rem;">👶</span></div><h3 style="font-size: 1.25rem; color: #5C1A33; margin-bottom: 12px; font-weight: 300;" class="georgia">Ikhtiar Hamil (TTC)</h3><p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; line-height: 1.6;">Roll setiap hari pada nadi & bahagian uterus. Bantu seimbangkan hormon & pusingan haid.</p></div>
                <div class="card"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin-bottom: 16px;"><span style="font-size: 1.5rem;">✨</span></div><h3 style="font-size: 1.25rem; color: #5C1A33; margin-bottom: 12px; font-weight: 300;" class="georgia">Merawat Wajah & Kulit</h3><p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; line-height: 1.6;">Selepas bersihkan muka, roll pada tapak tangan. Tambah pelembap & sapu pada muka. Sesuai juga untuk eczema & jerawat.</p></div>
            </div>
            <div style="margin-top: 40px; padding: 20px; background: rgba(201, 169, 110, 0.1); border-radius: 12px; border: 1px solid rgba(201, 169, 110, 0.2);"><p style="color: #C9A96E; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; text-align: center;">💡 Tip: Goncang botol sebelum guna untuk hasil optimum</p></div>
        </div>
    </section>
    <section class="section" style="background: linear-gradient(to bottom, white, rgba(252, 237, 240, 0.2));">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Transformasi Sebenar</p>
                <h2 class="section-heading georgia">Hasil Yang Terbukti</h2>
                <div class="divider"></div>
                <p style="color: rgba(92, 26, 51, 0.6); max-width: 700px; margin: 24px auto 0; font-size: 0.875rem;">Ribuan wanita Malaysia dah rasai perubahan hidup dengan Wooman. Ini cerita sebenar mereka.</p>
            </div>
            <div class="grid grid-3" style="margin-bottom: 48px;">
                <div class="card"><div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;"><div style="display: flex; gap: 4px;">⭐⭐⭐⭐⭐</div><span style="background: rgb(240, 253, 244); color: rgb(22, 163, 74); font-size: 0.625rem; padding: 4px 8px; border-radius: 50px; font-weight: 500;">✓ Verified</span></div><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem; line-height: 1.6; font-style: italic; margin-bottom: 24px;">"Miss V kembali basah, hubungan dengan suami makin mesra setiap malam 💕"</p><div style="border-top: 1px solid #FCEDF0; padding-top: 16px; display: flex; justify-content: space-between;"><div><p style="font-size: 0.875rem; font-weight: 500; color: #5C1A33;">Siti, 32 tahun</p><p style="font-size: 0.75rem; color: rgba(92, 26, 51, 0.4);">Kuala Lumpur</p></div><div style="text-align: right;"><p style="font-size: 0.75rem; color: #C9A96E; font-weight: 500;">📈 2 minggu</p></div></div></div>
                <div class="card"><div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;"><div style="display: flex; gap: 4px;">⭐⭐⭐⭐⭐</div><span style="background: rgb(240, 253, 244); color: rgb(22, 163, 74); font-size: 0.625rem; padding: 4px 8px; border-radius: 50px; font-weight: 500;">✓ Verified</span></div><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem; line-height: 1.6; font-style: italic; margin-bottom: 24px;">"Senggugut berkurang 80%, mood stabil, tidur lena. Life changer!"</p><div style="border-top: 1px solid #FCEDF0; padding-top: 16px; display: flex; justify-content: space-between;"><div><p style="font-size: 0.875rem; font-weight: 500; color: #5C1A33;">Aida, 28 tahun</p><p style="font-size: 0.75rem; color: rgba(92, 26, 51, 0.4);">Johor Bahru</p></div><div style="text-align: right;"><p style="font-size: 0.75rem; color: #C9A96E; font-weight: 500;">📈 1 bulan</p></div></div></div>
                <div class="card"><div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;"><div style="display: flex; gap: 4px;">⭐⭐⭐⭐⭐</div><span style="background: rgb(240, 253, 244); color: rgb(22, 163, 74); font-size: 0.625rem; padding: 4px 8px; border-radius: 50px; font-weight: 500;">✓ Verified</span></div><p style="color: rgba(92, 26, 51, 0.7); font-size: 0.875rem; line-height: 1.6; font-style: italic; margin-bottom: 24px;">"Dari mati putik kepada turn on setiap kali. Suami pun perasan perubahan 🔥"</p><div style="border-top: 1px solid #FCEDF0; padding-top: 16px; display: flex; justify-space-between;"><div><p style="font-size: 0.875rem; font-weight: 500; color: #5C1A33;">Nurul, 35 tahun</p><p style="font-size: 0.75rem; color: rgba(92, 26, 51, 0.4);">Penang</p></div><div style="text-align: right;"><p style="font-size: 0.75rem; color: #C9A96E; font-weight: 500;">📈 3 minggu</p></div></div></div>
            </div>
            <div class="grid grid-2">
                <div style="background: linear-gradient(135deg, #FCEDF0, white); padding: 24px; border-radius: 24px; border: 1px solid rgba(201, 169, 110, 0.2);"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/bf69f65e1_IMG_0795.jpg" alt="Happy Customers" style="width: 100%; height: 192px; object-fit: cover; border-radius: 16px; margin-bottom: 16px;"><div style="display: flex; align-items: center; justify-between;"><div><p style="font-size: 1.5rem; font-weight: bold; color: #5C1A33;">2,847+</p><p style="font-size: 0.875rem; color: rgba(92, 26, 51, 0.6);">Happy Customers</p></div><div style="font-size: 2.5rem;">🥰</div></div></div>
                <div style="background: linear-gradient(135deg, rgb(240, 253, 244), white); padding: 24px; border-radius: 24px; border: 1px solid rgb(187, 247, 208);"><div style="width: 48px; height: 48px; background: rgb(34, 197, 94); border-radius: 50%; display: flex; align-items: center; justify-center; margin-bottom: 12px; color: white; font-weight: bold; font-size: 1.25rem;">98%</div><p style="font-size: 1.125rem; font-weight: 600; color: #5C1A33; margin-bottom: 4px;">Satisfaction Rate</p><p style="font-size: 0.875rem; color: rgba(92, 26, 51, 0.6); margin-bottom: 16px;">Dari ribuan pengguna verified</p><div style="display: flex; gap: 4px;">⭐⭐⭐⭐⭐</div></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: white;">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Sijil & Kelulusan</p>
                <h2 class="section-heading georgia">Disahkan Selamat & Berkualiti</h2>
                <div class="divider"></div>
            </div>
            <div class="grid grid-3" style="margin-bottom: 48px;">
                <div class="card" style="text-align: center;"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin: 0 auto 16px;"><span style="font-size: 1.5rem;">🛡️</span></div><h3 style="font-size: 1rem; color: #5C1A33; margin-bottom: 8px; font-weight: 500;">KKM Approved</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.75rem;">Lulus ujian keselamatan KKM Malaysia</p></div>
                <div class="card" style="text-align: center;"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin: 0 auto 16px;"><span style="font-size: 1.5rem;">🏆</span></div><h3 style="font-size: 1rem; color: #5C1A33; margin-bottom: 8px; font-weight: 500;">Certified Organic</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.75rem;">100% bahan organik yang disahkan</p></div>
                <div class="card" style="text-align: center;"><div style="width: 56px; height: 56px; background: #FCEDF0; border-radius: 50%; display: flex; align-items: center; justify-center; margin: 0 auto 16px;"><span style="font-size: 1.5rem;">✅</span></div><h3 style="font-size: 1rem; color: #5C1A33; margin-bottom: 8px; font-weight: 500;">Halal & Safe</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.75rem;">Selamat untuk kegunaan harian</p></div>
            </div>
            <div class="grid grid-3">
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #FCEDF0;"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/db195df60_IMG_0787.jpg" alt="Certificate 1" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px;"></div>
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #FCEDF0;"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/66ec706b5_IMG_0786.jpg" alt="Certificate 2" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px;"></div>
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #FCEDF0;"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/11a8c1222_IMG_0788.jpg" alt="Certificate 3" style="width: 100%; height: auto; object-fit: contain; border-radius: 8px;"></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: linear-gradient(135deg, #5C1A33, #7A2345); text-align: center; padding: 80px 24px;">
        <div class="container">
            <h2 class="georgia" style="color: white; font-size: 2rem; margin-bottom: 16px; font-weight: 300;">Ready Untuk Perubahan?</h2>
            <p style="color: rgba(255,255,255,0.8); font-size: 1rem; margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto;">Order sekarang dan rasai perbezaan dalam <strong style="color: white;">masa 24 jam pertama!</strong></p>
            <a href="#order" class="btn-primary" style="background: #C9A96E; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem; padding: 18px 48px;">Order Sekarang - Free Gift <span style="font-size: 1.25rem;">→</span></a>
            <div style="margin-top: 40px; display: flex; flex-wrap: wrap; align-items: center; justify-center; gap: 32px;">
                <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">🛡️</span><span style="color: rgba(255,255,255,0.7); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">100% Selamat</span></div>
                <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">🚚</span><span style="color: rgba(255,255,255,0.7); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">Free Postage</span></div>
                <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">🎁</span><span style="color: rgba(255,255,255,0.7); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">Free Gift</span></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: linear-gradient(to bottom, rgb(240, 253, 244), white);">
        <div class="container">
            <div style="background: linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129)); border-radius: 24px; padding: 56px 40px; text-align: center; color: white; position: relative; overflow: hidden; box-shadow: 0 20px 60px rgba(34, 197, 94, 0.3);"><div style="position: absolute; top: 0; right: 0; width: 256px; height: 256px; background: rgba(255,255,255,0.1); border-radius: 50%; filter: blur(60px);"></div><div style="position: absolute; bottom: 0; left: 0; width: 192px; height: 192px; background: rgba(255,255,255,0.1); border-radius: 50%; filter: blur(60px);"></div><div style="position: relative; z-index: 10;"><div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-center; margin: 0 auto 24px;"><span style="font-size: 2.5rem;">🛡️</span></div><h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 16px;" class="georgia">100% JAMINAN WANG KEMBALI</h2><div style="width: 64px; height: 2px; background: rgba(255,255,255,0.4); margin: 0 auto 24px;"></div><p style="font-size: 1.125rem; margin-bottom: 32px; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.8;">Cuba Wooman selama <strong>30 hari</strong>. Kalau tak puas hati atau tak nampak hasil, kami pulangkan <strong>100% wang sis</strong> tanpa soalan.</p><div class="grid grid-3" style="gap: 24px; margin-top: 40px;"><div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2);"><div style="font-size: 2rem; margin-bottom: 12px;">🔄</div><h3 style="font-weight: 600; margin-bottom: 8px;">30 Hari Cuba</h3><p style="font-size: 0.875rem; opacity: 0.9;">Masa yang cukup untuk rasa kesan penuh produk</p></div><div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2);"><div style="font-size: 2rem; margin-bottom: 12px;">🔒</div><h3 style="font-weight: 600; margin-bottom: 8px;">No Questions Asked</h3><p style="font-size: 0.875rem; opacity: 0.9;">Proses refund mudah dan cepat</p></div><div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.2);"><div style="font-size: 2rem; margin-bottom: 12px;">😊</div><h3 style="font-weight: 600; margin-bottom: 8px;">Zero Risk</h3><p style="font-size: 0.875rem; opacity: 0.9;">Sis tak rugi apa-apa, semua risk on us</p></div></div><div style="margin-top: 40px; padding: 24px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; border: 1px solid rgba(255,255,255,0.2); max-width: 700px; margin-left: auto; margin-right: auto;"><p style="font-size: 0.875rem;"><strong>Mengapa kami berani buat jaminan ini?</strong><br>Sebab kami 100% yakin dengan kualiti Wooman. Ribuan wanita dah buktikan hasilnya. Sekarang giliran sis pula!</p></div></div></div>
        </div>
    </section>
    <section id="order" class="section" style="background: linear-gradient(to bottom, rgba(252, 237, 240, 0.2), white);">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Pakej</p>
                <h2 class="section-heading georgia">Pilih Pakej Terbaik Untuk Sis</h2>
                <div class="divider"></div>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; max-width: 700px; margin: 24px auto 0;"><span style="font-weight: 500; color: #5C1A33;">Free postage seluruh Malaysia.</span> Lebih banyak order, lebih banyak jimat! 💕</p>
            </div>
            <div class="grid grid-3">
                <div class="pricing-card"><h3 style="color: #C9A96E; font-size: 0.875rem; margin-bottom: 8px;">1 Botol</h3><p style="font-size: 2rem; font-weight: 300; margin-bottom: 24px;" class="georgia">RM79</p><ul style="list-style: none; margin-bottom: 32px;"><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ 1x Wooman Perfume</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Free Postage</li></ul><a href="https://intimateperfume.com/#beli" target="_blank" class="btn-primary" style="width: 100%; text-align: center;">Order</a></div>
                <div class="pricing-card"><h3 style="color: #C9A96E; font-size: 0.875rem; margin-bottom: 8px;">2 Botol</h3><p style="font-size: 2rem; font-weight: 300; margin-bottom: 24px;" class="georgia">RM150</p><ul style="list-style: none; margin-bottom: 32px;"><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ 2x Wooman Perfume</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Free Postage</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Jimat RM90</li></ul><a href="https://intimateperfume.com/#beli" target="_blank" class="btn-primary" style="width: 100%; text-align: center;">Order</a></div>
                <div class="pricing-card popular"><div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #C9A96E; padding: 6px 16px; border-radius: 50px; font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.2em;">Popular</div><h3 style="color: #C9A96E; font-size: 0.875rem; margin-bottom: 8px;">3 Botol</h3><p style="font-size: 2rem; font-weight: 300; margin-bottom: 24px;" class="georgia">RM200</p><ul style="list-style: none; margin-bottom: 32px;"><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ 3x Wooman Perfume</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Free Postage</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Free Gift</li></ul><a href="https://intimateperfume.com/#beli" target="_blank" class="btn-primary" style="width: 100%; text-align: center; background: #C9A96E;">Order</a></div>
                <div class="pricing-card"><h3 style="color: #C9A96E; font-size: 0.875rem; margin-bottom: 8px;">5 Botol</h3><p style="font-size: 2rem; font-weight: 300; margin-bottom: 24px;" class="georgia">RM300</p><ul style="list-style: none; margin-bottom: 32px;"><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ 5x Wooman Perfume</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Free Postage</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Free Gift</li><li style="margin-bottom: 12px; font-size: 0.875rem;">✓ Priority Support</li></ul><a href="https://intimateperfume.com/#beli" target="_blank" class="btn-primary" style="width: 100%; text-align: center;">Order</a></div>
            </div>
        </div>
    </section>
    <section class="section" style="background: white;">
        <div class="container" style="max-width: 900px;">
            <div class="section-title">
                <p class="section-subtitle">FAQ</p>
                <h2 class="section-heading georgia">Soalan Lazim</h2>
                <div class="divider"></div>
            </div>
            <div>
                <div class="faq-item"><button class="faq-question" onclick="toggleFAQ(this)"><span>Wooman Perfume ni selamat ke untuk digunakan?</span><span>▼</span></button><div class="faq-answer">Ya, 100% selamat. Wooman Perfume diperbuat daripada bahan-bahan organik yang telah disahkan selamat.</div></div>
                <div class="faq-item" style="margin-top: 12px;"><button class="faq-question" onclick="toggleFAQ(this)"><span>Berapa lama nampak kesan?</span><span>▼</span></button><div class="faq-answer">Kebanyakan pengguna merasai kesan dalam penggunaan pertama terutamanya untuk kegunaan intimasi.</div></div>
                <div class="faq-item" style="margin-top: 12px;"><button class="faq-question" onclick="toggleFAQ(this)"><span>Adakah produk ini ada kelulusan KKM?</span><span>▼</span></button><div class="faq-answer">Ya, produk Wooman telah mendapat kelulusan dan notification daripada KKM Malaysia.</div></div>
            </div>
        </div>
    </section>
    <footer class="footer">
        <h2 class="georgia" style="font-size: 1.875rem; margin-bottom: 32px;">Mulakan Perubahan Hari Ini</h2>
        <a href="https://intimateperfume.com/#beli" target="_blank" class="btn-primary" style="background: #C9A96E;">Order Sekarang</a>
        <p style="margin-top: 40px; color: rgba(255, 255, 255, 0.2); font-size: 0.75rem;">© 2025 Wooman Intimate Perfume</p>
    </footer>
    <div style="position: fixed; bottom: 0; left: 0; right: 0; background: white; border-top: 2px solid #C9A96E; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 -4px 20px rgba(0,0,0,0.1); z-index: 1000;" id="stickyCTA">
        <div>
            <p style="color: #5C1A33; font-weight: 600; font-size: 0.875rem; margin-bottom: 4px;">Wooman Perfume</p>
            <div style="display: flex; gap: 4px;">⭐⭐⭐⭐⭐ <span style="color: rgba(92,26,51,0.6); font-size: 0.75rem; margin-left: 8px;">2,847+ reviews</span></div>
        </div>
        <a href="#order" class="btn-primary" style="padding: 12px 32px; font-size: 0.875rem; white-space: nowrap;">Order Sekarang</a>
    </div>
    <script>
        function toggleFAQ(button) { const item = button.parentElement; const isActive = item.classList.contains('active'); document.querySelectorAll('.faq-item').forEach(faq => { faq.classList.remove('active'); }); if (!isActive) { item.classList.add('active'); } }
        document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); });
        window.addEventListener('scroll', function() { const sticky = document.getElementById('stickyCTA'); if (window.scrollY > 500) { sticky.style.display = 'flex'; } else { sticky.style.display = 'none'; } });
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(function() { entry.target.classList.add('show'); }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() { document.querySelectorAll('.hero .animate, .hero .animate-fade').forEach(function(el) { el.classList.add('show'); }); }, 100);
            document.querySelectorAll('.section .animate, .section .animate-scale, .section .animate-left, .section .animate-right, .section .card').forEach(function(el) { observer.observe(el); });
        });
    </script>
</body>
</html>`;
  };

  const handleExport = () => {
    const htmlContent = getHTMLContent();
    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wooman-landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const htmlContent = getHTMLContent();
    navigator.clipboard.writeText(htmlContent).then(() => {
      toast.success('HTML code copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy HTML code');
    });
  };

  const handleExportJSON = () => {
    const elementorJSON = {
      version: "0.4",
      title: "Wooman Landing Page",
      type: "page",
      content: [
        {
          id: "wooman-section",
          elType: "section",
          elements: [
            {
              id: "wooman-column",
              elType: "column",
              elements: [
                {
                  id: "wooman-html",
                  elType: "widget",
                  widgetType: "html",
                  settings: {
                    html: getHTMLContent(),
                    _element_id: "wooman-landing"
                  }
                }
              ]
            }
          ]
        }
      ],
      page_settings: {
        template: "elementor_canvas",
        post_title: "Wooman - Intimate Organic Perfume",
        post_status: "publish"
      },
      instructions: {
        step1: "Install Elementor plugin di WordPress",
        step2: "Go to Pages > Add New",
        step3: "Edit with Elementor",
        step4: "Klik icon '⚙️' (settings) > Import Template",
        step5: "Upload file JSON ini",
        step6: "Insert dan publish",
        note: "Atau copy HTML dari field 'content[0].elements[0].elements[0].settings.html' dan paste dalam HTML widget"
      }
    };

    const blob = new Blob([JSON.stringify(elementorJSON, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wooman-elementor-export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Elementor JSON downloaded!');
  };

  return (
    <div className="fixed bottom-24 right-6 md:right-8 z-40 flex flex-col gap-3">
      <button
        onClick={handleCopy}
        className="w-14 h-14 bg-[#C9A96E] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#B8963D] transition-all duration-300 hover:scale-110 group"
        title="Copy HTML Code"
      >
        <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={handleExport}
        className="w-14 h-14 bg-[#5C1A33] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#7A2345] transition-all duration-300 hover:scale-110 group"
        title="Download HTML File"
      >
        <Download className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </div>
  );
}