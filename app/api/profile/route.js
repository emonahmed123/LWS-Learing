import { cookies, headers } from "next/headers";

export async function GET(request) {

    const requestHeaders = new Headers(request.headers);
    const headerList = headers()
    // console.log(headerList)

    // console.log(requestHeaders.get('x-custom-header'));
    // console.log(request.cookies.get('theme'));
    await cookies().set('page', '2')

    console.log((await cookies()).get('page'));
    return new Response('Profile data', {
        headers: {
            "Set-Cookie": "theme=dark"
        }
    })
}