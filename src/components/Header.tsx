import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export function Header(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Handle Services dropdown
      if (servicesRef.current && 
          !servicesRef.current.contains(target) && 
          isServicesOpen) {
        setIsServicesOpen(false);
      }
      
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);
  
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

            {/* Get Quote - CTA button that scrolls to the contact section */}
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