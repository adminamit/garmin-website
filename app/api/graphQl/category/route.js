export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
export async function GET(request, context) {
    let sku = request.nextUrl.searchParams.get("sku");
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `{
                Products(where: { sku: { equals: ${JSON.stringify(sku)} } }) {
                    docs {
                        title
                        excerpt
                        description
                        meta {
                            title
                            description
                        }
                    }
                }
            }`,
        }),
    });
    const data = await res.json();
    return NextResponse.json(data.data.Products.docs[0]);
}
