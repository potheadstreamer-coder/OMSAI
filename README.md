# Om Sai Commercial Website - Deployment Package

## Overview
Professional B2B international trading website for agro commodities, spices, and herbal products.

## Package Contents
- `index.html` - Main website file
- `js/data.js` - Website content and configuration
- `js/app.js` - Website functionality and interactions
- `DEPLOYMENT_INSTRUCTIONS.md` - Detailed deployment guide

## Quick Start - Hostinger Deployment

### Step 1: Extract the ZIP file
Extract `omsai-commercial-website.zip` to your computer.

### Step 2: Upload to Hostinger
1. Log in to your Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html` folder
4. Delete any existing files (like index.html if present)
5. Upload ALL files from the extracted folder:
   - `index.html`
   - `js/` folder (with all .js files inside)

### Step 3: Configure Domain
1. In hPanel, go to **Domains**
2. Make sure your domain points to `public_html`
3. Wait for DNS propagation (can take up to 24 hours)

### Step 4: Enable SSL Certificate
1. In hPanel, go to **SSL**
2. Enable free SSL certificate
3. Enable "Force HTTPS" redirect

### Step 5: Test Your Website
Visit your domain in a web browser. You should see:
- Professional homepage with hero section
- Product catalog with 3 categories
- Services section
- Contact form
- All navigation working properly

## Customization

### Update Company Information
Edit `js/data.js` and change values in the `SITE_DATA.company` object:
```javascript
company: {
    name: "Your Company Name",
    email: "your@email.com",
    phone: "+your-phone-number",
    whatsapp: "+your-whatsapp",
    address: "Your address",
    // ... etc
}
```

### Update Products
Edit the `SITE_DATA.products` object in `js/data.js` to add/modify products.

### Change Colors
The website uses these main colors:
- Primary Green: `#2d6a4f`
- Accent Orange: `#e76f51`
- Background Beige: `#f4f1de`

To change colors, do a find-and-replace in both files.

## Features
✅ Fully responsive (mobile, tablet, desktop)
✅ WhatsApp integration
✅ Product catalog with specifications
✅ Contact form (opens email client)
✅ Professional design for B2B
✅ Fast loading (no database required)
✅ SEO friendly
✅ SSL ready

## Support
For technical support:
- Email: ranjit@omsaicommercial.com
- Phone: +977 980-590-5337

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## No Database Required
This is a static website that doesn't require:
- Database setup
- Backend server
- Node.js installation
- Complex configuration

Just upload and it works!

## Troubleshooting

### Website not showing
1. Check that `index.html` is in the root of `public_html`
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Wait for DNS propagation (up to 24 hours)

### Images not loading
- Images are hosted on external CDN (Unsplash, Emergent)
- Ensure your hosting has internet access
- Check browser console for errors

### Contact form not working
- Contact form opens email client with pre-filled data
- User's email client must be configured
- Alternative: Users can WhatsApp you directly

## File Structure
```
public_html/
├── index.html          # Main webpage
└── js/
    ├── data.js         # Content and configuration
    └── app.js          # Website functionality
```

## Next Steps After Deployment
1. Test all navigation links
2. Test contact form
3. Test WhatsApp button
4. Check mobile responsiveness
5. Submit sitemap to Google Search Console
6. Set up Google Analytics (optional)

## License
© 2026 Om Sai Commercial Pvt. Ltd. All rights reserved.
