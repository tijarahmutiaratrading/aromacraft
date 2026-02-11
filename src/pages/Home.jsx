import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import UsageSection from "@/components/landing/UsageSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CertificateSection from "@/components/landing/CertificateSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <IngredientsSection />
      <UsageSection />
      <TestimonialsSection />
      <CertificateSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}