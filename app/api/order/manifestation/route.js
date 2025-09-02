import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DELHIVERY_API_URL = process.env.DELHIVERY_API_URL;
const DELHIVERY_API_TOKEN = process.env.DELHIVERY_API_TOKEN;
const DELHIVERY_PICKUP_LOCATION = process.env.DELHIVERY_PICKUP_LOCATION;
const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;

if (!DELHIVERY_API_URL || !DELHIVERY_API_TOKEN || !DELHIVERY_PICKUP_LOCATION) {
  throw new Error("Missing Delhivery env vars");
}
if (!SERVER_URL) throw new Error("Missing SERVER_URL");

const Body = z.object({ id: z.string() });

function denyIfBadOrigin(req) {
  const appOrigin = process.env.APP_ORIGIN;
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
  const originBlock = denyIfBadOrigin(request);
  if (originBlock) return originBlock;

  const token = cookies().get("payload-token")?.value;
  if (!token)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  let body;
  try {
    body = Body.parse(await request.json());
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }

  // 1) Fetch order (authoritative) from your backend
  let order;
  try {
    const orderRes = await fetch(`${SERVER_URL}/api/orders/${body.id}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!orderRes.ok) {
      return NextResponse.json(
        { message: "Order not found or not authorized" },
        { status: orderRes.status }
      );
    }
    order = await orderRes.json();
  } catch {
    return NextResponse.json(
      { message: "Failed to load order" },
      { status: 500 }
    );
  }

  // 2) Build Delhivery payload from trusted server data
  const payload = {
    pickup_location: { name: DELHIVERY_PICKUP_LOCATION },
    shipments: [
      {
        country: "India",
        city: order?.shippingAddress?.city,
        seller_add: "",
        cod_amount: "0",
        seller_inv_date: "",
        seller_name: "",
        pin: order?.shippingAddress?.pincode,
        seller_inv: "",
        state: order?.shippingAddress?.state,
        return_name: DELHIVERY_PICKUP_LOCATION,
        order: order?.id,
        add: order?.shippingAddress?.home,
        payment_mode: "prepaid",
        quantity: String(
          Array.isArray(order?.items)
            ? order.items.reduce(
                (sum, i) => sum + Number(i.quantity || 0),
                0
              ) || 1
            : 1
        ),
        seller_cst: "",
        seller_tin: "",
        phone: order?.shippingAddress?.phone,
        total_amount: Number(order?.total || 0),
        name: order?.shippingAddress?.name,
      },
    ],
  };

  // 3) Call Delhivery (their API expects urlencoded: format=json&data=<json>)
  try {
    const form = new URLSearchParams();
    form.set("format", "json");
    form.set("data", JSON.stringify(payload));

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(DELHIVERY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Token ${DELHIVERY_API_TOKEN}`,
        Accept: "application/json",
      },
      body: form.toString(),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json(
        { message: "Delhivery API error" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to create shipment" },
      { status: 500 }
    );
  }
}
