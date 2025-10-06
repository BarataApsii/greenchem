import { Separator } from "./ui/separator";
import { useState, useEffect } from 'react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <footer className="bg-primary text-white">

      {/* Main Footer Content */}
      <div className="py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Company Info */}
            <div>
              <h3 className="text-2xl text-white font-bold mb-4">GreenChem</h3>
              <p className="text-white/80 mb-4">
                We are a provider of sustainable water treatment, eco-friendly chemical solutions, and environmentally responsible construction services.
              </p>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white transition-colors">
                  <a href="#home" className="block">Home</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="#about" className="block">About Us</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="#services" className="block">Our Services</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="#projects" className="block">Projects</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="#contact" className="block">Contact</a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Our Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white transition-colors">
                  <a href="#water-treatment" className="block">Water Treatment</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="#chemical-supply" className="block">Chemical Supply</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="#construction" className="block">Construction</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="#environmental" className="block">Environmental Services</a>
                </li>
              </ul>
            </div>
            
            {/* Column 4: Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-white/60 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-white/90">+675 72593204</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-white/60 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-white/90">jwilliams@greenchem.com.pg</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-white/60 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white/90">P. O. Box 28, Gordons</p>
                    <p className="text-white/90">NCDC, Papua New Guinea</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col items-center text-center">
          <p className="text-white/90">&copy; {new Date().getFullYear()} GreenChem Papua New Guinea. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a href="#privacy" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <span className="text-white/40">•</span>
            <a href="#terms" className="text-white/80 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
        </div>
      </div>
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}
    </footer>
  );
}