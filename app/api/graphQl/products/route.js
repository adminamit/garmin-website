import { NextResponse } from "next/server";
export async function GET(request, context) {
    let products = request.nextUrl.searchParams.get("products");

    const id = request.nextUrl.searchParams.get("id");
    const series = request.nextUrl.searchParams.get("series");
    const activity = request.nextUrl.searchParams.get("activity");
    const features = request.nextUrl.searchParams.get("features");
    const sortBy = request.nextUrl.searchParams.get("sortBy");

    const query = {
        categories: {
            in: id,
        },
        productType: {
            in: "simple,variable,group",
        },
        ...(series != "null" && {
            series: {
                equals: series,
            },
        }),
        ...(activity != "null" && {
            activity: {
                in: activity,
            },
        }),
        ...(features != "null" && {
            features: {
                in: features,
            },
        }),
    };

    const res = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            {
                Products(where: ${JSON.stringify(query)} }) {
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
