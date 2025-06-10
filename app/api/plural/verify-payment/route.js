import { NextResponse } from "next/server";

export async function POST(request) {
  const { PLURAL_API_BASE_URL, PLURAL_CLIENT_ID, PLURAL_CLIENT_SECRET } =
    process.env;

  try {
    const { order_id } = await request.json();

    if (!order_id) {
      console.error("❌ No order_id provided.");
      return NextResponse.json(
        { status: "ERROR", message: "order_id is required." },
        { status: 400 }
      );
    }

    console.log("🔍 Verifying Plural order ID:", order_id);

    // Step 1: Get access token
    const tokenRes = await fetch(
      `${PLURAL_API_BASE_URL.replace(/\/api$/, "")}/api/auth/v1/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: PLURAL_CLIENT_ID,
          client_secret: PLURAL_CLIENT_SECRET,
          grant_type: "client_credentials",
        }),
      }
    );

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error("❌ Failed to retrieve Plural access token.");
    }

    // Step 2: Call Plural order API using correct order ID
    const verifyUrl = `${PLURAL_API_BASE_URL.replace(
      /\/api$/,
      ""
    )}/api/pay/v1/orders/${order_id}`;
    console.log("📡 Hitting Plural verify endpoint:", verifyUrl);

    const orderDetailsRes = await fetch(verifyUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    if (!orderDetailsRes.ok) {
      const errRes = await orderDetailsRes.text();
      console.error("❌ Plural verification failed:", errRes);
      throw new Error(`Plural fetch failed: ${errRes}`);
    }

    const verifyData = await orderDetailsRes.json();
    console.log("✅ Plural order verification response:", verifyData);

    const status = verifyData?.data?.status;
    const paymentId = verifyData?.data?.payments?.[0]?.id || null;
    const clientTransactionId = verifyData?.data?.merchant_order_reference;

    if (status === "PROCESSED") {
      return NextResponse.json({
        status: "SUCCESS",
        pluralOrderId: verifyData.data.order_id,
        client_transaction_id: clientTransactionId,
        payment_id: paymentId,
      });
    } else if (status === "PENDING") {
      return NextResponse.json({
        status: "PENDING",
        message: "Payment is pending.",
      });
    } else {
      return NextResponse.json({
        status: "FAILED",
        message: `Payment status: ${status}`,
      });
    }
  } catch (err) {
    console.error("❌ Error in /api/plural/verify-payment:", err);
    return NextResponse.json(
      {
        status: "ERROR",
        message: "Verification failed.",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
