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
  
  // For production, we'll return a simple message
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

    try {
    // Get the Payload instance
    const payload = await getPayload();
    
    // Extract the API path
    const { pathname } = new URL(req.url);
    const apiPath = pathname.replace('/api/admin', '');
    
    // Parse request body if present
    let body = {};
    if (req.body) {
      try {
        body = await req.json();
      } catch (e) {
        // Not JSON or no body
      }
    }
    
    // Process different request types
    // For GraphQL requests
    if (apiPath.includes('/graphql')) {
      const result = await payload.local.graphQL({
        query: body?.query,
        variables: body?.variables,
      });
      return NextResponse.json(result, { headers: corsHeaders });
    }
    
    // For collections - handle CRUD operations
    const method = req.method.toLowerCase();
    const segments = apiPath.split('/').filter(Boolean);
    
    // If this is a collection request
    if (segments.length > 0) {
      const collection = segments[0];
      
      // Collection requests
      if (method === 'get') {
        if (segments.length > 1) {
          // Get single document
          const id = segments[1];
          const doc = await payload.local.findByID({
            collection,
            id,
          });
          return NextResponse.json(doc, { headers: corsHeaders });
        } else {
          // Get collection list
          const result = await payload.local.find({
            collection,
            limit: 100,
          });
          return NextResponse.json(result, { headers: corsHeaders });
        }
      } else if (method === 'post') {
        // Create document
        const result = await payload.local.create({
          collection,
          data: body,
        });
        return NextResponse.json(result, { headers: corsHeaders });
      } else if (method === 'patch') {
        // Update document
        const id = segments[1];
        const result = await payload.local.update({
          collection,
          id,
          data: body,
        });
        return NextResponse.json(result, { headers: corsHeaders });
      } else if (method === 'delete') {
        // Delete document
        const id = segments[1];
        const result = await payload.local.delete({
          collection,
          id,
        });
        return NextResponse.json(result, { headers: corsHeaders });
      }
    }
    
    // For authentication and other operations
    if (apiPath.includes('/login')) {
      // Handle login
      const result = await payload.local.login({
        email: body.email,
        password: body.password,
      });
      return NextResponse.json(result, { headers: corsHeaders });
    }
    
    if (apiPath.includes('/logout')) {
      // Handle logout
      const result = await payload.local.logout(req);
      return NextResponse.json(result, { headers: corsHeaders });
    }
    
    if (apiPath.includes('/refresh-token')) {
      // Handle token refresh
      const result = await payload.local.refresh({
        token: body.token,
      });
      return NextResponse.json(result, { headers: corsHeaders });
    }
    
    if (apiPath.includes('/forgot-password')) {
      // Handle forgot password
      const result = await payload.local.forgotPassword({
        email: body.email,
      });
      return NextResponse.json(result, { headers: corsHeaders });
    }
    
    if (apiPath.includes('/reset-password')) {
      // Handle reset password
      const result = await payload.local.resetPassword({
        token: body.token,
        password: body.password,
      });
      return NextResponse.json(result, { headers: corsHeaders });
    }
    
    // For any other requests
    return NextResponse.json({ success: true }, { headers: corsHeaders });
    
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
