import { NextResponse } from 'next/server';
import { getPayload } from '../../../../lib/payload';

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
  
  try {
    const payload = await getPayload();
    
    // Get the path
    const { pathname } = new URL(req.url);
    const path = pathname.replace('/api/admin', '');
    
    // Parse body if present
    let body;
    if (req.body) {
      try {
        body = await req.json();
      } catch (e) {
        // Not JSON or no body
      }
    }
    
    // Use payload.local API
    let result;
    
    if (path.includes('/graphql')) {
      // Handle GraphQL requests
      result = await payload.local.graphQL({
        query: body?.query,
        variables: body?.variables,
      });
    } else {
      // For all other requests, pass to appropriate local method
      const method = req.method.toLowerCase();
      const collection = path.split('/')[1] || 'users';
      
      if (method === 'get') {
        // Handle collection or single document request
        const id = path.split('/').pop();
        
        if (id && id !== collection) {
          result = await payload.local.findByID({
            collection,
            id,
          });
        } else {
          result = await payload.local.find({
            collection,
            limit: 100,
          });
        }
      } else if (method === 'post') {
        result = await payload.local.create({
          collection,
          data: body,
        });
      }
    }
    
    return NextResponse.json(result || { success: true }, { headers: corsHeaders });
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
