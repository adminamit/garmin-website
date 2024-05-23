import { revalidatePath } from "next/cache";

export async function GET(request) {
    const path = request.nextUrl.searchParams.get("path");
    const type = request.nextUrl.searchParams.get("type");
    if (path) {
        type ? revalidatePath(path, type) : revalidatePath(path);
        return Response.json({ revalidated: true, now: Date.now() });
    }

    return Response.json({
        revalidated: false,
        now: Date.now(),
        message: "Missing path to revalidate",
    });
}
