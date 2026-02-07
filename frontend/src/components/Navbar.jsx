import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../mock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
      }`}>
        {/* Top bar with contact info */}
        <div className="bg-[#2d6a4f] text-white py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-[#e76f51] transition-colors">
                <Mail className="w-4 h-4" />
                {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-[#e76f51] transition-colors">
                <Phone className="w-4 h-4" />
                {companyInfo.phone}
              </a>
            </div>
            <div className="text-sm">
              Trusted Global Trading Partner Since 2009
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <img 
                  src={companyInfo.logo} 
                  alt={companyInfo.name}
                  className="h-16 w-16 object-contain"
                />
                <span className="text-xl font-bold text-[#2d6a4f] hidden md:block">
                  {companyInfo.name}
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-[#2d6a4f] font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e76f51] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#e76f51] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-[#2d6a4f] transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#f4f1de] hover:text-[#2d6a4f] rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center bg-[#e76f51] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#d35d3f] transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 md:h-[100px]"></div>
    </>
  );
};

export default Navbar;
