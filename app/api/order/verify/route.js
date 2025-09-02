export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Razorpay from "razorpay";
import crypto from "crypto";

const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;
const DEFAULT_COURIER_CHARGE = Number(process.env.COURIER_CHARGE_INR ?? 590);

const json = (status, data) => NextResponse.json(data, { status });

function hmac(orderId, paymentId) {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) throw new Error("RAZORPAY_KEY_SECRET missing");
  return crypto
    .createHmac("sha256", secret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { isOk: false, message: "Invalid payload" });
  }

  const {
    internalOrderId,
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  } = body || {};
  if (
    !internalOrderId ||
    !razorpayOrderId ||
    !razorpayPaymentId ||
    !razorpaySignature
  ) {
    return json(400, { isOk: false, message: "Missing fields" });
  }

  // 1) Signature check (order_id|payment_id)
  if (hmac(razorpayOrderId, razorpayPaymentId) !== razorpaySignature) {
    return json(400, { isOk: false, message: "payment verification failed" });
  }

  // 2) Load your internal order to compute expected amount (server is source of truth)
  const token = cookies().get("payload-token")?.value;
  if (!token) return json(401, { isOk: false, message: "Unauthorized" });

  let order;
  try {
    const res = await fetch(`${SERVER_URL}/api/orders/${internalOrderId}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok)
      return json(res.status, { isOk: false, message: "Order not found" });
    order = await res.json();
  } catch {
    return json(500, { isOk: false, message: "Failed to load order" });
  }

  const courierInr = Number.isFinite(Number(order.courierCharge))
    ? Number(order.courierCharge)
    : DEFAULT_COURIER_CHARGE;
  const expectedPaise = Math.round((Number(order.total) + courierInr) * 100);

  // 3) Cross-check against Razorpay payment (amount/order/currency/status)
  const razor = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  let payment;
  try {
    payment = await razor.payments.fetch(razorpayPaymentId);
  } catch {
    return json(502, { isOk: false, message: "Unable to fetch payment" });
  }

  const valid =
    payment?.order_id === razorpayOrderId &&
    Number(payment?.amount) === expectedPaise &&
    (payment?.currency || "INR") === (order?.currency || "INR") &&
    ["authorized", "captured"].includes(payment?.status);

  if (!valid) {
    return json(400, {
      isOk: false,
      message: "Payment details do not match expected amount/order",
    });
  }

  // (Optional) You can update order status here instead of from the client.

  return json(200, { isOk: true, message: "payment verified successfully" });
}
