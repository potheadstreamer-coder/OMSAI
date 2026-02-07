import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Award } from 'lucide-react';
import { companyInfo, certifications } from '../mock';

const Hero = () => {
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
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxzcGljZXN8ZW58MHx8fHwxNzcwNDMyNDY4fDA&ixlib=rb-4.1.0&q=85"
          alt="Premium Spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Serving 30+ Countries Worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Global Supply &<br />
            <span className="text-[#e76f51]">Sourcing Expert</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
            Your Trusted Partner for Export, Import, and Domestic/Global Sourcing
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-8 font-semibold tracking-wide">
            {companyInfo.tagline}
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-5 h-5 text-[#e76f51]" />
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="w-5 h-5 text-[#e76f51]" />
              <span className="text-sm font-medium">FSSAI Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="w-5 h-5 text-[#e76f51]" />
              <span className="text-sm font-medium">APEDA Registered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('products')}
              className="group bg-[#e76f51] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              View Products Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:shadow-2xl"
            >
              Request Quote
            </button>
          </div>
        </div>

        {/* Certification Badges - Desktop */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{cert.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{cert.code}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
