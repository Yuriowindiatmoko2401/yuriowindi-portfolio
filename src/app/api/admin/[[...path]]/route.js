import { nextHandler } from '@payloadcms/next';
import { getPayload } from '../../../../lib/payload';

export async function GET(req) {
  const payload = await getPayload();
  return nextHandler({
    payload,
    req,
  });
}

export async function POST(req) {
  const payload = await getPayload();
  return nextHandler({
    payload,
    req,
  });
}

export async function PATCH(req) {
  const payload = await getPayload();
  return nextHandler({
    payload,
    req,
  });
}

export async function DELETE(req) {
  const payload = await getPayload();
  return nextHandler({
    payload,
    req,
  });
}

export async function PUT(req) {
  const payload = await getPayload();
  return nextHandler({
    payload,
    req,
  });
}
