import { NextResponse } from 'next/server';
import { createPayloadClient } from '@payloadcms/next-payload';
import config from '../../../../../payload.config';

const { payload } = createPayloadClient({
  // Payload config
  config,
  // Configure express separately
  express: null,
});

async function handler(req) {
  try {
    const { pathname, search } = new URL(req.url);
    const path = pathname.replace('/api/admin', '');
    const query = search || '';

    const response = await payload.findGlobal({
      slug: path + query,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error in ${req.method}:`, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const DELETE = handler;
