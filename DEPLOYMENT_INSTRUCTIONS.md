# Om Sai Commercial - Hostinger Deployment Guide

## Package Contents
This package contains a production-ready website for Om Sai Commercial Pvt. Ltd.

## Prerequisites
- Hostinger hPanel access
- Node.js hosting plan (recommended) OR static hosting

## Deployment Steps

### Option 1: Static HTML Deployment (Recommended for Hostinger)

1. **Upload to Hostinger**
   - Log in to Hostinger hPanel
   - Go to File Manager
   - Navigate to `public_html` directory
   - Upload the contents of the `static-site` folder

2. **Configure Domain**
   - In hPanel, go to Domains
   - Point your domain to the `public_html` directory
   - Wait for DNS propagation (up to 24 hours)

3. **SSL Certificate**
   - In hPanel, go to SSL
   - Enable free SSL certificate
   - Force HTTPS redirect

### Option 2: Node.js Deployment (Advanced)

1. **Upload Files**
   - Upload the entire `nodejs-app` folder to your hosting
   - SSH into your server

2. **Install Dependencies**
   ```bash
   cd /path/to/nodejs-app
   npm install
   npm run build
   ```

3. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Update MONGO_URL and other variables

4. **Start Application**
   ```bash
   npm start
   ```

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test WhatsApp integration
- [ ] Verify product images load correctly
- [ ] Check SSL certificate is active

## Support

For technical support:
- Email: ranjit@omsaicommercial.com
- Phone: +977 980-590-5337

## Customization

To update content:
1. Edit the JavaScript data files in `static-site/js/data.js`
2. Re-upload to Hostinger
3. Clear browser cache to see changes
