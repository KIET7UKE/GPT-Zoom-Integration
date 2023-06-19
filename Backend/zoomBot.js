const express = require('express');
const axios = require('axios');

// Set up Express web server
const app = express();
const port = 3000;

// Configuration
const clientId = 'wTWxS0fDSgSdCCjWS6shpA';
const clientSecret = 'T6lKneBC6pK8KnQ6LHgJsvHURnh69mcU';
const redirectUri = 'http://localhost:3000/callback';

// Routes
app.get('/', (req, res) => {
  res.send(`
    <form action="/join" method="GET">
      <label for="meetingLink">Enter Meeting Link:</label>
      <input type="text" id="meetingLink" name="meetingLink" required>
      <button type="submit">Join</button>
    </form>
  `);
});

// Join route
app.get('/join', async (req, res) => {
  const meetingLink = req.query.meetingLink;

  try {
    // Exchange authorization code for an access token
    const response = await axios.post('https://zoom.us/oauth/token', null, {
      params: {
        grant_type: 'client_credentials'
      },
      auth: {
        username: clientId,
        password: clientSecret
      }
    });

    const accessToken = response.data.access_token;

    // Join Zoom meeting
    const joinUrl = `${meetingLink}?access_token=${accessToken}`;
    console.log('Redirecting to Zoom meeting...');
    res.redirect(joinUrl);
  } catch (error) {
    console.error('Failed to join the Zoom meeting:', error.message);
    res.send('Failed to join the Zoom meeting. Check the console for error details.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



//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
//https://us05web.zoom.us/j/6781196277?pwd=VmZKekVLcTlVSDRyekQxUEhsTmlpUT09
//This code connects directly or join to the given zoom link

// const express = require('express');
// const axios = require('axios');

// // Set up Express web server
// const app = express();
// const port = 3000;

// // Configuration
// const clientId = 'wTWxS0fDSgSdCCjWS6shpA';
// const clientSecret = 'T6lKneBC6pK8KnQ6LHgJsvHURnh69mcU';
// const redirectUri = 'http://localhost:3000/callback';
// const meetingLink = 'https://us05web.zoom.us/j/6781196277?pwd=VmZKekVLcTlVSDRyekQxUEhsTmlpUT09';

// // Routes
// app.get('/', (req, res) => {
//   res.send('<a href="/join">Join Zoom Meeting</a>');
// });

// // Join route
// app.get('/join', async (req, res) => {
//   try {
//     // Exchange authorization code for an access token
//     const response = await axios.post('https://zoom.us/oauth/token', null, {
//       params: {
//         grant_type: 'client_credentials'
//       },
//       auth: {
//         username: clientId,
//         password: clientSecret
//       }
//     });

//     const accessToken = response.data.access_token;

//     // Join Zoom meeting
//     const joinUrl = `${meetingLink}?access_token=${accessToken}`;
//     console.log('Redirecting to Zoom meeting...');
//     res.redirect(joinUrl);
//   } catch (error) {
//     console.error('Failed to join the Zoom meeting:', error.message);
//     res.send('Failed to join the Zoom meeting. Check the console for error details.');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

//This is for integrating zoom with nodejs

// const express = require('express');
// const axios = require('axios');

// // Set up Express web server
// const app = express();
// const port = 3000;

// // Configuration
// const clientId = 'wTWxS0fDSgSdCCjWS6shpA';
// const clientSecret = 'T6lKneBC6pK8KnQ6LHgJsvHURnh69mcU';
// const redirectUri = 'http://localhost:3000/callback';
// const meetingLink = 'https://us05web.zoom.us/j/6781196277?pwd=VmZKekVLcTlVSDRyekQxUEhsTmlpUT09';

// // Routes
// app.get('/', (req, res) => {
//   res.send('<a href="/authorize">Authorize Zoom Bot</a>');
// });

// // Authorize route
// app.get('/authorize', (req, res) => {
//   res.redirect(`https://zoom.us/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`);
// });

// // Callback route
// app.get('/callback', async (req, res) => {
//   const code = req.query.code;

//   try {
//     // Exchange authorization code for an access token
//     const response = await axios.post('https://zoom.us/oauth/token', null, {
//       params: {
//         grant_type: 'authorization_code',
//         code: code,
//         redirect_uri: redirectUri
//       },
//       auth: {
//         username: clientId,
//         password: clientSecret
//       }
//     });

//     const accessToken = response.data.access_token;

//     // Join Zoom meeting
//     const joinResponse = await axios.post(
//       'https://api.zoom.us/v2/users/me/meetings',
//       {
//         topic: 'Joining Zoom Meeting',
//         type: 1,
//         start_time: new Date().toISOString(),
//         settings: {
//           join_before_host: true
//         }
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${accessToken}`
//         }
//       }
//     );

//     const joinUrl = joinResponse.data.join_url;
//     console.log('Successfully joined the Zoom meeting!');
//     console.log('Meeting URL:', joinUrl);
//     res.send('Successfully joined the Zoom meeting!');
//   } catch (error) {
//     console.error('Failed to join the Zoom meeting:', error.response.data);
//     res.send('Failed to join the Zoom meeting. Check the console for error details.');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
