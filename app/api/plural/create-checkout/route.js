import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request) {
  const { PLURAL_API_BASE_URL, SERVER_BASE_URL, PLURAL_MERCHANT_ID } =
    process.env;

  if (!PLURAL_API_BASE_URL || !PLURAL_MERCHANT_ID) {
    console.error(
      "Missing Plural API base URL or Merchant ID in environment variables."
    );
    return NextResponse.json(
      {
        message:
          "Server configuration error: Plural API base URL or Merchant ID missing.",
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const {
      amount,
      currency,
      customer,
      order_id,
      token,
      notes,
      products,
      ...otherCheckoutDetails
    } = body;

    if (
      !token ||
      !amount ||
      !currency ||
      !customer ||
      !order_id ||
      !customer.address
    ) {
      console.error("Missing required fields for checkout creation:", {
        token: !!token,
        amount,
        currency,
        customer,
        order_id,
        customerAddress: !!customer.address,
      });
      return NextResponse.json(
        {
          message:
            "Missing required fields for checkout creation (token, amount, currency, customer, order_id, customer.address).",
        },
        { status: 400 }
      );
    }

    const [firstName, ...lastNameParts] = customer.name.split(" ");
    const lastName = lastNameParts.join(" ");

    const callbackUrl = `${SERVER_BASE_URL}/account/orders/${order_id}?token=${token}`;
    const failureCallbackUrl = `${SERVER_BASE_URL}/account/orders/${order_id}`;

    const requestId = uuidv4();
    const requestTimestamp = new Date().toISOString();

    console.log("🔁 Preparing Plural checkout request for order ID:", order_id);
    console.log(
      "👤 Customer data:",
      JSON.stringify(
        {
          first_name: firstName,
          last_name: lastName,
          email_id: customer.email,
          mobile_number: customer.phone,
          products,
        },
        null,
        2
      )
    );

    const baseUrl = PLURAL_API_BASE_URL.replace(/\/api$/, "");
    const checkoutUrl = `${baseUrl}/api/checkout/v1/orders`;

    const response = await fetch(checkoutUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Request-ID": requestId,
        "Request-Timestamp": requestTimestamp,
        accept: "application/json",
      },
      body: JSON.stringify({
        merchant_id: PLURAL_MERCHANT_ID,
        merchant_order_reference: order_id,
        integration_mode: "IFRAME",
        order_amount: {
          value: amount,
          currency: currency,
        },
        pre_auth: false,
        notes: notes || `Order ${order_id}`,
        callback_url: callbackUrl,
        failure_callback_url: failureCallbackUrl,
        products: products || [],
        purchase_details: {
          customer: {
            email_id: customer.email,
            first_name: firstName,
            last_name: lastName,
            customer_id: customer.customer_id || order_id,
            mobile_number: customer.phone,
            billing_address: {
              address1: customer.address.street_name || "",
              address2: customer.address.street_number || "",
              address3: customer.address.address3 || "",
              pincode: customer.address.zip_code,
              city: customer.address.city,
              state: customer.address.state,
              country: customer.address.country,
            },
            shipping_address: {
              address1: customer.address.street_name || "",
              address2: customer.address.street_number || "",
              address3: customer.address.address3 || "",
              pincode: customer.address.zip_code,
              city: customer.address.city,
              state: customer.address.state,
              country: customer.address.country,
            },
          },
          merchant_metadata: {
            your_key_1: "your_value_1",
          },
        },
        ...otherCheckoutDetails,
      }),
    });

    console.log("🧾 Plural checkout API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "❌ Plural Generate Checkout Link failed:",
        response.status,
        errorText
      );

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { message: errorText || "Unknown error format" };
      }

      return NextResponse.json(
        {
          message: "Failed to generate Plural hosted checkout link",
          details: errorData,
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log(
      "✅ Plural checkout full response:",
      JSON.stringify(data, null, 2)
    );
    const redirectUrl = data.redirect_url;

    if (!redirectUrl) {
      console.error("❗ Plural checkout response missing redirect_url:", data);
      return NextResponse.json(
        {
          message:
            "Plural checkout link response malformed - no redirect URL found.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        redirect_url: redirectUrl,
        plural_order_id: data.order_id, // ✅ Include Plural order ID for verification
        plural_token: data.token, // ✅ Optionally include the token if needed later
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("🚨 Error generating Plural hosted checkout link:", error);
    return NextResponse.json(
      {
        message: "Internal server error during checkout link generation.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
