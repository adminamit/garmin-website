import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    const order = await request.json();

    const payload = {
        pickup_location: {
            name: process.env.DELHIVERY_PICKUP_LOCATION,
        },
        shipments: [
            {
                country: "India",
                city: order.shippingAddress.city,
                seller_add: "",
                cod_amount: "0",
                seller_inv_date: "",
                seller_name: "",
                pin: order.shippingAddress.pincode,
                seller_inv: "",
                state: order.shippingAddress.state,
                return_name: process.env.DELHIVERY_PICKUP_LOCATION,
                order: order.id,
                add: order.shippingAddress.home,
                payment_mode: "prepaid",
                quantity: "1",
                seller_cst: "",
                seller_tin: "",
                phone: order.shippingAddress.phone,
                total_amount: order.total,
                name: order.shippingAddress.name,
            },
        ],
    };
    //Prepare Payload
    try {
        const res = await fetch(`${process.env.DELHIVERY_API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${process.env.DELHIVERY_API_TOKEN}`,
            },
            body: `format=json&data=${JSON.stringify(payload)}`,
        });

        const data = await res.json();

        if (data) {
            return NextResponse.json(data);
        } else {
            throw new Error(errors[0].message);
        }
    } catch (e) {
        throw new Error("An error occurred while attempting to update.");
    }
}
