// Main Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    renderWebsite();
    lucide.createIcons();
});

function renderWebsite() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        ${renderHero()}
        ${renderWhyChooseUs()}
        ${renderProducts()}
        ${renderManufacturing()}
        ${renderServices()}
        ${renderContact()}
        ${renderFooter()}
    `;
    
    // Re-initialize icons after content is added
    setTimeout(() => lucide.createIcons(), 100);
    
    // Initialize event listeners
    initializeEventListeners();
}

function renderHero() {
    return `
    <section id="home" class="relative min-h-[85vh] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxzcGljZXN8ZW58MHx8fHwxNzcwNDMyNDY4fDA&ixlib=rb-4.1.0&q=85" alt="Premium Spices" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2 bg-[#2d6a4f]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                    <i data-lucide="globe" class="w-4 h-4"></i>
                    <span class="text-sm font-medium">Serving Domestic & Worldwide</span>
                </div>
                
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Global Supply &<br>
                    <span class="hero-title text-[#e76f51]">Sourcing Experts</span>
                </h1>
                
                <p class="text-lg md:text-xl text-white font-bold mb-8 hero-title">${SITE_DATA.company.tagline}</p>
                
                <div class="flex flex-wrap gap-6 mb-10">
                    <div class="flex items-center gap-2 text-white">
                        <i data-lucide="shield-check" class="w-5 h-5 text-[#e76f51]"></i>
                        <span class="text-sm font-medium">ISO Certified</span>
                    </div>
                    <div class="flex items-center gap-2 text-white">
                        <i data-lucide="award" class="w-5 h-5 text-[#e76f51]"></i>
                        <span class="text-sm font-medium">FSSAI Licensed</span>
                    </div>
                    <div class="flex items-center gap-2 text-white">
                        <i data-lucide="award" class="w-5 h-5 text-[#e76f51]"></i>
                        <span class="text-sm font-medium">EXIM Code</span>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#products" class="group bg-[#e76f51] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                        View Products Catalog
                        <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <a href="#contact" class="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:shadow-2xl text-center">
                        Request Quote
                    </a>
                </div>
            </div>
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
    `;
}

function renderWhyChooseUs() {
    return `
    <section id="about" class="py-20 bg-gradient-to-b from-white to-[#f4f1de]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">Why Partner With Us?</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    With over 7 years of experience in international commodity trading, we deliver excellence at every step.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${SITE_DATA.whyChooseUs.map(item => `
                    <div class="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0">
                                <div class="w-14 h-14 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2d6a4f] transition-colors duration-300">
                                    <i data-lucide="${item.icon}" class="w-7 h-7 text-[#2d6a4f] group-hover:text-white transition-colors duration-300"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2d6a4f] transition-colors">${item.title}</h3>
                                <p class="text-gray-600 leading-relaxed">${item.description}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-20 bg-[#2d6a4f] rounded-2xl p-12 text-white">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    ${SITE_DATA.stats.map(stat => `
                        <div class="text-center">
                            <div class="text-4xl md:text-5xl font-bold text-[#e76f51] mb-2">${stat.value}</div>
                            <div class="text-sm md:text-base text-gray-200">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>
    `;
}

function renderProducts() {
    const allProducts = [
        ...SITE_DATA.products.agro.map(p => ({...p, tab: 'agro'})),
        ...SITE_DATA.products.spices.map(p => ({...p, tab: 'spices'})),
        ...SITE_DATA.products.herbal.map(p => ({...p, tab: 'herbal'}))
    ];
    
    return `
    <section id="products" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">Our Product Range</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Premium quality products sourced directly from trusted farms and manufacturers, meeting international standards.
                </p>
            </div>
            
            <div class="flex justify-center mb-12">
                <div class="inline-flex bg-[#f4f1de] rounded-lg p-1">
                    <button onclick="filterProducts('agro')" class="product-tab px-6 py-3 rounded-md font-medium transition-all" data-tab="agro">Agro Commodities</button>
                    <button onclick="filterProducts('spices')" class="product-tab px-6 py-3 rounded-md font-medium transition-all" data-tab="spices">Spices & Condiments</button>
                    <button onclick="filterProducts('herbal')" class="product-tab px-6 py-3 rounded-md font-medium transition-all" data-tab="herbal">Herbal Products</button>
                </div>
            </div>
            
            <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${allProducts.map((product, idx) => `
                    <div class="product-card group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100" data-category="${product.tab}" style="${product.tab !== 'agro' ? 'display:none;' : ''}">
                        <div class="relative h-64 overflow-hidden">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute top-4 right-4">
                                <span class="bg-[#2d6a4f] text-white px-3 py-1 rounded-full text-sm font-semibold">${product.category}</span>
                            </div>
                        </div>
                        
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2d6a4f] transition-colors">${product.name}</h3>
                            <p class="text-gray-600 text-sm mb-4 line-clamp-2">${product.description}</p>
                            
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${product.incoterms.map(term => `
                                    <span class="px-2 py-1 bg-[#f4f1de] text-[#2d6a4f] text-xs font-medium rounded">${term}</span>
                                `).join('')}
                            </div>
                            
                            <div class="flex gap-3">
                                <button onclick="showProductDetails(${idx})" class="flex-1 bg-[#e76f51] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#d35d3f] transition-colors text-sm">
                                    View Specs
                                </button>
                                <a href="#contact" class="flex-1 border-2 border-[#2d6a4f] text-[#2d6a4f] py-2 px-4 rounded-lg font-medium hover:bg-[#2d6a4f] hover:text-white transition-colors text-sm text-center">
                                    Inquire
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <div id="product-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onclick="closeProductModal(event)">
        <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
            <div id="modal-content"></div>
        </div>
    </div>
    `;
}

function renderManufacturing() {
    return `
    <section id="manufacturing" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">
                    Harvesting Shilajit to Producing Resin
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Premium quality Shilajit resin sourced from the pristine Nepal Himalayas, processed with traditional wisdom and modern science, certified with 82% fulvic acid for B2B worldwide distribution.
                </p>
            </div>
            
            <div class="mb-16 rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnN8ZW58MHx8fHwxNzcwNDQ3OTE5fDA&ixlib=rb-4.1.0&q=85" alt="Nepal Himalayan Mountains" class="w-full h-96 object-cover">
            </div>
            
            <div class="bg-gradient-to-r from-[#2d6a4f] to-[#1d4f37] rounded-2xl p-12 text-center text-white">
                <h3 class="text-3xl md:text-4xl font-bold mb-4">Ready for B2B Partnership?</h3>
                <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Partner with us for authentic Himalayan Shilajit resin with 82% fulvic acid, complete documentation, and worldwide shipping for your business needs.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" class="bg-[#e76f51] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        Request Bulk Quote
                    </a>
                    <a href="#contact" class="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                        Request Lab Reports
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}

function renderServices() {
    return `
    <section id="services" class="py-20 bg-gradient-to-b from-[#f4f1de]/30 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">Trade Consulting Services</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    New to international trade? We provide end-to-end consulting for export-import documentation, market selection, and buyer identification.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${SITE_DATA.services.map(service => `
                    <div class="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#2d6a4f]/20">
                        <h3 class="text-2xl font-bold text-[#2d6a4f] group-hover:text-[#e76f51] transition-colors mb-3">${service.title}</h3>
                        <p class="text-gray-600 text-base mb-6">${service.description}</p>
                        <ul class="space-y-3">
                            ${service.features.map(feature => `
                                <li class="flex items-start gap-3">
                                    <i data-lucide="check-circle-2" class="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5"></i>
                                    <span class="text-gray-700">${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-16 bg-[#2d6a4f] rounded-2xl p-12 text-center text-white">
                <h3 class="text-3xl font-bold mb-4">Ready to Start Your Global Trade Journey?</h3>
                <p class="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                    Our expert team is here to guide you through every step of international commodity trading.
                </p>
                <a href="#contact" class="inline-block bg-[#e76f51] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    Schedule Free Consultation
                </a>
            </div>
        </div>
    </section>
    `;
}

function renderContact() {
    return `
    <section id="contact" class="py-20 bg-gradient-to-b from-white to-[#f4f1de]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[#2d6a4f] mb-4">Request a Quote</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Fill out the form below and our team will get back to you within 24 hours with competitive pricing and product specifications.
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-1 space-y-8">
                    <div>
                        <h3 class="text-2xl font-bold text-[#2d6a4f] mb-6">Get In Touch</h3>
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="mail" class="w-6 h-6 text-[#2d6a4f]"></i>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-900 mb-1">Email</div>
                                    <a href="mailto:${SITE_DATA.company.email}" class="text-gray-600 hover:text-[#2d6a4f] transition-colors">${SITE_DATA.company.email}</a>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="phone" class="w-6 h-6 text-[#2d6a4f]"></i>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-900 mb-1">Phone</div>
                                    <a href="tel:${SITE_DATA.company.phone}" class="text-gray-600 hover:text-[#2d6a4f] transition-colors">${SITE_DATA.company.phone}</a>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-[#2d6a4f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="map-pin" class="w-6 h-6 text-[#2d6a4f]"></i>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-900 mb-1">Office</div>
                                    <p class="text-gray-600">${SITE_DATA.company.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-[#25D366]/10 border-2 border-[#25D366] rounded-xl p-6">
                        <div class="flex items-center gap-3 mb-3">
                            <i data-lucide="message-square" class="w-6 h-6 text-[#25D366]"></i>
                            <h4 class="font-bold text-gray-900">Quick Response</h4>
                        </div>
                        <p class="text-sm text-gray-600 mb-4">
                            Need urgent assistance? Chat with us directly on WhatsApp for instant quotes and inquiries.
                        </p>
                        <button onclick="openWhatsApp()" class="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2">
                            <i data-lucide="message-square" class="w-5 h-5"></i>
                            Chat on WhatsApp
                        </button>
                    </div>
                </div>
                
                <div class="lg:col-span-2">
                    <form id="contact-form" class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Name / Company Name *</label>
                                <input type="text" name="name" required class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none" placeholder="John Doe / ABC Trading Co.">
                            </div>
                            
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Email Address *</label>
                                <input type="email" name="email" required class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none" placeholder="john@example.com">
                            </div>
                            
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Phone / WhatsApp Number *</label>
                                <input type="tel" name="phone" required class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none" placeholder="+1-234-567-8900">
                            </div>
                            
                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Inquiry Type *</label>
                                <select name="inquiry_type" required class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none">
                                    <option value="">Select inquiry type</option>
                                    ${SITE_DATA.inquiryTypes.map(type => `
                                        <option value="${type}">${type}</option>
                                    `).join('')}
                                </select>
                            </div>
                            
                            <div class="md:col-span-2 space-y-2">
                                <label class="text-sm font-semibold text-gray-700">Describe Your Requirement *</label>
                                <textarea name="message" required rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none resize-none" placeholder="Please specify: Product name, Quantity, Destination country, Required specifications, Preferred Incoterms (FOB/CIF/CFR), etc."></textarea>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <button type="submit" class="w-full bg-[#e76f51] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#d35d3f] transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2">
                                <i data-lucide="send" class="w-5 h-5"></i>
                                Send Inquiry
                            </button>
                            <p class="text-sm text-gray-500 text-center mt-4">
                                We respect your privacy and will never share your information with third parties.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
}

function renderFooter() {
    const currentYear = new Date().getFullYear();
    return `
    <footer class="bg-[#1d3557] text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <img src="${SITE_DATA.company.logo}" alt="${SITE_DATA.company.name}" class="h-16 w-16 object-contain bg-white rounded-full p-1">
                        <h3 class="text-xl font-bold text-[#e76f51]">${SITE_DATA.company.name}</h3>
                    </div>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                        Your trusted partner for premium agro commodities, spices, and herbal products with global reach.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                            <i data-lucide="facebook" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                            <i data-lucide="twitter" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                            <i data-lucide="linkedin" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#e76f51] transition-colors">
                            <i data-lucide="instagram" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="#home" class="text-gray-300 hover:text-[#e76f51] transition-colors">Home</a></li>
                        <li><a href="#about" class="text-gray-300 hover:text-[#e76f51] transition-colors">Why Us</a></li>
                        <li><a href="#products" class="text-gray-300 hover:text-[#e76f51] transition-colors">Products</a></li>
                        <li><a href="#manufacturing" class="text-gray-300 hover:text-[#e76f51] transition-colors">Manufacturing</a></li>
                        <li><a href="#services" class="text-gray-300 hover:text-[#e76f51] transition-colors">Services</a></li>
                        <li><a href="#contact" class="text-gray-300 hover:text-[#e76f51] transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Our Products</h4>
                    <ul class="space-y-3">
                        <li class="text-gray-300">Basmati Rice</li>
                        <li class="text-gray-300">Wheat & Pulses</li>
                        <li class="text-gray-300">Premium Spices</li>
                        <li class="text-gray-300">Herbal Products</li>
                        <li class="text-gray-300">Organic Products</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Contact Us</h4>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <i data-lucide="map-pin" class="w-5 h-5 text-[#e76f51] flex-shrink-0 mt-1"></i>
                            <span class="text-gray-300">${SITE_DATA.company.address}</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <i data-lucide="mail" class="w-5 h-5 text-[#e76f51] flex-shrink-0 mt-1"></i>
                            <a href="mailto:${SITE_DATA.company.email}" class="text-gray-300 hover:text-[#e76f51] transition-colors">${SITE_DATA.company.email}</a>
                        </div>
                        <div class="flex items-start gap-3">
                            <i data-lucide="phone" class="w-5 h-5 text-[#e76f51] flex-shrink-0 mt-1"></i>
                            <a href="tel:${SITE_DATA.company.phone}" class="text-gray-300 hover:text-[#e76f51] transition-colors">${SITE_DATA.company.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-white/10 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-gray-400 text-sm">© ${currentYear} ${SITE_DATA.company.name}. All Rights Reserved.</p>
                    <div class="flex gap-6 text-sm">
                        <a href="#" class="text-gray-400 hover:text-[#e76f51] transition-colors">Privacy Policy</a>
                        <a href="#" class="text-gray-400 hover:text-[#e76f51] transition-colors">Terms & Conditions</a>
                        <a href="#" class="text-gray-400 hover:text-[#e76f51] transition-colors">Shipping Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Event Listeners and Functions
function initializeEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Set default active tab
    filterProducts('agro');
}

function filterProducts(category) {
    // Update tab buttons
    document.querySelectorAll('.product-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === category) {
            tab.classList.add('bg-[#2d6a4f]', 'text-white');
            tab.classList.remove('text-gray-600');
        } else {
            tab.classList.remove('bg-[#2d6a4f]', 'text-white');
            tab.classList.add('text-gray-600');
        }
    });
    
    // Show/hide products
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function showProductDetails(index) {
    const allProducts = [
        ...SITE_DATA.products.agro,
        ...SITE_DATA.products.spices,
        ...SITE_DATA.products.herbal
    ];
    const product = allProducts[index];
    
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="p-8">
            <div class="flex justify-between items-start mb-6">
                <h2 class="text-2xl font-bold text-[#2d6a4f]">${product.name}</h2>
                <button onclick="closeProductModal()" class="text-gray-400 hover:text-gray-600">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            
            <div class="relative h-64 rounded-lg overflow-hidden mb-6">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
            
            <div class="space-y-6">
                <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Description</h4>
                    <p class="text-gray-600">${product.description}</p>
                </div>
                
                <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Technical Specifications</h4>
                    <div class="bg-[#f4f1de]/50 rounded-lg p-4 space-y-2">
                        ${Object.entries(product.specs).map(([key, value]) => `
                            <div class="flex justify-between border-b border-gray-200 pb-2 last:border-0">
                                <span class="text-gray-600">${key}:</span>
                                <span class="font-medium text-gray-900">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Available Incoterms</h4>
                    <div class="flex gap-2">
                        ${product.incoterms.map(term => `
                            <span class="bg-[#2d6a4f] text-white px-3 py-1 rounded-full text-sm font-semibold">${term}</span>
                        `).join('')}
                    </div>
                </div>
                
                <button onclick="scrollToContact()" class="w-full bg-[#e76f51] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d35d3f] transition-colors flex items-center justify-center gap-2">
                    Request Quote for ${product.name}
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('product-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeProductModal(event) {
    if (!event || event.target.id === 'product-modal') {
        document.getElementById('product-modal').classList.add('hidden');
    }
}

function scrollToContact() {
    closeProductModal();
    setTimeout(() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

function openWhatsApp() {
    const message = `Hi, I'm interested in ${SITE_DATA.company.name}'s products and services.`;
    const phoneNumber = SITE_DATA.company.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Create mailto link with form data
    const subject = `${data.inquiry_type} - Inquiry from ${data.name}`;
    const body = `
Name/Company: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Inquiry Type: ${data.inquiry_type}

Message:
${data.message}
    `;
    
    // Open mailto
    window.location.href = `mailto:${SITE_DATA.company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success message
    alert('Thank you for your inquiry! Your email client should open. We will get back to you within 24 hours.');
    
    // Reset form
    e.target.reset();
}

// Make functions globally available
window.filterProducts = filterProducts;
window.showProductDetails = showProductDetails;
window.closeProductModal = closeProductModal;
window.scrollToContact = scrollToContact;
window.openWhatsApp = openWhatsApp;
