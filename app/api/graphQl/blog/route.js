import { NextResponse } from "next/server";
export async function GET(request, context) {
    let sku = request.nextUrl.searchParams.get("sku");

    // return NextResponse.json({ url: process.env.GRAPHQL_API_URL });
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            {
                Blogs(sort: null) {
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
                    docs {
                        id
                        title
                        content(depth: 2)
                        publishDate
                        slug
                        featuredImage {
                            id
                            alt
                            caption
                            url
                        }
                        category {
                            id
                            title
                            description
                            createDate
                            slug
                            updatedAt
                            createdAt
                            _status
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
    return NextResponse.json(data.data.Blogs);
}
