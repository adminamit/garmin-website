import { NextResponse } from "next/server";
export async function GET(request, context) {
    let sku = request.nextUrl.searchParams.get("sku");
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            {
                Products(where: { sku: { equals: ${sku} } }) {
                    docs {
                    id
                    title
                    price
                    salePrice
                    sku
                    productType
                    parentProduct {
                        title
                        id
                    }
                    attributes {
                        title
                        slug
                        attribute {
                        title
                        slug
                        }
                    }
                    images {
                        featuredImage {
                        url
                        }
                    }
                    featuredImage {
                        url
                    }
                    stock
                    excerpt
                    description
                    featuredImageUrl
                    _status
                    slug
                    groupProducts {
                        id
                        title
                        sku
                        featuredImageUrl
                        price
                        salePrice
                        slug
                    }
                    links {
                        manual
                        software
                        supportCenter
                    }
                    
                    series {
                        id
                        title
                        slug
                    }
                    activity {
                        id
                        title
                        slug
                    }
                    features {
                        id
                        title
                        slug
                    }
                    categories {
                        id
                        title
                        slug
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
