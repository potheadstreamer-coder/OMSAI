import React, { useState } from 'react';
import { companyInfo, inquiryTypes } from '../mock';
import { Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Quote request submitted successfully! Our team will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${companyInfo.name}'s products and services.`;
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#f4f1de]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours with competitive pricing and product specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2d6a4f] mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2d6a4f]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-[#2d6a4f] transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2d6a4f]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-gray-600 hover:text-[#2d6a4f] transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2d6a4f]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office</div>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366]/10 border-2 border-[#25D366] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-6 h-6 text-[#25D366]" />
                <h4 className="font-bold text-gray-900">Quick Response</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Need urgent assistance? Chat with us directly on WhatsApp for instant quotes and inquiries.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Name / Company Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe / ABC Trading Co."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone / WhatsApp Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1-234-567-8900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Inquiry Type *
                  </label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type, idx) => (
                        <SelectItem key={idx} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Describe Your Requirement *
                  </label>
                  <Textarea
                    placeholder="Please specify: Product name, Quantity, Destination country, Required specifications, Preferred Incoterms (FOB/CIF/CFR), etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e76f51] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
