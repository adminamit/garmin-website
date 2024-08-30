import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function GET(request, context) {
    const user = request.nextUrl.searchParams.get("user");
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
                    Orders(where: { orderedBy: { equals: "${user}" } orderStatus: { not_equals: pending_payment }} ) {
                        docs {
                            id
                            razorpayPaymentId
                            orderStatus
                            trackingId
                            order_note
                            orderTitle
                            total
                            discount
                            createdAt
                            orderedBy {
                                id
                                full_name
                            }
                            shippingAddress
                            coupon {
                                id
                                name
                            }
                            items {
                                product {
                                    id
                                    title
                                    sku
                                    featuredImageUrl
                                }
                            }
                        }
                        hasNextPage
                        hasPrevPage
                        limit
                        nextPage
                        offset
                        page
                        pagingCounter
                        prevPage
                        totalDocs
                        totalPages
                    }
                }
            `,
            }),
        },

        { cache: "no-cache" }
    );

    const data = await res.json();
    return NextResponse.json(data.data.Orders);
}
