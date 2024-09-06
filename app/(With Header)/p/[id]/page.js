import React from "react";
import "@/app/_css/product/product.css";
import notFound from "../../not-found";
import { ProductWrapper } from "../wrapper";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata(
    { params: { id }, searchParams },
    parent
) {
    const metaData = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/product/meta?sku=${id}`
    )
        .then((meta) => meta.json())
        .catch((err) => {
            metaData: {
            }
        });

    return {
        title: metaData
            ? metaData.meta.title
                ? metaData.meta.title
                : metaData.title
            : "",
        description: metaData
            ? metaData.meta.description
                ? metaData.meta.description
                : metaData.description
            : "",
    };
}

async function getProduct(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/data/${id}`
    );
    return res.json();
}

async function getProductGraphql(id) {
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
                Products(where: { sku: { equals: "${id}" } }) {
                    docs {
                    id
                    status
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
                        id
                        attributeName
                        attributeTitle
                        title
                        slug
                        attribute {
                            title
                            slug
                            id
                            text
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
                    breadcrumb{
                        id
                        title
                        slug
                    }
                }
            }
        }
        `,
            }),
        },
        { cache: "no-cache" }
    );
    const responseBody = await res.json();

    return responseBody;
}

async function getVariationGraphql(id) {
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
                    Products(where: { parentProduct: { equals: "${id}" } }, limit:50) {
                        docs {
                            id
                            title
                            sku
                            featuredImage {
                                url
                            }
                            featuredImageUrl
                            attributes {
                                attributeName
                                attributeTitle
                                id
                                title
                                slug
                                attribute {
                                    title
                                    slug
                                    id
                                }
                            }
                        }
                        limit
                        totalDocs
                    }
                }
            `,
            }),
        },
        { cache: "no-store" }
    );
    const responseBody = await res.json();
    return responseBody;
}

async function getParentGraphql(id) {
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
                    Products(where: { id: { equals: "${id}" } }, limit:50) {
                        docs {
                            id
                            title
                            sku
                            featuredImage {
                                url
                            }
                            featuredImageUrl
                            attributes {
                                attributeName
                                attributeTitle
                                id
                                title
                                slug
                                attribute {
                                    title
                                    slug
                                    id
                                }
                            }
                        }
                        limit
                        totalDocs
                    }
                }
            `,
            }),
        },
        { cache: "no-store" }
    );
    const responseBody = await res.json();
    return responseBody;
}

async function getProductTabsGraphql(id) {
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
                Products(where: { sku: { equals: "${id}" } }) {
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
        { cache: "no-store" }
    );

    const responseBody = await res.json();
    return responseBody;
}
const page = async ({ params: { id } }) => {
    noStore();
    let productData = null,
        variationData = [],
        tabsData = null;
    const fetchProduct = await getProductGraphql(id);

    productData = fetchProduct.data.Products.docs[0];

    if (!productData || productData.status != "published") {
        return notFound();
    } else {
        // FETCH TABS DATA
        // const fetchTabsData = await getProductTabsGraphql(id);
        // console.log("tabsData tabsData tabsData");
        // tabsData = fetchTabsData.data.Products.docs[0];
        // FETCH VARIATION
        if (productData.productType == "variable") {
            const fetchVariation = await getVariationGraphql(productData.id);
            variationData = fetchVariation.data.Products.docs;
            variationData.push(productData);
        } else if (productData.productType == "variation") {
            const fetchVariation = await getVariationGraphql(
                productData.parentProduct.id
            );
            variationData = fetchVariation.data.Products.docs;

            //Get Parent Product
            const parentProduct = await getParentGraphql(
                productData.parentProduct.id
            );
            const parentProductData = parentProduct.data.Products.docs[0];
            variationData.push(parentProductData);
        }

        //FETCH TABS DATA
        // const fetchTabsData = await getProductTabsGraphql(id);
        // tabsData = fetchTabsData.data.Products.docs[0];
    }

    const breadCrumbs = fetchProduct.breadcrumb
        ? fetchProduct.breadcrumb.parentCategory
            ? [
                  {
                      label: fetchProduct.breadcrumb.parentCategory[0].title,
                      link: `${process.env.NEXT_PUBLIC_LIVE_URL}/c/${fetchProduct.breadcrumb.parentCategory[0].slug}`,
                  },
                  {
                      label: fetchProduct.breadcrumb.title,
                      link: `${process.env.NEXT_PUBLIC_LIVE_URL}/c/${fetchProduct.breadcrumb.slug}`,
                  },
              ]
            : [
                  {
                      label: fetchProduct.breadcrumb.title,
                      link: `${process.env.NEXT_PUBLIC_LIVE_URL}/c/${fetchProduct.breadcrumb.slug}`,
                  },
              ]
        : [];
    return (
        <ProductWrapper
            productData={productData}
            variationData={variationData}
            breadCrumbs={breadCrumbs}
            tabsData={tabsData}
        />
        // <></>
    );
};

export default page;
