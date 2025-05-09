import { cookies } from "next/headers";

export async function GET(request) {
    const cookieStore = cookies();
    cookieStore.delete("payload-token");

    // Your other logic here
    return new Response("Cookie deleted", { status: 200 });
}
