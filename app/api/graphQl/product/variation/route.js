import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function GET(request, context) {
    let id = request.nextUrl.searchParams.get("id");
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            {
                Products(where: { parentProduct: { equals: ${id} } }) {
                    docs {
                        title
                        featuredImage {
                            url
                        }
                        featuredImageUrl
                        attributes {
                            title
                            slug
                            attribute {
                            title
                            slug
                            }
                        }
                    }
                }
            }
        `,
        }),
    });
    const data = await res.json();
    return NextResponse.json(data.data.Products.docs[0]);
}
