import qs from "qs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
    const id = request.nextUrl.searchParams.get("id");
    const series = request.nextUrl.searchParams.get("series");
    const activity = request.nextUrl.searchParams.get("activity");
    const features = request.nextUrl.searchParams.get("features");
    const sortBy = request.nextUrl.searchParams.get("sortBy");
    const page = request.nextUrl.searchParams.get("page");
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

    const stringifiedQuery = qs.stringify(
        {
            limit: 12,
            page: page ? page : 1,
            depth: 1,
            where: query,
            ...(sortBy != "null" && {
                sort: sortBy,
            }),
        },

        { addQueryPrefix: true }
    );
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products${stringifiedQuery}`,
        { next: { tags: ["products"] } }
    );
    const data = await res.json();
    // console.log(data);

    return NextResponse.json(data);
}

// export async function GET(request, context) {
//     const id = request.nextUrl.searchParams.get("id");
//     console.log('request.nextUrl.searchParams.get("id")');
//     console.log(id);
//     // const res = await fetch(process.env.GRAPHQL_API_URL, {
//     //     method: "POST",
//     //     headers: {
//     //         "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //         query: `
//     //         query {
//     //             Products(where: { productType: { in: [variable, simple, group] }, categories: {in : ${id}} }) {
//     //               docs {
//     //                 id,
//     //                 title,
//     //                 price,
//     //                 salePrice,
//     //                 sku,
//     //                 productType,

//     //                 parentProduct{
//     //                   title,
//     //                   id
//     //                 },
//     //                 attributes{
//     //                   title,
//     //                   attribute{
//     //                     title
//     //                   }
//     //                 }
//     //                 images{
//     //                   featuredImage{
//     //                     url
//     //                   }
//     //                 },
//     //                 featuredImage {
//     //                   url
//     //                 }
//     //               }
//     //               totalDocs
//     //             }
//     //           }
//     //         `,
//     //     }),
//     // });
//     // const data = await res.json();
//     // console.log("data");
//     // console.log(data);
//     // return NextResponse.json(data);
//     return NextResponse.json({});
// }
