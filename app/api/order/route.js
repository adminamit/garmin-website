// app/api/order/route.js
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Razorpay from "razorpay";

const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;
if (!SERVER_URL) throw new Error("Missing SERVER_URL");

// Optional: put this in env if it varies
const DEFAULT_COURIER_CHARGE = Number(process.env.COURIER_CHARGE_INR ?? 590);

export async function POST(request) {
  const token = cookies().get("payload-token")?.value;
  if (!token)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  let body;
  try {
    body = await request.json(); // { orderId }
  } catch {
    return NextResponse.json({ message: "Invalid body" }, { status: 400 });
  }

  const orderId = body?.orderId;
  if (!orderId)
    return NextResponse.json({ message: "orderId required" }, { status: 400 });

  // 1) Load authoritative order
  let order;
  try {
    const res = await fetch(`${SERVER_URL}/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok)
      return NextResponse.json(
        { message: "Order not found" },
        { status: res.status }
      );
    order = await res.json();
  } catch {
    return NextResponse.json(
      { message: "Failed to load order" },
      { status: 500 }
    );
  }

  // 2) Compute amount on server — include courier with a safe fallback of ₹590
  const courierChargeInr = Number.isFinite(Number(order.courierCharge))
    ? Number(order.courierCharge)
    : DEFAULT_COURIER_CHARGE;

  const amountPaise = Math.round(
    (Number(order.total) + courierChargeInr) * 100
  );

  if (!Number.isFinite(amountPaise) || amountPaise <= 0) {
    return NextResponse.json(
      { message: "Computed amount invalid" },
      { status: 400 }
    );
  }

  // 3) Create Razorpay order
  const razor = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const rpOrder = await razor.orders.create({
      amount: amountPaise,
      currency: order.currency || "INR",
      receipt: `rcpt_${order.id}`,
      // notes: { order_ref: order.id },
    });
    return NextResponse.json({ orderId: rpOrder.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Unable to initialize payment" },
      { status: 400 }
    );
  }
}
