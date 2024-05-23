import { cookies } from "next/headers";
export async function GET(request) {
    const allCookies = cookies();
    const authToken = allCookies.get("payload-token").value;
    const id = request.nextUrl.searchParams.get("id");
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${id}`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    // console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${id}`);
    const data = await res.json();
    // console.log("datadatadatadatadatadata");
    // console.log(data);
    return Response.json(data);
}

export async function PATCH(request) {
    const valuesToUpdate = await request.json();

    try {
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(valuesToUpdate),
            }
        );
        const data = await req.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(err);
    }
}
