import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ContactSection } from "../components/ContactSection";

export function WaterChemicalPage() {
  return (
    <>
      <HeroSection 
        title="Water & Chemical Solutions"
        subtitle="Expert water treatment and chemical management services for residential, commercial, and industrial clients."
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
      />
      <ServicesSection filter="water-chemical" />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
