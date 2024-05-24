export const dynamic = "force-dynamic";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
    const doc = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product-series?locale=undefined&draft=false&depth=1`
    );
    const data = await doc.json();
    return NextResponse.json(data.docs);
}
