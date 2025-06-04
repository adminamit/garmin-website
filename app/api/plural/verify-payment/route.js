import { NextResponse } from "next/server";

export async function POST(request) {
  const { PLURAL_API_BASE_URL, PLURAL_CLIENT_ID, PLURAL_CLIENT_SECRET } =
    process.env;

  try {
    const { plural_token, order_id } = await request.json();

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
      throw new Error("Could not retrieve access token from Plural.");
    }

    // Step 2: Fetch transaction details using the token from redirect
    const orderDetailsRes = await fetch(
      `${PLURAL_API_BASE_URL.replace(
        /\/api$/,
        ""
      )}/api/checkout/v1/token/${plural_token}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    if (!orderDetailsRes.ok) {
      const errRes = await orderDetailsRes.text();
      throw new Error(`Plural fetch failed: ${errRes}`);
    }

    const orderDetails = await orderDetailsRes.json();

    const status = orderDetails.status;
    const clientTransactionId = orderDetails.client_transaction_id;
    const paymentId = orderDetails.payment_id;

    if (status === "COMPLETED" && clientTransactionId === order_id) {
      // Update your local order here (optional — or frontend triggers it)
      return NextResponse.json({
        status: "SUCCESS",
        pluralOrderId: orderDetails.order_id,
        client_transaction_id: clientTransactionId,
        payment_id: paymentId || "",
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
    console.error("Plural verify-payment error:", err);
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
