import { NextResponse } from 'next/server';
import { getPayload } from '../../../../lib/payload';

async function handler(req) {
  try {
    const payload = await getPayload();
    
    // Get the path without /api/admin prefix
    const { pathname } = new URL(req.url);
    const path = pathname.replace('/api/admin', '');

    // Convert headers to plain object
    const headers = {};
    req.headers.forEach((value, key) => {
      headers[key] = value;
    });

    // Call the local API
    const response = await payload.request({
      url: path,
      method: req.method,
      headers,
      body: req.body ? await req.json() : undefined,
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
