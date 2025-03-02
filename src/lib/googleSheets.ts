'use server';

import { parseError } from '@/utils/error';
import 'server-only';

import { GoogleSheetsService } from './googleService';

export async function getSheetData() {
  try {
    const response = await GoogleSheetsService.spreadsheets.values.get({
      spreadsheetId: '',
      range: 'Sheet1!A1:E10',
    });

    return response.data.values;
  } catch (error) {
    console.error('Error fetching sheet: ', parseError(error).message);
  }
}

export async function postToGoogleSheets(
  prevState: { success: boolean; message: string } | null | undefined,
  formData: FormData,
) {
  try {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const isValidData = !!firstName && !!lastName && !!email;
    const spreadsheetId = process.env.NEWSLETTER_SIGNUPS_SHEETS_ID;

    if (!!spreadsheetId && isValidData) {
      const timestamp = new Date().toISOString();

      await GoogleSheetsService.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [[firstName, lastName, email, timestamp]],
        },
      });

      return { success: true, message: 'Successfully posted data to Sheets' };
    }
  } catch (error) {
    console.error('Error posting data to Sheets:', error);
    return { success: false, message: 'Error posting data to Sheets' };
  }
}
