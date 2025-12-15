# Spotify API Setup Instructions

To display your recently played tracks, you need to set up Spotify API credentials:

## Step 1: Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click "Create an app"
3. Fill in the app details:
   - App name: Your Portfolio (or any name)
   - App description: Portfolio website
4. Click "Save"
5. **IMPORTANT:** Click "Edit Settings" button
6. In the "Redirect URIs" section, click "Add URI"
7. Add exactly: `https://nimaibhat.com/callback` (no trailing slash, no extra characters)
   - **Important:** Spotify rejects `https://localhost` as insecure, so use your production domain
   - If you don't have this domain set up, you can temporarily use a service like ngrok
8. Click "Add" and then "Save" at the bottom of the page
9. **Verify:** Make sure you see `https://nimaibhat.com/callback` listed in your Redirect URIs (check for typos!)

## Step 2: Get Your Credentials

1. In your app dashboard, you'll see:
   - **Client ID**: Copy this
   - **Client Secret**: Click "View client secret" and copy it

## Step 3: Get a Refresh Token

You need to authorize your app to access your recently played tracks. 

### Easy Method (Recommended)

Run the helper script:

```bash
npm run get-token
```

The script will:
1. Ask for your Client ID and Client Secret
2. Generate an authorization URL for you
3. Guide you through authorizing the app
4. Exchange the code for a refresh token automatically
5. Display your refresh token to add to your `.env` file

### Manual Method

If you prefer to do it manually:

1. Go to: `https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://nimaibhat.com/callback&scope=user-read-recently-played`
2. Replace `YOUR_CLIENT_ID` with your actual Client ID
3. Authorize the app
4. You'll be redirected to `https://nimaibhat.com/callback?code=YOUR_CODE`
5. Copy the full URL from your browser (or just the code parameter)
6. Exchange the code for a refresh token using this curl command:

```bash
curl -H "Authorization: Basic BASE64_ENCODED_CLIENT_ID:CLIENT_SECRET" \
     -d grant_type=authorization_code \
     -d code=YOUR_CODE \
     -d redirect_uri=https://nimaibhat.com/callback \
     https://accounts.spotify.com/api/token
```

To create the base64 encoded string, run:
```bash
echo -n "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" | base64
```

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

