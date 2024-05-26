import qs from "qs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, context) {
    const id = request.nextUrl.searchParams.get("id");
    const query = {
        categories: {
            in: id,
        },
        productType: {
            in: "simple,variable,group",
        },
    };
    const stringifiedQuery = qs.stringify(
        {
            limit: 10,
            depth: 0,
            where: query,
        },
        { addQueryPrefix: true }
    );

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products${stringifiedQuery}`
    );
    const data = await res.json();
    return NextResponse.json(data);
}

// import { NextResponse, NextRequest } from "next/server";

// export async function GET(request, context) {
//     const id = request.nextUrl.searchParams.get("id");
//     console.log(id);
//     const res = await fetch(process.env.GRAPHQL_API_URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             query: `
//             query {
//                 Products(where: { productType: { in: [variable, simple, group] }, categories: {in : ${id}} }) {
//                   docs {
//                     id,
//                     title,
//                     price,
//                     salePrice,
//                     sku,
//                     productType,

//                     parentProduct{
//                       title,
//                       id
//                     },
//                     attributes{
//                       title,
//                       attribute{
//                         title
//                       }
//                     }
//                     images{
//                       featuredImage{
//                         url
//                       }
//                     },
//                     featuredImage {
//                       url
//                     }
//                   }
//                   totalDocs
//                 }
//               }
//             `,
//         }),
//     });
//     const data = await res.json();
//     console.log("data");
//     console.log(data);
//     return NextResponse.json(data);
// }
