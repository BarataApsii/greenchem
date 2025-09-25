import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { QuoteModal } from "./QuoteModal";
import logo from "../images/logo.png";

export function Header() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('Scroll:', { currentScrollY, lastScrollY, isVisible });
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        console.log('Hiding navbar');
        setIsVisible(false); // Hide when scrolling down
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        console.log('Showing navbar');
        setIsVisible(true); // Show when scrolling up or near top
      }
      
      // Show/hide scroll to top button
      setShowScrollTop(currentScrollY > 400);
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Debug indicator */}
      <div className="fixed top-20 right-4 z-50 bg-red-500 text-white p-2 rounded">
        Visible: {isVisible.toString()}
      </div>
      
      <header 
        className="border-b border-primary/20 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-transform duration-300"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="GreenChem Logo" 
                className="h-24 w-auto object-contain"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#water-chemical" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                Water & Chemical
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#construction" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                Construction
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </nav>

            <Button 
              variant="default" 
              className="hidden md:inline-flex shadow-lg hover:shadow-xl transition-shadow px-6 py-2"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
}