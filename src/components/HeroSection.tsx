import { useState } from 'react';
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuoteModal } from "./QuoteModal";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  showSecondaryButton?: boolean;
}

export function HeroSection({ 
  title, 
  ctaText, 
  ctaLink, 
  showSecondaryButton = true,
  backgroundImage = 'https://images.unsplash.com/photo-1643578107090-17ad301b1b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVudmlyb25tZW50YWwlMjB0ZWNobm9sb2d5JTIwd2F0ZXIlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU4NzgwMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080' 
}: HeroSectionProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Header height for spacing - reduced for mobile
  const headerHeight = typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 400;

  return (
    <section
      className="relative min-h-[90vh] flex items-start sm:items-center justify-center"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* --- Background Image START --- */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-full h-full">
          <ImageWithFallback
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-80 rounded-lg sm:rounded-none"
          />
        </div>
      </div>
      {/* --- Background Image END --- */}

      {/* --- Content START --- */}
      <div className="relative z-20 w-full flex flex-col items-center justify-start sm:justify-center px-4 pt-4 sm:pt-0">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Text Content with Semi-Transparent Background */}
          <div className="bg-black/40 inline-block px-6 py-4 sm:px-8 sm:py-6 rounded-lg mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-center">
              <div className="mb-1 sm:mb-2">
                <span className="text-green-500">Green</span> <span className="text-white">Environmental,</span>
              </div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Chemical & Construction Solutions
              </div>
            </h1>
          </div>

          {/* --- CTA Buttons START --- */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <a 
              href={ctaLink}
              className="w-full sm:w-auto text-center bg-primary hover:bg-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-12 md:py-5 md:text-2xl lg:px-16 lg:py-6 lg:text-3xl rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
            >
              {ctaText}
            </a>
            
            {showSecondaryButton && (
              <Button 
                variant="outline"
                className="w-full sm:w-auto text-center bg-white hover:bg-gray-100 text-primary px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-12 md:py-5 md:text-2xl lg:px-16 lg:py-6 lg:text-3xl rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-primary hover:border-primary/80"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Request Quote
              </Button>
            )}
          </div>
          {/* --- CTA Buttons END --- */}
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
