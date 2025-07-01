
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medgan-blue to-medgan-dark-blue">
                MedGAN
              </Link>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Revolutionizing industries with next-generation AI solutions, we leverage advanced generative models and deep expertise to deliver transformative tools that empower professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
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
                <Link to="/" className="text-gray-600 hover:text-medgan-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-medgan-blue transition-colors">Team</Link>
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
                <Link to="/" className="text-gray-600 hover:text-medgan-blue transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-medgan-blue transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-medgan-blue transition-colors">Documentation</Link>
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
