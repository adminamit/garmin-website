import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
    const user = await request.json();
    const allCookies = cookies();
    const payloadToken = allCookies.get("payload-token").value;
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${user.id}`,
            {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${payloadToken}`,
                },
                body: JSON.stringify(user.updatedData),
            }
        );

        if (res.ok) {
            const data = await res.json();
            if (data) {
                return NextResponse.json(data);
            } else {
                throw new Error(errors[0].message);
            }
        } else {
            throw new Error("Error updating! Please try again later.");
        }
    } catch (e) {
        throw new Error("An error occurred while attempting to update.");
    }
}
