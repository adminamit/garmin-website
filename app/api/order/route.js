// app/api/order/route.js
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Razorpay from "razorpay";
import { z } from "zod";

const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;
if (!SERVER_URL) throw new Error("Missing SERVER_URL");

const Body = z.object({
  // Client must send only the internal order id; server computes the amount.
  orderId: z.string(),
});

function denyIfBadOrigin(req) {
  const appOrigin = process.env.APP_ORIGIN; // e.g., https://yourdomain.com
  if (!appOrigin) return null;
  const origin = req.headers.get("origin");
  try {
    if (origin && new URL(appOrigin).origin !== origin) {
      return NextResponse.json({ message: "Invalid origin" }, { status: 403 });
    }
  } catch {}
  return null;
}

export async function POST(request) {
  // Optional: block cross-site posts unless from your own origin
  const originBlock = denyIfBadOrigin(request);
  if (originBlock) return originBlock;

  const token = cookies().get("payload-token")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = Body.parse(await request.json());
  } catch {
    return NextResponse.json(
      { message: "Invalid body. Expected { orderId: string }" },
      { status: 400 }
    );
  }

  // 1) Load authoritative order (owner + totals) from your backend API
  let order;
  try {
    const res = await fetch(`${SERVER_URL}/api/orders/${body.orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { message: "Order not found or not authorized" },
        { status: res.status }
      );
    }
    order = await res.json();
  } catch {
    return NextResponse.json(
      { message: "Failed to load order" },
      { status: 500 }
    );
  }

  // 2) Compute amount (paise) on server — never trust client totals
  const currency = order.currency || "INR";
  const amountPaise =
    (Number(order.total) + Number(order.courierCharge || 0)) * 100;

  if (!Number.isFinite(amountPaise) || amountPaise <= 0) {
    return NextResponse.json(
      { message: "Computed amount is invalid" },
      { status: 400 }
    );
  }

  // 3) Create Razorpay order with server secrets
  const razor = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const rpOrder = await razor.orders.create({
      amount: amountPaise,
      currency,
      receipt: `rcpt_${order.id}`,
      // notes: { order_ref: order.id }, // optional, minimal PII
    });

    return NextResponse.json({ orderId: rpOrder.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Unable to initialize payment" },
      { status: 400 }
    );
  }
}
