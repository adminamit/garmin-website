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
                Products(where: { sku: { equals: ${JSON.stringify(sku)} } }) {
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
                        links {
                            manual
                            software
                            supportCenter
                        }
                        moreFeaturesProducts {
                            id
                            title
                            sku
                            featuredImageUrl
                        }
                        compatibleProducts {
                            title
                            sku
                            slug
                            featuredImageUrl
                            id
                        }
                        relatedProducts {
                            id
                            title
                            sku
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
                    totalDocs
                }
            }
            
            `,
        }),
    });
    const data = await res.json();
    console.log("data NextResponse");
    console.log(data);
    return NextResponse.json(data.data.Products.docs);
}
