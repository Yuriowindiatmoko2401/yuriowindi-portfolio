import { NextResponse } from 'next/server';

async function handler(req) {
  // Set CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
      ? 'https://yuriowindi-portfolio.vercel.app' 
      : 'http://localhost:3000',
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
  
  // For all other requests, return a message explaining that admin is only available locally
  return NextResponse.json(
    { 
      message: 'The Payload CMS admin panel is only available in local development mode.',
      localUrl: 'http://localhost:3000/admin'
    }, 
    { 
      status: 200,
      headers: corsHeaders
    }
  );
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
