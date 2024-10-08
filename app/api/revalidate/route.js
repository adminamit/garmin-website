import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request) {
    const path = request.nextUrl.searchParams.get("path");
    const type = request.nextUrl.searchParams.get("type");
    const tag = request.nextUrl.searchParams.get("tag");
    // if (tag) {
    //     revalidateTag(tag);
    //     return Response.json({ revalidated: true, now: Date.now() });
    // }
    if (path) {
        type ? revalidatePath(path, type) : revalidatePath(path);
        return Response.json({ revalidated: true, now: Date.now() });
    }
    revalidateTag(tag);

    return Response.json({
        revalidated: false,
        now: Date.now(),
        message: "Missing path or tag to revalidate",
    });
}
