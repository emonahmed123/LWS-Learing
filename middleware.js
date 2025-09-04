import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    console.log('Middleware is running');

    console.log(request.nextUrl);
    if (request.url.includes('/api')) {

        return NextResponse.redirect(new URL('/', request.url))


    }

}

export const config = {
    matcher: '/api/:path*',
}