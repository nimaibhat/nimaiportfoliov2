import http from 'http';
import readline from 'readline';

// Spotify requires redirect URIs to be HTTPS, with one exception: the explicit
// loopback IP literal. "localhost" is rejected, "127.0.0.1" is allowed.
const PORT = 5173;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPE = 'user-read-recently-played';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Serve the callback once and resolve with the code Spotify hands back.
const waitForCode = () =>
  new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, REDIRECT_URI);
      if (url.pathname !== '/callback') {
        res.writeHead(404).end();
        return;
      }

      const code = url.searchParams.get('code');
      const error = url.searchParams.get('error');

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(
        code
          ? '<h1>Authorized.</h1><p>You can close this tab and return to your terminal.</p>'
          : `<h1>Authorization failed</h1><p>${error || 'No code returned.'}</p>`
      );

      server.close();
      code ? resolve(code) : reject(new Error(error || 'No code returned'));
    });

    server.on('error', reject);
    server.listen(PORT);
  });

async function getRefreshToken() {
  console.log('\n🎵 Spotify Refresh Token Generator\n');

  const clientId = (await question('Enter your Spotify Client ID: ')).trim();
  const clientSecret = (await question('Enter your Spotify Client Secret: ')).trim();

  if (!clientId || !clientSecret) {
    console.error('❌ Client ID and Client Secret are required!');
    rl.close();
    process.exit(1);
  }

  const authUrl =
    'https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      client_id: clientId,
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      scope: SCOPE,
    });

  console.log('\n📋 Before continuing, open your app at');
  console.log('   https://developer.spotify.com/dashboard → Settings → Redirect URIs');
  console.log(`   and make sure this EXACT value is listed:\n`);
  console.log(`   ${REDIRECT_URI}\n`);
  await question('Press Enter once that is saved... ');

  console.log('\n🌐 Now open this URL in your browser and authorize:\n');
  console.log(`   ${authUrl}\n`);
  console.log(`⏳ Waiting for Spotify to call back on ${REDIRECT_URI} ...\n`);

  let code;
  try {
    code = await waitForCode();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    rl.close();
    process.exit(1);
  }

  console.log('🔄 Exchanging code for tokens...\n');

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      console.error('❌ Error:', await response.text());
      rl.close();
      process.exit(1);
    }

    const data = await response.json();

    console.log('✅ Success! Here is your refresh token:\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(data.refresh_token);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📝 Set this in Netlify → Site configuration → Environment variables:');
    console.log(`   SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);
    console.log('   Then redeploy so the function picks it up.\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }

  rl.close();
}

getRefreshToken();
