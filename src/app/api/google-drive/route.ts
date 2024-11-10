import { auth } from '@/auth';
import { getError } from '@/utils/error';
import { google } from 'googleapis';

const getDriveFiles = async (accessToken: string) => {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const drive = google.drive({ version: 'v3', auth });
  const response = await drive.files.list({
    q: "'your-folder-id' in parents",
    fields: 'files(id, name, mimeType, webContentLink)',
  });

  return response.data.files;
};

export async function GET() {
  const session = await auth();

  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }

  try {
    const rawData = await getDriveFiles(session.accessToken);
    const response = JSON.stringify(rawData);

    return new Response(response, { status: 200 });
  } catch (error) {
    const response = JSON.stringify({ error: getError(error).message });

    return new Response(response, { status: 500 });
  }
}
