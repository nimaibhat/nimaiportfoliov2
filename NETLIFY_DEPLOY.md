# Netlify Deployment Guide

## Prerequisites

1. Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Have a Netlify account (free tier works fine)

## Deployment Steps

### 1. Connect to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Netlify will auto-detect the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### 2. Configure Environment Variables

In your Netlify site dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add the following variables:
   - `SPOTIFY_CLIENT_ID` - Your Spotify Client ID
   - `SPOTIFY_CLIENT_SECRET` - Your Spotify Client Secret
   - `SPOTIFY_REFRESH_TOKEN` - Your Spotify Refresh Token

### 3. Deploy

1. Click "Deploy site"
2. Netlify will build and deploy your site
3. Your site will be available at `https://your-site-name.netlify.app`

## Important Notes

### Backend/API Changes

- The `server.js` file won't run on Netlify
- I've converted it to a Netlify Function at `netlify/functions/spotify-recently-played.js`
- The API endpoint `/api/spotify/recently-played` will automatically route to the Netlify Function
- No changes needed to your frontend code - it will work the same way

### Build Configuration

- The `netlify.toml` file is already configured
- Build command: `npm run build`
- Publish directory: `dist`
- The redirect rule is set up to route API calls to the Netlify Function

### Custom Domain

If you want to use `nimaibhat.com`:

1. In Netlify dashboard, go to **Domain settings**
2. Click "Add custom domain"
3. Enter your domain
4. Follow the DNS configuration instructions
5. Netlify will provide DNS records to add to your domain registrar

### Environment Variables Security

- Never commit `.env` files to Git (already in `.gitignore`)
- Always set environment variables in Netlify dashboard
- They're automatically available to Netlify Functions

## Troubleshooting

### Spotify API not working?

1. Check that all 3 environment variables are set in Netlify
2. Check Netlify Function logs: **Functions** → **spotify-recently-played** → **Logs**
3. Make sure your Spotify refresh token is still valid

### Build fails?

1. Check build logs in Netlify dashboard
2. Make sure all dependencies are in `package.json` (not just `devDependencies`)
3. Check that Node version is compatible (Netlify uses Node 18 by default)

### Images not loading?

1. Make sure images are in the `static/images/` folder
2. They'll be available at `/images/filename.png` after deployment

## Post-Deployment

After deployment, test:
- ✅ Site loads correctly
- ✅ Spotify tracks load (check browser console for errors)
- ✅ All images display
- ✅ Links work correctly

