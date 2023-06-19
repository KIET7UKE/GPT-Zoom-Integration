const express = require('express');
const axios = require('axios');
const { ZoomClient } = require('zoomus');
require('dotenv').config(); // If you're using a .env file for configuration


const app = express();
const port = 3000; // Choose a suitable port for your application
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/zoom/authorize', (req, res) => {
    const redirectUri = 'http://localhost:3000/zoom/callback'; // Specify your redirect URI here
    const clientId = 'wTWxS0fDSgSdCCjWS6shpA'; // Replace with your Zoom app's client ID
    const authorizationUrl = `https://zoom.us/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    res.redirect(authorizationUrl);
  });

  app.get('/zoom/callback', async (req, res) => {
    const code = req.query.code;
    const clientId = 'wTWxS0fDSgSdCCjWS6shpA'; // Replace with your Zoom app's client ID
    const clientSecret = 'T6lKneBC6pK8KnQ6LHgJsvHURnh69mcU'; // Replace with your Zoom app's client secret
    const redirectUri = 'http://localhost:3000/zoom/callback'; // Specify your redirect URI here

    // Exchange the authorization code for an access token
    const tokenUrl = 'https://zoom.us/oauth/token';
    const tokenResponse = await axios.post(tokenUrl, null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    });

    // Handle the access token response
    const accessToken = tokenResponse.data.access_token;
    const refreshToken = tokenResponse.data.refresh_token;
    // Store or use the access token and refresh token as needed

    res.send('Authorization successful!');
  });

  app.get('/zoom/join', async (req, res) => {
    const meetingId = req.query.meetingId; // Retrieve the meeting ID from the request query params
    const userId = req.query.userId; // Retrieve the user ID from the request query params
  
    const zoomClient = new ZoomClient({
      apiKey: 'YOUR_ZOOM_API_KEY',
      apiSecret: 'YOUR_ZOOM_API_SECRET',
    });
  
    try {
      const meetingResponse = await zoomClient.meeting.join({
        meetingId: parseInt(meetingId),
        password: 'MEETING_PASSWORD', // Specify the meeting password here
        userName: 'YOUR_NAME', // Specify your name here
        userEmail: 'YOUR_EMAIL', // Specify your email here
        userId: parseInt(userId),
      });
  
      // Handle the meeting join response
      const { join_url: joinUrl } = meetingResponse.result;
      res.redirect(joinUrl); // Redirect the user to the Zoom meeting URL
    } catch (error) {
      console.error('Error joining the meeting:', error);
      res.status(500).send('Error joining the meeting');
    }
  });
  
