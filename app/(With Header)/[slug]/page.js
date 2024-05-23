import React from "react";
import { draftMode } from "next/headers";
import notFound from "../not-found";
import { Blocks } from "@/app/_components/Blocks";
export default async function Page({ params: { slug } }) {
    console.log("slug");
    console.log(slug);
    slug = slug == "" || slug == "/" ? "home" : slug;
    slug = "home";
    const { isEnabled: isDraftMode } = draftMode();

    let page = null;
    try {
        page = await fetch(
            `${process.env.NEXT_PUBLIC_LIVE_URL}/api/fetchDoc/?collection=pages&slug=${slug}&draft=${isDraftMode}`,
            {
                collection: "pages",
                slug: slug,
                draft: isDraftMode,
            }
        );
        page = await page.json();
    } catch (error) {
        console.log(error);
    }
    if (!page) {
        return notFound();
    }

    const { hero, layout } = page;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {/* <div className="w-xl mx-auto">
                <pre>{JSON.stringify(layout, null, 2)}</pre>
            </div> */}

            <React.Fragment>
                <Blocks
                    blocks={layout}
                    disableTopPadding={
                        !hero ||
                        hero?.type === "none" ||
                        hero?.type === "lowImpact"
                    }
                />
            </React.Fragment>
            {/* <CopyText /> */}
        </main>
    );
}
