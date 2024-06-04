import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    const order = await request.json();
    console.log("order");
    console.log(order);
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/updateOrder`,
            {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order.orderData),
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
