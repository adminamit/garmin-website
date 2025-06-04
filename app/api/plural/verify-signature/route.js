import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      order_id,
      status,
      signature,
      error_code = null,
      error_message = null,
    } = body;

    console.log("🔔 Plural redirect received:", body);

    // ⚠️ Skipping signature verification for now — DO NOT use this in production
    const isSuccess = status === "AUTHORIZED" || status === "COMPLETED";

    if (isSuccess) {
      return NextResponse.json({
        verified: true,
        status: "SUCCESS",
        order_id,
        signature,
        payment_status: status,
      });
    } else {
      return NextResponse.json({
        verified: true,
        status: "FAILED",
        order_id,
        error_code,
        error_message,
      });
    }
  } catch (err) {
    console.error("❌ Error handling verify-signature:", err);
    return NextResponse.json(
      {
        status: "ERROR",
        message: "Unable to process signature verification.",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
