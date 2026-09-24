'use server';

import { parseError } from '@/utils/error';
import 'server-only';

import { GoogleSheetsService } from './googleService';

async function verifyRecaptcha(token: FormDataEntryValue | null) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('Error with reCAPTCHA!');
    return false;
  }

  if (!token || typeof token !== 'string' || !token.trim()) {
    return false;
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }).toString(),
      },
    );

    const result = (await response.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
      'error-codes'?: string[];
    };

    if (!result.success) {
      console.error('reCAPTCHA verification failed:', result['error-codes']);
      return false;
    }

    if (typeof result.score === 'number' && result.score < 0.5) {
      console.error('reCAPTCHA score below threshold:', result.score);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', parseError(error).message);
    return false;
  }
}

export async function getGoogleSheetsData(spreadsheetId: string | undefined) {
  if (!spreadsheetId) return;

  try {
    const response = await GoogleSheetsService.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1',
    });

    return response?.data?.values;
  } catch (error) {
    console.error('Error fetching sheet: ', parseError(error).message);
  }
}

export async function postToGoogleSheets(
  prevState: string | null | undefined,
  formData: FormData,
) {
  try {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const recaptchaToken = formData.get('g-recaptcha-response');
    const isValidData = !!firstName && !!lastName && !!email;
    const spreadsheetId = process.env.NEWSLETTER_SIGNUPS_SHEETS_ID;

    const isHuman = await verifyRecaptcha(recaptchaToken);

    if (!isHuman) {
      return 'captcha_failed';
    } else {
      console.log(
        'reCAPTCHA verification successful. Proceeding with form submission.',
      );
    }

    if (!!spreadsheetId && isValidData) {
      const timestamp = new Date().toISOString();

      await GoogleSheetsService.spreadsheets.values.append({
        spreadsheetId,
        range: 'New',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [[firstName, lastName, email, timestamp]],
        },
      });

      return 'success';
    }

    return 'Form not validated';
  } catch (error) {
    console.error('Error posting data to Sheets:', parseError(error).message);
    return 'error';
  }
}
