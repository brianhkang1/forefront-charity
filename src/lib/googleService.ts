import { google } from 'googleapis';
import 'server-only';

const SCOPES = [
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/spreadsheets',
];

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
