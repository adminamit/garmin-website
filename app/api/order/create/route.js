import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;
if (!SERVER_URL) throw new Error("Missing SERVER_URL");

const CreateOrderBody = z.object({
  items: z.array(
    z.object({
      product: z.string(),
      sku: z.string(),
      quantity: z.number().min(1).max(50),
      categories: z.array(z.string()).optional(),
    })
  ),
  coupon: z.string().nullable().optional(),
  shippingAddress: z.object({
    name: z.string().min(1),
    home: z.string().min(1),
    localty: z.string().min(1),
    city: z.string().min(1),
    landmark: z.string().nullable().optional(),
    pincode: z.string().min(1),
    state: z.string().min(1),
    phone: z.string().min(6),
  }),
  billingAddress: z.any().optional(),
  orderId: z.string().nullable().optional(),
  orderedBy: z.any().optional(),
});

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
    body = CreateOrderBody.parse(await request.json());
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${SERVER_URL}/api/orders/createOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Upstream error creating order" },
        { status: res.status }
      );
    }

    const data = await res.json();
    if (!data?.id) {
      return NextResponse.json(
        { message: "Order creation response missing id" },
        { status: 502 }
      );
    }
    return NextResponse.json({ id: data.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to create order" },
      { status: 500 }
    );
  }
}
