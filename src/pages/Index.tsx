import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import PreviewSection from "@/components/landing/PreviewSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ForWhoSection />
      <WhatYouGetSection />
      <PreviewSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
