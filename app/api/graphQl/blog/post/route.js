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
                Blogs(where: { slug: { equals: "intensity-minute-data-sheds-light-on-fitness-habits" } }, draft: false) {
                    docs {
                        id
                        title
                        content(depth: 3)
                        publishDate
                        slug
                        _status
                        category {
                            id
                            title
                            description
                            slug
                        }
                        featuredImage {
                            id
                            alt
                            caption
                            url
                        }
                    }
                }
            }
            `,
        }),
    });
    const data = await res.json();
    console.log("data NextResponse");
    console.log(data);
    return NextResponse.json(data.data.Blogs.docs[0]);
}
