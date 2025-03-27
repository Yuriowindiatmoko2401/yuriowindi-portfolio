import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

async function handler(req) {
  try {
    const payload = await getPayload({
      config: configPromise,
    });
    
    // Get the path and query
    const { pathname, search } = new URL(req.url);
    const path = pathname.replace('/api/admin', '');
    const query = search || '';

    // Convert headers to plain object
    const headers = {};
    req.headers.forEach((value, key) => {
      headers[key] = value;
    });

    // Parse body if present
    let body;
    if (req.body) {
      const contentType = req.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        body = await req.json();
      } else {
        body = await req.text();
      }
    }

    // Call the local API
    const response = await payload.request({
      url: path + query,
      method: req.method,
      headers,
      body,
    });

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

    return NextResponse.json(response, { 
      headers: corsHeaders,
    });
  } catch (error) {
    console.error(`Error in ${req.method}:`, error);
    return NextResponse.json(
      { error: error.message }, 
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
            ? 'https://yuriowindi-portfolio.vercel.app' 
            : 'http://localhost:3000',
        }
      }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const DELETE = handler;
