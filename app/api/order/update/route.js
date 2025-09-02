export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;
if (!SERVER_URL) throw new Error("Missing SERVER_URL");

function denyIfBadOrigin(req) {
  const appOrigin = process.env.APP_ORIGIN; // optional, e.g. https://yourdomain.com
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

  // forward user auth to your upstream
  const token = cookies().get("payload-token")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // expect { orderId, orderData }
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const orderId =
    body?.orderId || body?.orderData?.id || body?.orderData?.orderId;
  const orderData = body?.orderData;

  if (!orderId || !orderData || typeof orderData !== "object") {
    return NextResponse.json(
      { message: "Missing orderId or orderData" },
      { status: 400 }
    );
  }

  // ensure upstream receives the id field
  const payload = { id: orderId, ...orderData };

  try {
    const res = await fetch(`${SERVER_URL}/api/orders/updateOrder`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { message: "Upstream update failed", detail },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to update order" },
      { status: 500 }
    );
  }
}
