import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

// export async function POST(request) {
//     const cookieStore = cookies();
//     cookieStore.delete("payload-token");
//     return new Response("Cookie deleted", { status: 200 });
// }
export async function GET() {
    const allCookies = cookies();
    const payloadToken = allCookies.get("payload-token").value;
    const cookieStore = cookies();
    try {
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/login`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${payloadToken}`,
                },
            }
        );
        const data = await req.json();
        cookieStore.delete("payload-token");
        return new Response("Cookie deleted", { status: 200 });
    } catch (err) {
        return NextResponse.json(err);
    }
}
