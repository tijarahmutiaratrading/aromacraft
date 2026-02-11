import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SeriousProblemsSection from "@/components/landing/SeriousProblemsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import UsageSection from "@/components/landing/UsageSection";
import DetailedUsageSection from "@/components/landing/DetailedUsageSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import VideoTestimonialSection from "@/components/landing/VideoTestimonialSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ExpertEndorsementSection from "@/components/landing/ExpertEndorsementSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import UrgencySection from "@/components/landing/UrgencySection";
import CertificateSection from "@/components/landing/CertificateSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <HeroSection />
      <ProblemsSection />
      <SeriousProblemsSection />
      <BenefitsSection />
      <IngredientsSection />
      <UsageSection />
      <DetailedUsageSection />
      <TestimonialsSection />
      <VideoTestimonialSection />
      <BeforeAfterSection />
      <ExpertEndorsementSection />
      <GuaranteeSection />
      <UrgencySection />
      <CertificateSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
}