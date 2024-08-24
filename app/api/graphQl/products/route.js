import { NextResponse } from "next/server";
export async function GET(request, context) {
    let products = request.nextUrl.searchParams.get("products");

    const id = request.nextUrl.searchParams.get("id");
    const series = request.nextUrl.searchParams.get("series");
    const activity = request.nextUrl.searchParams.get("activity");
    const features = request.nextUrl.searchParams.get("features");
    const sortBy = request.nextUrl.searchParams.get("sortBy");
    const page = request.nextUrl.searchParams.get("page");

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
                    categories: { in: ["${id}"] }
                    status: { equals: published }
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
                }
                }

            
            `,
            }),
        },

        { cache: "no-store" }
    );
    console.log("resresresresres");
    console.log(res);

    const data = await res.json();
    return NextResponse.json(data.data.Products);
}
