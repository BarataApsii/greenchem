import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  // Handle service item click - closes dropdown and scrolls to section
  const handleServiceItemClick = (id: string) => {
    // Close both mobile menu and services dropdown
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    
    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      // Wait for navigation to complete
      const timer = setTimeout(() => {
        scrollToSection();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      scrollToSection();
    }
  };

  // Smooth scroll with menu close
  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const yOffset = -80;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isMenuButton = target.closest('button[aria-label="Toggle menu"]');
      const isInsideMenu = target.closest('.mobile-menu');
      const isServicesButton = target.closest('.services-button');
      
      if (isMenuOpen && !isInsideMenu && !isMenuButton && !isServicesButton) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle scroll to show/hide header
  useEffect(() => {
    if (!headerRef.current) return;
    
    const headerHeight = headerRef.current.offsetHeight;
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const handleScroll = () => {
      if (!headerRef.current) return;
      
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = currentScrollPos > lastScrollTop;
      
      // Always show header when at the top of the page or when scrolling up
      if (currentScrollPos <= 0 || !isScrollingDown) {
        if (!isVisible || headerRef.current.style.transform !== 'translateY(0px)') {
          setIsVisible(true);
          headerRef.current.style.transform = 'translateY(0)';
        }
      } 
      // Hide when scrolling down past a small threshold (10px)
      else if (isScrollingDown && currentScrollPos > 10) {
        if (isVisible || headerRef.current.style.transform !== `translateY(-${headerHeight}px)`) {
          setIsVisible(false);
          headerRef.current.style.transform = `translateY(-${headerHeight}px)`;
        }
      }
      
      lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
    };
    
    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [isVisible]);

  return (
    <header 
      ref={headerRef}
      className="bg-white shadow-sm fixed w-full z-50 transition-transform duration-300 ease-in-out"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-32 px-36">
          {/* Logo */}
          <div className="flex-shrink-0 justify-self-start">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="./images/logo.png"
                alt="Green Environmental"
                className="h-24 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Items - Centered */}
          <nav className="flex items-center space-x-16 justify-self-center">
            <Link 
              to="/" 
              className="text-base font-medium text-gray-900 hover:text-green-600 transition-colors"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Home
            </Link>
            <button
              onClick={() => handleScroll("about")}
            >
              About Us
            </button>
            <div className="relative group">
              <button 
                className="flex items-center text-gray-800 hover:text-teal-600 font-medium text-base tracking-wider"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <button
                    onClick={() => handleServiceItemClick("water-chemical")}
                    className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Water & Chemical Solutions
                  </button>
                  <button
                    onClick={() => handleServiceItemClick("construction")}
                    className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Construction
                  </button>
                </div>
              )}
            </div>
            <Link
              to="/gallery"
              className="text-gray-800 hover:text-teal-600 font-medium text-base tracking-wider"
            >
              Gallery
            </Link>
            <button
              onClick={() => handleScroll("contact")}
              className="text-gray-800 hover:text-teal-600 font-medium text-base tracking-wider"
            >
              Contact Us
            </button>
          </nav>
          
          {/* Get Quote Button */}
          <div className="justify-self-end mr-20">
            <button
              onClick={() => handleScroll("contact")}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-sm font-medium text-base tracking-wider transition-colors whitespace-nowrap"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-32 px-10">
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="./images/logo.png"
              alt="Green Environmental"
              className="h-20 w-auto"
            />
          </Link>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col py-2">
          <button
            onClick={() => handleScroll("home")}
            className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 text-base tracking-wider"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 text-base tracking-wider"
          >
            About Us
          </button>
          <div className="border-t border-gray-100">
            <button 
              className="services-button w-full flex justify-between items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-50 text-base tracking-wider"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsServicesOpen(!isServicesOpen);
              }}
            >
              <span>Services</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen && (
              <div className="bg-gray-50 pl-8">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScroll("water-chemical");
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-teal-600 text-base"
                >
                  Water & Chemical Solutions
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScroll("construction");
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-teal-600 text-base"
                >
                  Construction
                </button>
              </div>
            )}
          </div>
          <Link
            to="/gallery"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 text-base tracking-wider border-t border-gray-100"
          >
            Gallery
          </Link>
          <button
            onClick={() => {
              handleScroll("contact");
              setIsMenuOpen(false);
            }}
            className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 text-sm uppercase tracking-wider border-t border-gray-100"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
