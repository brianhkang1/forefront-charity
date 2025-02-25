import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(
    process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS_JSON || '{}',
  ),
  scopes: SCOPES,
});

export const GoogleDriveService = google.drive({
  version: 'v3',
  auth,
});

export const GoogleSheetsService = google.sheets({
  version: 'v4',
  auth,
});
