import React, { useState } from 'react';
import { products } from '../mock';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('agro');

  const allProducts = [...products.agro, ...products.spices, ...products.herbal];

  const categoryConfig = {
    agro: { label: 'Agro Commodities', products: products.agro },
    spices: { label: 'Spices & Condiments', products: products.spices },
    herbal: { label: 'Herbal Products', products: products.herbal }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality products sourced directly from trusted farms and manufacturers, meeting international standards.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto p-1 bg-[#f4f1de]">
            {Object.entries(categoryConfig).map(([key, config]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="text-sm md:text-base py-3 data-[state=active]:bg-[#2d6a4f] data-[state=active]:text-white"
              >
                {config.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(categoryConfig).map(([key, config]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {config.products.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#2d6a4f] text-white">
                          {product.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2d6a4f] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Incoterms */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.incoterms.map((term, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#f4f1de] text-[#2d6a4f] text-xs font-medium rounded"
                          >
                            {term}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 bg-[#e76f51] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#d35d3f] transition-colors text-sm"
                        >
                          View Specs
                        </button>
                        <button
                          onClick={scrollToContact}
                          className="flex-1 border-2 border-[#2d6a4f] text-[#2d6a4f] py-2 px-4 rounded-lg font-medium hover:bg-[#2d6a4f] hover:text-white transition-colors text-sm"
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#2d6a4f]">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Specifications</h4>
                  <div className="bg-[#f4f1de]/50 rounded-lg p-4 space-y-2">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-200 pb-2 last:border-0">
                        <span className="text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Incoterms */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Available Incoterms</h4>
                  <div className="flex gap-2">
                    {selectedProduct.incoterms.map((term, idx) => (
                      <Badge key={idx} className="bg-[#2d6a4f] text-white">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    scrollToContact();
                  }}
                  className="w-full bg-[#e76f51] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d35d3f] transition-colors flex items-center justify-center gap-2"
                >
                  Request Quote for {selectedProduct.name}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
