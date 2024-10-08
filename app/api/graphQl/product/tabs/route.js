import next from "next";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;
import { unstable_noStore as noStore } from "next/cache";
export async function GET(request, context) {
    noStore();
    let sku = request.nextUrl.searchParams.get("sku");
    const res = await fetch(
        process.env.GRAPHQL_API_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
        {
            Products(where: { sku: { equals: "${sku}" } }) {
                docs {
                    overviewJson
                    inTheBox
                    productSpecifications {
                        specificationGroup {
                        id
                        specificationGroup {
                            id
                            title
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
                            }
                        }
                        }
                    }
                    productAccessories {
                        accessory {
                        id
                        accessoryCategory {
                            id
                            title
                            heading
                            description
                            slug
                        }
                        products {
                            id
                            title
                            sku
                            price
                            salePrice
                            featuredImageUrl
                        }
                        }
                    }
                    compatibleProducts {
                        title
                        sku
                        slug
                        featuredImageUrl
                        id
                        price
                    }
                    moreFeaturesProducts {
                        id
                        title
                        sku
                        featuredImageUrl
                        price
                    }
                    
                    relatedProducts {
                        id
                        title
                        sku
                        price
                    }
                }
            }
        }
            `,
            }),
        },
        { cache: "no-store" },
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return NextResponse.json(data.data.Products.docs[0]);
}
