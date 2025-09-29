import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export function Header(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll position for scroll-to-top button
      setShowScrollTop(currentScrollY > 300);
      
      // Skip if we're already processing a scroll event
      if (ticking) return;
      
      window.requestAnimationFrame(() => {
        // Always show header at the top of the page or when near top
        if (currentScrollY < 50) {
          setIsVisible(true);
        } else {
          // Show when scrolling up, hide when scrolling down
          const scrollDiff = lastScrollY - currentScrollY;
          
          if (scrollDiff > 5) {
            // Scrolling up
            setIsVisible(true);
          } else if (scrollDiff < -5) {
            // Scrolling down
            setIsVisible(false);
          }
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
      });
      
      ticking = true;
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Handle Services dropdown
      if (servicesRef.current && 
          !servicesRef.current.contains(target) && 
          isServicesOpen) {
        setIsServicesOpen(false);
      }
      
      // Handle Categories dropdown
      if (categoriesRef.current && 
          !categoriesRef.current.contains(target) && 
          isCategoriesOpen) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen, isCategoriesOpen]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 border-b border-primary/20 bg-white/95 backdrop-blur-md shadow-sm transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => {
                // If we're already on the home page, scroll to top
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <img 
                src={logo} 
                alt="GreenChem Logo" 
                className="h-24 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
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
                  className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                  style={{
                    boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                    width: 'auto',
                    minWidth: '16rem'
                  }}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="services-menu-button"
                >
                  {[
                    { id: 'pest-control', label: 'Pest Control' },
                    { id: 'swimming-pool', label: 'Swimming Pool' },
                    { id: 'landscaping', label: 'Landscaping' },
                    { id: 'water-chemical', label: 'Water & Chemical Solutions' },
                    { id: 'construction', label: 'Construction' }
                  ].map((service) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="block w-full text-left px-6 py-2.5 text-base font-normal text-foreground hover:bg-gray-50 hover:text-primary transition-colors flex items-center"
                      role="menuitem"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById(service.id);
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                        setIsServicesOpen(false);
                      }}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
                )}
              </div>
              
              <div className="relative" ref={categoriesRef}>
                <button 
                  className="flex items-center text-foreground hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 text-base"
                  onClick={toggleCategories}
                  aria-expanded={isCategoriesOpen}
                  aria-haspopup="true"
                  id="categories-menu-button"
                >
                  Categories
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCategoriesOpen && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                    style={{
                      boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                      width: 'auto',
                      minWidth: '16rem'
                    }}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="categories-menu-button"
                  >
                    <div className="flex flex-col">
                      <Link 
                        to="/gallery"
                        className="w-full text-left px-6 py-2.5 text-base font-normal text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                        role="menuitem"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        Gallery
                      </Link>
                      <Link
                        to="/gallery?category=pest-control"
                        className="w-full text-left px-6 py-2.5 text-base font-normal text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                        role="menuitem"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        Pest Control
                      </Link>
                      <Link
                        to="/gallery?category=water-chemical"
                        className="w-full text-left px-6 py-2.5 text-base font-normal text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                        role="menuitem"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        Water & Chemical
                      </Link>
                      <Link
                        to="/gallery?category=construction"
                        className="w-full text-left px-6 py-2.5 text-base font-normal text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                        role="menuitem"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        Construction & Landscaping
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
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
          </div>
        </div>
      </header>

      {/* Back to Top Button */}
      <div style={{
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        zIndex: 50,
        opacity: showScrollTop ? 1 : 0,
        visibility: showScrollTop ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
      }}>
        <button
          onClick={scrollToTop}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#10B981',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#059669';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#10B981';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
          }}
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
    </>
  );
}