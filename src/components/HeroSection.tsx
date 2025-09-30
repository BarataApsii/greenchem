import { useState } from 'react';
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuoteModal } from "./QuoteModal";

export function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Header height - adjusted for better spacing
  const headerHeight = 120; // Reduced to 120px

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1643578107090-17ad301b1b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVudmlyb25tZW50YWwlMjB0ZWNobm9sb2d5JTIwd2F0ZXIlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU4NzgwMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Green Environmental Technology and Water Treatment"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content - Ensured to be on top */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 md:mb-12 lg:mb-16 leading-tight p-6 rounded-lg inline-block" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}>
              <span className="text-primary">Green</span> <span className='text-white'>Solutions for a</span> <span className="text-primary">Sustainable</span> <span className='text-white'>Future</span>
            </h1>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-xl lg:px-12 lg:py-5 lg:text-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-xl lg:px-12 lg:py-5 lg:text-2xl border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </section>
  );
}
