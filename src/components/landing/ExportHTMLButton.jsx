import React from "react";
import { Download, Copy } from "lucide-react";
import { toast } from "sonner";

export default function ExportHTMLButton() {
  const getHTMLContent = () => {
    return `<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wooman - Intimate Organic Perfume</title>
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
        @media (min-width: 768px) { .hero-title { font-size: 4.5rem; } .section-heading { font-size: 2.5rem; } }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-banner"><p>Sangat wet lepas guna..my husben cum kan i dulu then baru dia.. 😍</p></div>
        <div class="hero-content">
            <div style="max-width: 900px;">
                <p class="section-subtitle">Intimate Organic Perfume</p>
                <h1 class="hero-title georgia">WOOMAN</h1>
                <div class="divider"></div>
                <p style="color: rgba(92, 26, 51, 0.7); font-size: 1.125rem; margin-bottom: 16px;">Rahsia Intimasi Wanita</p>
                <p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem; max-width: 500px; margin: 0 auto 40px;">Formulasi khas 100% organik membantu mengatasi masalah dalaman dan luaran wanita. Bangkitkan sensasi bersama suami.</p>
                <a href="#order" class="btn-primary">🔥 Order Sekarang - Jimat Hingga RM300</a>
            </div>
        </div>
    </section>
    <section id="masalah" class="section" style="background: white;">
        <div class="container">
            <div class="section-title">
                <p class="section-subtitle">Masalah Wanita</p>
                <h2 class="section-heading georgia">Sis Ada Masalah Ni Ke?</h2>
                <div class="divider"></div>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 0.875rem; max-width: 700px; margin: 24px auto 0;">Jangan risau, sis bukan sorang. <span style="font-weight: 500; color: #5C1A33;">Ramai wanita hadapi masalah sama.</span> Dah cuba macam-macam tapi masih tak berkesan?</p>
            </div>
            <div class="grid grid-4">
                <div class="card"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Mati Putik & Hilang Nafsu</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Hilang ghairah semasa hubungan intim.</p></div>
                <div class="card"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Miss V Kering</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Rasa tak selesa, gatal, pedih atau sakit semasa bersama suami.</p></div>
                <div class="card"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Selalu Moody & Stress</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Emosi mudah terganggu, malas nak buat kerja.</p></div>
                <div class="card"><h3 style="font-size: 1.125rem; margin-bottom: 12px;">Sakit Senggugut</h3><p style="color: rgba(92, 26, 51, 0.5); font-size: 0.875rem;">Kerap mengalami sakit di bahagian bawah perut semasa haid.</p></div>
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
    <script>
        function toggleFAQ(button) { const item = button.parentElement; const isActive = item.classList.contains('active'); document.querySelectorAll('.faq-item').forEach(faq => { faq.classList.remove('active'); }); if (!isActive) { item.classList.add('active'); } }
        document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); });
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