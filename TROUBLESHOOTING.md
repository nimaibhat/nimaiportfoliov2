# Troubleshooting Spotify API Setup

## "INVALID_CLIENT: Insecure redirect URI" Error

This error means the redirect URI in your Spotify app settings doesn't match exactly what's in the authorization URL.

### Step-by-Step Fix:

1. **Go to your Spotify Developer Dashboard:**
   - Visit https://developer.spotify.com/dashboard
   - Click on your app

2. **Check/Update Redirect URIs:**
   - Click "Edit Settings" button
   - Scroll down to "Redirect URIs" section
   - Make sure you have EXACTLY: `https://localhost:5173/callback`
   - Check for:
     - ✅ Must be `https://` (not `http://`)
     - ✅ Must be `localhost` (not `127.0.0.1`)
     - ✅ Must be port `5173` (Vite's default port)
     - ✅ Must end with `/callback` (with the slash)
     - ✅ No trailing spaces or extra characters

3. **If the URI is missing or wrong:**
   - Click "Add URI"
   - Type exactly: `https://localhost:5173/callback`
   - Click "Add"
   - **IMPORTANT:** Scroll down and click "Save" at the bottom of the page

4. **Verify it's saved:**
   - After saving, you should see `https://localhost:5173/callback` in the list
   - If you don't see it, try removing it and adding it again

5. **Try the authorization again:**
   - Run `npm run get-token`
   - The redirect URI in the generated URL must match exactly what's in your Spotify app settings

### Common Mistakes:

- ❌ `http://localhost:5173/callback` (missing 's' in https)
- ❌ `https://127.0.0.1:5173/callback` (using IP instead of localhost)
- ❌ `https://localhost:3000/callback` (wrong port)
- ❌ `https://localhost:5173/callback/` (trailing slash)
- ❌ `https://localhost:5173/callback ` (trailing space)
- ✅ `https://localhost:5173/callback` (correct!)

### Still Not Working?

1. Make sure you clicked "Save" after adding the redirect URI
2. Wait a few seconds after saving (sometimes there's a slight delay)
3. Try removing the redirect URI and adding it again
4. Make sure you're using the correct Client ID in the authorization URL

