# Firebase Hosting Deployment Guide

This guide will help you deploy your Pi Unlock application to Firebase Hosting.

## Prerequisites

1. **Google Account** - You'll need a Google account to use Firebase
2. **Node.js** - Already installed (you have npm working)
3. **Firebase CLI** - We'll install this in the next step

## Step 1: Install Firebase CLI

Install the Firebase CLI globally:

```bash
npm install -g firebase-tools
```

Verify installation:

```bash
firebase --version
```

## Step 2: Login to Firebase

Login to your Google account:

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

## Step 3: Initialize Firebase Project

Initialize Firebase in your project directory:

```bash
firebase init hosting
```

**When prompted, follow these steps:**

1. **Select an existing Firebase project or create a new one:**
   - If you have an existing project, select it
   - If not, choose "Create a new project" and follow the prompts

2. **What do you want to use as your public directory?**
   - Enter: `dist` (this is where your built files are)

3. **Configure as a single-page app?**
   - Enter: `Yes` (this enables SPA routing)

4. **Set up automatic builds and deploys with GitHub?**
   - Enter: `No` (you can set this up later if needed)

5. **File dist/index.html already exists. Overwrite?**
   - Enter: `No` (keep your existing index.html)

## Step 4: Update Firebase Project ID (if needed)

If you created a new project, update the `.firebaserc` file with your actual project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

## Step 5: Build Your Application

Make sure your app is built:

```bash
npm run build
```

## Step 6: Deploy to Firebase

Deploy your application:

```bash
firebase deploy --only hosting
```

**That's it!** Your app will be deployed and you'll get a URL like:
`https://your-project-id.web.app` or `https://your-project-id.firebaseapp.com`

## Step 7: View Your Deployed App

After deployment, Firebase will show you the hosting URL. You can also find it in the [Firebase Console](https://console.firebase.google.com).

## Future Deployments

For future updates, simply run:

```bash
npm run build
firebase deploy --only hosting
```

## Firebase Console

You can manage your deployment at:
- **Firebase Console**: https://console.firebase.google.com
- Select your project → Hosting

## Configuration Files

The following files have been created for Firebase:

- **`firebase.json`** - Firebase hosting configuration
- **`.firebaserc`** - Firebase project configuration

## Troubleshooting

### Error: "No Firebase project 'default' found"
- Make sure you've run `firebase init hosting` and selected/created a project
- Check that `.firebaserc` has the correct project ID

### Error: "Build directory 'dist' not found"
- Run `npm run build` first to create the dist folder

### Error: "Permission denied"
- Make sure you're logged in: `firebase login`
- Check that you have the correct permissions for the Firebase project

### Custom Domain
To add a custom domain:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Additional Firebase Features

Firebase Hosting also supports:
- **Custom domains** (free SSL certificates)
- **Multiple sites** per project
- **Preview channels** for testing
- **Rollback** to previous deployments
- **CDN** with global edge locations

## Need Help?

- **Firebase Docs**: https://firebase.google.com/docs/hosting
- **Firebase CLI Reference**: https://firebase.google.com/docs/cli

