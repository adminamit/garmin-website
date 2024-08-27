import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
export async function POST(request) {
    // const user = await request.json();
    const allCookies = cookies();
    const payloadToken = allCookies.get("payload-token").value;
    const orderData = await request.json();

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/createOrder`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${payloadToken}`,
                },
                body: JSON.stringify(orderData),
            }
        );
        console.log(res);
        console.log("resresresresres");
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            console.log("datadatadatadatadatadata");
            if (data.id) {
                return NextResponse.json(data);
            } else {
                throw new Error(errors[0].message);
            }
        } else {
            throw new Error("Error updating! Please try again later.");
        }
    } catch (error) {
        return NextResponse.json(error);
    }
}
