
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

  const MobileMenu = () => (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetContent side="right" className="w-full sm:max-w-sm p-0">
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <a
            href="#about"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-800 hover:text-medgan-blue"
          >
            About
          </a>
          <a
            href="#features"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-800 hover:text-medgan-blue"
          >
            Technology
          </a>
          <a
            href="#team"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-800 hover:text-medgan-blue"
          >
            Team
          </a>
          <a
            href="#contact"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-800 hover:text-medgan-blue"
          >
            Contact
          </a>
          <Link to="/ai-solutions" onClick={toggleMobileMenu}>
            <Button className="bg-medgan-blue hover:bg-medgan-dark-blue transition-colors">
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
          : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medgan-blue to-medgan-dark-blue">
              MedGAN
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-800 hover:text-medgan-blue transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-800 hover:text-medgan-blue transition-colors"
            >
              Technology
            </a>
            <a
              href="#team"
              className="text-gray-800 hover:text-medgan-blue transition-colors"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-medgan-blue transition-colors"
            >
              Contact
            </a>
            <Link to="/ai-solutions">
              <Button className="bg-medgan-blue hover:bg-medgan-dark-blue transition-colors">
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
