import { auth } from '@/auth';
import { getError } from '@/utils/error';
import { google } from 'googleapis';

const getSheetData = async (accessToken: string) => {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: 'your-spreadsheet-id',
    range: 'Sheet1!A1:E10',
  });

  return response.data.values;
};

export async function GET() {
  const session = await auth();

  if (!session) {
    const response = JSON.stringify({ error: 'Unauthorized' });

    return new Response(response, { status: 401 });
  }

  try {
    const rawData = await getSheetData(session.accessToken);
    const response = JSON.stringify(rawData);

    return new Response(response, { status: 200 });
  } catch (error) {
    const response = JSON.stringify({ error: getError(error).message });

    return new Response(response, { status: 500 });
  }
}
