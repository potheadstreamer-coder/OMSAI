// Website Data Configuration
const SITE_DATA = {
    company: {
        name: "Om Sai Commercial Pvt. Ltd.",
        logo: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/t68rt8nc_ChatGPT%20Image%20Feb%201%2C%202026%2C%2005_11_11%20PM.png",
        tagline: "TRUSTED SOURCING | TIMELESS QUALITY | GLOBAL REACH",
        email: "ranjit@omsaicommercial.com",
        phone: "+977 980-590-5337",
        whatsapp: "+977 980-590-5337",
        address: "Koteshwore, Kathmandu, Nepal",
        established: "2021"
    },
    
    certifications: [
        { name: "ISO Certified", code: "ISO 9001:2015" },
        { name: "FSSAI Licensed", code: "Lic. No. 12345678901234" },
        { name: "EXIM Code", code: "Code. No. 2134654311009" }
    ],
    
    stats: [
        { value: "7+", label: "Years Experience" },
        { value: "11+", label: "Countries Served" },
        { value: "500+", label: "Worldwide Clients" },
        { value: "100K+", label: "MT Traded Annually" }
    ],
    
    whyChooseUs: [
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
            description: "Consistent supply chain with 7+ years of experience in international commodity trading.",
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
    ],
    
    products: {
        agro: [
            {
                name: "Premium Rice",
                category: "Agro Commodities",
                description: "Premium quality rice including Basmati and non-Basmati varieties with excellent grain quality.",
                image: "https://images.unsplash.com/photo-1686820740687-426a7b9b2043?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zfGVufDB8fHx8MTc3MDQzMjQ3M3ww&ixlib=rb-4.1.0&q=85",
                incoterms: ["FOB", "CIF", "CFR"],
                specs: {
                    "Variety": "1121 Basmati / IR64 / Sona Masoori",
                    "Grain Length": "6.0mm - 8.4mm",
                    "Moisture": "12-14% Max",
                    "Brokens": "1-5% Max",
                    "Purity": "95% Min"
                }
            },
            {
                name: "Fresh Potatoes",
                category: "Agro Commodities",
                description: "High-quality fresh potatoes suitable for wholesale, retail, and processing industries.",
                image: "https://images.unsplash.com/photo-1744659751904-3b2e5c095323",
                incoterms: ["FOB", "CIF"],
                specs: {
                    "Variety": "Red / White / Yellow",
                    "Size": "40mm - 80mm",
                    "Moisture": "80% Approx",
                    "Shelf Life": "2-3 months (cold storage)",
                    "Packing": "10kg / 25kg / 50kg bags"
                }
            },
            {
                name: "Wheat Grains",
                category: "Agro Commodities",
                description: "High-protein wheat grains suitable for flour milling, baking, and food processing.",
                image: "https://images.unsplash.com/photo-1714168526009-2d0d333640d5",
                incoterms: ["FOB", "CIF", "EXW"],
                specs: {
                    "Variety": "Sharbati / Lokwan / Durum",
                    "Protein": "11-13%",
                    "Moisture": "12% Max",
                    "Admixture": "2% Max",
                    "Foreign Matter": "1% Max"
                }
            },
            {
                name: "Mixed Pulses",
                category: "Agro Commodities",
                description: "Wide range of pulses including Chickpeas, Toor Dal, Moong Dal, Masoor Dal, and Kidney Beans.",
                image: "https://images.unsplash.com/photo-1763368403529-0b8d9108cf9c",
                incoterms: ["FOB", "CIF"],
                specs: {
                    "Variety": "Chickpeas / Toor / Moong / Masoor",
                    "Moisture": "12% Max",
                    "Admixture": "1% Max",
                    "Damaged": "2% Max",
                    "Shriveled": "3% Max"
                }
            },
            {
                name: "Refined Sugar",
                category: "Agro Commodities",
                description: "Premium quality white refined sugar with high purity for food and beverage industries.",
                image: "https://images.unsplash.com/photo-1562245376-3f9dae9f0e73",
                incoterms: ["FOB", "CIF", "CFR"],
                specs: {
                    "Grade": "ICUMSA 45 / ICUMSA 100",
                    "Polarization": "99.8% Min",
                    "Moisture": "0.04% Max",
                    "Color": "45-100 ICUMSA",
                    "Granulation": "Fine / Medium"
                }
            }
        ],
        spices: [
            {
                name: "Black Cardamom",
                category: "Spices",
                description: "Large pod black cardamom with smoky flavor, used extensively in Indian and Asian cuisines.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/nigcw2hn_Gemini_Generated_Image_wa1cc7wa1cc7wa1c.png",
                incoterms: ["FOB", "CIF", "CFR"],
                specs: {
                    "Grade": "Bold / Medium",
                    "Size": "15mm - 20mm",
                    "Moisture": "12% Max",
                    "Volatile Oil": "2-3%",
                    "Color": "Dark Brown to Black"
                }
            },
            {
                name: "Black Pepper",
                category: "Spices",
                description: "Premium quality black peppercorns with high piperine content and strong aroma.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/v0gj61lp_Gemini_Generated_Image_yqlsygyqlsygyqls.png",
                incoterms: ["FOB", "CIF"],
                specs: {
                    "Bulk Density": "500-600 GL",
                    "Moisture": "12% Max",
                    "Piperine": "4-5%",
                    "Light Berries": "2% Max",
                    "Extraneous Matter": "0.5% Max"
                }
            },
            {
                name: "Turmeric",
                category: "Spices",
                description: "Premium quality turmeric powder and roots with high curcumin content for culinary and medicinal use.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/amlfyft6_Gemini_Generated_Image_k715sfk715sfk715.png",
                incoterms: ["FOB", "CIF", "CFR"],
                specs: {
                    "Curcumin": "3-5%",
                    "Moisture": "10% Max",
                    "Total Ash": "7% Max",
                    "Acid Insoluble Ash": "1% Max",
                    "Color": "Golden Yellow"
                }
            },
            {
                name: "Cumin Seeds",
                category: "Spices",
                description: "Machine cleaned cumin seeds (Jeera) with high essential oil content and uniform color.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/pyo5mt11_Gemini_Generated_Image_iqiejhiqiejhiqie.png",
                incoterms: ["FOB", "CIF"],
                specs: {
                    "Purity": "99% Min",
                    "Moisture": "9% Max",
                    "Volatile Oil": "2.5% Min",
                    "Admixture": "1% Max",
                    "Color": "Greenish Brown"
                }
            },
            {
                name: "Cinnamon",
                category: "Spices",
                description: "Premium Ceylon and Cassia cinnamon with rich aroma for culinary and industrial applications.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/bmtfxnud_Gemini_Generated_Image_kgpdufkgpdufkgpd.png",
                incoterms: ["FOB", "CIF"],
                specs: {
                    "Variety": "Ceylon / Cassia",
                    "Moisture": "12% Max",
                    "Volatile Oil": "1-2%",
                    "Form": "Sticks / Powder",
                    "Color": "Light to Dark Brown"
                }
            }
        ],
        herbal: [
            {
                name: "Ashwagandha",
                category: "Herbal Products",
                description: "Premium quality Withania Somnifera (Ashwagandha) root and powder for pharmaceutical and nutraceutical applications.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/x6s91a1v_Gemini_Generated_Image_ir7n8ir7n8ir7n8i.png",
                incoterms: ["FOB", "CIF", "CFR"],
                specs: {
                    "Withanolides": "2.5% - 5%",
                    "Moisture": "10% Max",
                    "Total Ash": "8% Max",
                    "Form": "Whole Root / Powder",
                    "Mesh": "40-80 mesh (powder)"
                }
            },
            {
                name: "Reetha (Soapnut)",
                category: "Herbal Products",
                description: "Natural soapnuts (Reetha) for eco-friendly cleaning products, shampoos, and Ayurvedic preparations.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/9pijixf5_Gemini_Generated_Image_or0f5dor0f5dor0f.png",
                incoterms: ["FOB", "CIF"],
                specs: {
                    "Form": "Whole Dried / Powder",
                    "Saponin": "10-15%",
                    "Moisture": "12% Max",
                    "Purity": "95% Min",
                    "Color": "Brown"
                }
            },
            {
                name: "White Musli",
                category: "Herbal Products",
                description: "Premium Safed Musli (Chlorophytum borivilianum) roots for health supplements and Ayurvedic medicine.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/9qobtcfa_Gemini_Generated_Image_a9ywg7a9ywg7a9yw.png",
                incoterms: ["FOB", "CIF", "CFR"],
                specs: {
                    "Saponins": "2-4%",
                    "Moisture": "10% Max",
                    "Form": "Dried Roots / Powder",
                    "Mesh": "60-80 mesh (powder)",
                    "Purity": "98% Min"
                }
            },
            {
                name: "Keedajadi (Cordyceps)",
                category: "Herbal Products",
                description: "Rare Himalayan Cordyceps (Keedajadi) for premium health supplements and traditional medicine.",
                image: "https://customer-assets.emergentagent.com/job_agro-spices/artifacts/7nkabhi5_Gemini_Generated_Image_a9s1e4a9s1e4a9s1.png",
                incoterms: ["FOB", "CIF", "EXW"],
                specs: {
                    "Variety": "Cordyceps Sinensis",
                    "Form": "Whole Dried / Powder",
                    "Moisture": "10% Max",
                    "Active Compounds": "Cordycepin, Polysaccharides",
                    "Origin": "High Altitude Himalayan"
                }
            }
        ]
    },
    
    services: [
        {
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
            title: "Trade Finance Advisory",
            description: "Expert guidance on payment terms and trade financing options.",
            features: [
                "Letter of Credit (LC) assistance",
                "Bank Guarantee arrangements",
                "Payment term negotiations",
                "Trade credit insurance"
            ]
        }
    ],
    
    inquiryTypes: [
        "I want to Buy Products",
        "I want to Sell Products",
        "I need Trade Consulting Services",
        "I need Market Intelligence Report",
        "Partnership Opportunity"
    ]
};
