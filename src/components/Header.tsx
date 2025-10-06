import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // --- Scroll hide/show header + Back to Top visibility ---
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 300);

      if (ticking) return;
      window.requestAnimationFrame(() => {
        if (currentScrollY < 50) {
          setIsVisible(true);
        } else {
          const scrollDiff = lastScrollY - currentScrollY;
          if (scrollDiff > 5) setIsVisible(true);
          else if (scrollDiff < -5) setIsVisible(false);
        }
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- Dropdown + Mobile menu toggle handlers ---
  const toggleServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  };
  
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };
  
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    // Close services dropdown when mobile menu is closed
    if (!newState) {
      setIsServicesOpen(false);
    }
  };
  
  // Close mobile menu when clicking outside or on navigation items
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menu = document.querySelector('.mobile-menu-container');
      const hamburger = document.querySelector('[aria-label="Toggle menu"]');
      
      // Check if click is on a navigation link or outside the menu
      const isNavLink = target.closest('a[href^="#"], a[href^="/"], button[onclick]');
      const isOutsideMenu = menu && !menu.contains(target) && hamburger && !hamburger.contains(target);
      
      if (isNavLink || isOutsideMenu) {
        closeAllMenus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClick, { capture: true });
    }
    
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [isMobileMenuOpen]);

  // --- Handle initial page load with hash ---
  useEffect(() => {
    // Handle hash in URL on initial page load
    const handleInitialHash = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const section = document.getElementById(hash);
        if (section) {
          const yOffset = -100;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
    
    // Small delay to ensure page is fully loaded
    const timer = setTimeout(handleInitialHash, 500);
    return () => clearTimeout(timer);
  }, []);

  // --- Close dropdown when clicking outside ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target) && isServicesOpen) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isServicesOpen]);

  // --- Scroll to top handler ---
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* --- Header START --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b border-primary/20 bg-white/95 backdrop-blur-md shadow-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* --- Logo START --- */}
            <Link
              to="/"
              className="flex items-center"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <img
                src={logo}
                alt="GreenChem Logo"
                className="h-24 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
            {/* --- Logo END --- */}

            {/* --- Desktop Navigation START --- */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-primary relative group px-3 py-2 text-base"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link 
                to="/#about" 
                className="text-foreground hover:text-primary relative group px-3 py-2 text-base"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* --- Desktop Services Dropdown START --- */}
              <div className="relative" ref={servicesRef}>
                <button
                  className="flex items-center text-foreground hover:text-primary relative group px-3 py-2 text-base"
                  onClick={toggleServices}
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-1 bg-primary rounded-lg z-50 w-72 shadow-lg">
                    <div className="flex flex-col">
                      <Link 
                        to="/#water-chemical" 
                        className="block px-6 py-3 text-white hover:bg-white/10 transition-colors duration-200 text-left"
                        onClick={(e) => {
                          setIsServicesOpen(false);
                          if (window.location.pathname === '/') {
                            e.preventDefault();
                            const section = document.getElementById('water-chemical');
                            if (section) {
                              section.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        <div className="flex items-center">
                          <span>Water & Chemical Solutions</span>
                        </div>
                      </Link>
                      <div className="border-t border-white/10"></div>
                      <Link 
                        to="/#construction" 
                        className="block px-6 py-3 text-white hover:bg-white/10 transition-colors duration-200 text-left"
                        onClick={(e) => {
                          setIsServicesOpen(false);
                          if (window.location.pathname === '/') {
                            e.preventDefault();
                            const section = document.getElementById('construction');
                            if (section) {
                              section.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        <div className="flex items-center">
                          <span>Construction</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {/* --- Desktop Services Dropdown END --- */}

              <Link 
                to="/gallery" 
                className="text-foreground hover:text-primary relative group px-3 py-2 text-base"
              >
                Gallery
              </Link>

              <Link 
                to="/#contact" 
                className="text-foreground hover:text-primary px-3 py-2 text-base"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                Contact Us
              </Link>
            </nav>
            {/* --- Desktop Navigation END --- */}

            {/* --- CTA Button (Desktop Only) START --- */}
            <Link
              to="/#contact"
              className="hidden md:inline-flex items-center bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-medium px-6 py-2 text-base rounded-md"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Get Quote
            </Link>
            {/* --- CTA Button END --- */}

            {/* --- Mobile Hamburger Button START --- */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            {/* --- Mobile Hamburger Button END --- */}
          </div>
        </div>

        {/* --- Mobile Menu START --- */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-container md:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-2 px-6 py-4">
              <Link 
                to="/" 
                className="py-2 border-b border-gray-200 block"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                Home
              </Link>
              
              <Link 
                to="/#about"
                className="py-2 border-b border-gray-200 block"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                About Us
              </Link>

              {/* --- Mobile Services Dropdown START --- */}
              <div className="w-full">
                <div className="border-b border-gray-200">
                  <button 
                    onClick={toggleServices}
                    className="w-full flex justify-between items-center py-2 text-left"
                    aria-expanded={isServicesOpen}
                    aria-controls="mobile-services-dropdown"
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {isServicesOpen && (
                  <div className="bg-gray-50 -mt-1">
                    <ul className="ml-6 pl-4 border-l-2 border-gray-300 space-y-3 py-3">
                      <li>
                        <Link 
                          to="/#water-chemical"
                          className="block py-3 pl-2 text-gray-700 hover:text-primary"
                          onClick={(e) => {
                            closeAllMenus();
                            if (window.location.pathname === '/') {
                              e.preventDefault();
                              const section = document.getElementById('water-chemical');
                              if (section) {
                                const yOffset = -100;
                                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                              }
                            }
                          }}
                        >
                          Water & Chemical Solutions
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/#construction" 
                          className="block py-3 pl-2 text-gray-700 hover:text-primary"
                          onClick={(e) => {
                            closeAllMenus();
                            if (window.location.pathname === '/') {
                              e.preventDefault();
                              const section = document.getElementById('construction');
                              if (section) {
                                const yOffset = -100;
                                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                              }
                            }
                          }}
                        >
                          Construction
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* --- Mobile Services Dropdown END --- */}

              <Link 
                to="/gallery" 
                className="py-2 border-b border-gray-200 block"
                onClick={() => closeAllMenus()}
              >
                Gallery
              </Link>
              
              <Link 
                to="#"
                className="py-2 border-b border-gray-200 block"
                onClick={(e) => {
                  e.preventDefault();
                  closeAllMenus();
                  if (window.location.pathname === '/') {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    // If not on home page, navigate to home with hash
                    window.location.href = '/#contact';
                  }
                }}
              >
                Contact Us
              </Link>
              
              <Link 
                to="#"
                className="py-2 bg-primary text-white text-center rounded-md block"
                onClick={(e) => {
                  e.preventDefault();
                  closeAllMenus();
                  if (window.location.pathname === '/') {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    // If not on home page, navigate to home with hash
                    window.location.href = '/#contact';
                  }
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
        {/* --- Mobile Menu END --- */}
      </header>
      {/* --- Header END --- */}

      {/* --- Back to Top Button START --- */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200 z-40"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
      {/* --- Back to Top Button END --- */}
    </>
  );
}