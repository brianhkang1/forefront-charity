import { parseError } from '@/utils/error';

import { GoogleSheetsService } from './util';

export const getSheetData = async () => {
  try {
    const response = await GoogleSheetsService.spreadsheets.values.get({
      spreadsheetId: '',
      range: 'Sheet1!A1:E10',
    });

    return response.data.values;
  } catch (error) {
    console.error('Error fetching sheet: ', parseError(error).message);
  }
};
