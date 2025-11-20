# Deployment Guide

Your application has been built successfully! Here are several ways to deploy it to the web:

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional, or use web interface):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

3. **Or deploy via Web Interface**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect the Vite configuration
   - Add environment variables if needed (see below)
   - Click "Deploy"

**Configuration**: The `vercel.json` file is already configured for your app.

---

### Option 2: Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy via CLI**:
   ```bash
   netlify deploy --prod
   ```
   Follow the prompts to link your project.

3. **Or deploy via Web Interface**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Drag and drop your `dist` folder, OR
   - Connect your Git repository
   - Netlify will auto-detect the build settings from `netlify.toml`
   - Add environment variables if needed (see below)
   - Click "Deploy site"

**Configuration**: The `netlify.toml` file is already configured for your app.

---

### Option 3: GitHub Pages

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Install GitHub Pages plugin**:
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select source: "gh-pages" branch
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

---

### Option 4: Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Sign up/login
3. Click "Create a project"
4. Connect your Git repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Add environment variables if needed
7. Click "Save and Deploy"

---

## Environment Variables

If your app uses Supabase or other services, you may need to set these environment variables in your deployment platform:

### Supabase Variables (if applicable):
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

**How to add environment variables:**
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment Variables
- **Cloudflare Pages**: Settings → Environment Variables

---

## Manual Deployment (Static Hosting)

If you prefer to host the files yourself:

1. **Build the app** (already done):
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web hosting service:
   - The `dist` folder contains all the production files
   - Upload everything inside `dist` to your web root

3. **Configure your server** to serve `index.html` for all routes (SPA routing)

---

## Current Build Status

✅ **Build completed successfully!**
- Output directory: `dist/`
- Build size: ~467 KB (gzipped: ~142 KB)
- CSS size: ~65 KB (gzipped: ~11 KB)

---

## Troubleshooting

### HashRouter Configuration
Your app uses `HashRouter`, which works well with static hosting. All routes will use `#` in the URL (e.g., `yoursite.com/#/unlock-pi`).

### Image Assets
All images in `public/images/` are included in the build and will work after deployment.

### Supabase Edge Functions
If you're using Supabase edge functions, make sure your Supabase project is properly configured and the edge function is deployed.

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

