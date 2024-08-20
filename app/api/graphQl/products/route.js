import { NextResponse } from "next/server";
export async function GET(request, context) {
    let products = request.nextUrl.searchParams.get("products");

    const id = request.nextUrl.searchParams.get("id");
    const series = request.nextUrl.searchParams.get("series");
    const activity = request.nextUrl.searchParams.get("activity");
    const features = request.nextUrl.searchParams.get("features");
    const sortBy = request.nextUrl.searchParams.get("sortBy");
    const page = request.nextUrl.searchParams.get("page");
    const query = {
        categories: {
            in: JSON.stringify([id]),
        },
        productType: {
            in: `[simple, variable, group]`,
        },
        ...(series != null && {
            series: {
                equals: series,
            },
        }),
        ...(activity != null && {
            activity: {
                in: activity,
            },
        }),
        ...(features != null && {
            features: {
                in: features,
            },
        }),
    };

    // console.log(query);
    // { productType: { in: [variable, simple, group] }, categories: {in: ["65e869ec8e41da318f3a8c22"]} } , limit:10
    // {
    //     categories: { in: '["65e869ec8e41da318f3a8c22"]' },
    //     productType: { in: '"[simple, variable, group]"' }
    //   }

    //   { productType: { in: [variable, simple, group] }, categories: {in: ["65e869ec8e41da318f3a8c22"]} } , limit:10
    let activityArr = activity.split(",");
    let featuresArr = features.split(",");

    //Prepare for graphQl Query
    activityArr = activityArr.map((i) => `"${i}"`);
    featuresArr = featuresArr.map((i) => `"${i}"`);

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
                Products(
                    where: {
                    categories: { equals: "${id}" }
                    productType: { in: [simple, variable, group] }
                    ${
                        activity != "null"
                            ? `activity: {in: [${activityArr}]}`
                            : ""
                    }
                    ${
                        features != "null"
                            ? `features: {in: [${featuresArr}]}`
                            : ""
                    }
                    ${series != "null" ? `series: {equals: "${series}"}` : ""}
                    }
                    ${sortBy != "null" ? `sort: "${sortBy}"` : ""}
                    limit: 12
                    page: ${page ? page : 1}
                    
                ) {
                    docs {
                    id
                    proirityOrder
                    title
                    featuredImage {
                        url
                    }
                    description
                    price
                    salePrice
                    sku
                    features {
                        id
                        title
                    }
                    series {
                        title
                        id
                    }
                    activity {
                        id
                        title
                    }
                    featuredImageUrl
                    }
                    limit: limit
                    page: page
                    totalDocs
                    totalPages
                    nextPage
                    prevPage
                    hasNextPage
                    hasNextPage
                }
                }

            
            `,
            }),
        },
        { cache: "no-store" }
    );

    const data = await res.json();
    return NextResponse.json(data.data.Products);
}
