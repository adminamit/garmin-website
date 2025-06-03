import { NextResponse } from "next/server";

export async function POST(request) {
  const { PLURAL_CLIENT_ID, PLURAL_CLIENT_SECRET, PLURAL_API_BASE_URL } =
    process.env;

  // Basic validation for environment variables
  if (!PLURAL_CLIENT_ID || !PLURAL_CLIENT_SECRET || !PLURAL_API_BASE_URL) {
    console.error("Missing Plural API credentials in environment variables.");
    return NextResponse.json(
      {
        message: "Server configuration error: Plural API credentials missing.",
      },
      { status: 500 }
    );
  }

  try {
    // REMOVED: const body = await request.json(); // This line is causing the error if the body is empty
    // REMOVED: console.log("Request body:", body); // For debugging

    // Prepare the request body for Plural API
    const tokenRequestBody = {
      client_id: PLURAL_CLIENT_ID,
      client_secret: PLURAL_CLIENT_SECRET,
      grant_type: "client_credentials",
    };

    // Construct the correct token endpoint URL
    // Remove /pay/v1 if it exists and add /auth/v1/token
    const baseUrl = PLURAL_API_BASE_URL.replace(/\/pay\/v1$/, "");
    const tokenUrl = `${baseUrl}/auth/v1/token`;

    console.log("Making request to:", tokenUrl);
    console.log("Request body:", tokenRequestBody);

    // Make a POST request to Plural's token generation endpoint
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tokenRequestBody),
    });

    console.log("Plural API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Plural token generation failed (raw errorText):",
        errorText
      );
      console.error(
        "Plural token generation failed (status):",
        response.status
      );

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        console.error("Failed to parse errorText as JSON:", e);
        errorData = { message: errorText || "Unknown error format" };
      }

      return NextResponse.json(
        {
          message: "Failed to generate Plural auth token",
          details: errorData,
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Plural API response:", data);

    const token = data.access_token;

    if (!token) {
      console.error("Plural token response missing access_token field:", data);
      return NextResponse.json(
        { message: "Plural token response malformed - no access_token field." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        access_token: token,
        expires_at: data.expires_at,
        token_type: data.token_type || "Bearer",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating Plural auth token:", error);
    return NextResponse.json(
      {
        message: "Internal server error during token generation.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
