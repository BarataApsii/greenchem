import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export function Header(): React.JSX.Element {
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
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
              onClick={() => {
                if (window.location.pathname === "/") {
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
              <Link to="/" className="text-foreground hover:text-primary relative group px-3 py-2 text-base">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a href="#about" className="text-foreground hover:text-primary relative group px-3 py-2 text-base">
                About Us
              </a>

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
                  <div className="absolute left-0 mt-2 bg-primary rounded-lg py-2 z-50 w-72">
                    <a href="#water-chemical" className="block px-6 py-2 text-white hover:bg-white/10">
                      Water & Chemical Solutions
                    </a>
                    <a href="#construction" className="block px-6 py-2 text-white hover:bg-white/10">
                      Construction
                    </a>
                  </div>
                )}
              </div>
              {/* --- Desktop Services Dropdown END --- */}

              <Link to="/gallery" className="text-foreground hover:text-primary relative group px-3 py-2 text-base">
                Gallery
              </Link>
              <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 text-base">
                Contact Us
              </a>
            </nav>
            {/* --- Desktop Navigation END --- */}

            {/* --- CTA Button (Desktop Only) START --- */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-medium px-6 py-2 text-base rounded-md"
            >
              Get Quote
            </a>
            {/* --- CTA Button END --- */}

            {/* --- Mobile Hamburger Button START --- */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            {/* --- Mobile Hamburger Button END --- */}
          </div>
        </div>

        {/* --- Mobile Menu START --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-2 px-6 py-4">
              <Link to="/" className="py-2 border-b border-gray-200" onClick={toggleMobileMenu}>
                Home
              </Link>
              <a href="#about" className="py-2 border-b border-gray-200" onClick={toggleMobileMenu}>
                About Us
              </a>

              {/* --- Mobile Services Dropdown START --- */}
              <div className="w-full">
                <div className="border-b border-gray-200">
                  <button 
                    onClick={toggleServices}
                    className="w-full flex justify-between items-center py-2 text-left"
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* --- Mobile Services Submenu START --- */}
                {isServicesOpen && (
                  <div className="bg-gray-50 -mt-1">
                    <ul className="ml-6 pl-4 border-l-2 border-gray-300 space-y-3 py-3">
                      <li>
                        <a 
                          href="#water-chemical" 
                          className="block py-3 pl-2 text-gray-700 hover:text-primary"
                          onClick={toggleMobileMenu}
                        >
                          Water & Chemical Solutions
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#construction" 
                          className="block py-3 pl-2 text-gray-700 hover:text-primary"
                          onClick={toggleMobileMenu}
                        >
                          Construction
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
                {/* --- Mobile Services Submenu END --- */}

              </div>
              {/* --- Mobile Services Dropdown END --- */}

              <Link to="/gallery" className="py-2 border-b border-gray-200" onClick={toggleMobileMenu}>
                Gallery
              </Link>
              <a href="#contact" className="py-2 border-b border-gray-200" onClick={toggleMobileMenu}>
                Contact Us
              </a>
              <a href="#contact" className="py-2 bg-primary text-white text-center rounded-md" onClick={toggleMobileMenu}>
                Get Quote
              </a>
            </div>
          </div>
        )}
        {/* --- Mobile Menu END --- */}
      </header>
      {/* --- Header END --- */}

      {/* --- Back to Top Button START --- */}
      <div
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: 50,
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
      >
        <button
          onClick={scrollToTop}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#10B981",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
          }}
        >
          ↑
        </button>
      </div>
      {/* --- Back to Top Button END --- */}
    </>
  );
}
