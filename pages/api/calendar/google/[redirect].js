import clipboardy from "clipboardy";
const { google } = require("googleapis");
const calendar = google.calendar({
  version: "v3",
  auth: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
});

const oauth2Client = new google.auth.OAuth2(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
);
const scopes = ["https://www.googleapis.com/auth/calendar"];

export default async function handler(req, res) {
  const code = req.query.code;
  const state = JSON.parse(req.query.state);
  const { tokens } = await oauth2Client.getToken(code);
  // console.log(code, tokens);
  const eventData = state.eventData;
  oauth2Client.setCredentials(tokens);
  if (tokens) {
    const result = await calendar.events.insert({
      calendarId: "primary",
      auth: oauth2Client,
      conferenceDataVersion: 1,
      requestBody: {
        summary: eventData.summary,
        start: {
          dateTime: eventData.startDate,

          timeZone: "Asia/Karachi",
        },
        end: {
          dateTime: eventData.endDate,

          timeZone: "Asia/Karachi",
        },
        conferenceData: {
          createRequest: {
            requestId: "7qxalsvy0e",
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
      },
    });
    var hangoutLink = result.data.hangoutLink;
    // console.log(hangoutLink);
    await clipboardy.write(hangoutLink);
    //res.redirect(`/link?hanoutLink=${hangoutLink}`);
    res.write(
      "<script>window.close();alert('Meeting link successfully copied to clipboard!');</script>"
    );
    // res.end();
  }
}
