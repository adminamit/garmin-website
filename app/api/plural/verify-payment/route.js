import { NextResponse } from "next/server";

export async function POST(request) {
  const { PLURAL_API_BASE_URL, PLURAL_CLIENT_ID, PLURAL_CLIENT_SECRET } =
    process.env;

  try {
    const { pluralOrderId, orderId } = await request.json();
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

    const orderDetailsRes = await fetch(
      `${PLURAL_API_BASE_URL.replace(
        /\/api$/,
        ""
      )}/api/pay/v1/orders/${pluralOrderId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    const orderDetails = await orderDetailsRes.json();

    if (
      orderDetails.status === "COMPLETED" &&
      orderDetails.client_transaction_id === orderId
    ) {
      return NextResponse.json({
        status: "SUCCESS",
        pluralOrderId,
        client_transaction_id: orderId,
        payment_id: orderDetails.payment_id || "",
      });
    } else if (orderDetails.status === "PENDING") {
      return NextResponse.json({
        status: "PENDING",
        message: "Payment is pending.",
      });
    } else {
      return NextResponse.json({
        status: "FAILED",
        message: `Payment status: ${orderDetails.status}`,
      });
    }
  } catch (err) {
    console.error("Verification error:", err);
    return NextResponse.json(
      {
        message: "Verification failed.",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
