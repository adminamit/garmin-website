import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function GET(request, context) {
    const orderID = request.nextUrl.searchParams.get("orderID");
    const allCookies = cookies();
    const payloadToken = allCookies.get("payload-token").value;
    const res = await fetch(
        process.env.GRAPHQL_API_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${payloadToken}`,
            },
            body: JSON.stringify({
                query: `
                    {
                    Order(id: "${orderID}") {
                        id
                        billingAddress
                        shippingAddress
                        razorpayPaymentId
                        orderStatus
                        trackingId
                        order_note
                        discount
                        total
                        orderTitle
                        updatedAt
                        createdAt
                        coupon {
                            id
                            name
                        }
                        items {
                            quantity
                            id
                            price
                            product {
                                id
                                title
                                sku
                                price
                                stock
                                note
                                featuredImageUrl
                            }
                        }
                    }
                }
            `,
            }),
        },

        { cache: "no-cache" }
    );

    const data = await res.json();
    return NextResponse.json(data.data.Order);
}
