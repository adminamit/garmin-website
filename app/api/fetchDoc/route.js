import { NextResponse, NextRequest } from "next/server";
import { payloadToken } from "../token";

const queryMap = {
    pages: {
        query: "PAGE",
        key: "Pages",
    },
    products: {
        query: "PRODUCT",
        key: "Products",
    },
    orders: {
        query: "ORDER",
        key: "Orders",
    },
};

export async function GET(request, context) {
    const slug = request.nextUrl.searchParams.get("slug");
    const collection = request.nextUrl.searchParams.get("collection");
    const isDraftMode = request.nextUrl.searchParams.get("isDraftMode");
    const doc = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug]=${slug}&draft=${isDraftMode}&depth=2`,
        { next: { tags: ["page"] } }
    );
    const data = await doc.json();
    return NextResponse.json(data.docs?.[0]);
}
