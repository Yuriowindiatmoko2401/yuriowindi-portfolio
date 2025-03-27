import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV === 'production'
      ? 'https://yuriowindi-portfolio.vercel.app'
      : 'http://localhost:3000'
  );
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
