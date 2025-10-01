import { useState } from 'react';
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuoteModal } from "./QuoteModal";

export function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Header height for spacing
  const headerHeight = 120;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* --- Background Image START --- */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-full h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1643578107090-17ad301b1b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVudmlyb25tZW50YWwlMjB0ZWNobm9sb2d5JTIwd2F0ZXIlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU4NzgwMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Green Environmental Technology and Water Treatment"
            className="w-full h-full object-cover opacity-80 rounded-lg sm:rounded-none"
          />
        </div>
      </div>
      {/* --- Background Image END --- */}

      {/* --- Content START --- */}
      <div className="relative z-20 w-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">

            {/* --- Hero Title START --- */}
            <h1
              className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl mb-8 leading-tight px-2 py-2 sm:px-6 sm:py-3 rounded-lg inline-block"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            >
              <span className="text-primary">Green</span>{" "}
              <span className="text-white">Solutions for a</span>{" "}
              <span className="text-primary">Sustainable</span>{" "}
              <span className="text-white">Future</span>
            </h1>
            {/* --- Hero Title END --- */}


            {/* --- CTA Buttons START --- */}
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-xl lg:px-12 lg:py-5 lg:text-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-xl lg:px-12 lg:py-5 lg:text-2xl border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
            {/* --- CTA Buttons END --- */}

          </div>
        </div>
      </div>
      {/* --- Content END --- */}

      {/* --- Quote Modal START --- */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      {/* --- Quote Modal END --- */}
    </section>
  );
}
