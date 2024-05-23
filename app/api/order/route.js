import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
    const {
        amount,
        receipt,
        currency = "INR",
        orderNote,
    } = await request.json();

    var options = {
        amount: amount,
        currency: currency,
        receipt: "rcp22",
        // note: orderNote,
    };
    console.log(options);
    const order = await razorpay.orders.create(options);
    console.log("order");
    console.log(order);
    return NextResponse.json({ orderId: order.id }, { status: 200 });
}
