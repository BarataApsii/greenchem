import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-primary/20 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="GreenChem Logo"
                className="h-20 lg:h-24 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary px-3 py-2 text-base font-medium">
                Home
              </Link>
              <a href="#about" className="text-foreground hover:text-primary px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="#services" className="text-foreground hover:text-primary px-3 py-2 text-base font-medium">
                Services
              </a>
              <Link to="/gallery" className="text-foreground hover:text-primary px-3 py-2 text-base font-medium">
                Gallery
              </Link>
              <a href="#contact" className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md font-medium">
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
                Home
              </Link>
              <a href="#about" className="block py-2 text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
                About Us
              </a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
                Services
              </a>
              <Link to="/gallery" className="block py-2 text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
                Gallery
              </Link>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
                Contact Us
              </a>
            </div>
          )}
        </div>
      </header>
      {/* Add some spacing to account for fixed header */}
      <div className="h-24 lg:h-28"></div>
    </>
  );
};

export default Header;
