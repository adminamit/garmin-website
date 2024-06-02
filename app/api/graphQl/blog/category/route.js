import { NextResponse } from "next/server";
export async function GET(request, context) {
    let slug = request.nextUrl.searchParams.get("slug");
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            {
                BlogCategories(where: { slug: { equals: ${JSON.stringify(
                    slug
                )} } }) {
                    docs {
                        id
                        title
                        description
                        featuredImage {
                            id
                            alt
                            caption
                            url
                            sizes {
                                thumbnail {
                                    url
                                }
                            }
                        }
                        icon {
                            id
                            alt
                            url
                        }
                        slug
                        _status
                    }
                }
            }
            
            `,
        }),
    });
    const data = await res.json();
    console.log("data NextResponse");
    console.log(data);
    return NextResponse.json(data.data.BlogCategories.docs[0]);
}
