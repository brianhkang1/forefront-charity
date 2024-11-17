import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  projectId: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/drive'],
});

export const GoogleDriveService = google.drive({
  version: 'v3',
  auth,
});

export const GoogleSheetsService = google.sheets({
  version: 'v4',
  auth,
});
