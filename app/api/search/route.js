import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
    const query = request.nextUrl.searchParams.get("query");
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/search?query=${query}`
    );
    const data = await res.json();
    return NextResponse.json(data);
}
