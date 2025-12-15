// Netlify serverless function for Spotify API
export const handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
  const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Spotify credentials not configured' }),
    };
  }

  // Get limit from query params
  const limit = event.queryStringParameters?.limit || '6';

  try {
    // Get access token using refresh token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      console.error('Failed to refresh access token:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to refresh access token' }),
      };
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Fetch recently played tracks
    const tracksResponse = await fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!tracksResponse.ok) {
      const error = await tracksResponse.text();
      console.error('Failed to fetch recently played tracks:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch recently played tracks' }),
      };
    }

    const tracksData = await tracksResponse.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify(tracksData),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};



