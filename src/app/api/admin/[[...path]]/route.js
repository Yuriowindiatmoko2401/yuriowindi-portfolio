import { NextResponse } from 'next/server';
import payload from 'payload';
import { getPayload } from '../../../../lib/payload';

async function handler(req) {
  try {
    const { pathname } = new URL(req.url);
    const path = pathname.replace('/api/admin', '');

    const payload = await getPayload();
    const { res, req: payloadReq } = await payload.express.prepareRequest(req);

    await payload.express.processAdmin({
      req: payloadReq,
      res,
      next: () => {},
      path,
    });

    const data = res._getData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Admin route error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
