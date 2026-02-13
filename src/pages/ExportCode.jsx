import React, { useState } from "react";
import { Copy, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExportCode() {
  const [copied, setCopied] = useState(false);

  const htmlCode = `<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WOOMAN - Intimate Perfume untuk Wanita Malaysia</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', system-ui, sans-serif;
            background: white;
            color: #5C1A33;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }
        
        /* Hero Section */
        #hero {
            position: relative;
            min-height: 100vh;
            background: linear-gradient(135deg, #FCEDF0 0%, #F8D7E0 50%, #FCEDF0 100%);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* Floating Petals Animation */
        .petal {
            position: absolute;
            border-radius: 50% 0 50% 0;
            opacity: 0.15;
            pointer-events: none;
        }
        
        @keyframes float1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.1; }
            50% { transform: translate(30px, -40px) rotate(180deg); opacity: 0.2; }
        }
        
        @keyframes float2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
            50% { transform: translate(-40px, 50px) rotate(-180deg); opacity: 0.25; }
        }
        
        @keyframes float3 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.12; }
            50% { transform: translate(50px, 30px) rotate(270deg); opacity: 0.22; }
        }
        
        .petal-1 { width: 120px; height: 120px; background: #C9A96E; top: 10%; left: 5%; animation: float1 20s infinite ease-in-out; }
        .petal-2 { width: 80px; height: 80px; background: #5C1A33; top: 60%; left: 10%; animation: float2 25s infinite ease-in-out; }
        .petal-3 { width: 100px; height: 100px; background: #C9A96E; top: 30%; right: 8%; animation: float3 22s infinite ease-in-out; }
        .petal-4 { width: 90px; height: 90px; background: #5C1A33; bottom: 15%; right: 15%; animation: float1 28s infinite ease-in-out; }
        .petal-5 { width: 70px; height: 70px; background: #C9A96E; top: 75%; left: 70%; animation: float2 18s infinite ease-in-out; }
        .petal-6 { width: 110px; height: 110px; background: #5C1A33; top: 20%; left: 65%; animation: float3 24s infinite ease-in-out; }
        
        .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 60px 0;
        }
        
        .testimonial-banner {
            background: white;
            padding: 12px 24px;
            border-radius: 50px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 40px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .hero-title {
            font-family: 'Georgia', serif;
            font-size: clamp(2.5rem, 10vw, 7rem);
            font-weight: 300;
            letter-spacing: 0.1em;
            color: #5C1A33;
            margin-bottom: 24px;
        }
        
        @media (min-width: 640px) {
            .hero-title {
                letter-spacing: 0.15em;
            }
        }
        
        .hero-tagline {
            color: #C9A96E;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 24px;
        }
        
        .hero-desc {
            font-size: 18px;
            color: rgba(92, 26, 51, 0.7);
            max-width: 600px;
            margin: 0 auto 40px;
            line-height: 1.8;
        }
        
        .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            justify-content: center;
            align-items: stretch;
            margin-bottom: 32px;
            padding: 0 16px;
        }
        
        @media (min-width: 640px) {
            .cta-buttons {
                flex-direction: row;
                gap: 16px;
                align-items: center;
                margin-bottom: 40px;
            }
            
            .cta-buttons .btn {
                width: auto;
            }
        }
        
        .cta-buttons .btn {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
        }
        
        .btn {
            padding: 14px 24px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 15px;
            min-height: 48px;
            touch-action: manipulation;
        }
        
        @media (min-width: 640px) {
            .btn {
                padding: 16px 40px;
                font-size: 16px;
            }
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #5C1A33 0%, #8B2E54 100%);
            color: white;
            box-shadow: 0 4px 20px rgba(92, 26, 51, 0.3);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(92, 26, 51, 0.4);
        }
        
        .btn-secondary {
            background: white;
            color: #5C1A33;
            border: 2px solid #5C1A33;
        }
        
        .btn-secondary:hover {
            background: #5C1A33;
            color: white;
        }
        
        section {
            padding: 80px 0;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .section-label {
            color: #C9A96E;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            font-size: 11px;
            font-weight: 500;
            margin-bottom: 16px;
        }
        
        .section-title {
            font-family: 'Georgia', serif;
            font-size: clamp(2rem, 5vw, 2.5rem);
            font-weight: 300;
            color: #5C1A33;
            margin-bottom: 16px;
        }
        
        .section-divider {
            width: 48px;
            height: 1px;
            background: #C9A96E;
            margin: 0 auto 24px;
        }
        
        .problems-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
        }
        
        .problem-card {
            background: white;
            border-radius: 24px;
            padding: 32px;
            border: 1px solid rgba(252, 237, 240, 0.6);
            transition: all 0.3s;
        }
        
        .problem-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }
        
        .problem-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 24px;
        }
        
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .benefit-card {
            background: linear-gradient(135deg, rgba(252, 237, 240, 0.4) 0%, white 100%);
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 20px;
            padding: 24px;
            text-align: center;
        }
        
        .video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
        }
        
        .video-wrapper {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }
        
        .video-wrapper iframe {
            width: 100%;
            aspect-ratio: 16/9;
        }
        
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
        }
        
        .testimonial-card {
            background: white;
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 20px;
            padding: 24px;
        }
        
        .testimonial-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }
        
        .testimonial-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .stars {
            display: flex;
            gap: 4px;
            margin-bottom: 8px;
        }
        
        .star {
            color: #C9A96E;
            font-size: 14px;
        }
        
        .usage-tabs {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 40px;
        }
        
        .usage-tab {
            background: white;
            border: 2px solid rgba(252, 237, 240, 0.6);
            padding: 12px 24px;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 14px;
            font-weight: 500;
            color: #5C1A33;
        }
        
        .usage-tab:hover {
            border-color: #C9A96E;
        }
        
        .usage-tab.active {
            background: linear-gradient(135deg, #5C1A33 0%, #8B2E54 100%);
            color: white;
            border-color: transparent;
        }
        
        .usage-content {
            display: none;
            text-align: center;
            padding: 40px;
            background: linear-gradient(135deg, rgba(252, 237, 240, 0.3) 0%, white 100%);
            border-radius: 24px;
            border: 1px solid rgba(252, 237, 240, 0.6);
        }
        
        .usage-content.active {
            display: block;
            animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .usage-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .ingredients-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
        }
        
        .ingredient-card {
            background: linear-gradient(135deg, rgba(252, 237, 240, 0.4) 0%, white 100%);
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 20px;
            padding: 32px;
            text-align: center;
            transition: all 0.3s;
        }
        
        .ingredient-card:hover {
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }
        
        .ingredient-emoji {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .product-showcase {
            text-align: center;
            margin: 60px 0;
            position: relative;
        }
        
        .product-showcase::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to right, rgba(252, 237, 240, 0.3), rgba(248, 215, 224, 0.2), rgba(252, 237, 240, 0.3));
            border-radius: 24px;
            filter: blur(60px);
        }
        
        .product-image {
            max-width: 400px;
            height: auto;
            position: relative;
            z-index: 1;
        }
        
        .results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
        }
        
        .result-card {
            background: white;
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 24px;
            padding: 32px;
        }
        
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .pricing-card {
            background: white;
            border: 2px solid rgba(252, 237, 240, 0.6);
            border-radius: 24px;
            padding: 32px;
            text-align: center;
            position: relative;
            transition: all 0.3s;
        }
        
        .pricing-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 50px rgba(0,0,0,0.12);
        }
        
        .pricing-card.popular {
            border-color: #C9A96E;
            border-width: 3px;
        }
        
        .popular-badge {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #C9A96E 0%, #D4B883 100%);
            color: white;
            padding: 6px 20px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        
        .package-name {
            font-size: 24px;
            font-weight: 600;
            color: #5C1A33;
            margin-bottom: 12px;
        }
        
        .package-price {
            font-size: 48px;
            font-weight: 700;
            color: #5C1A33;
            margin-bottom: 8px;
        }
        
        .package-original {
            text-decoration: line-through;
            color: rgba(92, 26, 51, 0.4);
            font-size: 18px;
            margin-bottom: 20px;
        }
        
        .package-features {
            list-style: none;
            margin: 24px 0;
            text-align: left;
        }
        
        .package-features li {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
        }
        
        .faq-list {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .faq-item {
            background: white;
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 16px;
            margin-bottom: 16px;
            overflow: hidden;
        }
        
        .faq-question {
            width: 100%;
            padding: 20px 24px;
            text-align: left;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            color: #5C1A33;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .faq-question:hover {
            background: rgba(252, 237, 240, 0.3);
        }
        
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            padding: 0 24px;
        }
        
        .faq-answer.open {
            max-height: 500px;
            padding: 0 24px 20px;
        }
        
        .faq-icon {
            transition: transform 0.3s;
        }
        
        .faq-question.open .faq-icon {
            transform: rotate(180deg);
        }
        
        .guarantee-box {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            border-radius: 24px;
            padding: 60px 40px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .guarantee-box::before,
        .guarantee-box::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            filter: blur(60px);
        }
        
        .guarantee-box::before {
            width: 256px;
            height: 256px;
            top: 0;
            right: 0;
        }
        
        .guarantee-box::after {
            width: 192px;
            height: 192px;
            bottom: 0;
            left: 0;
        }
        
        .guarantee-icon {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
        }
        
        .guarantee-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
            margin-top: 40px;
        }
        
        .guarantee-feature {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 24px;
        }
        
        footer {
            background: #1a1a1a;
            color: white;
            padding: 60px 0 30px;
        }
        
        .footer-cta {
            background: linear-gradient(135deg, #5C1A33 0%, #8B2E54 100%);
            border-radius: 24px;
            padding: 60px 40px;
            text-align: center;
            margin-bottom: 60px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.6);
        }
        
        @media (max-width: 768px) {
            body {
                font-size: 14px;
            }
            
            .hero-title {
                font-size: 2.5rem;
            }
            
            section {
                padding: 48px 0;
            }
            
            .container {
                padding: 0 16px;
            }
            
            .section-title {
                font-size: 1.75rem;
            }
            
            .usage-tabs {
                justify-content: flex-start;
                overflow-x: auto;
                padding-bottom: 10px;
                -webkit-overflow-scrolling: touch;
            }
            
            .usage-tab {
                white-space: nowrap;
                flex-shrink: 0;
            }
            
            .problem-card,
            .benefit-card,
            .testimonial-card,
            .ingredient-card,
            .result-card {
                padding: 24px;
            }
            
            .pricing-card {
                padding: 24px;
            }
            
            .package-price {
                font-size: 36px;
            }
            
            .hero-content {
                padding: 40px 0;
            }
            
            .testimonial-banner {
                padding: 10px 16px;
                font-size: 12px;
            }
            
            .hero-desc {
                font-size: 15px;
            }
            
            .guarantee-box {
                padding: 40px 24px;
            }
            
            .guarantee-box h2 {
                font-size: 24px;
            }
            
            .footer-cta {
                padding: 40px 24px;
            }
            
            .footer-cta h2 {
                font-size: 24px;
            }
        }
        
        @media (max-width: 480px) {
            .hero-title {
                font-size: 2rem;
                letter-spacing: 0.05em;
            }
            
            .section-title {
                font-size: 1.5rem;
            }
            
            .problems-grid,
            .benefits-grid,
            .video-grid,
            .testimonials-grid,
            .ingredients-grid,
            .results-grid {
                grid-template-columns: 1fr;
            }
            
            .pricing-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

<section id="hero">
    <div class="petal petal-1"></div>
    <div class="petal petal-2"></div>
    <div class="petal petal-3"></div>
    <div class="petal petal-4"></div>
    <div class="petal petal-5"></div>
    <div class="petal petal-6"></div>
    
    <div class="hero-content">
        <div class="testimonial-banner">
            <span style="font-size: 12px;">⭐⭐⭐⭐⭐</span>
            <span style="color: #5C1A33; font-weight: 500; font-size: 12px;">"Suami cakap lain sekarang..."</span>
        </div>
        
        <h1 class="hero-title">WOOMAN</h1>
        <p class="hero-tagline">Intimate Perfume Organik</p>
        <p class="hero-desc">
            Minyak wangi intim 100% organik yang bantu sis atasi masalah Miss V kering, 
            mati putik, senggugut teruk & keputihan. Natural, selamat, terbukti berkesan.
        </p>
        
        <div class="cta-buttons">
            <a href="#pricing" class="btn btn-primary">
                🛒 Order Sekarang - Disc 40%
            </a>
            <a href="#benefits" class="btn btn-secondary">
                ✨ Lihat Manfaat
            </a>
        </div>
        
        <div style="margin-top: 32px; color: rgba(92, 26, 51, 0.6); font-size: 13px;">
            <div style="display: flex; flex-direction: column; gap: 12px; justify-content: center; align-items: center;">
                <div style="display: flex; align-items: center; gap: 8px;">✅ 100% Certified Organic</div>
                <div style="display: flex; align-items: center; gap: 8px;">✅ KKM Approved</div>
                <div style="display: flex; align-items: center; gap: 8px;">✅ 2,847+ Pengguna</div>
            </div>
        </div>
        
        <style>
            @media (min-width: 640px) {
                .hero-content > div:last-child > div {
                    flex-direction: row !important;
                    gap: 40px !important;
                }
            }
        </style>
    </div>
</section>

<section style="background: linear-gradient(180deg, white 0%, rgba(252, 237, 240, 0.2) 100%);">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Masalah Yang Sis Hadapi</p>
            <h2 class="section-title">Sis Rasa Macam Ni Tak?</h2>
            <div class="section-divider"></div>
            <p style="color: rgba(92, 26, 51, 0.6); max-width: 600px; margin: 0 auto;">
                Ramai wanita Malaysia hadapi masalah ini tapi malu nak cakap. You're not alone sis!
            </p>
        </div>
        
        <div class="problems-grid">
            <div class="problem-card">
                <div class="problem-icon" style="background: rgba(239, 68, 68, 0.1);">😔</div>
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Miss V Kering & Sakit</h3>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px; line-height: 1.6;">
                    Masa intimate dengan suami rasa sakit & tak selesa. Rasa macam terpaksa je, takde mood langsung.
                </p>
            </div>
            
            <div class="problem-card">
                <div class="problem-icon" style="background: rgba(251, 146, 60, 0.1);">💔</div>
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Mati Putik</h3>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px; line-height: 1.6;">
                    Suami sentuh pun tak rasa apa-apa. Susah nak turn on, rasa macam hilang sebagai wanita.
                </p>
            </div>
            
            <div class="problem-card">
                <div class="problem-icon" style="background: rgba(168, 85, 247, 0.1);">😰</div>
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Senggugut Teruk</h3>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px; line-height: 1.6;">
                    Period datang memang nightmare. Sakit sangat sampai tak boleh buat kerja, kena MC.
                </p>
            </div>
            
            <div class="problem-card">
                <div class="problem-icon" style="background: rgba(59, 130, 246, 0.1);">😣</div>
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Keputihan & Bau</h3>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px; line-height: 1.6;">
                    Keputihan melampau dengan bau yang membuatkan rasa tak confident bila dekat dengan suami.
                </p>
            </div>
        </div>
    </div>
</section>

<section id="benefits">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Penyelesaian Natural</p>
            <h2 class="section-title">Wooman Untuk Sis</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="benefits-grid">
            <div class="benefit-card">
                <div style="font-size: 40px; margin-bottom: 16px;">💧</div>
                <p style="font-size: 14px; font-weight: 500;">Miss V kembali lembap & sihat</p>
            </div>
            <div class="benefit-card">
                <div style="font-size: 40px; margin-bottom: 16px;">🔥</div>
                <p style="font-size: 14px; font-weight: 500;">Bangkit semula "napsu" yang hilang</p>
            </div>
            <div class="benefit-card">
                <div style="font-size: 40px; margin-bottom: 16px;">😌</div>
                <p style="font-size: 14px; font-weight: 500;">Kurangkan senggugut drastik</p>
            </div>
            <div class="benefit-card">
                <div style="font-size: 40px; margin-bottom: 16px;">✨</div>
                <p style="font-size: 14px; font-weight: 500;">Seimbangkan hormon wanita</p>
            </div>
            <div class="benefit-card">
                <div style="font-size: 40px; margin-bottom: 16px;">🌸</div>
                <p style="font-size: 14px; font-weight: 500;">Hilangkan keputihan & bau</p>
            </div>
            <div class="benefit-card">
                <div style="font-size: 40px; margin-bottom: 16px;">😴</div>
                <p style="font-size: 14px; font-weight: 500;">Tidur lena & mood stabil</p>
            </div>
        </div>
    </div>
</section>

<section style="background: linear-gradient(180deg, white 0%, rgba(252, 237, 240, 0.2) 100%);">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Pengguna Sebenar</p>
            <h2 class="section-title">Ribuan Wanita Malaysia Dah Cuba</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="video-grid">
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/2n_l-sCKYig" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/CbYXGLesKfI" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/GRKK3RxANS0" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-header">
            <p class="section-label">Testimoni Sebenar</p>
            <h2 class="section-title">Apa Kata Mereka</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/bf69f65e1_IMG_0795.jpg" alt="User" class="testimonial-avatar">
                    <div style="flex: 1;">
                        <div class="stars">
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                        </div>
                        <p style="font-weight: 600; font-size: 14px;">Verified Purchase</p>
                    </div>
                </div>
                <p style="font-size: 14px; line-height: 1.6; color: rgba(92, 26, 51, 0.7); font-style: italic;">
                    "Dari mati putik kepada suami sendiri pun pelik kenapa rajin sangat sekarang 😂 
                    Game changer betul! Miss V dah tak kering, mood pun stabil."
                </p>
            </div>
            
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/bf69f65e1_IMG_0795.jpg" alt="User" class="testimonial-avatar">
                    <div style="flex: 1;">
                        <div class="stars">
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                        </div>
                        <p style="font-weight: 600; font-size: 14px;">Verified Purchase</p>
                    </div>
                </div>
                <p style="font-size: 14px; line-height: 1.6; color: rgba(92, 26, 51, 0.7); font-style: italic;">
                    "Senggugut berkurang 80%! Dulu kena MC 2-3 hari, sekarang masih boleh kerja. 
                    Keputihan pun dah takde. Rasa confident balik 💕"
                </p>
            </div>
            
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/bf69f65e1_IMG_0795.jpg" alt="User" class="testimonial-avatar">
                    <div style="flex: 1;">
                        <div class="stars">
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                            <span class="star">⭐</span>
                        </div>
                        <p style="font-weight: 600; font-size: 14px;">Verified Purchase</p>
                    </div>
                </div>
                <p style="font-size: 14px; line-height: 1.6; color: rgba(92, 26, 51, 0.7); font-style: italic;">
                    "Hubungan dengan suami jadi better. Dulu rasa macam terpaksa je, sekarang 
                    anticipate pulak. Turn on balik feeling yang dah lama hilang 🔥"
                </p>
            </div>
        </div>
    </div>
</section>

<section style="background: white;">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Kandungan</p>
            <h2 class="section-title">100% Certified Organic</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="product-showcase">
            <img src="https://intimateperfume.com/wp-content/uploads/2024/11/MW-TW-1-1024x1024-1.png" alt="Wooman Product" class="product-image">
        </div>
        
        <div class="ingredients-grid">
            <div class="ingredient-card">
                <div class="ingredient-emoji">🌺</div>
                <p style="color: #C9A96E; font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 8px;">Afrika</p>
                <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">African Pelargonium Graveolens</h3>
                <p style="color: rgba(92, 26, 51, 0.45); font-size: 14px; line-height: 1.6;">
                    Minyak pati organik yang membantu seimbangkan hormon dan menenangkan emosi wanita.
                </p>
            </div>
            
            <div class="ingredient-card">
                <div class="ingredient-emoji">🫒</div>
                <p style="color: #C9A96E; font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 8px;">Timur Tengah</p>
                <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Middle Eastern Olea Europaea</h3>
                <p style="color: rgba(92, 26, 51, 0.45); font-size: 14px; line-height: 1.6;">
                    Minyak zaitun organik premium yang melembapkan dan menutrisi kulit dari dalam.
                </p>
            </div>
            
            <div class="ingredient-card">
                <div class="ingredient-emoji">🥥</div>
                <p style="color: #C9A96E; font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 8px;">Filipina</p>
                <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Philippines Coco Nucifera</h3>
                <p style="color: rgba(92, 26, 51, 0.45); font-size: 14px; line-height: 1.6;">
                    Minyak kelapa organik dengan sifat antibakteria semulajadi untuk perlindungan.
                </p>
            </div>
        </div>
    </div>
</section>

<section style="background: linear-gradient(180deg, white 0%, rgba(252, 237, 240, 0.2) 100%);">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Pelbagai Kegunaan</p>
            <h2 class="section-title">Lebih Dari Sekadar Perfume</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="usage-tabs">
            <button class="usage-tab active" data-tab="tab1">💧 Miss V Kering</button>
            <button class="usage-tab" data-tab="tab2">🔥 Mati Putik</button>
            <button class="usage-tab" data-tab="tab3">😌 Senggugut</button>
            <button class="usage-tab" data-tab="tab4">😴 Deep Sleep</button>
            <button class="usage-tab" data-tab="tab5">✨ Kulit Berseri</button>
            <button class="usage-tab" data-tab="tab6">🌸 Keputihan</button>
        </div>
        
        <div id="tab1" class="usage-content active">
            <div class="usage-icon">💧</div>
            <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Miss V Kering & Sakit</h3>
            <p style="color: rgba(92, 26, 51, 0.6); line-height: 1.8; max-width: 600px; margin: 0 auto;">
                Sapukan 2-3 titik pada bahagian luar Miss V sebelum intimate. Minyak organik akan melembapkan 
                secara semulajadi, hilangkan kesakitan dan buatkan hubungan jadi lebih selesa & menyeronokkan.
            </p>
        </div>
        
        <div id="tab2" class="usage-content">
            <div class="usage-icon">🔥</div>
            <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Bangkit Semula Napsu (Mati Putik)</h3>
            <p style="color: rgba(92, 26, 51, 0.6); line-height: 1.8; max-width: 600px; margin: 0 auto;">
                Urut 3-4 titik pada Miss V & perut bawah sebelum tidur. Aromaterapi organik akan bantu 
                seimbangkan hormon dan bangkitkan semula sensitiviti yang hilang. Dalam 2-3 minggu, 
                rasa berubah drastik!
            </p>
        </div>
        
        <div id="tab3" class="usage-content">
            <div class="usage-icon">😌</div>
            <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Kurangkan Senggugut Period</h3>
            <p style="color: rgba(92, 26, 51, 0.6); line-height: 1.8; max-width: 600px; margin: 0 auto;">
                5 hari sebelum period, urut 4-5 titik pada perut bawah setiap malam. Minyak akan bantu 
                relax muscle dan kurangkan inflammation. Senggugut berkurang 60-80%, tak perlu MC lagi!
            </p>
        </div>
        
        <div id="tab4" class="usage-content">
            <div class="usage-icon">😴</div>
            <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Deep Sleep & Kurang Stress</h3>
            <p style="color: rgba(92, 26, 51, 0.6); line-height: 1.8; max-width: 600px; margin: 0 auto;">
                Sapukan 2-3 titik pada leher & pergelangan tangan sebelum tidur. Aroma lavender & rose 
                semulajadi akan tenangkan minda, hilangkan anxiety dan buatkan tidur lena sepanjang malam.
            </p>
        </div>
        
        <div id="tab5" class="usage-content">
            <div class="usage-icon">✨</div>
            <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Merawat Wajah & Kulit</h3>
            <p style="color: rgba(92, 26, 51, 0.6); line-height: 1.8; max-width: 600px; margin: 0 auto;">
                Campurkan 1-2 titik dengan moisturizer malam. Organic oils kaya vitamin E akan nourish kulit, 
                kurangkan kedut halus dan buatkan kulit nampak glowing & sihat dari dalam.
            </p>
        </div>
        
        <div id="tab6" class="usage-content">
            <div class="usage-icon">🌸</div>
            <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Reduce Keputihan Melampau</h3>
            <p style="color: rgba(92, 26, 51, 0.6); line-height: 1.8; max-width: 600px; margin: 0 auto;">
                Sapukan 2-3 titik pada bahagian luar Miss V selepas mandi. Antibacterial properties semulajadi 
                akan seimbangkan pH, kurangkan keputihan & hilangkan bau. Rasa fresh & confident sepanjang hari!
            </p>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="section-header">
            <p class="section-label">Transformasi Sebenar</p>
            <h2 class="section-title">Hasil Yang Terbukti</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="results-grid">
            <div class="result-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
                    <div class="stars">
                        <span class="star">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div style="background: #22c55e; color: white; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: 600;">
                        ✓ Verified
                    </div>
                </div>
                <p style="font-size: 14px; line-height: 1.6; color: rgba(92, 26, 51, 0.7); font-style: italic; margin-bottom: 20px;">
                    "Miss V kembali basah, hubungan dengan suami makin mesra setiap malam 💕"
                </p>
                <div style="border-top: 1px solid rgba(252, 237, 240, 0.6); padding-top: 16px;">
                    <p style="font-weight: 600; font-size: 14px;">Siti, 32 tahun - Kuala Lumpur</p>
                    <p style="font-size: 12px; color: #C9A96E; font-weight: 600;">2 minggu</p>
                </div>
            </div>
            
            <div class="result-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
                    <div class="stars">
                        <span class="star">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div style="background: #22c55e; color: white; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: 600;">
                        ✓ Verified
                    </div>
                </div>
                <p style="font-size: 14px; line-height: 1.6; color: rgba(92, 26, 51, 0.7); font-style: italic; margin-bottom: 20px;">
                    "Senggugut berkurang 80%, mood stabil, tidur lena. Life changer!"
                </p>
                <div style="border-top: 1px solid rgba(252, 237, 240, 0.6); padding-top: 16px;">
                    <p style="font-weight: 600; font-size: 14px;">Aida, 28 tahun - Johor Bahru</p>
                    <p style="font-size: 12px; color: #C9A96E; font-weight: 600;">1 bulan</p>
                </div>
            </div>
            
            <div class="result-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
                    <div class="stars">
                        <span class="star">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div style="background: #22c55e; color: white; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: 600;">
                        ✓ Verified
                    </div>
                </div>
                <p style="font-size: 14px; line-height: 1.6; color: rgba(92, 26, 51, 0.7); font-style: italic; margin-bottom: 20px;">
                    "Dari mati putik kepada turn on setiap kali. Suami pun perasan perubahan 🔥"
                </p>
                <div style="border-top: 1px solid rgba(252, 237, 240, 0.6); padding-top: 16px;">
                    <p style="font-weight: 600; font-size: 14px;">Nurul, 35 tahun - Penang</p>
                    <p style="font-size: 12px; color: #C9A96E; font-weight: 600;">3 minggu</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section style="background: linear-gradient(180deg, rgba(252, 237, 240, 0.2) 0%, white 100%);">
    <div class="container">
        <div class="guarantee-box">
            <div style="position: relative; z-index: 10;">
                <div class="guarantee-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="m9 12 2 2 4-4"/>
                    </svg>
                </div>
                
                <h2 style="font-family: 'Georgia', serif; font-size: 36px; margin-bottom: 16px;">
                    100% JAMINAN WANG KEMBALI
                </h2>
                
                <div style="width: 64px; height: 2px; background: rgba(255, 255, 255, 0.4); margin: 0 auto 24px;"></div>
                
                <p style="font-size: 18px; margin-bottom: 32px; opacity: 0.9; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.8;">
                    Cuba Wooman selama <strong>30 hari</strong>. Kalau tak puas hati atau tak nampak hasil, 
                    kami pulangkan <strong>100% wang sis</strong> tanpa soalan.
                </p>
                
                <div class="guarantee-features">
                    <div class="guarantee-feature">
                        <div style="font-size: 32px; margin-bottom: 12px;">🔄</div>
                        <h3 style="font-weight: 600; margin-bottom: 8px;">30 Hari Cuba</h3>
                        <p style="font-size: 14px; opacity: 0.8;">Masa yang cukup untuk rasa kesan penuh produk</p>
                    </div>
                    
                    <div class="guarantee-feature">
                        <div style="font-size: 32px; margin-bottom: 12px;">🔒</div>
                        <h3 style="font-weight: 600; margin-bottom: 8px;">No Questions Asked</h3>
                        <p style="font-size: 14px; opacity: 0.8;">Proses refund mudah dan cepat</p>
                    </div>
                    
                    <div class="guarantee-feature">
                        <div style="font-size: 32px; margin-bottom: 12px;">😊</div>
                        <h3 style="font-weight: 600; margin-bottom: 8px;">Zero Risk</h3>
                        <p style="font-size: 14px; opacity: 0.8;">Sis tak rugi apa-apa, semua risk on us</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="pricing">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Pakej Istimewa</p>
            <h2 class="section-title">Pilih Pakej Sis</h2>
            <div class="section-divider"></div>
            <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px;">
                🔥 Diskaun 40% - Tawaran Terhad!
            </p>
        </div>
        
        <div class="pricing-grid">
            <div class="pricing-card">
                <h3 class="package-name">CUBE SATU</h3>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px; margin-bottom: 20px;">1 botol (10ml)</p>
                <div class="package-price">RM119</div>
                <div class="package-original">RM199</div>
                
                <ul class="package-features">
                    <li>✅ 1 botol Wooman (10ml)</li>
                    <li>✅ Tahan 2-3 bulan</li>
                    <li>✅ Free postage</li>
                    <li>✅ 30 hari guarantee</li>
                </ul>
                
                <a href="#order" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 20px;">
                    Order Sekarang
                </a>
            </div>
            
            <div class="pricing-card popular">
                <div class="popular-badge">🔥 Paling Popular</div>
                <h3 class="package-name">CUBE DUA</h3>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px; margin-bottom: 20px;">2 botol (20ml)</p>
                <div class="package-price">RM199</div>
                <div class="package-original">RM398</div>
                
                <ul class="package-features">
                    <li>✅ 2 botol Wooman (20ml)</li>
                    <li>✅ Tahan 4-6 bulan</li>
                    <li>✅ Free postage</li>
                    <li>✅ 30 hari guarantee</li>
                    <li>✅ Free gift mystery</li>
                </ul>
                
                <a href="#order" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 20px;">
                    Order Sekarang
                </a>
            </div>
            
            <div class="pricing-card">
                <h3 class="package-name">CUBE TIGA</h3>
                <p style="color: rgba(92, 26, 51, 0.6); font-size: 14px; margin-bottom: 20px;">3 botol (30ml)</p>
                <div class="package-price">RM269</div>
                <div class="package-original">RM597</div>
                
                <ul class="package-features">
                    <li>✅ 3 botol Wooman (30ml)</li>
                    <li>✅ Tahan 6-9 bulan</li>
                    <li>✅ Free postage</li>
                    <li>✅ 30 hari guarantee</li>
                    <li>✅ Free gift mystery</li>
                    <li>✅ Jimat paling banyak!</li>
                </ul>
                
                <a href="#order" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 20px;">
                    Order Sekarang
                </a>
            </div>
        </div>
    </div>
</section>

<section style="background: linear-gradient(180deg, white 0%, rgba(252, 237, 240, 0.2) 100%);">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Soalan Lazim</p>
            <h2 class="section-title">Ada Soalan?</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="faq-list">
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Selamat ke untuk kulit sensitif?</span>
                    <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                    <p style="color: rgba(92, 26, 51, 0.7); line-height: 1.8;">
                        100% selamat! Wooman diperbuat daripada minyak organik tulen tanpa bahan kimia berbahaya. 
                        Sesuai untuk semua jenis kulit termasuk yang sensitif.
                    </p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Berapa lama nampak hasil?</span>
                    <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                    <p style="color: rgba(92, 26, 51, 0.7); line-height: 1.8;">
                        Kebanyakan pengguna nampak perubahan dalam 1-2 minggu untuk masalah kekeringan & keputihan. 
                        Untuk hasil optimum (hormon balance, mati putik), gunakan konsisten selama 3-4 minggu.
                    </p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Macam mana nak guna?</span>
                    <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                    <p style="color: rgba(92, 26, 51, 0.7); line-height: 1.8;">
                        Bergantung kepada masalah - Miss V kering: 2-3 titik sebelum intimate, 
                        Senggugut: Urut perut bawah 5 hari sebelum period, 
                        Mati putik: Urut Miss V & perut setiap malam, 
                        Sleep: Sapukan leher & pergelangan tangan
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <div class="footer-cta">
            <h2 style="font-family: 'Georgia', serif; font-size: 32px; color: white; margin-bottom: 16px;">
                Ready Untuk Jadi Confident Lagi Sis?
            </h2>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin-bottom: 32px;">
                Join 2,847+ wanita Malaysia yang dah transform hidup mereka dengan Wooman
            </p>
            <a href="#pricing" class="btn btn-primary" style="background: white; color: #5C1A33;">
                🛒 Order Sekarang - Disc 40%
            </a>
        </div>
        
        <div class="footer-bottom">
            <p style="font-size: 14px;">
                © 2024 Wooman. All rights reserved. Made with ❤️ for Malaysian women.
            </p>
        </div>
    </div>
</footer>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.usage-tab');
    const contents = document.querySelectorAll('.usage-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const targetId = this.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isOpen = button.classList.contains('open');
    
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('open');
        q.nextElementSibling.classList.remove('open');
    });
    
    if (!isOpen) {
        button.classList.add('open');
        answer.classList.add('open');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
</script>

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
    a.download = 'wooman-landing.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Export HTML - Wooman Landing Page
          </h1>
          <p className="text-gray-600 mb-6">
            Complete HTML dengan interactive JavaScript & CSS animations - ready untuk paste dalam Elementor
          </p>
          
          <div className="flex gap-4">
            <Button onClick={copyToClipboard} className="flex items-center gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </Button>
            
            <Button onClick={downloadHTML} variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download HTML
            </Button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 relative">
          <Button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700"
            size="sm"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
          
          <pre className="text-sm text-gray-100 overflow-auto max-h-[600px]">
            <code>{htmlCode}</code>
          </pre>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-2">📋 Cara Guna:</h3>
          <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
            <li>Klik "Copy Code" atau "Download HTML"</li>
            <li>Buka Elementor page editor di WordPress</li>
            <li>Drag "HTML" widget ke page</li>
            <li>Paste code ni dalam HTML widget</li>
            <li>Publish - DONE! ✅</li>
          </ol>
        </div>
      </div>
    </div>
  );
}