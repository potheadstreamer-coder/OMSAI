import React from 'react';
import { companyInfo } from '../mock';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1d3557] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={companyInfo.logo} 
                alt={companyInfo.name}
                className="h-16 w-16 object-contain bg-white rounded-full p-1"
              />
              <h3 className="text-xl font-bold text-[#e76f51]">{companyInfo.name}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium agro commodities, spices, and herbal products with global reach.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-[#e76f51] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#e76f51] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-[#e76f51] transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#e76f51] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#e76f51] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Basmati Rice</li>
              <li className="text-gray-300">Wheat & Pulses</li>
              <li className="text-gray-300">Premium Spices</li>
              <li className="text-gray-300">Herbal Products</li>
              <li className="text-gray-300">Organic Products</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e76f51] flex-shrink-0 mt-1" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#e76f51] flex-shrink-0 mt-1" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-[#e76f51] transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#e76f51] flex-shrink-0 mt-1" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-[#e76f51] transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#e76f51] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e76f51] transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e76f51] transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
