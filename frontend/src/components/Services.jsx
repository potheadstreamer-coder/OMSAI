import React from 'react';
import { services } from '../mock';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#f4f1de]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">
            Trade Consulting Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            New to international trade? We provide end-to-end consulting for export-import documentation, 
            market selection, and buyer identification.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#2d6a4f]/20"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-[#2d6a4f] group-hover:text-[#e76f51] transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#2d6a4f] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Global Trade Journey?</h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our expert team is here to guide you through every step of international commodity trading.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-[#e76f51] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
