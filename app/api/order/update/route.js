import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;
if (!SERVER_URL) throw new Error("Missing SERVER_URL");

const UpdateBody = z.object({
  orderId: z.string(),
  orderData: z.record(z.any()),
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
    body = UpdateBody.parse(await request.json());
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${SERVER_URL}/api/orders/updateOrder`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body.orderData),
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Upstream error updating order" },
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
