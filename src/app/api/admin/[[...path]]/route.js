import { NextResponse } from 'next/server';

async function handler(req) {
  // Set CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
  
  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { 
      status: 200,
      headers: corsHeaders,
    });
  }
  
  // Always redirect to /admin/login for all requests
  const url = new URL(req.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  return NextResponse.redirect(`${baseUrl}/admin/login`);
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
