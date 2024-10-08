import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function GET(request, context) {
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
                Settings {
                    sitePromo
                    updatedAt
                    createdAt
                }
            }
            `,
            }),
        },

        { cache: "no-cache" }
    );

    const data = await res.json();
    return NextResponse.json(data.data.Settings);
}
