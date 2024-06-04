import { NextResponse, NextRequest } from "next/server";
import { getCookie } from "cookies-next";
export function middleware(request) {
    const requestHeaders = new Headers(request.headers);
    const userToken = request.cookies.get("payload-token")?.value;

    if (!userToken && request.nextUrl.pathname.startsWith("/account")) {
        return Response.redirect(new URL("/login", request.url));
    }
    if (
        (userToken && request.nextUrl.pathname.startsWith("/login")) ||
        (userToken && request.nextUrl.pathname.startsWith("/register"))
    ) {
        return Response.redirect(new URL("/account", request.url));
    }
    //Checkout Redirection
    if (!userToken && request.nextUrl.pathname.startsWith("/checkout")) {
        return Response.redirect(new URL("/login", request.url));
    }

    // Add new request headers
    requestHeaders.set("Access-Control-Allow-Credentials", "true");
    requestHeaders.set("Access-Control-Allow-Origin", "*");
    requestHeaders.set(
        "Access-Control-Allow-Methods",
        "GET,DELETE,PATCH,POST,PUT"
    );

    requestHeaders.set(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    requestHeaders.set("content-type", "application/json");
    requestHeaders.set("credentials", "include");

    // You can also set request headers in NextResponse.rewrite
    return NextResponse.next({
        request: {
            // New request headers
            headers: requestHeaders,
        },
    });
}
