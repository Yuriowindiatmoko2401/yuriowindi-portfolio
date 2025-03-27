import { createNextPayloadRouter } from '@payloadcms/next-payload/dist/router';
import { nextHandler } from '@payloadcms/next-payload/dist/handlers/next';
import payload from 'payload';
import { NextResponse } from 'next/server';

const router = createNextPayloadRouter({
  payloadConfig: {
    // Your payload config
  },
  // Define routes
  routes: [
    {
      path: '/api/admin/(.*)',
      method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      handler: nextHandler,
    },
  ],
});

export async function GET(req) {
  return router.handle(req);
}

export async function POST(req) {
  return router.handle(req);
}

export async function PUT(req) {
  return router.handle(req);
}

export async function PATCH(req) {
  return router.handle(req);
}

export async function DELETE(req) {
  return router.handle(req);
}

export async function OPTIONS(req) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
      ? 'https://yuriowindi-portfolio.vercel.app' 
      : 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  return new NextResponse(null, { 
    status: 200,
    headers: corsHeaders,
  });
}
