import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
    const id = request.nextUrl.searchParams.get("id");
    console.log(id);
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            query {
                Products(where: { sku: { equals: "${id}" } }) {
                  docs {
                    id,
                    title,
                    price,
                    salePrice,
                    sku,
                    productType,
                    
                    parentProduct{
                      title,
                      id
                    },
                    attributes{
                      title,
                      attribute{
                        title
                      }
                    }
                    images{
                      featuredImage{
                        url
                      }
                    },
                    featuredImage {
                      url
                    }
                  }
                  totalDocs
                }
              }
            `,
        }),
    });
    const data = await res.json();
    return NextResponse.json(data);
}
