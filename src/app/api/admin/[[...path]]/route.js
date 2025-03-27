import { NextResponse } from 'next/server';
import { getPayload } from '../../../../lib/payload';

async function handler(req) {
  try {
    const payload = await getPayload();
    const { pathname, search } = new URL(req.url);
    const query = search ? `?${search}` : '';
    const payloadUrl = `/api/admin${pathname.replace('/api/admin', '')}${query}`;

    const payloadResponse = await payload.request({
      url: payloadUrl,
      method: req.method,
      headers: req.headers,
      body: req.body,
    });

    return new NextResponse(JSON.stringify(payloadResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
