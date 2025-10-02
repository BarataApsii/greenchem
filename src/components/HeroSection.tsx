import { useState } from 'react';
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuoteModal } from "./QuoteModal";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  showSecondaryButton?: boolean;
}

export function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  showSecondaryButton = true,
  backgroundImage = 'https://images.unsplash.com/photo-1643578107090-17ad301b1b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVudmlyb25tZW50YWwlMjB0ZWNobm9sb2d5JTIwd2F0ZXIlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU4NzgwMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080' 
}: HeroSectionProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Header height for spacing
  const headerHeight = 400;

  return (
    <section
      className="relative min-h-[80vh] flex items-start pt-32 justify-center"
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
      <div className="relative z-20 w-full flex flex-col items-center justify-center -mt-8 sm:mt-0">
        <div className="container mx-auto px-6 text-center">
          {/* Text Content with Semi-Transparent Background */}
          <div className="bg-black/40 inline-block px-8 py-6 rounded-lg mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* --- CTA Buttons START --- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={ctaLink}
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-md font-medium transition-colors"
            >
              {ctaText}
            </a>
            
            {showSecondaryButton && (
              <Button 
                variant="outline"
                className="px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-xl lg:px-12 lg:py-5 lg:text-2xl border-2 border-white hover:bg-white/10 text-white transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
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
