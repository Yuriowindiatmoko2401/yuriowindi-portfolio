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
  
  // For production, return a clear message - no redirects
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { 
        message: 'The Payload CMS admin panel is only available in local development mode.',
        instructions: 'To access the admin panel, run the application locally with npm run dev and visit http://localhost:3000/admin'
      }, 
      { 
        status: 200,
        headers: corsHeaders
      }
    );
  }

  // For development, try to handle the admin requests properly
  try {
    const payload = await getPayload();
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
    
    // GraphQL requests
    if (pathname.includes('/graphql')) {
      const result = await payload.local.graphQL({
        query: body?.query,
        variables: body?.variables,
      });
      
      return NextResponse.json(result, { headers: corsHeaders });
    }
  } catch (error) {
    console.error('Admin route error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500, headers: corsHeaders }
    );
  }
  
  // For all other requests in development that we can't handle directly
  return NextResponse.json(
    { 
      message: 'Please access the admin panel directly at http://localhost:3000/admin'
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
