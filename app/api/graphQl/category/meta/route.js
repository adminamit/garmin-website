import { NextResponse } from "next/server";
export async function GET(request, context) {
    let slug = request.nextUrl.searchParams.get("slug");
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `{
                ProductCategories(where: { slug: { equals: ${JSON.stringify(
                    slug
                )} } }) {
                    docs {
                        meta {
                            title
                            description
                        }
                        title
                        heading
                        description
                    }
                }
            }`,
        }),
    });
    const data = await res.json();
    return NextResponse.json(data.data.ProductCategories.docs[0]);
}
