import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(request, response) {
    const allCookies = cookies();
    allCookies.delete("payload-token");
    return NextResponse.json(true);
}
