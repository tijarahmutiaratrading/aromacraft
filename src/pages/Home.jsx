import React, { useState, useEffect } from "react";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import HeroSection from "@/components/landing/HeroSection";
import LiveCounter from "@/components/landing/LiveCounter";
import ProblemsSection from "@/components/landing/ProblemsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import VideoTestimonialSection from "@/components/landing/VideoTestimonialSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import UsageSection from "@/components/landing/UsageSection";
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
      <UrgencyBanner />
      <HeroSection />
      <LiveCounter />
      <ProblemsSection />
      <BenefitsSection />
      <CTABreak />
      <VideoTestimonialSection />
      <TestimonialsSection />
      <CTABreak />
      <IngredientsSection />
      <UsageSection />
      <BeforeAfterSection />
      <CertificateSection />
      <CTABreak />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}