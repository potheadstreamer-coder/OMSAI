// Mock data for AgroTrade Global

export const companyInfo = {
  name: "AgroTrade Global",
  tagline: "Connecting Global Markets with Premium Agro Commodities",
  email: "contact@agrotrade.com",
  phone: "+91-123-456-7890",
  whatsapp: "+91-123-456-7890",
  address: "Mumbai, Maharashtra, India"
};

export const certifications = [
  { name: "ISO Certified", code: "ISO 9001:2015" },
  { name: "FSSAI Licensed", code: "Lic. No. 12345678901234" },
  { name: "APEDA Registered", code: "Reg. No. APEDA/2024" },
  { name: "Organic Certified", code: "India Organic" }
];

export const products = {
  agro: [
    {
      id: 1,
      name: "Basmati Rice",
      category: "Agro Commodities",
      description: "Premium quality aged Basmati rice with extra-long grains and aromatic fragrance.",
      specifications: {
        variety: "1121 Golden Sella / White Sella",
        grainLength: "8.3mm - 8.4mm",
        moisture: "12% Max",
        brokens: "1% Max",
        purity: "95% Min"
      },
      image: "https://images.unsplash.com/photo-1686820740687-426a7b9b2043?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zfGVufDB8fHx8MTc3MDQzMjQ3M3ww&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 2,
      name: "Non-Basmati Rice",
      category: "Agro Commodities",
      description: "IR64, Sona Masoori, and Swarna varieties suitable for daily consumption.",
      specifications: {
        variety: "IR64 Parboiled / Raw",
        grainLength: "6.0mm - 6.2mm",
        moisture: "14% Max",
        brokens: "5% Max",
        purity: "95% Min"
      },
      image: "https://images.pexels.com/photos/6086557/pexels-photo-6086557.jpeg",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 3,
      name: "Wheat",
      category: "Agro Commodities",
      description: "High-protein wheat suitable for flour milling and baking.",
      specifications: {
        variety: "Sharbati / Lokwan",
        protein: "11-12%",
        moisture: "12% Max",
        admixture: "2% Max",
        foreignMatter: "1% Max"
      },
      image: "https://images.unsplash.com/photo-1603106116068-02fc27fe5131?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw0fHxyaWNlJTIwZ3JhaW5zfGVufDB8fHx8MTc3MDQzMjQ3M3ww&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF", "EXW"]
    },
    {
      id: 4,
      name: "Pulses",
      category: "Agro Commodities",
      description: "Wide range of pulses including Chickpeas, Lentils, and Kidney Beans.",
      specifications: {
        variety: "Chickpeas / Toor Dal / Moong Dal",
        moisture: "12% Max",
        admixture: "1% Max",
        damaged: "2% Max",
        shriveled: "3% Max"
      },
      image: "https://images.pexels.com/photos/6086556/pexels-photo-6086556.jpeg",
      incoterms: ["FOB", "CIF"]
    }
  ],
  spices: [
    {
      id: 5,
      name: "Turmeric Powder",
      category: "Spices",
      description: "Premium quality turmeric with high curcumin content for food and pharmaceutical use.",
      specifications: {
        curcumin: "3-5%",
        moisture: "10% Max",
        totalAsh: "7% Max",
        acidInsoluble: "1% Max",
        color: "Golden Yellow"
      },
      image: "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxzcGljZXN8ZW58MHx8fHwxNzcwNDMyNDY4fDA&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 6,
      name: "Black Pepper",
      category: "Spices",
      description: "Bold quality black pepper with high piperine content and strong aroma.",
      specifications: {
        bulkDensity: "500-600 GL",
        moisture: "12% Max",
        piperine: "4-5%",
        lightBerries: "2% Max",
        extraneous: "0.5% Max"
      },
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxzcGljZXN8ZW58MHx8fHwxNzcwNDMyNDY4fDA&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 7,
      name: "Green Cardamom",
      category: "Spices",
      description: "Premium Alleppey Green Cardamom with bold size and natural color.",
      specifications: {
        grade: "Alleppey Green Bold (AGB)",
        size: "7mm - 8mm",
        moisture: "10% Max",
        volatile: "8% Min",
        color: "Natural Green"
      },
      image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHw0fHxzcGljZXN8ZW58MHx8fHwxNzcwNDMyNDY4fDA&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 8,
      name: "Cumin Seeds",
      category: "Spices",
      description: "Machine cleaned cumin seeds with high oil content and uniform color.",
      specifications: {
        purity: "99% Min",
        moisture: "9% Max",
        volatile: "2.5% Min",
        admixture: "1% Max",
        color: "Greenish Brown"
      },
      image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 9,
      name: "Red Chili",
      category: "Spices",
      description: "Premium quality dried red chili with high color and heat value.",
      specifications: {
        variety: "Teja / Sannam / S4",
        color: "ASTA 100+",
        moisture: "12% Max",
        capsaicin: "0.5% - 1%",
        admixture: "1% Max"
      },
      image: "https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 10,
      name: "Coriander Seeds",
      category: "Spices",
      description: "Premium quality coriander seeds with uniform size and natural aroma.",
      specifications: {
        purity: "99% Min",
        moisture: "10% Max",
        volatile: "0.4% Min",
        admixture: "1% Max",
        color: "Light Brown"
      },
      image: "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxzcGljZXN8ZW58MHx8fHwxNzcwNDMyNDY4fDA&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF"]
    }
  ],
  herbal: [
    {
      id: 11,
      name: "Ashwagandha Root",
      category: "Herbal Products",
      description: "Premium quality Withania Somnifera root for pharmaceutical and nutraceutical use.",
      specifications: {
        withanolides: "2.5% - 5%",
        moisture: "10% Max",
        totalAsh: "8% Max",
        form: "Whole Root / Powder",
        mesh: "40-80 mesh (powder)"
      },
      image: "https://images.unsplash.com/photo-1596344084757-b83f2081da8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxtZWRpY2luYWwlMjBoZXJic3xlbnwwfHx8fDE3NzA0MzI0Nzh8MA&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 12,
      name: "Neem Products",
      category: "Herbal Products",
      description: "Neem leaves, powder, and oil for cosmetic and pharmaceutical applications.",
      specifications: {
        form: "Dried Leaves / Powder / Oil",
        azadirachtin: "1500-3000 ppm (oil)",
        moisture: "10% Max (powder)",
        purity: "98% Min",
        mesh: "40-80 mesh (powder)"
      },
      image: "https://images.unsplash.com/photo-1659328376647-52ec39d1a5cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxtZWRpY2luYWwlMjBoZXJic3xlbnwwfHx8fDE3NzA0MzI0Nzh8MA&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 13,
      name: "Moringa Powder",
      category: "Herbal Products",
      description: "Nutrient-rich Moringa oleifera leaf powder for health supplements.",
      specifications: {
        protein: "25% Min",
        moisture: "8% Max",
        color: "Green",
        mesh: "60-80 mesh",
        microbes: "Within limits"
      },
      image: "https://images.unsplash.com/photo-1611073761742-bce90ccd60ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxtZWRpY2luYWwlMjBoZXJic3xlbnwwfHx8fDE3NzA0MzI0Nzh8MA&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 14,
      name: "Herbal Extracts",
      category: "Herbal Products",
      description: "Standardized herbal extracts for pharmaceutical and cosmetic industries.",
      specifications: {
        variety: "Tulsi / Giloy / Amla / Triphala",
        form: "Powder / Liquid Extract",
        standardization: "As per requirement",
        solvent: "Water / Ethanol",
        purity: "95% Min"
      },
      image: "https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg",
      incoterms: ["FOB", "CIF", "EXW"]
    }
  ]
};

export const services = [
  {
    id: 1,
    title: "Import & Export Documentation",
    description: "Complete assistance with IEC, RCMC, customs clearance, and shipping documentation.",
    features: [
      "Import Export Code (IEC) registration",
      "RCMC (Registration cum Membership Certificate)",
      "Bill of Lading and Certificate of Origin",
      "Phytosanitary and Quality Certificates"
    ]
  },
  {
    id: 2,
    title: "Market Intelligence",
    description: "Comprehensive market analysis and buyer identification for global trade.",
    features: [
      "Global market trends and pricing",
      "Buyer and supplier identification",
      "Competitor analysis",
      "Trade opportunity reports"
    ]
  },
  {
    id: 3,
    title: "Supply Chain Management",
    description: "End-to-end logistics support for seamless international trade.",
    features: [
      "Quality inspection and certification",
      "Warehousing and inventory management",
      "Freight forwarding (Sea, Air, Land)",
      "Insurance and risk management"
    ]
  },
  {
    id: 4,
    title: "Trade Finance Advisory",
    description: "Expert guidance on payment terms and trade financing options.",
    features: [
      "Letter of Credit (LC) assistance",
      "Bank Guarantee arrangements",
      "Payment term negotiations",
      "Trade credit insurance"
    ]
  }
];

export const whyChooseUs = [
  {
    title: "Certified Quality",
    description: "All products meet ISO, FSSAI, APEDA, and Organic certification standards with rigorous quality control.",
    icon: "shield-check"
  },
  {
    title: "Global Logistics",
    description: "Expertise in international shipping, customs clearance, and Incoterms (FOB, CIF, CFR, EXW).",
    icon: "globe"
  },
  {
    title: "Competitive Pricing",
    description: "Direct sourcing from farms and manufacturers ensures best market prices for bulk orders.",
    icon: "trending-down"
  },
  {
    title: "Reliable Supply",
    description: "Consistent supply chain with 15+ years of experience in international commodity trading.",
    icon: "package"
  },
  {
    title: "Trade Consulting",
    description: "Expert guidance on market entry, documentation, and regulatory compliance for new traders.",
    icon: "users"
  },
  {
    title: "Flexible Payment",
    description: "Multiple payment options including LC, TT, and trade credit with trusted banking partners.",
    icon: "credit-card"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Mohammed Al-Rashid",
    company: "Al-Rashid Trading Co., UAE",
    message: "AgroTrade Global has been our reliable partner for premium Basmati rice supply for 5 years. Their quality consistency and timely delivery are exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Pacific Foods Ltd., Singapore",
    message: "The spice quality and specification documentation provided by AgroTrade made our import process seamless. Highly professional team.",
    rating: 5
  },
  {
    id: 3,
    name: "David Miller",
    company: "EuroSpice GmbH, Germany",
    message: "We've been importing organic turmeric and herbal extracts through AgroTrade. Their consulting services helped us navigate complex EU regulations.",
    rating: 5
  }
];

export const inquiryTypes = [
  "I want to Buy Products",
  "I want to Sell Products",
  "I need Trade Consulting Services",
  "I need Market Intelligence Report",
  "Partnership Opportunity"
];
