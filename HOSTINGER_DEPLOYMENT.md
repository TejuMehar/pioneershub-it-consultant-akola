# Hostinger Deployment Instructions

## 📁 Files to Upload
Upload all contents from the `dist` folder to your Hostinger public_html directory.

## 🚀 Deployment Steps

### 1. Build the Project (Already Done)
```bash
npm run build
```

### 2. Upload Files to Hostinger
- Go to Hostinger File Manager or use FTP
- Navigate to `public_html` folder
- Upload ALL contents from `dist` folder:
  - index.html
  - assets/ folder (contains CSS and JS)
  - .htaccess (for React Router support)
  - All image files

### 3. File Structure on Hostinger
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [image files]
└── [other static files]
```

### 4. Domain Configuration
- Point your domain to the public_html folder
- Ensure SSL certificate is enabled
- Test all routes work properly

## ✅ What's Included
- React Router support via .htaccess
- Optimized production build
- All static assets
- SEO-friendly page titles
- Mobile responsive design

## 🔧 Troubleshooting
- If routes don't work, ensure .htaccess is uploaded
- Check file permissions (644 for files, 755 for folders)
- Clear browser cache after deployment
- Verify all image paths are working

Your Pioneershub website is ready for Hostinger deployment! 🎉