import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo - Improved for mobile */}
            <Link to="/" className="flex flex-col items-start group flex-shrink-0 min-w-0" onClick={closeMobileMenu}>
              <div className="relative overflow-hidden">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wider">
                  <span className="inline-block hover:scale-110 transition-transform duration-200 text-gray-900">I</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-200 delay-75 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">B</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-200 delay-100 text-gray-900">S</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-200 delay-150 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">R</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-200 delay-200 text-gray-900">A</span>
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="hidden sm:flex items-center space-x-0 -mt-1 overflow-hidden">
                {['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', '•', ' ', 'S', 'o', 'l', 'u', 't', 'i', 'o', 'n', 's'].map((letter, i) => (
                  <span
                    key={i}
                    className={`text-xs font-medium text-gray-500 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${letter === '•' ? 'text-indigo-500 mx-1' : ''}`}
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Link */}
              <div className="relative group">
                <a
                  href="#services"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative"
                  onClick={() => {
                    if (location.pathname !== '/') {
                      window.location.href = '/#services';
                    } else {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </div>

              {/* About Link */}
              <div className="relative group">
                <Link
                  to="/about"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative ${
                    isActive("/about")
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  About
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 ease-out ${
                    isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              </div>

              {/* Portfolio Link */}
              <div className="relative group">
                <Link
                  to="/portfolio"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative ${
                    isActive("/portfolio")
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Portfolio
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 ease-out ${
                    isActive("/portfolio") ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              </div>

              {/* Contact Link */}
              <div className="relative group">
                <Link
                  to="/contact"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative ${
                    isActive("/contact")
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Contact
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 ease-out ${
                    isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              {/* Desktop Get Started Button */}
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 rounded-lg font-medium
                           hidden sm:inline-flex px-6 py-2.5 text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Link to="/contact">Get Started</Link>
              </Button>

              {/* Mobile Get Started Button (improved) */}
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium
                           sm:hidden px-4 py-2 text-xs transition-all duration-300 shadow-md"
              >
                <Link to="/contact" onClick={closeMobileMenu}>Start</Link>
              </Button>

              {/* Mobile menu button - Improved */}
              <button
                className="lg:hidden text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 relative z-50"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Completely redesigned */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="text-lg font-bold text-gray-900">Navigation</div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="px-6 py-4 space-y-1">
            {/* Mobile Services */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-full px-4 py-4 text-left text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 font-medium"
                onClick={() => {
                  closeMobileMenu();
                  if (location.pathname !== '/') {
                    window.location.href = '/#services';
                  } else {
                    setTimeout(() => {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                Services
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                </div>
              </button>
            </div>

            {/* Mobile About */}
            <div className="relative">
              <Link
                to="/about"
                className={`flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-200 font-medium ${
                  isActive("/about")
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
                onClick={closeMobileMenu}
              >
                About
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  isActive("/about") ? "bg-indigo-600" : "bg-indigo-100"
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isActive("/about") ? "bg-white" : "bg-indigo-600"
                  }`}></div>
                </div>
              </Link>
            </div>

            {/* Mobile Portfolio */}
            <div className="relative">
              <Link
                to="/portfolio"
                className={`flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-200 font-medium ${
                  isActive("/portfolio")
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
                onClick={closeMobileMenu}
              >
                Portfolio
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  isActive("/portfolio") ? "bg-indigo-600" : "bg-indigo-100"
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isActive("/portfolio") ? "bg-white" : "bg-indigo-600"
                  }`}></div>
                </div>
              </Link>
            </div>

            {/* Mobile Contact */}
            <div className="relative">
              <Link
                to="/contact"
                className={`flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-200 font-medium ${
                  isActive("/contact")
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
                onClick={closeMobileMenu}
              >
                Contact
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  isActive("/contact") ? "bg-indigo-600" : "bg-indigo-100"
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isActive("/contact") ? "bg-white" : "bg-indigo-600"
                  }`}></div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium py-4 text-base transition-all duration-300 shadow-lg"
            >
              <Link to="/contact" onClick={closeMobileMenu}>
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}



