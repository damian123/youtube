/**
 * This script is based on code provided by Damian
 * 
 * Description: This script allows video uploads to YouTube.
 */

const { google } = require('googleapis');
const readline = require('readline');
const { OAuth2Client } = require('google-auth-library');
const fs = require('fs');
const path = require('path');

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload'];

const clientSecrets = JSON.parse(fs.readFileSync('client_secret.json'));

const oAuth2Client = new OAuth2Client(
  clientSecrets.installed.client_id,
  clientSecrets.installed.client_secret,
  clientSecrets.installed.redirect_uris[0]
);

const readCode = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      resolve(code);
    });
  });
};

const main = async (fileName) => {
  let tokens;
  if (fs.existsSync('./token.json')) {
    tokens = JSON.parse(fs.readFileSync('./token.json'));
  } else {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log(`Authorize this app by visiting this URL: ${authUrl}`);

    const code = await readCode();
    const tokenData = await oAuth2Client.getToken(code);
    tokens = tokenData.tokens;
    fs.writeFileSync('./token.json', JSON.stringify(tokens));
    console.log('Token stored to token.json');
  }

  oAuth2Client.setCredentials(tokens);

  const youtube = google.youtube({
    version: 'v3',
    auth: oAuth2Client,
  });

  const filePath = path.resolve(__dirname, fileName);

  const requestParams = {
    part: 'id,snippet,status',
    requestBody: {
      snippet: {
        title: 'Test Video',
        description: 'Test video upload via YouTube API',
      },
      status: {
        privacyStatus: 'private',
      },
    },
    media: {
      body: fs.createReadStream(filePath),
    },
  };

  const res = await youtube.videos.insert(requestParams);

  console.log(res.data);
};

const fileName = process.argv[2];
if (!fileName) {
  console.error('Please provide a filename as a command-line argument.');
  process.exit(1);
}

main(fileName).catch(console.error);
