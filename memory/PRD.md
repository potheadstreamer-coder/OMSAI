# AgroTrade Global - Product Requirements Document

## Problem Statement
Build a professional B2B international trading website for Agro, Herbal, and Spice products that establishes trust and showcases product catalog for global buyers.

## Original User Request
User provided a comprehensive blueprint for an international trading and consulting business dealing in Agro, Herbal, and Spice products. The website needs to look professional, clean, transparent, and build credibility for B2B buyers.

## User Personas
1. **International Buyers**: B2B buyers from UAE, Singapore, Germany looking for bulk agro commodities
2. **New Traders**: Businesses new to international trade seeking consulting services
3. **Procurement Managers**: Decision-makers evaluating suppliers for long-term partnerships

## Core Requirements
- Professional, trust-building design for B2B audience
- Product catalog with specifications and Incoterms
- Trade consulting services showcase
- Contact/Quote request form
- Trust badges and certifications display
- WhatsApp integration for quick communication
- Responsive design for mobile and desktop
- Color scheme: Earthy Green (#2d6a4f) and Spice Orange (#e76f51)

## What's Been Implemented (Dec 7, 2025)

### Phase 1: Frontend with Mock Data ✅
**Components Created:**
1. **Navbar** - Sticky navigation with company branding and contact info
2. **Hero Section** - Premium spices showcase with trust badges
3. **Why Choose Us** - 6 key value propositions with stats
4. **Products** - 14 products across 3 categories (Agro, Spices, Herbal)
   - Detailed specifications for each product
   - Incoterms display (FOB, CIF, CFR, EXW)
   - Product detail modal with full specs
5. **Services** - 4 consulting services with feature lists
6. **Contact Form** - Quote request with inquiry type selection
7. **Footer** - Complete footer with social links and quick navigation

**Technical Implementation:**
- React with Shadcn UI components
- Professional images from Unsplash
- Mock data in `/app/frontend/src/mock.js`
- Fully responsive design
- Smooth scrolling between sections
- Toast notifications for form submissions (mock)

**Products Included:**
- Agro: Basmati Rice, Non-Basmati Rice, Wheat, Pulses
- Spices: Turmeric, Black Pepper, Cardamom, Cumin, Red Chili, Coriander
- Herbal: Ashwagandha, Neem, Moringa, Herbal Extracts

## Prioritized Backlog

### P0 - Backend Development
- MongoDB models for products, inquiries, consultations
- API endpoints for:
  - GET /api/products (with category filter)
  - GET /api/products/:id
  - POST /api/inquiries (quote requests)
  - GET /api/services
- Email integration for inquiry notifications
- Form data validation and storage

### P1 - Enhanced Features
- Admin dashboard for managing products and inquiries
- Email notification system for quote requests
- Product search and filter functionality
- PDF specification sheet download
- Multi-language support (Arabic, Chinese, German)

### P2 - Advanced Features
- User authentication for returning clients
- Order tracking system
- Live chat integration
- Blog/News section for market updates
- Currency converter for international pricing

## Next Tasks
1. Build backend API with MongoDB
2. Integrate backend with frontend (remove mock data)
3. Set up email service for inquiry notifications
4. Test end-to-end flow with real data
5. Add product management capabilities

## API Contracts (To Be Implemented)

### Products API
```
GET /api/products?category=agro|spices|herbal
GET /api/products/:id
Response: { id, name, category, description, specifications, image, incoterms }
```

### Inquiries API
```
POST /api/inquiries
Body: { name, email, phone, inquiryType, message, productId? }
Response: { id, status, message }
```

## Mock Data Location
All mock data is stored in `/app/frontend/src/mock.js` including:
- Company information
- Certifications
- 14 products with full specifications
- 4 service offerings
- Testimonials
- Inquiry types

## Design System
- Primary Color: #2d6a4f (Forest Green)
- Accent Color: #e76f51 (Spice Orange)
- Background: #f4f1de (Beige/Cream)
- Typography: Segoe UI, sans-serif
- Components: Shadcn UI library
