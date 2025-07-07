import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, X, Instagram, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medgan-blue to-medgan-dark-blue">
                MedGAN
              </Link>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Revolutionizing industries with next-generation AI solutions, we leverage advanced generative models and deep expertise to deliver transformative tools that empower professionals.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/company/medgan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/medgan.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/medganai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on X (Twitter)"
              >
                <X className="w-5 h-5" />
              </a>
              <a 
                href="http://www.medgan.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Visit our website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@medgan.co" 
                className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Email us at contact@medgan.co"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-solutions" className="text-gray-600 hover:text-medgan-blue transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="text-gray-600 hover:text-medgan-blue transition-colors">Data Imaging</Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="text-gray-600 hover:text-medgan-blue transition-colors">Data Analysis</Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="text-gray-600 hover:text-medgan-blue transition-colors">Research Tools</Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="text-gray-600 hover:text-medgan-blue transition-colors">All Fields Integration</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-medgan-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-medgan-blue transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-medgan-blue transition-colors">Press</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-medgan-blue transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-medgan-blue transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-medgan-blue transition-colors">FAQs</Link>
              </li>
              <li>
                <a href="mailto:contact@medgan.co" className="text-gray-600 hover:text-medgan-blue transition-colors">Documentation</a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-medgan-blue transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-medgan-blue transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MedGAN AI. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-medgan-blue text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-medgan-blue text-sm transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-medgan-blue text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;