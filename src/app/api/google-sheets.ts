import { GoogleSheetsService } from './util';

export const getSheetData = async () => {
  try {
    const response = await GoogleSheetsService.spreadsheets.values.get({
      spreadsheetId: '',
      range: 'Sheet1!A1:E10',
    });

    console.log('hello getSheetData', response);
    return response.data.values;
  } catch (err) {
    console.error(err);
  }
};
