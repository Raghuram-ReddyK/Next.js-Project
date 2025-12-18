import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log("This is a proxy middleware called for every request.");
    console.log("Request URL:", request.url);
    console.log("Request method:", request.method);

    // Example: Add custom headers
    const response = NextResponse.next()
    response.headers.set('X-Custom-Header', 'Hello from middleware')

    return response
}

// Configure which paths this middleware runs on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}