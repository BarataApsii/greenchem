import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ServicesSection } from "./components/ServicesSection";
import { SafetyStandardsSection } from "./components/SafetyStandardsSection";
import { GalleryPage } from "./pages/GalleryPage";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SafetyStandardsSection />
      <AboutSection />
      <ContactSection />
    </>
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