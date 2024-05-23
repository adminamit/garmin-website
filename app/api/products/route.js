import qs from "qs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
    const id = request.nextUrl.searchParams.get("id");
    const query = {
        categories: {
            in: id,
        },
        productType: {
            in: "simple,variable,group",
        },
    };
    const stringifiedQuery = qs.stringify(
        {
            limit: 10,
            depth: 0,
            where: query,
        },
        { addQueryPrefix: true }
    );

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products${stringifiedQuery}`
    );
    const data = await res.json();
    return NextResponse.json(data);
}
