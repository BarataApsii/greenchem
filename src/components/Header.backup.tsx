import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

// Mobile menu icon component
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
);

export function Header(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Handle scroll to show/hide header and back-to-top button
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll position for scroll-to-top button
      setShowScrollTop(currentScrollY > 300);
      
      // Show/hide header based on scroll direction
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        const scrollDiff = lastScrollY - currentScrollY;
        if (Math.abs(scrollDiff) > 5) {
          setIsVisible(scrollDiff > 0);
        }
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

{{ ... }}
  // Handle click outside for dropdowns and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Handle Services dropdown
      if (servicesRef.current && 
          !servicesRef.current.contains(target) && 
          isServicesOpen) {
        setIsServicesOpen(false);
      }
      
      // Handle mobile menu
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(target) && 
          isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen, isMobileMenuOpen]);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 border-b border-primary/20 bg-white/95 backdrop-blur-md shadow-sm transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden text-gray-700 hover:text-primary focus:outline-none mr-4 relative z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <MenuIcon isOpen={isMobileMenuOpen} />
              </button>
              
              <Link 
                to="/" 
                className="flex items-center"
                onClick={() => {
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <img 
                  src={logo} 
                  alt="GreenChem Logo" 
                  className="h-20 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation - Completely hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Home - Navigates to the homepage and scrolls to top if already on home */}
              <Link 
                to="/"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 text-base"
                onClick={() => {
                  // If we're already on the home page, scroll to top
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* About Us - Scrolls to the About section on the current page */}
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 text-base"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Services - Dropdown menu showing service categories */}
              <div className="relative" ref={servicesRef}>
                <button 
                  className="flex items-center text-foreground hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 text-base"
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  id="services-menu-button"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute left-0 mt-2 bg-primary rounded-lg py-2 z-50 border border-primary/20"
                    style={{
                      width: '300px',
                      minWidth: '300px',
                      boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                    }}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="services-menu-button"
                  >
                    <div className="flex flex-col">
                      <div className="group relative">
                        <a
                          href="#water-chemical"
                          className="relative flex items-center px-6 py-2.5 text-base font-normal"
                          role="menuitem"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsServicesOpen(false);
                            const element = document.getElementById('water-chemical');
                            if (element) {
                              window.scrollTo({
                                top: element.offsetTop - 100, // Adjust offset as needed
                                behavior: 'smooth'
                              });
                            }
                          }}
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#166534';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">Water & Chemical Solutions</span>
                        </a>
                      </div>
                      <div className="group relative">
                        <a
                          href="#construction"
                          className="relative flex items-center px-6 py-2.5 text-base font-normal"
                          role="menuitem"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsServicesOpen(false);
                            const element = document.getElementById('construction');
                            if (element) {
                              window.scrollTo({
                                top: element.offsetTop - 100, // Adjust offset as needed
                                behavior: 'smooth'
                              });
                            }
                          }}
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#166534';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">Construction</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Gallery - Navigates to the gallery page */}
              <Link 
                to="/gallery"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 text-base"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Contact Us - Scrolls to the contact section on the current page */}
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 text-base"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Get Quote - CTA button that scrolls to the contact section - Hidden on mobile */}
            <a 
              href="#contact"
              className="hidden md:inline-flex items-center bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-medium relative group px-6 py-2 text-base rounded-md cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Quote
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
                        {/* Mobile Contact Button - Only shows on mobile */}
            <a 
              href="#contact"
              className="md:hidden flex items-center bg-primary text-white hover:bg-primary/90 transition-all duration-200 font-medium px-4 py-2.5 text-sm rounded-lg shadow-md active:scale-95 transform"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </a>
            
            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}
            
            {/* Mobile Navigation */}
            <div 
              ref={mobileMenuRef}
              className={`fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden transition-transform duration-300 ease-in-out z-50`}
            >
              <div className="flex flex-col h-full">
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <img 
                    src={logo} 
                    alt="GreenChem Logo" 
                    className="h-12 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                    aria-label="Close menu"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto py-4">
                  <ul className="space-y-1 px-2">
                    <MobileNavItem 
                      to="/" 
                      text="Home" 
                      icon={
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      }
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (window.location.pathname === '/') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                    />
                    
                    <MobileNavItem 
                      href="#about" 
                      text="About Us"
                      icon={
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        const element = document.getElementById('about');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    />
                    
                    <MobileNavItem 
                      href="#services" 
                      text="Our Services"
                      icon={
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      }
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        const element = document.getElementById('services');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    />
                    
                    <MobileNavItem 
                      to="/gallery" 
                      text="Gallery"
                      icon={
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      }
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                    />
                    
                    <MobileNavItem 
                      href="#contact" 
                      text="Contact Us"
                      icon={
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    />
                  </ul>
                </nav>
                
                {/* Contact CTA in mobile menu */}
                <div className="px-4 py-3 mt-auto border-t border-gray-100">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                      Get a Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Back to Top Button */}
      {showScrollTop && (
        <div className="fixed right-6 bottom-6 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center 
                      shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

// Mobile Navigation Item Component
const MobileNavItem = ({ 
  to, 
  href, 
  text, 
  icon,
  onClick 
}: { 
  to?: string; 
  href?: string;
  text: string; 
  icon?: React.ReactNode;
  onClick: () => void;
}) => {
  const className = "flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors duration-200";
  
  const content = (
    <>
      {icon && icon}
      <span>{text}</span>
    </>
  );
  
  if (to) {
    return (
      <li>
        <Link to={to} className={className} onClick={onClick}>
          {content}
        </Link>
      </li>
    );
  }
  
  return (
    <li>
      <a 
        href={href} 
        className={className} 
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {content}
      </a>
    </li>
  );
};