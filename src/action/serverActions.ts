'use server';

import { downloadGoogleDriveFile } from '@/lib/googleDrive';

export async function downloadAnnualReport(fileId: string) {
  try {
    const googleDriveFileBlob = await downloadGoogleDriveFile(fileId);
    return googleDriveFileBlob;
  } catch (error) {
    console.error('Download annual report failed:', error);
  }
}
