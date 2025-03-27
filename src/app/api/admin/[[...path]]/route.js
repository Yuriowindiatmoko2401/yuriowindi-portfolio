import { NextResponse } from 'next/server';
import { getPayload } from '../../../../lib/payload';

async function handler(req) {
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
      // Handle REST requests
      const method = req.method.toLowerCase();
      
      if (method === 'get') {
        const searchParams = new URL(req.url).searchParams;
        const query = {};
        
        searchParams.forEach((value, key) => {
          query[key] = value;
        });
        
        result = await payload.local.findByID({
          collection: 'users',
          id: path.split('/').pop(),
          depth: 2,
          ...query,
        });
      } else if (method === 'post') {
        result = await payload.local.create({
          collection: 'users',
          data: body,
        });
      }
    }
    
    return NextResponse.json(result || { success: true });
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
