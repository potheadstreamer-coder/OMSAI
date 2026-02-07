import React from 'react';
import { ShieldCheck, Globe, TrendingDown, Package, Users, CreditCard } from 'lucide-react';
import { whyChooseUs } from '../mock';

const iconMap = {
  'shield-check': ShieldCheck,
  'globe': Globe,
  'trending-down': TrendingDown,
  'package': Package,
  'users': Users,
  'credit-card': CreditCard
};

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#f4f1de]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over 15 years of experience in international commodity trading, we deliver excellence at every step.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2d6a4f] transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-[#2d6a4f] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2d6a4f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-[#2d6a4f] rounded-2xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e76f51] mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e76f51] mb-2">30+</div>
              <div className="text-sm md:text-base text-gray-200">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e76f51] mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-200">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e76f51] mb-2">100K+</div>
              <div className="text-sm md:text-base text-gray-200">MT Traded Annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
