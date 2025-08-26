import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border transition-all duration-300" style={{ fontFamily: 'Sansation, sans-serif' }}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-300 hover:scale-105" onClick={closeMobileMenu}>
              <span className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Pixelify Sans, monospace' }}>PixelWings</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">Home</Link>
              <Link to="/services" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">Services</Link>
              <Link to="/about" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">About Us</Link>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <Link to="/contact">
                <Button variant="default" className="bg-primary hover:bg-primary/90 text-white shadow-glow transition-all duration-300 hover:scale-105">
                  Contact us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-primary transition-all duration-300 hover:scale-105 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden glass border-t border-border`}>
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-primary transition-all duration-300 hover:scale-105 py-2 border-b border-border/30"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-primary transition-all duration-300 hover:scale-105 py-2 border-b border-border/30"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-primary transition-all duration-300 hover:scale-105 py-2 border-b border-border/30"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <div className="pt-2">
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-white shadow-glow transition-all duration-300 hover:scale-105">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};