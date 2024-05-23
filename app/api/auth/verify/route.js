import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    const { token } = await request.json();
    // console.log(token);
    console.log(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/verify/${token}`
    );
    try {
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/verify/${token}`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await req.json();
        console.log(data);
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(err);
    }
}
