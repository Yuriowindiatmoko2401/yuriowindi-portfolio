import { NextResponse } from 'next/server';
import { getPayload } from '../../../../lib/payload';

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
  
  try {
    // For all other requests, return a redirect to the admin panel
    if (req.method === 'GET') {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
    
    // For POST requests, try to handle them with Payload's GraphQL API
    const payload = await getPayload();
    
    // Get the path
    const { pathname } = new URL(req.url);
    
    // Parse body if present
    let body;
    if (req.body) {
      try {
        body = await req.json();
      } catch (e) {
        // Not JSON or no body
      }
    }
    
    // Use payload.local API for GraphQL requests
    if (pathname.includes('/graphql')) {
      const result = await payload.local.graphQL({
        query: body?.query,
        variables: body?.variables,
      });
      
      return NextResponse.json(result, { headers: corsHeaders });
    }
    
    // For other requests, return a redirect to the admin panel
    return NextResponse.redirect(new URL('/admin', req.url));
  } catch (error) {
    console.error('Admin route error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500, headers: corsHeaders }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
