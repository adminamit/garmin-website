import { NextResponse } from "next/server";
export async function GET(request, context) {
    let products = request.nextUrl.searchParams.get("products");
    products = products.split(",");
    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            {
                Products(where: { sku: { in: ${JSON.stringify(products)} } }) {
                    docs {
                        productSpecifications {
                            specificationGroup {
                                id,
                                specificationGroup {
                                    id
                                    title
                                    updatedAt
                                    createdAt
                                }
                                items {
                                    value
                                    id
                                    specification {
                                        id
                                        title
                                        url
                                        specTitle
                                        updatedAt
                                        createdAt
                                        group {
                                            id
                                            title
                                            updatedAt
                                            createdAt
                                        }
                                    }
                                }
                            }
                        }
                        title
                        id
                        sku
                        price
                        salePrice
                        featuredImageUrl,
                    }
                    totalDocs
                }
            }
            
            `,
        }),
    });
    const data = await res.json();
    return NextResponse.json(data.data.Products.docs);
}
