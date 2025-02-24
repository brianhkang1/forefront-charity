import { GoogleDriveService } from './util';

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
    console.error('Error fetching files:', error);
  }
}

export async function getGoogleDrivePhotos(folderId: string | undefined) {
  if (!folderId) return;

  try {
    const files = await getGoogleDriveFiles(folderId);
    if (!files?.length) return [];

    // Generate temporary URLs for each image
    const images = await Promise.all(
      files.map(async (file) => {
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
          url: `data:image/jpeg;base64,${base64}`,
        };
      }),
    );

    return images;
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}
