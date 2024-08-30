import qs from "qs";
import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function GET(request, context) {
    const slug = request.nextUrl.searchParams.get("slug");
    const userType = request.nextUrl.searchParams.get("userType");
    const type = request.nextUrl.searchParams.get("type");
    const allCookies = cookies();
    const payloadToken = allCookies.get("payload-token").value;

    //Report Type
    let reportType = "";
    if (type != "null") {
        reportType = type;
    } else {
        switch (userType) {
            case "investorFund1":
                reportType = "fundOne";
                break;
            case "investorFund2":
                reportType = "fundTwo";
                break;
            default:
                break;
        }
    }
    console.log(type);
    const query = {
        category: {
            equals: slug,
        },
        type: {
            equals: reportType,
        },
    };

    const stringifiedQuery = qs.stringify(
        {
            depth: 3,
            where: query,
            limit: 29,
        },

        { addQueryPrefix: true }
    );

    const doc = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reports?where[category][equals]=${slug}&where[type][in]=${reportType}&limit=0`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${payloadToken}`,
            },
        },
        { cache: "no-store" }
    );
    const data = await doc.json();

    return NextResponse.json(data.docs);
}
