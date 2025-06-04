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
      amount, // Raw amount from frontend
      currency,
      customer, // Customer object from frontend (contains name, email, phone, address)
      order_id, // Your internal order ID
      token, // Auth token from generate-token
      // Other optional fields from frontend like notes, etc.
      notes,
      ...otherCheckoutDetails // Catch any other extra fields
    } = body;

    // --- Validate Required Fields from Frontend ---
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

    // Split full_name into first_name and last_name for Plural's customer object
    const [firstName, ...lastNameParts] = customer.name.split(" ");
    const lastName = lastNameParts.join(" ");

    const callbackUrl = `${SERVER_BASE_URL}/account/orders/${order_id}?token=${token}`;
    const failureCallbackUrl = `${SERVER_BASE_URL}/account/orders/${order_id}`;

    // Generate unique Request-ID and Timestamp for headers
    const requestId = uuidv4();
    const requestTimestamp = new Date().toISOString();

    console.log("Preparing Plural checkout request for order ID:", order_id);
    console.log("Customer data for Plural:", {
      first_name: firstName,
      last_name: lastName,
      email_id: customer.email,
      mobile_number: customer.phone,
      billing_address: customer.address, // Assuming customer.address is already structured correctly
      shipping_address: customer.address, // Assuming billing and shipping are same for now, adjust if separate
    });
    console.log("Callback URL:", callbackUrl);
    console.log("Failure Callback URL:", failureCallbackUrl);

    // Construct the correct checkout endpoint URL as per cURL example:
    // https://pluraluat.v2.pinepg.in/api/checkout/v1/orders
    const baseUrl = PLURAL_API_BASE_URL.replace(/\/api$/, ""); // Ensure base URL ends correctly, e.g., .../v2.pinepg.in
    const checkoutUrl = `${baseUrl}/api/checkout/v1/orders`; // CORRECTED ENDPOINT AS PER cURL

    console.log("Making request to Plural checkout URL:", checkoutUrl);

    // Make a POST request to Plural's "Generate Checkout Link" API
    const response = await fetch(checkoutUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Request-ID": requestId, // ADDED HEADER
        "Request-Timestamp": requestTimestamp, // ADDED HEADER
        accept: "application/json", // ADDED HEADER
      },
      body: JSON.stringify({
        merchant_id: PLURAL_MERCHANT_ID, // Still needed if not inside purchase_details/merchant_metadata
        merchant_order_reference: order_id, // CORRECTED FIELD NAME
        order_amount: {
          value: amount, // Amount in the smallest currency unit
          currency: currency,
        },
        pre_auth: false, // As per cURL example
        allowed_payment_methods: [
          // As per cURL example
          "CARD",
          "UPI",
          "NETBANKING",
          "POINTS",
          "WALLET",
        ],
        notes: notes || `Order ${order_id}`, // Optional notes
        callback_url: callbackUrl, // CORRECTED FIELD NAME
        failure_callback_url: failureCallbackUrl, // ADDED FIELD
        purchase_details: {
          // Nested object as per cURL example
          customer: {
            email_id: customer.email,
            first_name: firstName,
            last_name: lastName,
            customer_id: customer.customer_id || order_id,
            mobile_number: customer.phone,
            billing_address: {
              // Map directly from customer.address or order.billingAddress
              address1: customer.address.street_name || "", // Example mapping
              address2: customer.address.street_number || "", // Example mapping
              address3: customer.address.address3 || "", // If you have this field
              pincode: customer.address.zip_code,
              city: customer.address.city,
              state: customer.address.state,
              country: customer.address.country,
            },
            shipping_address: {
              // Map directly from customer.address or order.shippingAddress
              address1: customer.address.street_name || "", // Example mapping
              address2: customer.address.street_number || "", // Example mapping
              address3: customer.address.address3 || "", // If you have this field
              pincode: customer.address.zip_code,
              city: customer.address.city,
              state: customer.address.state,
              country: customer.address.country,
            },
          },
          merchant_metadata: {
            // Optional metadata
            your_key_1: "your_value_1",
            // key1: otherCheckoutDetails.key1, // Example if passed from frontend
          },
        },
        ...otherCheckoutDetails, // Pass any other top-level details from the frontend if they exist
      }),
    });

    console.log("Plural checkout API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Plural Generate Checkout Link failed:",
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
    console.log("Plural checkout response:", data);

    const redirectUrl = data.redirect_url; // Plural returns this in the top level

    if (!redirectUrl) {
      console.error(
        "Plural checkout link response missing redirect_url:",
        data
      );
      return NextResponse.json(
        {
          message:
            "Plural checkout link response malformed - no redirect URL found.",
        },
        { status: 500 }
      );
    }

    // Return the redirect URL to the frontend
    return NextResponse.json({ redirect_url: redirectUrl }, { status: 200 });
  } catch (error) {
    console.error("Error generating Plural hosted checkout link:", error);
    return NextResponse.json(
      {
        message: "Internal server error during checkout link generation.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
