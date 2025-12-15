# Spotify API Setup Instructions

To display your recently played tracks, you need to set up Spotify API credentials:

## Step 1: Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click "Create an app"
3. Fill in the app details:
   - App name: Your Portfolio (or any name)
   - App description: Portfolio website
   - Redirect URI: `http://localhost:3000/callback` (for development)
4. Click "Save"

## Step 2: Get Your Credentials

1. In your app dashboard, you'll see:
   - **Client ID**: Copy this
   - **Client Secret**: Click "View client secret" and copy it

## Step 3: Get a Refresh Token

You need to authorize your app to access your recently played tracks. You can use this tool or follow these steps:

1. Go to: `https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-recently-played`
2. Replace `YOUR_CLIENT_ID` with your actual Client ID
3. Authorize the app
4. You'll be redirected to a URL with a `code` parameter
5. Exchange the code for a refresh token using this curl command:

```bash
curl -H "Authorization: Basic BASE64_ENCODED_CLIENT_ID:CLIENT_SECRET" \
     -d grant_type=authorization_code \
     -d code=YOUR_CODE \
     -d redirect_uri=http://localhost:3000/callback \
     https://accounts.spotify.com/api/token
```

Replace:
- `BASE64_ENCODED_CLIENT_ID:CLIENT_SECRET` with your base64 encoded credentials
- `YOUR_CODE` with the code from the redirect URL

The response will include a `refresh_token` - copy this.

## Step 4: Set Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   SPOTIFY_CLIENT_ID=your_actual_client_id
   SPOTIFY_CLIENT_SECRET=your_actual_client_secret
   SPOTIFY_REFRESH_TOKEN=your_actual_refresh_token
   ```

## Step 5: Install Dependencies and Run

1. Install the new dependencies:
   ```bash
   npm install
   ```

2. Start the backend server (in one terminal):
   ```bash
   npm run server
   ```

3. Start the frontend (in another terminal):
   ```bash
   npm run dev
   ```

The Spotify tracks should now load on your portfolio!

## Alternative: Using a Spotify API Proxy Service

If you prefer not to set up your own backend, you can use a service like:
- [Spotify Web API Proxy](https://github.com/JMPerez/spotify-web-api-js)
- Or host the server.js file on a service like Vercel, Netlify Functions, or Railway

