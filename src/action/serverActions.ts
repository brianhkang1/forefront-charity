'use server';

import { downloadGoogleDriveFile } from '@/lib/googleDrive';
import { parseError } from '@/utils/error';

export async function downloadAnnualReport(fileId: string) {
  try {
    const googleDriveFileBlob = await downloadGoogleDriveFile(fileId);
    return googleDriveFileBlob;
  } catch (error) {
    console.error('Download annual report failed: ', parseError(error).message);
  }
}
