import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SafetyStandardsSection } from "./components/SafetyStandardsSection";
import GalleryPage from "./pages/GalleryPage";
import WaterChemicalSection from "./components/services/WaterChemicalSection";
import ConstructionSection from "./components/services/ConstructionSection";

function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative">
        <HeroSection 
          title="Green Environmental Solutions"
          ctaText="Get a Free Quote"
          ctaLink="/#contact"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AboutSection />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-16 pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div id="water-chemical">
              <WaterChemicalSection />
            </div>
            <div id="construction">
              <ConstructionSection />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards Section */}
      <section id="safety" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SafetyStandardsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16 pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
