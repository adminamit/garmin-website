// app/api/plural/verify-payment/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const { PLURAL_API_BASE_URL, PLURAL_CLIENT_ID, PLURAL_CLIENT_SECRET } =
    process.env;

  if (!PLURAL_API_BASE_URL || !PLURAL_CLIENT_ID || !PLURAL_CLIENT_SECRET) {
    console.error(
      "Missing Plural API credentials for verification in environment variables."
    );
    return NextResponse.json(
      {
        message:
          "Server configuration error: Plural API credentials missing for verification.",
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { pluralOrderId, orderId } = body; // pluralOrderId is Plural's ID, orderId is your internal ID

    if (!pluralOrderId || !orderId) {
      return NextResponse.json(
        {
          message:
            "Missing Plural Order ID or Internal Order ID for verification.",
        },
        { status: 400 }
      );
    }

    // --- First, get a fresh Access Token for verification ---
    const tokenRequestBody = {
      client_id: PLURAL_CLIENT_ID,
      client_secret: PLURAL_CLIENT_SECRET,
      grant_type: "client_credentials",
    };
    const baseUrl = PLURAL_API_BASE_URL.replace(/\/api$/, "");
    const tokenUrl = `${baseUrl}/api/auth/v1/token`;

    const tokenResponse = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tokenRequestBody),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error(
        "Failed to get token for verification:",
        tokenResponse.status,
        errorText
      );
      return NextResponse.json(
        { message: "Failed to get Plural token for verification." },
        { status: 500 }
      );
    }
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error(
        "Access token not found in Plural token response for verification."
      );
      return NextResponse.json(
        { message: "Access token not found for verification." },
        { status: 500 }
      );
    }

    // --- Second, use the token to get Order Details from Plural ---
    // Endpoint: GET {{baseURL}}/pay/v1/orders/{{orderID}}
    const orderDetailsUrl = `${baseUrl}/api/pay/v1/orders/${pluralOrderId}`; // Using Plural's order ID

    console.log("Verifying Plural order details from:", orderDetailsUrl);

    const orderDetailsResponse = await fetch(orderDetailsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    console.log(
      "Plural order details response status:",
      orderDetailsResponse.status
    );

    if (!orderDetailsResponse.ok) {
      const errorText = await orderDetailsResponse.text();
      console.error(
        "Failed to get Plural order details:",
        orderDetailsResponse.status,
        errorText
      );
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }
      return NextResponse.json(
        {
          message: "Failed to retrieve Plural order details.",
          details: errorData,
        },
        { status: 500 }
      );
    }

    const orderDetails = await orderDetailsResponse.json();
    console.log("Plural Order Details:", orderDetails);

    // --- Third, compare and update your internal order status ---
    // You should compare orderDetails.status (e.g., "COMPLETED", "FAILED", "PENDING")
    // with your internal order's expected status.
    // Also, cross-check orderDetails.client_transaction_id with your 'orderId'.
    if (
      orderDetails.status === "COMPLETED" &&
      orderDetails.client_transaction_id === orderId
    ) {
      // Update your internal order status to success in your database
      // e.g., await yourDbClient.updateOrder(orderId, { paymentStatus: 'SUCCESS', pluralOrderId: pluralOrderId });
      console.log(`Order ${orderId} successfully verified as COMPLETED.`);
      return NextResponse.json(
        { status: "SUCCESS", message: "Payment verified successfully." },
        { status: 200 }
      );
    } else if (
      orderDetails.status === "PENDING" &&
      orderDetails.client_transaction_id === orderId
    ) {
      // Order is still pending, may require manual check later
      console.log(`Order ${orderId} is PENDING.`);
      return NextResponse.json(
        { status: "PENDING", message: "Payment is pending verification." },
        { status: 200 }
      );
    } else {
      // Payment status is not COMPLETED or doesn't match your order ID
      console.warn(
        `Order ${orderId} verification failed. Status: ${orderDetails.status}, Plural client_transaction_id: ${orderDetails.client_transaction_id}`
      );
      return NextResponse.json(
        {
          status: "FAILED",
          message: `Payment status is ${orderDetails.status}.`,
        },
        { status: 200 } // Return 200 to client, actual payment status is in body
      );
    }
  } catch (error) {
    console.error("Error verifying payment callback:", error);
    return NextResponse.json(
      {
        message: "Internal server error during payment verification.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
