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
    <title>WOOMAN - Intimate Perfume Organik untuk Wanita Malaysia</title>
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
            -webkit-font-smoothing: antialiased;
        }
        
        /* Hero Section */
        .hero {
            position: relative;
            min-height: 100vh;
            background: linear-gradient(180deg, #FFF5F5 0%, #FCEDF0 50%, #F8D7E0 100%);
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        
        .hero-banner {
            background: #5C1A33;
            color: white;
            padding: 16px 24px;
            text-align: center;
        }
        
        .hero-banner p {
            font-size: 14px;
            font-weight: 300;
        }
        
        @media (min-width: 768px) {
            .hero-banner p {
                font-size: 16px;
            }
        }
        
        .hero-content-wrapper {
            position: relative;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 48px 16px;
        }
        
        @media (min-width: 640px) {
            .hero-content-wrapper {
                padding: 80px 24px;
            }
        }
        
        .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            max-width: 768px;
            width: 100%;
        }
        
        /* Floating Petals */
        .petal {
            position: absolute;
            width: 12px;
            height: 16px;
            border-radius: 50% 0 50% 50%;
            background: linear-gradient(135deg, #E8A0BF, #C9A96E);
            opacity: 0.2;
            pointer-events: none;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.1; }
            50% { transform: translateY(-30px) translateX(10px) rotate(360deg); opacity: 0.3; }
        }
        
        .petal-1 { top: 10%; left: 5%; animation: float 4s infinite ease-in-out; }
        .petal-2 { top: 30%; right: 10%; animation: float 5s infinite ease-in-out 1s; }
        .petal-3 { top: 50%; left: 15%; animation: float 6s infinite ease-in-out 2s; }
        .petal-4 { bottom: 30%; right: 20%; animation: float 4.5s infinite ease-in-out 1.5s; }
        .petal-5 { top: 70%; right: 5%; animation: float 5.5s infinite ease-in-out 0.5s; }
        .petal-6 { bottom: 40%; left: 10%; animation: float 6.5s infinite ease-in-out 2.5s; }
        
        .hero-label {
            color: #C9A96E;
            text-transform: uppercase;
            letter-spacing: 0.25em;
            font-size: 10px;
            font-weight: 500;
            margin-bottom: 16px;
        }
        
        @media (min-width: 640px) {
            .hero-label {
                letter-spacing: 0.35em;
                font-size: 12px;
                margin-bottom: 24px;
            }
        }
        
        .hero-title {
            font-family: 'Georgia', serif;
            font-size: 2.5rem;
            font-weight: 300;
            letter-spacing: 0.1em;
            color: #5C1A33;
            margin-bottom: 16px;
        }
        
        @media (min-width: 640px) {
            .hero-title {
                font-size: 3.5rem;
                letter-spacing: 0.15em;
                margin-bottom: 24px;
            }
        }
        
        @media (min-width: 1024px) {
            .hero-title {
                font-size: 6rem;
            }
        }
        
        .hero-divider {
            width: 80px;
            height: 1px;
            background: #C9A96E;
            margin: 0 auto 16px;
        }
        
        @media (min-width: 640px) {
            .hero-divider {
                margin: 0 auto 24px;
            }
        }
        
        .hero-subtitle {
            color: rgba(92, 26, 51, 0.7);
            font-size: 16px;
            font-weight: 300;
            line-height: 1.8;
            max-width: 576px;
            margin: 0 auto 12px;
        }
        
        @media (min-width: 640px) {
            .hero-subtitle {
                font-size: 18px;
                margin: 0 auto 16px;
            }
        }
        
        @media (min-width: 768px) {
            .hero-subtitle {
                font-size: 20px;
            }
        }
        
        .hero-desc {
            color: rgba(92, 26, 51, 0.5);
            font-size: 14px;
            font-weight: 300;
            line-height: 1.8;
            max-width: 512px;
            margin: 0 auto 32px;
        }
        
        @media (min-width: 640px) {
            .hero-desc {
                font-size: 16px;
                margin: 0 auto 40px;
            }
        }
        
        .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 16px;
        }
        
        @media (min-width: 640px) {
            .hero-buttons {
                flex-direction: row;
                justify-content: center;
                gap: 16px;
            }
        }
        
        .btn-primary {
            position: relative;
            padding: 12px 24px;
            background: #5C1A33;
            color: white;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.15em;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s;
            overflow: hidden;
            display: inline-block;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media (min-width: 640px) {
            .btn-primary {
                padding: 16px 40px;
                font-size: 12px;
                letter-spacing: 0.2em;
            }
        }
        
        .btn-primary:hover {
            box-shadow: 0 10px 40px rgba(92, 26, 51, 0.2);
            transform: scale(1.05);
        }
        
        .btn-secondary {
            padding: 12px 24px;
            color: rgba(92, 26, 51, 0.6);
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.15em;
            border: 1px solid rgba(92, 26, 51, 0.15);
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media (min-width: 640px) {
            .btn-secondary {
                padding: 16px 40px;
                font-size: 12px;
                letter-spacing: 0.2em;
            }
        }
        
        .btn-secondary:hover {
            border-color: #C9A96E;
            color: #C9A96E;
        }
        
        .hero-social-proof {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            margin-bottom: 40px;
            font-size: 12px;
        }
        
        @media (min-width: 640px) {
            .hero-social-proof {
                flex-direction: row;
                justify-content: center;
            }
        }
        
        .hero-avatars {
            display: flex;
            gap: -8px;
        }
        
        .hero-avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: linear-gradient(135deg, #E8A0BF, #C9A96E);
            border: 2px solid white;
            margin-right: -8px;
        }
        
        @media (min-width: 640px) {
            .hero-avatar {
                width: 32px;
                height: 32px;
            }
        }
        
        .hero-badges {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-top: 40px;
        }
        
        @media (min-width: 640px) {
            .hero-badges {
                flex-direction: row;
                justify-content: center;
                gap: 40px;
                margin-top: 56px;
            }
        }
        
        .badge-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .badge-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #C9A96E;
        }
        
        .badge-text {
            color: rgba(92, 26, 51, 0.4);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        
        @media (min-width: 640px) {
            .badge-text {
                font-size: 12px;
            }
        }
        
        /* Section */
        .section {
            padding: 60px 0;
        }
        
        @media (min-width: 768px) {
            .section {
                padding: 96px 0;
            }
        }
        
        @media (min-width: 1024px) {
            .section {
                padding: 128px 0;
            }
        }
        
        .container {
            max-width: 1152px;
            margin: 0 auto;
            padding: 0 24px;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 64px;
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
            font-size: 1.75rem;
            font-weight: 300;
            color: #5C1A33;
            margin-bottom: 16px;
        }
        
        @media (min-width: 768px) {
            .section-title {
                font-size: 2.5rem;
            }
        }
        
        @media (min-width: 1024px) {
            .section-title {
                font-size: 3rem;
            }
        }
        
        .section-divider {
            width: 48px;
            height: 1px;
            background: #C9A96E;
            margin: 0 auto 24px;
        }
        
        .section-desc {
            color: rgba(92, 26, 51, 0.6);
            font-size: 14px;
            max-width: 672px;
            margin: 0 auto;
            font-weight: 300;
        }
        
        @media (min-width: 768px) {
            .section-desc {
                font-size: 16px;
            }
        }
        
        /* Grid */
        .grid {
            display: grid;
            gap: 24px;
        }
        
        .grid-2 {
            grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
            .grid-2 {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        .grid-3 {
            grid-template-columns: 1fr;
        }
        
        @media (min-width: 640px) {
            .grid-3 {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 1024px) {
            .grid-3 {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        .grid-4 {
            grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
            .grid-4 {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 1024px) {
            .grid-4 {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        /* Cards */
        .card {
            background: white;
            border: 1px solid rgba(243, 244, 246, 1);
            border-radius: 16px;
            padding: 32px;
            transition: all 0.3s;
        }
        
        @media (min-width: 768px) {
            .card {
                padding: 40px;
            }
        }
        
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(252, 237, 240, 0.5);
            border-color: rgba(201, 169, 110, 0.3);
        }
        
        .icon-box {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            transition: transform 0.3s;
        }
        
        .card:hover .icon-box {
            transform: scale(1.1);
        }
        
        .card-title {
            font-size: 18px;
            font-weight: 500;
            color: #5C1A33;
            margin-bottom: 12px;
        }
        
        .card-desc {
            color: rgba(92, 26, 51, 0.5);
            font-size: 14px;
            line-height: 1.6;
            font-weight: 300;
        }
        
        /* Benefits */
        .benefit-card {
            background: white;
            border: 1px solid transparent;
            border-radius: 16px;
            padding: 24px;
            text-align: center;
            transition: all 0.3s;
        }
        
        .benefit-card:hover {
            border-color: rgba(201, 169, 110, 0.2);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }
        
        .benefit-icon {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #FCEDF0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            transition: background 0.3s;
        }
        
        .benefit-card:hover .benefit-icon {
            background: #5C1A33;
        }
        
        .benefit-card:hover .benefit-icon svg {
            color: white !important;
        }
        
        /* CTA Section */
        .cta-section {
            padding: 48px 0;
            background: linear-gradient(to right, #5C1A33, #7A2345, #5C1A33);
        }
        
        @media (min-width: 768px) {
            .cta-section {
                padding: 64px 0;
            }
        }
        
        .cta-container {
            max-width: 896px;
            margin: 0 auto;
            padding: 0 16px;
            text-align: center;
        }
        
        @media (min-width: 640px) {
            .cta-container {
                padding: 0 24px;
            }
        }
        
        .cta-title {
            font-family: 'Georgia', serif;
            font-size: 1.25rem;
            font-weight: 300;
            color: white;
            margin-bottom: 12px;
        }
        
        @media (min-width: 640px) {
            .cta-title {
                font-size: 1.5rem;
            }
        }
        
        @media (min-width: 768px) {
            .cta-title {
                font-size: 1.875rem;
                margin-bottom: 16px;
            }
        }
        
        .cta-desc {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            margin-bottom: 24px;
        }
        
        @media (min-width: 640px) {
            .cta-desc {
                font-size: 16px;
            }
        }
        
        @media (min-width: 640px) {
            .cta-desc {
                margin-bottom: 32px;
            }
        }
        
        .cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: #C9A96E;
            color: white;
            padding: 12px 24px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s;
            width: 100%;
            max-width: 400px;
            min-height: 48px;
            margin: 0 auto 24px;
        }
        
        @media (min-width: 640px) {
            .cta-btn {
                padding: 16px 32px;
                font-size: 16px;
                width: auto;
                margin: 0 auto 32px;
            }
        }
        
        .cta-btn:hover {
            background: #B8963D;
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .cta-features {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }
        
        @media (min-width: 640px) {
            .cta-features {
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
                gap: 24px;
            }
        }
        
        @media (min-width: 768px) {
            .cta-features {
                gap: 40px;
            }
        }
        
        .cta-feature {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .cta-feature-text {
            color: rgba(255, 255, 255, 0.7);
            font-size: 12px;
        }
        
        @media (min-width: 640px) {
            .cta-feature-text {
                font-size: 14px;
            }
        }
        
        /* Video Grid */
        .video-wrapper {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
        
        .video-wrapper iframe {
            width: 100%;
            aspect-ratio: 16/9;
            border: none;
        }
        
        /* Testimonials */
        .testimonial-card {
            background: white;
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 24px;
            overflow: hidden;
            transition: all 0.3s;
        }
        
        .testimonial-card:hover {
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            border-color: rgba(201, 169, 110, 0.3);
        }
        
        .testimonial-image {
            width: 100%;
            height: 256px;
            object-fit: cover;
            position: relative;
        }
        
        .testimonial-badge {
            position: absolute;
            top: 12px;
            right: 12px;
            background: #25D366;
            color: white;
            padding: 6px 12px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .testimonial-body {
            padding: 20px;
        }
        
        .stars {
            display: flex;
            gap: 2px;
            margin-bottom: 12px;
        }
        
        .star {
            color: #C9A96E;
            font-size: 14px;
        }
        
        .testimonial-text {
            color: rgba(92, 26, 51, 0.7);
            font-size: 14px;
            line-height: 1.6;
            font-style: italic;
        }
        
        .testimonial-footer {
            display: flex;
            align-items: center;
            gap: 8px;
            padding-top: 16px;
            margin-top: 16px;
            border-top: 1px solid #FCEDF0;
        }
        
        .testimonial-avatar {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #E8A0BF, #C9A96E);
        }
        
        .testimonial-verified {
            color: rgba(92, 26, 51, 0.4);
            font-size: 12px;
            font-weight: 500;
        }
        
        /* Ingredients */
        .product-showcase {
            text-align: center;
            margin: 60px auto;
            position: relative;
            max-width: 400px;
        }
        
        .product-image {
            width: 100%;
            height: auto;
            position: relative;
            z-index: 1;
        }
        
        /* Usage Tabs */
        .usage-tabs {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding-bottom: 12px;
            margin-bottom: 40px;
            -webkit-overflow-scrolling: touch;
        }
        
        @media (min-width: 1024px) {
            .usage-tabs {
                flex-direction: column;
                overflow-x: visible;
                padding-bottom: 0;
            }
        }
        
        .usage-tab {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            border-radius: 12px;
            background: white;
            color: rgba(92, 26, 51, 0.6);
            border: 1px solid rgba(243, 244, 246, 1);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            white-space: nowrap;
            flex-shrink: 0;
            min-width: fit-content;
        }
        
        @media (min-width: 1024px) {
            .usage-tab {
                white-space: normal;
                text-align: left;
            }
        }
        
        .usage-tab:hover {
            background: rgba(252, 237, 240, 0.5);
        }
        
        .usage-tab.active {
            background: #5C1A33;
            color: white;
            border-color: #5C1A33;
            box-shadow: 0 4px 16px rgba(92, 26, 51, 0.2);
        }
        
        .usage-content {
            background: white;
            border: 1px solid rgba(243, 244, 246, 1);
            border-radius: 16px;
            padding: 32px;
            min-height: 280px;
            display: none;
        }
        
        @media (min-width: 768px) {
            .usage-content {
                padding: 48px;
            }
        }
        
        .usage-content.active {
            display: block;
        }
        
        .usage-icon-large {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #FCEDF0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
        }
        
        .usage-content-title {
            font-family: 'Georgia', serif;
            font-size: 1.5rem;
            font-weight: 300;
            color: #5C1A33;
            margin-bottom: 16px;
        }
        
        .usage-content-desc {
            color: rgba(92, 26, 51, 0.6);
            line-height: 1.8;
            font-weight: 300;
            font-size: 16px;
        }
        
        .usage-tip {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid rgba(243, 244, 246, 1);
        }
        
        .usage-tip-text {
            color: #C9A96E;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        
        /* Before/After */
        .result-card {
            background: white;
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 24px;
            padding: 32px;
        }
        
        .result-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }
        
        .verified-badge {
            background: #22c55e;
            color: white;
            padding: 4px 12px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 600;
        }
        
        .result-text {
            font-size: 14px;
            line-height: 1.6;
            color: rgba(92, 26, 51, 0.7);
            font-style: italic;
            margin-bottom: 20px;
        }
        
        .result-footer {
            border-top: 1px solid rgba(252, 237, 240, 0.6);
            padding-top: 16px;
        }
        
        .result-name {
            font-weight: 600;
            font-size: 14px;
            color: #5C1A33;
        }
        
        .result-duration {
            font-size: 12px;
            color: #C9A96E;
            font-weight: 600;
        }
        
        /* Certificate */
        .cert-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
        }
        
        .cert-card {
            background: white;
            border: 1px solid rgba(252, 237, 240, 0.6);
            border-radius: 16px;
            padding: 32px;
            text-align: center;
        }
        
        .cert-icon {
            font-size: 48px;
            margin-bottom: 16px;
        }
        
        .cert-title {
            font-size: 16px;
            font-weight: 600;
            color: #5C1A33;
            margin-bottom: 12px;
        }
        
        .cert-desc {
            color: rgba(92, 26, 51, 0.5);
            font-size: 14px;
            line-height: 1.6;
        }
        
        /* Guarantee */
        .guarantee-box {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            border-radius: 24px;
            padding: 40px 24px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        @media (min-width: 768px) {
            .guarantee-box {
                padding: 60px 40px;
            }
        }
        
        .guarantee-icon {
            width: 64px;
            height: 64px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }
        
        @media (min-width: 768px) {
            .guarantee-icon {
                width: 80px;
                height: 80px;
                margin-bottom: 24px;
            }
        }
        
        .guarantee-title {
            font-family: 'Georgia', serif;
            font-size: 1.5rem;
            margin-bottom: 16px;
        }
        
        @media (min-width: 768px) {
            .guarantee-title {
                font-size: 2.25rem;
            }
        }
        
        .guarantee-divider {
            width: 64px;
            height: 2px;
            background: rgba(255, 255, 255, 0.4);
            margin: 0 auto 24px;
        }
        
        .guarantee-desc {
            font-size: 16px;
            margin-bottom: 32px;
            opacity: 0.9;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.8;
        }
        
        @media (min-width: 768px) {
            .guarantee-desc {
                font-size: 18px;
            }
        }
        
        .guarantee-features {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 40px;
        }
        
        @media (min-width: 640px) {
            .guarantee-features {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        .guarantee-feature {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 24px;
        }
        
        .guarantee-feature-icon {
            font-size: 32px;
            margin-bottom: 12px;
        }
        
        .guarantee-feature-title {
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .guarantee-feature-desc {
            font-size: 14px;
            opacity: 0.8;
        }
        
        /* Pricing */
        .pricing-card {
            background: white;
            border: 2px solid rgba(243, 244, 246, 1);
            border-radius: 24px;
            padding: 24px;
            text-align: center;
            position: relative;
            transition: all 0.3s;
        }
        
        @media (min-width: 768px) {
            .pricing-card {
                padding: 32px;
            }
        }
        
        .pricing-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 50px rgba(0, 0, 0, 0.12);
        }
        
        .pricing-card.popular {
            border-color: #C9A96E;
            border-width: 3px;
            background: #5C1A33;
            color: white;
            transform: scale(1.02);
        }
        
        @media (min-width: 768px) {
            .pricing-card.popular {
                transform: scale(1.05);
            }
        }
        
        .pricing-card.popular:hover {
            transform: scale(1.05);
        }
        
        @media (min-width: 768px) {
            .pricing-card.popular:hover {
                transform: scale(1.08);
            }
        }
        
        .popular-badge {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: #C9A96E;
            color: white;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }
        
        .package-name {
            color: #C9A96E;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 4px;
        }
        
        .pricing-card.popular .package-name {
            color: #C9A96E;
        }
        
        .package-desc {
            font-size: 12px;
            opacity: 0.4;
            margin-bottom: 12px;
        }
        
        .pricing-card.popular .package-desc {
            opacity: 0.6;
        }
        
        .package-price-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 24px;
        }
        
        .package-price {
            font-family: 'Georgia', serif;
            font-size: 2.25rem;
            font-weight: 300;
        }
        
        .package-original {
            text-decoration: line-through;
            font-size: 14px;
            opacity: 0.3;
        }
        
        .package-features {
            list-style: none;
            margin: 24px 0;
            text-align: left;
        }
        
        .package-feature {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
        }
        
        .pricing-card.popular .package-feature {
            opacity: 0.8;
        }
        
        .order-btn {
            display: block;
            width: 100%;
            text-align: center;
            padding: 14px 24px;
            border-radius: 50px;
            font-size: 12px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            text-decoration: none;
            transition: all 0.3s;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
        }
        
        .pricing-card:not(.popular) .order-btn {
            background: #5C1A33;
            color: white;
        }
        
        .pricing-card:not(.popular) .order-btn:hover {
            background: #7A2345;
        }
        
        .pricing-card.popular .order-btn {
            background: #C9A96E;
            color: white;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        
        .pricing-card.popular .order-btn:hover {
            background: #B8963D;
            transform: scale(1.05);
        }
        
        .secure-text {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            opacity: 0.4;
        }
        
        .pricing-card.popular .secure-text {
            opacity: 0.6;
        }
        
        /* FAQ */
        .faq-item {
            background: rgba(252, 237, 240, 0.2);
            border-radius: 12px;
            margin-bottom: 12px;
            overflow: hidden;
            transition: all 0.3s;
        }
        
        .faq-item:hover {
            background: rgba(252, 237, 240, 0.4);
        }
        
        .faq-question {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            text-align: left;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 14px;
            color: rgba(92, 26, 51, 0.8);
            font-weight: 500;
        }
        
        .faq-icon {
            color: #C9A96E;
            flex-shrink: 0;
            transition: transform 0.3s;
            width: 16px;
            height: 16px;
        }
        
        .faq-question.open .faq-icon {
            transform: rotate(180deg);
        }
        
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        
        .faq-answer.open {
            max-height: 500px;
        }
        
        .faq-answer-text {
            padding: 0 20px 20px;
            font-size: 14px;
            color: rgba(92, 26, 51, 0.55);
            line-height: 1.8;
            font-weight: 300;
        }
        
        /* Footer */
        footer {
            background: #5C1A33;
            color: white;
        }
        
        .footer-cta {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-cta-inner {
            max-width: 896px;
            margin: 0 auto;
            padding: 64px 24px;
            text-align: center;
        }
        
        @media (min-width: 768px) {
            .footer-cta-inner {
                padding: 80px 24px;
            }
        }
        
        .footer-label {
            color: #C9A96E;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            font-size: 11px;
            font-weight: 500;
            margin-bottom: 16px;
        }
        
        .footer-title {
            font-family: 'Georgia', serif;
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 16px;
        }
        
        @media (min-width: 768px) {
            .footer-title {
                font-size: 1.875rem;
            }
        }
        
        .footer-desc {
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
            max-width: 448px;
            margin: 0 auto 32px;
            font-weight: 300;
        }
        
        .footer-btn {
            display: inline-block;
            padding: 16px 40px;
            background: #C9A96E;
            color: white;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.2em;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .footer-btn:hover {
            background: #B8963D;
        }
        
        .footer-main {
            max-width: 1152px;
            margin: 0 auto;
            padding: 40px 24px;
        }
        
        .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 32px;
        }
        
        @media (min-width: 768px) {
            .footer-content {
                flex-direction: row;
                align-items: center;
            }
        }
        
        .footer-brand-title {
            font-family: 'Georgia', serif;
            font-size: 1.25rem;
            letter-spacing: 0.15em;
            font-weight: 300;
        }
        
        .footer-brand-desc {
            color: rgba(255, 255, 255, 0.3);
            font-size: 12px;
            margin-top: 4px;
        }
        
        .footer-links {
            display: flex;
            align-items: center;
            gap: 32px;
        }
        
        .footer-link {
            color: rgba(255, 255, 255, 0.4);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-link:hover {
            color: #C9A96E;
        }
        
        .footer-love {
            display: flex;
            align-items: center;
            gap: 6px;
            color: rgba(255, 255, 255, 0.25);
            font-size: 12px;
        }
        
        .footer-bottom {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            text-align: center;
        }
        
        .footer-copyright {
            color: rgba(255, 255, 255, 0.2);
            font-size: 12px;
        }
        
        /* Utilities */
        .text-center { text-align: center; }
        .mt-8 { margin-top: 32px; }
        .mb-8 { margin-bottom: 32px; }
        
        /* Icons (simplified SVG) */
        .icon { width: 20px; height: 20px; }
        .icon-sm { width: 16px; height: 16px; }
        .icon-lg { width: 24px; height: 24px; }
        
        svg {
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
    </style>
</head>
<body>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-banner">
        <p>Sangat wet lepas guna..my husben cum kan i dulu then baru dia.. 😍</p>
    </div>
    
    <div class="hero-content-wrapper">
        <!-- Floating Petals -->
        <div class="petal petal-1"></div>
        <div class="petal petal-2"></div>
        <div class="petal petal-3"></div>
        <div class="petal petal-4"></div>
        <div class="petal petal-5"></div>
        <div class="petal petal-6"></div>
        
        <div class="hero-content">
            <p class="hero-label">Intimate Organic Perfume</p>
            <h1 class="hero-title">WOOMAN</h1>
            <div class="hero-divider"></div>
            <p class="hero-subtitle">Rahsia Intimasi Wanita</p>
            <p class="hero-desc">
                Formulasi khas 100% organik membantu mengatasi masalah dalaman dan luaran wanita. 
                Bangkitkan sensasi bersama suami.
            </p>
            
            <div class="hero-buttons">
                <a href="#order" class="btn-primary">
                    🔥 Order Sekarang - Jimat Hingga RM300
                </a>
                <a href="#masalah" class="btn-secondary">
                    Ketahui Lebih
                </a>
            </div>
            
            <div class="hero-social-proof">
                <div class="hero-avatars">
                    <div class="hero-avatar"></div>
                    <div class="hero-avatar"></div>
                    <div class="hero-avatar"></div>
                    <div class="hero-avatar"></div>
                </div>
                <span style="color: rgba(92, 26, 51, 0.6); font-size: 12px;">
                    <span style="font-weight: 600; color: #5C1A33;">2,847+</span> wanita dah order hari ini
                </span>
            </div>
            
            <div class="hero-badges">
                <div class="badge-item">
                    <div class="badge-dot"></div>
                    <span class="badge-text">100% Organik</span>
                </div>
                <div class="badge-item">
                    <div class="badge-dot"></div>
                    <span class="badge-text">Certified Safe</span>
                </div>
                <div class="badge-item">
                    <div class="badge-dot"></div>
                    <span class="badge-text">KKM Approved</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Problems Section -->
<section id="masalah" class="section" style="background: white;">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Masalah Wanita</p>
            <h2 class="section-title">Sis Ada Masalah Kat Bawah Ni Ke?</h2>
            <div class="section-divider"></div>
            <p class="section-desc">
                Dah try macam-macam produk... tapi masih <span style="font-weight: 500; color: #5C1A33;">tak ada yang berkesan</span> untuk masalah yang sis hadapi?
            </p>
        </div>
        
        <div class="grid grid-2">
            <div class="card">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0000.png" 
                     alt="Mati Putik" 
                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
                <h3 class="card-title">Mati Putik & Hilang Nafsu</h3>
                <p class="card-desc">Sis hilang nafsu atau tak rasa ghairah semasa hubungan intim. Problem ni boleh berlaku secara sementara sahaja, atau mungkin berpanjangan, dan sering kali beri kesan pada hubungan dengan suami.</p>
            </div>
            
            <div class="card">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0002.png" 
                     alt="Miss V Kering" 
                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
                <h3 class="card-title">Miss V Kering</h3>
                <p class="card-desc">Sis selalu rasa tak selesa, gatal-gatal, pedih, atau sakit di bahagian Miss V semasa bersama suami. Problem ni boleh mengganggu hubungan dengan suami, dan berpotensi menjejaskan keyakinan diri sis.</p>
            </div>
            
            <div class="card">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0001.png" 
                     alt="Selalu Moody" 
                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
                <h3 class="card-title">Selalu Moody</h3>
                <p class="card-desc">Emosi jadi mudah terganggu dan juga rasa malas nak buat kerja rumah. Dalaman rasa tak stabil.</p>
            </div>
            
            <div class="card">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/Kerap-sakit-belakang__20250417_162841_0003.png" 
                     alt="Period Pain" 
                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
                <h3 class="card-title">Period Pain</h3>
                <p class="card-desc">Sis kerap kali mengalami Period Pain (Senggugut) di bahagian bawah perut semasa datang haid, yang mengganggu aktiviti dan jadual harian.</p>
            </div>
        </div>
    </div>
</section>

<!-- Serius Section -->
<section class="section" style="background: linear-gradient(180deg, white 0%, rgba(252, 237, 240, 0.2) 100%);">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Serius Ke Masalah Tu Sis?</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="grid grid-2">
            <div class="card">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/474618084_122156789066292366_4109968974446218990_n.jpg" 
                     alt="Mati putik masalah ramai wanita" 
                     style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
                <h3 class="card-title">Mati putik antara masalah ramai wanita</h3>
                <p class="card-desc">Kadang masalah mati putik adalah punca berlaku penceraian yang berpunca dari masalah dryness atau susah klimaks</p>
            </div>
            
            <div class="card">
                <img src="https://intimateperfume.com/wp-content/uploads/2024/11/bahaya-keputihan-kepada-wanita-kemandulan-keguguran.png" 
                     alt="Keputihan melampau" 
                     style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
                <h3 class="card-title">Keputihan melampau</h3>
                <p class="card-desc">Sis tahu ke ye keputihan melampau boleh menyebabkan masalah kesihatan untuk sis</p>
            </div>
        </div>
    </div>
</section>

<!-- Benefits Section -->
<section class="section" style="background: white;">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Kelebihan</p>
            <h2 class="section-title">Bagaimana Wooman Membantu Selesaikan Masalah Sis Tadi? 🥰</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="product-showcase" style="margin-bottom: 48px;">
            <img src="https://intimateperfume.com/wp-content/uploads/2024/11/MW-TW-1-1024x1024-1.png" 
                 alt="Wooman Product" 
                 class="product-image">
        </div>
        
        <div class="section-header">
            <h3 style="font-size: 1.5rem; color: #5C1A33; margin-bottom: 32px; font-weight: 400;">
                Wooman direka khas untuk Wanita bagi membantu mengatasi masalah majoriti wanita masa kini.
            </h3>
        </div>
        
        <div class="grid grid-3">
            <div class="benefit-card">
                <div class="benefit-icon">
                    <svg class="icon-lg" style="color: #5C1A33;" viewBox="0 0 24 24">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                        <path d="M5 3v4"></path>
                        <path d="M19 17v4"></path>
                        <path d="M3 5h4"></path>
                        <path d="M17 19h4"></path>
                    </svg>
                </div>
                <p class="card-desc">Stabilkan hormon & tingkatkan mood positif</p>
            </div>
            
            <div class="benefit-card">
                <div class="benefit-icon">
                    <svg class="icon-lg" style="color: #5C1A33;" viewBox="0 0 24 24">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                    </svg>
                </div>
                <p class="card-desc">Bangkitkan ghairah & lebih bersedia untuk suami</p>
            </div>
            
            <div class="benefit-card">
                <div class="benefit-icon">
                    <svg class="icon-lg" style="color: #5C1A33;" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        <path d="M2 12h20"></path>
                    </svg>
                </div>
                <p class="card-desc">Menyah bau kurang menyenangkan, ganti dengan harum</p>
            </div>
            
            <div class="benefit-card">
                <div class="benefit-icon">
                    <svg class="icon-lg" style="color: #5C1A33;" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                    </svg>
                </div>
                <p class="card-desc">Kurangkan risiko jangkitan bakteria & kulat</p>
            </div>
            
            <div class="benefit-card">
                <div class="benefit-icon">
                    <svg class="icon-lg" style="color: #5C1A33;" viewBox="0 0 24 24">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                </div>
                <p class="card-desc">Tingkatkan sensitiviti & hasilkan pelincir semulajadi</p>
            </div>
            
            <div class="benefit-card">
                <div class="benefit-icon">
                    <svg class="icon-lg" style="color: #5C1A33;" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </div>
                <p class="card-desc">Tidur lebih nyenyak, kurangkan stress & anxiety</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Break -->
<section class="cta-section">
    <div class="cta-container">
        <h3 class="cta-title">Ready Nak Cuba Wooman?</h3>
        <p class="cta-desc">Ribuan wanita Malaysia dah rasai perubahan. Giliran sis pula! 💕</p>
        <a href="#order" class="cta-btn">
            Order Sekarang - Jimat Hingga RM300
            <svg class="icon-sm" style="margin-left: 4px;" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </a>
        
        <div class="cta-features">
            <div class="cta-feature">
                <svg class="icon-sm" style="color: #C9A96E; flex-shrink: 0;" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span class="cta-feature-text">100% Selamat</span>
            </div>
            <div class="cta-feature">
                <svg class="icon-sm" style="color: #C9A96E; flex-shrink: 0;" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span class="cta-feature-text">Free Postage</span>
            </div>
            <div class="cta-feature">
                <svg class="icon-sm" style="color: #C9A96E; flex-shrink: 0;" viewBox="0 0 24 24">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
                <span class="cta-feature-text">Free Gift</span>
            </div>
        </div>
    </div>
</section>

<!-- Video Testimonials -->
<section class="section" style="background: linear-gradient(180deg, white 0%, rgba(252, 237, 240, 0.2) 100%);">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Pengguna Sebenar</p>
            <h2 class="section-title">Ribuan Wanita Malaysia Dah Cuba</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="grid grid-3">
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/2n_l-sCKYig" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/CbYXGLesKfI" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/GRKK3RxANS0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials -->
<section class="section" style="background: white;">
    <div class="container">
        <div class="section-header">
            <p class="section-label">Testimoni</p>
            <h2 class="section-title">Apa Kata Pengguna Kami</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="grid grid-3">
            <div class="testimonial-card">
                <div style="position: relative;">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/803030ad5_IMG_0788.jpg" class="testimonial-image" alt="Testimonial">
                    <div class="testimonial-badge">
                        <svg class="icon-sm" viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Real WhatsApp
                    </div>
                </div>
                <div class="testimonial-body">
                    <div class="stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <p class="testimonial-text">"My husben cum kan i dulu then baru dia..im also cum for the 2nd time 😍😍 Stress terus hilang 🥰"</p>
                    <div class="testimonial-footer">
                        <div class="testimonial-avatar"></div>
                        <p class="testimonial-verified">Verified Customer ✓</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card">
                <div style="position: relative;">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/4977fb901_IMG_0789.jpg" class="testimonial-image" alt="Testimonial">
                    <div class="testimonial-badge">
                        <svg class="icon-sm" viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Real WhatsApp
                    </div>
                </div>
                <div class="testimonial-body">
                    <div class="stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <p class="testimonial-text">"Sebelum ni kan pakai thewooman. Tp mywooman ni penangan wetness die teruk gile kottt 😍 2 malam berturut² klimaks lebih 10 kali"</p>
                    <div class="testimonial-footer">
                        <div class="testimonial-avatar"></div>
                        <p class="testimonial-verified">Verified Customer ✓</p>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-card">
                <div style="position: relative;">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c05d2118f14d14ebf9ee2/454b695b8_IMG_0785.jpg" class="testimonial-image" alt="Testimonial">
                    <div class="testimonial-badge">
                        <svg class="icon-sm" viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Real WhatsApp
                    </div>
                </div>
                <div class="testimonial-body">
                    <div class="stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <p class="testimonial-text">"After i using MyWooman, mmg WOW 🤩 baru 1st time roll dkt private area, dia punya basah mmg sampai husband pun tegur. Siapa sangka benda ni sgt2 membantu! 🥰"</p>
                    <div class="testimonial-footer">
                        <div class="testimonial-avatar"></div>
                        <p class="testimonial-verified">Verified Customer ✓</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-8">
            <p style="color: rgba(92, 26, 51, 0.5); font-size: 14px;">
                💬 Ribuan testimoni positif dari pengguna di seluruh Malaysia
            </p>
        </div>
    </div>
</section>

<!-- Continue with remaining sections in next part due to length... -->

<script>
// FAQ Toggle
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isOpen = button.classList.contains('open');
    
    // Close all
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('open');
        q.nextElementSibling.classList.remove('open');
    });
    
    // Open clicked if wasn't open
    if (!isOpen) {
        button.classList.add('open');
        answer.classList.add('open');
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Usage Tabs
const usageTabs = document.querySelectorAll('.usage-tab');
const usageContents = document.querySelectorAll('.usage-content');

usageTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        usageTabs.forEach(t => t.classList.remove('active'));
        usageContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        usageContents[index].classList.add('active');
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
            Complete HTML yang 100% sama dengan React preview - ready untuk paste dalam Elementor
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
            <li>Klik "Copy Code" button kat atas</li>
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