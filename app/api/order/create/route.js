import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    const orderData = await request.json();

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/createOrder`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            }
        );
        if (res.ok) {
            const data = await res.json();
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
