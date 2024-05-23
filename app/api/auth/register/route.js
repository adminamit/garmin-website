import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    const values = await request.json();

    try {
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            }
        );
        const data = await req.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(err);
    }
}
