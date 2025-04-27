import { NextResponse } from 'next/server';

import { GoogleDriveService } from '../../../lib/googleService';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const fileId = searchParams.get('id');
  const mimeType = searchParams.get('mimeType');

  if (!fileId) {
    return new NextResponse('Missing fileId', { status: 400 });
  }

  try {
    const response = await GoogleDriveService.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' },
    );

    const stream = response.data as any;

    const res = new NextResponse(stream);
    res.headers.set('Content-Type', mimeType || 'application/octet-stream');
    res.headers.set('Cache-Control', 'public, max-age=86400'); // cache 24 hours

    return res;
  } catch (error) {
    console.error('Error fetching file:', error);
    return new NextResponse('Error fetching file', { status: 500 });
  }
}
