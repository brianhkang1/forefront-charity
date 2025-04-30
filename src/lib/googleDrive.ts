'use server';

import { parseError } from '@/utils/error';
import 'server-only';
import { Readable } from 'stream';

import { GoogleDriveService } from './googleService';

export async function getGoogleDriveFiles(folderId: string | undefined) {
  if (!folderId) return;

  try {
    const response = await GoogleDriveService.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: 'files(id, name, mimeType)',
      supportsAllDrives: true, // Needed for shared drives
      includeItemsFromAllDrives: true, // Needed for shared drives
    });

    return response?.data?.files;
  } catch (error) {
    console.error('Error fetching files: ', parseError(error).message);
  }
}

export async function getGoogleDriveImages(folderId: string | undefined) {
  if (!folderId) return;

  try {
    const files = await getGoogleDriveFiles(folderId);
    if (!files?.length) return [];

    const filteredFiles = files.filter((file) => {
      return file.mimeType?.startsWith('image/');
    });

    // Generate temporary URLs for each image
    const images = await Promise.all(
      filteredFiles.map(async (file) => {
        if (!file.id) return;

        const response = await GoogleDriveService.files.get(
          {
            fileId: file.id,
            alt: 'media',
          },
          {
            responseType: 'arraybuffer',
          },
        );

        const base64 = Buffer.from(response.data as ArrayBuffer).toString(
          'base64',
        );

        return {
          id: file.id,
          name: file.name,
          url: `data:image/png;base64,${base64}`,
        };
      }),
    );

    return images;
  } catch (error) {
    console.error('Error fetching photos: ', parseError(error).message);
  }
}

export async function downloadGoogleDriveFile(fileId: string) {
  try {
    const fileStream = await GoogleDriveService.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' },
    );
    const stream: Readable = fileStream.data;

    return new Promise<Blob>((resolve, reject) => {
      const chunks: BlobPart[] = [];

      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => {
        resolve(new Blob(chunks, { type: 'application/pdf' }));
      });
      stream.on('error', reject);
    });
  } catch (error) {
    console.error('Error downloading file: ', parseError(error).message);
  }
}
