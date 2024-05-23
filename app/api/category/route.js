import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
    const slug = request.nextUrl.searchParams.get("slug");
    console.log("Slug here" + slug);
    console.log(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product-category/slug/${slug}?depth=2`
    );
    const doc = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product-category/slug/${slug}?depth=2&draft=false`
    );
    const data = await doc.json();
    return NextResponse.json(data);
}
