import { NextResponse } from 'next/server';
import { getPayload } from '../../../../lib/payload';

async function handler(req) {
  try {
    const payload = await getPayload();
    const { pathname, search } = new URL(req.url);
    const path = pathname.replace('/api/admin', '');
    const query = search || '';

    // Convert the request to a format Payload can understand
    const payloadReq = {
      url: path + query,
      method: req.method,
      headers: req.headers,
      query: Object.fromEntries(new URLSearchParams(query)),
      body: req.body,
    };

    // Use Payload's local API
    const response = await payload.local.graphQL({
      req: payloadReq,
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
