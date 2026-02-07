import React from 'react';
import { Mountain, FlaskConical, CheckCircle, Award, Shield, Droplet } from 'lucide-react';

const Manufacturing = () => {
  const productionSteps = [
  {
    id: 1,
    icon: Mountain,
    title: "Source Collection",
    description: "Pure Shilajit resin is carefully sourced from pristine Himalayan mountain ranges in Nepal at altitudes above 3,000 meters, where mineral-rich rocks naturally exude this precious substance."
  },
  {
    id: 2,
    icon: Droplet,
    title: "Purification Process",
    description: "Raw Shilajit undergoes traditional purification methods combined with modern filtration techniques to remove impurities while preserving its natural bioactive compounds and minerals."
  },
  {
    id: 3,
    icon: FlaskConical,
    title: "Laboratory Testing",
    description: "Each batch is rigorously tested in certified laboratories for purity, heavy metals, microbial content, and fulvic acid concentration to ensure pharmaceutical-grade quality standards."
  },
  {
    id: 4,
    icon: Award,
    title: "Quality Certification",
    description: "Our Shilajit resin is certified with 82% fulvic acid content, exceeding industry standards. Lab reports are provided with every batch for complete transparency and traceability."
  }];


  const specifications = {
    "Fulvic Acid Content": "82% (Lab Certified)",
    "Form": "Pure Resin",
    "Origin": "Nepal Himalayan Mountains",
    "Altitude": "3,000m - 5,000m",
    "Purity": "99.5% Pure",
    "Heavy Metals": "Below Detection Limits",
    "Microbiological": "USP Standards Compliant",
    "Packaging": "Food-grade sealed containers"
  };

  const benefits = [
  "High bioavailability due to 82% fulvic acid",
  "Rich in 85+ trace minerals and compounds",
  "Traditional Ayurvedic adaptogen",
  "Suitable for pharmaceutical and nutraceutical industries",
  "Ethically sourced from sustainable locations",
  "Complete documentation and COA provided"];


  return (
    <section id="manufacturing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="md:text-5xl !font-bold !text-4xl mb-4 text-[#2d6a4f]">Harvesting Shilajit to Producing Resin

          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium quality Shilajit resin sourced from the pristine Nepal Himalayas, processed with traditional wisdom and modern science, certified with 82% fulvic acid for B2B worldwide distribution.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnN8ZW58MHx8fHwxNzcwNDQ3OTE5fDA&ixlib=rb-4.1.0&q=85"
            alt="Nepal Himalayan Mountains"
            className="w-full h-96 object-cover" />

        </div>

        {/* Production Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#2d6a4f] mb-12 text-center">
            Our Production Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative bg-gradient-to-br from-[#f4f1de]/50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#2d6a4f]/10">

                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#e76f51] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="w-16 h-16 bg-[#2d6a4f]/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#2d6a4f]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>);

            })}
          </div>
        </div>

        {/* Specifications and Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Specifications */}
          <div className="bg-gradient-to-br from-[#2d6a4f]/5 to-white rounded-2xl p-8 border-2 border-[#2d6a4f]/20">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#2d6a4f]" />
              <h3 className="text-2xl font-bold text-[#2d6a4f]">
                Technical Specifications
              </h3>
            </div>
            <div className="space-y-3">
              {Object.entries(specifications).map(([key, value]) =>
              <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700 font-medium">{key}:</span>
                  <span className="text-gray-900 font-semibold">{value}</span>
                </div>
              )}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-[#e76f51]/5 to-white rounded-2xl p-8 border-2 border-[#e76f51]/20">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#e76f51]" />
              <h3 className="text-2xl font-bold text-[#2d6a4f]">
                Key Benefits & Features
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) =>
              <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Quality Images Grid */}
        <div className="">
          <h3 className="text-3xl font-bold text-[#2d6a4f] mb-8 text-center">
            Quality Assurance & Testing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1768498950658-87ecfe232b59?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZ3xlbnwwfHx8fDE3NzA0NDc5Mzh8MA&ixlib=rb-4.1.0&q=85"
                alt="Laboratory Testing"
                className="" />

              <div className="bg-white p-4">
                <h4 className="font-bold text-gray-900">Professional Lab Testing</h4>
                <p className="text-sm text-gray-600 mt-2">Every batch undergoes rigorous quality control</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1599652749620-e45b7f38988e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHxsYWJvcmF0b3J5JTIwdGVzdGluZ3xlbnwwfHx8fDE3NzA0NDc5Mzh8MA&ixlib=rb-4.1.0&q=85"
                alt="Advanced Equipment"
                className="" />

              <div className="bg-white p-4">
                <h4 className="font-bold text-gray-900">Advanced Equipment</h4>
                <p className="text-sm text-gray-600 mt-2">State-of-the-art testing facilities</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1631377955049-770a6c377bce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxoaW1hbGF5YW4lMjBtb3VudGFpbnN8ZW58MHx8fHwxNzcwNDQ3OTE5fDA&ixlib=rb-4.1.0&q=85"
                alt="Himalayan Source"
                className="" />

              <div className="bg-white p-4">
                <h4 className="font-bold text-gray-900">Pristine Source</h4>
                <p className="text-sm text-gray-600 mt-2">Sourced from high-altitude Nepal Himalayas</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#2d6a4f] to-[#1d4f37] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for B2B Partnership?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with us for authentic Himalayan Shilajit resin with 82% fulvic acid, complete documentation, and worldwide shipping for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="bg-[#e76f51] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl hover:scale-105">

              Request Bulk Quote
            </button>
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
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">

              Request Lab Reports
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default Manufacturing;