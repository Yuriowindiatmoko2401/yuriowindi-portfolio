import { NextResponse } from 'next/server';
import { getPayloadClient } from '@payloadcms/next/dist/payload-client';
import { getPayload } from '../../../../lib/payload';

export async function GET(req) {
  try {
    const payload = await getPayloadClient();
    const { res } = await payload.handle(req);
    return res;
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const payload = await getPayloadClient();
    const { res } = await payload.handle(req);
    return res;
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const payload = await getPayloadClient();
    const { res } = await payload.handle(req);
    return res;
  } catch (error) {
    console.error('Error in PATCH:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const payload = await getPayloadClient();
    const { res } = await payload.handle(req);
    return res;
  } catch (error) {
    console.error('Error in DELETE:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const payload = await getPayloadClient();
    const { res } = await payload.handle(req);
    return res;
  } catch (error) {
    console.error('Error in PUT:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
