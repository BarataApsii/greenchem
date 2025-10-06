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

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-0">
      {/* --- Background Image START --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
      {/* --- Background Image END --- */}

      {/* --- Content START --- */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-16 sm:py-0">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Text Content with Semi-Transparent Background */}
          <div className="bg-black/40 inline-block px-6 py-4 sm:px-8 sm:py-6 rounded-lg mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
              <div className="mb-1 sm:mb-2">
                <span className="text-green-500">Green</span> <span className="text-white">Environmental,</span>
              </div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Chemical & Construction Solutions
              </div>
            </h1>
          </div>

          {/* --- CTA Buttons START --- */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center w-full max-w-xs sm:max-w-md mx-auto mt-4 sm:mt-6 md:mt-8">
            <a 
              href={ctaLink}
              className="w-auto inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-12 md:py-5 md:text-2xl lg:px-16 lg:py-6 lg:text-3xl rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-transparent whitespace-nowrap"
            >
              {ctaText}
            </a>
            
            {showSecondaryButton && (
              <Button 
                variant="outline"
                className="w-auto inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary px-8 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-12 md:py-5 md:text-2xl lg:px-16 lg:py-6 lg:text-3xl rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-primary hover:border-primary/80 whitespace-nowrap"
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
