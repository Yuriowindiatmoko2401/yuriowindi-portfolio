import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

async function handler(req) {
  try {
    const payload = await getPayload({
      config: configPromise,
    });
    
    // Get the path and query
    const { pathname } = new URL(req.url);
    const path = pathname.replace('/api/admin', '');

    // Parse body if present
    let body;
    if (req.body) {
      try {
        body = await req.json();
      } catch (e) {
        // If not JSON, get as text
        body = await req.text();
      }
    }

    // Call the local API
    const result = await payload.local.graphQL({
      req: {
        url: path,
        method: req.method,
        body,
      },
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

    return NextResponse.json(result, { 
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
