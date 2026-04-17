import React, { useState, useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import EmotionalIntroSection from "@/components/landing/EmotionalIntroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SeriousIssuesSection from "@/components/landing/SeriousIssuesSection";
import NineKelebihanSection from "@/components/landing/NineKelebihanSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import NotJustPerfumeSection from "@/components/landing/NotJustPerfumeSection";
import VideoTestimonialSection from "@/components/landing/VideoTestimonialSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import DetailedUsageGuide from "@/components/landing/DetailedUsageGuide";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import CertificateSection from "@/components/landing/CertificateSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";
import CTABreak from "@/components/landing/CTABreak";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <HeroSection />
      <EmotionalIntroSection />
      <ProblemsSection />
      <SeriousIssuesSection />
      <NineKelebihanSection />
      <BenefitsSection />
      <NotJustPerfumeSection />
      <CTABreak />
      <VideoTestimonialSection />
      <TestimonialsSection />
      <CTABreak />
      <IngredientsSection />
      <DetailedUsageGuide />
      <CertificateSection />
      <CTABreak />
      <BeforeAfterSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}