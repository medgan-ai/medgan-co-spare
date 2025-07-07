import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Linkedin, Youtube, X, Instagram, Globe, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  const [showEmail, setShowEmail] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
    if (showWebsite) setShowWebsite(false);
    if (showPhone) setShowPhone(false);
  };

  const toggleWebsite = () => {
    setShowWebsite(!showWebsite);
    if (showEmail) setShowEmail(false);
    if (showPhone) setShowPhone(false);
  };

  const togglePhone = () => {
    setShowPhone(!showPhone);
    if (showEmail) setShowEmail(false);
    if (showWebsite) setShowWebsite(false);
  };

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
            
            <div className="flex items-center space-x-2">
              {/* Email */}
              <div className="flex items-center">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleEmail}
                  className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors duration-300"
                  aria-label="Show email address"
                >
                  <Mail className="w-5 h-5" />
                </motion.button>
                <AnimatePresence>
                  {showEmail && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 overflow-hidden whitespace-nowrap text-sm bg-medgan-light-blue text-medgan-blue px-2 py-1 rounded"
                    >
                      contact@medgan.co
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Website */}
              <div className="flex items-center">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleWebsite}
                  className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors duration-300"
                  aria-label="Show website URL"
                >
                  <Globe className="w-5 h-5" />
                </motion.button>
                <AnimatePresence>
                  {showWebsite && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 overflow-hidden whitespace-nowrap text-sm bg-medgan-light-blue text-medgan-blue px-2 py-1 rounded"
                    >
                      medgan.co
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Phone */}
              <div className="flex items-center">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePhone}
                  className="w-10 h-10 rounded-full bg-medgan-light-blue flex items-center justify-center text-medgan-blue hover:bg-medgan-blue hover:text-white transition-colors duration-300"
                  aria-label="Show phone number"
                >
                  <Phone className="w-5 h-5" />
                </motion.button>
                <AnimatePresence>
                  {showPhone && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 overflow-hidden whitespace-nowrap text-sm bg-medgan-light-blue text-medgan-blue px-2 py-1 rounded"
                    >
                      +962 785 120 140
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Rest of your footer content remains the same */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.linkedin.com/company/medgan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-medgan-blue transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/company.medganai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-medgan-blue transition-colors"
                >
                  <Facebook className="w-4 h-4 mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/medgan.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-medgan-blue transition-colors"
                >
                  <Instagram className="w-4 h-4 mr-2" /> Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/medganai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-medgan-blue transition-colors"
                >
                  <X className="w-4 h-4 mr-2" /> X (Twitter)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@MedGANs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-medgan-blue transition-colors"
                >
                  <Youtube className="w-4 h-4 mr-2" /> YouTube
                </a>
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
                <Link to="/ai-solutions" className="text-gray-600 hover:text-medgan-blue transition-colors">AI Solutions</Link>
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