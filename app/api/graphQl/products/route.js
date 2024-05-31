import { NextResponse } from "next/server";
export async function GET(request, context) {
    // let products = request.nextUrl.searchParams.get("products");

    // const id = request.nextUrl.searchParams.get("id");
    // const series = request.nextUrl.searchParams.get("series");
    // const activity = request.nextUrl.searchParams.get("activity");
    // const features = request.nextUrl.searchParams.get("features");
    // const sortBy = request.nextUrl.searchParams.get("sortBy");

    // const query = {
    //     categories: {
    //         in: JSON.stringify([id]),
    //     },
    //     productType: {
    //         in: `[simple, variable, group]`,
    //     },
    //     ...(series != null && {
    //         series: {
    //             equals: series,
    //         },
    //     }),
    //     ...(activity != null && {
    //         activity: {
    //             in: activity,
    //         },
    //     }),
    //     ...(features != null && {
    //         features: {
    //             in: features,
    //         },
    //     }),
    // };

    // console.log(query);
    // // { productType: { in: [variable, simple, group] }, categories: {in: ["65e869ec8e41da318f3a8c22"]} } , limit:10
    // // {
    // //     categories: { in: '["65e869ec8e41da318f3a8c22"]' },
    // //     productType: { in: '"[simple, variable, group]"' }
    // //   }

    // //   { productType: { in: [variable, simple, group] }, categories: {in: ["65e869ec8e41da318f3a8c22"]} } , limit:10

    // const res = await fetch(process.env.GRAPHQL_API_URL, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         query: `
    //         {
    //             Products(where: { productType: { in: [variable, simple, group] }, categories: {in: ["65e869ec8e41da318f3a8c22"]} } ,limit:10) {
    //                 docs {
    //                     id
    //                     title
    //                     price
    //                     salePrice
    //                     sku
    //                     productType
    //                     description
    //                     series {
    //                         id
    //                         title
    //                     }
    //                     activity {
    //                         id
    //                         title
    //                     }
    //                     features {
    //                         id
    //                         title
    //                     }
    //                     featuredImageUrl
    //                 }
    //                 totalDocs
    //             }
    //         }

    //         `,
    //     }),
    // });
    // const data = await res.json();
    // return NextResponse.json(data.data.Products);
    return NextResponse.json({});
}
