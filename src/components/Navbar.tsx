import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const MobileMenu = () => (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetContent side="right" className="w-full sm:max-w-sm p-0 bg-white">
        <div className="flex flex-col h-full justify-center items-center space-y-6 p-8">
          <div className="text-center mb-10">
            <img 
              src="/images/logo.png" 
              alt="MedGAN Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <button
            onClick={() => handleNavClick('#about')}
            className="text-xl font-medium text-gray-800 hover:text-medgan-purple transition-colors focus:outline-none focus:text-medgan-purple w-full py-3 text-center border-b border-gray-100 hover:bg-gray-50 rounded-lg"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('#features')}
            className="text-xl font-medium text-gray-800 hover:text-medgan-purple transition-colors focus:outline-none focus:text-medgan-purple w-full py-3 text-center border-b border-gray-100 hover:bg-gray-50 rounded-lg"
          >
            Technology
          </button>
          <button
            onClick={() => handleNavClick('#ai-playground')}
            className="text-xl font-medium text-gray-800 hover:text-medgan-purple transition-colors focus:outline-none focus:text-medgan-purple w-full py-3 text-center border-b border-gray-100 hover:bg-gray-50 rounded-lg"
          >
            AI Playground
          </button>
          <button
            onClick={() => handleNavClick('#testimonials')}
            className="text-xl font-medium text-gray-800 hover:text-medgan-purple transition-colors focus:outline-none focus:text-medgan-purple w-full py-3 text-center border-b border-gray-100 hover:bg-gray-50 rounded-lg"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleNavClick('#contact')}
            className="text-xl font-medium text-gray-800 hover:text-medgan-purple transition-colors focus:outline-none focus:text-medgan-purple w-full py-3 text-center border-b border-gray-100 hover:bg-gray-50 rounded-lg"
          >
            Contact
          </button>
          <Link to="/ai-solutions" onClick={toggleMobileMenu} className="w-full mt-6">
            <Button className="bg-medgan-dark-blue hover:bg-medgan-purple transition-colors px-8 py-4 text-base w-full rounded-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-morphism py-2"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-auto">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="MedGAN Logo" 
              className={`h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 ${
                isScrolled ? "scale-95" : "scale-100"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => handleNavClick('#about')}
              className="text-gray-800 hover:text-medgan-purple transition-colors font-medium focus:outline-none focus:text-medgan-purple"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('#features')}
              className="text-gray-800 hover:text-medgan-purple transition-colors font-medium focus:outline-none focus:text-medgan-purple"
            >
              Technology
            </button>
            <button
              onClick={() => handleNavClick('#ai-playground')}
              className="text-gray-800 hover:text-medgan-purple transition-colors font-medium focus:outline-none focus:text-medgan-purple"
            >
              AI Playground
            </button>
            <button
              onClick={() => handleNavClick('#testimonials')}
              className="text-gray-800 hover:text-medgan-purple transition-colors font-medium focus:outline-none focus:text-medgan-purple"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-gray-800 hover:text-medgan-purple transition-colors font-medium focus:outline-none focus:text-medgan-purple"
            >
              Contact
            </button>
            <Link to="/ai-solutions">
              <Button className="bg-medgan-dark-blue hover:bg-medgan-purple transition-colors px-8 py-3 text-base">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && <MobileMenu />}
    </nav>
  );
};

export default Navbar;