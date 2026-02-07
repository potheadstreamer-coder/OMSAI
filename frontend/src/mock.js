// Mock data for AgroTrade Global

export const companyInfo = {
  name: "Om Sai Commercial Pvt. Ltd.",
  logo: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/t68rt8nc_ChatGPT%20Image%20Feb%201%2C%202026%2C%2005_11_11%20PM.png",
  tagline: "TRUSTED SOURCING | TIMELESS QUALITY | GLOBAL REACH",
  email: "ranjit@omsaicommercial.com",
  phone: "+977 980-590-5337",
  whatsapp: "+977 980-590-5337",
  address: "Koteshwore, Kathmandu, Nepal",
  managingDirector: "Ranjit Gupta"
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
      name: "Premium Rice",
      category: "Agro Commodities",
      description: "Premium quality rice including Basmati and non-Basmati varieties with excellent grain quality.",
      specifications: {
        variety: "1121 Basmati / IR64 / Sona Masoori",
        grainLength: "6.0mm - 8.4mm",
        moisture: "12-14% Max",
        brokens: "1-5% Max",
        purity: "95% Min"
      },
      image: "https://images.unsplash.com/photo-1686820740687-426a7b9b2043?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zfGVufDB8fHx8MTc3MDQzMjQ3M3ww&ixlib=rb-4.1.0&q=85",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 2,
      name: "Fresh Potatoes",
      category: "Agro Commodities",
      description: "High-quality fresh potatoes suitable for wholesale, retail, and processing industries.",
      specifications: {
        variety: "Red / White / Yellow",
        size: "40mm - 80mm",
        moisture: "80% Approx",
        shelf: "2-3 months (cold storage)",
        packing: "10kg / 25kg / 50kg bags"
      },
      image: "https://images.unsplash.com/photo-1744659751904-3b2e5c095323",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 3,
      name: "Wheat Grains",
      category: "Agro Commodities",
      description: "High-protein wheat grains suitable for flour milling, baking, and food processing.",
      specifications: {
        variety: "Sharbati / Lokwan / Durum",
        protein: "11-13%",
        moisture: "12% Max",
        admixture: "2% Max",
        foreignMatter: "1% Max"
      },
      image: "https://images.unsplash.com/photo-1714168526009-2d0d333640d5",
      incoterms: ["FOB", "CIF", "EXW"]
    },
    {
      id: 4,
      name: "Mixed Pulses",
      category: "Agro Commodities",
      description: "Wide range of pulses including Chickpeas, Toor Dal, Moong Dal, Masoor Dal, and Kidney Beans.",
      specifications: {
        variety: "Chickpeas / Toor / Moong / Masoor",
        moisture: "12% Max",
        admixture: "1% Max",
        damaged: "2% Max",
        shriveled: "3% Max"
      },
      image: "https://images.unsplash.com/photo-1763368403529-0b8d9108cf9c",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 5,
      name: "Refined Sugar",
      category: "Agro Commodities",
      description: "Premium quality white refined sugar with high purity for food and beverage industries.",
      specifications: {
        grade: "ICUMSA 45 / ICUMSA 100",
        polarization: "99.8% Min",
        moisture: "0.04% Max",
        color: "45-100 ICUMSA",
        granulation: "Fine / Medium"
      },
      image: "https://images.unsplash.com/photo-1562245376-3f9dae9f0e73",
      incoterms: ["FOB", "CIF", "CFR"]
    }
  ],
  spices: [
    {
      id: 6,
      name: "Black Cardamom",
      category: "Spices",
      description: "Large pod black cardamom with smoky flavor, used extensively in Indian and Asian cuisines.",
      specifications: {
        grade: "Bold / Medium",
        size: "15mm - 20mm",
        moisture: "12% Max",
        volatile: "2-3%",
        color: "Dark Brown to Black"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/nigcw2hn_Gemini_Generated_Image_wa1cc7wa1cc7wa1c.png",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 7,
      name: "Black Pepper",
      category: "Spices",
      description: "Premium quality black peppercorns with high piperine content and strong aroma.",
      specifications: {
        bulkDensity: "500-600 GL",
        moisture: "12% Max",
        piperine: "4-5%",
        lightBerries: "2% Max",
        extraneous: "0.5% Max"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/v0gj61lp_Gemini_Generated_Image_yqlsygyqlsygyqls.png",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 8,
      name: "Turmeric",
      category: "Spices",
      description: "Premium quality turmeric powder and roots with high curcumin content for culinary and medicinal use.",
      specifications: {
        curcumin: "3-5%",
        moisture: "10% Max",
        totalAsh: "7% Max",
        acidInsoluble: "1% Max",
        color: "Golden Yellow"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/amlfyft6_Gemini_Generated_Image_k715sfk715sfk715.png",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 9,
      name: "Cumin Seeds",
      category: "Spices",
      description: "Machine cleaned cumin seeds (Jeera) with high essential oil content and uniform color.",
      specifications: {
        purity: "99% Min",
        moisture: "9% Max",
        volatile: "2.5% Min",
        admixture: "1% Max",
        color: "Greenish Brown"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/pyo5mt11_Gemini_Generated_Image_iqiejhiqiejhiqie.png",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 10,
      name: "Cinnamon",
      category: "Spices",
      description: "Premium Ceylon and Cassia cinnamon with rich aroma for culinary and industrial applications.",
      specifications: {
        variety: "Ceylon / Cassia",
        moisture: "12% Max",
        volatile: "1-2%",
        form: "Sticks / Powder",
        color: "Light to Dark Brown"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/bmtfxnud_Gemini_Generated_Image_kgpdufkgpdufkgpd.png",
      incoterms: ["FOB", "CIF"]
    }
  ],
  herbal: [
    {
      id: 11,
      name: "Ashwagandha",
      category: "Herbal Products",
      description: "Premium quality Withania Somnifera (Ashwagandha) root and powder for pharmaceutical and nutraceutical applications.",
      specifications: {
        withanolides: "2.5% - 5%",
        moisture: "10% Max",
        totalAsh: "8% Max",
        form: "Whole Root / Powder",
        mesh: "40-80 mesh (powder)"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/x6s91a1v_Gemini_Generated_Image_ir7n8ir7n8ir7n8i.png",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 12,
      name: "Reetha (Soapnut)",
      category: "Herbal Products",
      description: "Natural soapnuts (Reetha) for eco-friendly cleaning products, shampoos, and Ayurvedic preparations.",
      specifications: {
        form: "Whole Dried / Powder",
        saponin: "10-15%",
        moisture: "12% Max",
        purity: "95% Min",
        color: "Brown"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/9pijixf5_Gemini_Generated_Image_or0f5dor0f5dor0f.png",
      incoterms: ["FOB", "CIF"]
    },
    {
      id: 13,
      name: "White Musli",
      category: "Herbal Products",
      description: "Premium Safed Musli (Chlorophytum borivilianum) roots for health supplements and Ayurvedic medicine.",
      specifications: {
        saponins: "2-4%",
        moisture: "10% Max",
        form: "Dried Roots / Powder",
        mesh: "60-80 mesh (powder)",
        purity: "98% Min"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/9qobtcfa_Gemini_Generated_Image_a9ywg7a9ywg7a9yw.png",
      incoterms: ["FOB", "CIF", "CFR"]
    },
    {
      id: 14,
      name: "Keedajadi (Cordyceps)",
      category: "Herbal Products",
      description: "Rare Himalayan Cordyceps (Keedajadi) for premium health supplements and traditional medicine.",
      specifications: {
        variety: "Cordyceps Sinensis",
        form: "Whole Dried / Powder",
        moisture: "10% Max",
        activeCompounds: "Cordycepin, Polysaccharides",
        origin: "High Altitude Himalayan"
      },
      image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/7nkabhi5_Gemini_Generated_Image_a9s1e4a9s1e4a9s1.png",
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
