import { GoogleDriveService } from './util';

export const getGoogleDriveFiles = async () => {
  try {
    const response = await GoogleDriveService.files.list({
      q: "'1sJy3UnQg14zJXj9F8dA0fTsSUsK4nOyw' in parents",
      spaces: 'drive',
      includeItemsFromAllDrives: true,
      supportsAllDrives: true,
      // fields: 'files(id, name, mimeType, webContentLink)',
    });

    console.log('hello getGoogleDriveFiles', response);
    return response.data.files;
  } catch (err) {
    console.error(err);
  }
};

export const downloadGoogleDriveFiles = async () => {
  try {
    const response = await GoogleDriveService.files.get(
      {
        fileId: '',
        alt: 'media',
        supportsAllDrives: true,
      },
      { responseType: 'stream' },
    );

    console.log('hello downloadGoogleDriveFiles', response);
    return response;
  } catch (err) {
    console.error(err);
  }
};
