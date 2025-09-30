import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ContactSection } from "../components/ContactSection";

export function ConstructionPage() {
  return (
    <>
      <HeroSection 
        title="Construction & Landscaping"
        subtitle="Complete construction, renovation, and landscaping services with a focus on quality and sustainability."
        ctaText="Start Your Project"
        ctaLink="/contact"
      />
      <ServicesSection filter="construction" />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
