import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  return handleRequest(request, path);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  return handleRequest(request, path);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  return handleRequest(request, path);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  return handleRequest(request, path);
}

async function handleRequest(request: NextRequest, pathSegments: string[]) {
  const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5001';
  const path = pathSegments.join('/');
  const searchParams = request.nextUrl.searchParams.toString();
  
  const targetUrl = `${BACKEND_URL}/api/${path}${searchParams ? '?' + searchParams : ''}`;
  
  console.log(`Proxying ${request.method} to: ${targetUrl}`);

  try {
    const headers = new Headers(request.headers);
    // Remove host header to avoid issues with destination server
    headers.delete('host');
    
    const fetchOptions: RequestInit = {
      method: request.method,
      headers: headers,
      // Only include body for non-GET/HEAD methods
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : await request.text(),
      // Use no-cache for API proxying to ensure fresh data
      cache: 'no-store'
    };

    const response = await fetch(targetUrl, fetchOptions);
    const contentType = response.headers.get('content-type');
    
    let data;
    if (contentType?.includes('application/json')) {
      data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      data = await response.text();
      return new NextResponse(data, { 
        status: response.status,
        headers: { 'Content-Type': contentType || 'text/plain' }
      });
    }
  } catch (error) {
    console.error('Proxy Error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 502 }
    );
  }
}
