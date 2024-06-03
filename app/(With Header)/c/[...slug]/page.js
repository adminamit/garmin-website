export const dynamic = "force-dynamic";
import notFound from "@/app/(With Header)/not-found";
import { Archive } from "@/app/_components/Archive/Archive";
import "@/app/_css/shop/products.css";
import qs from "qs";

async function getCategoryData(slug) {
    const query = {
        slug: {
            equals: slug,
        },
    };
    const stringifiedQuery = qs.stringify(
        {
            where: query,
        },
        { addQueryPrefix: true }
    );
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product-category${stringifiedQuery}`,
        { next: { tags: ["category"] } }
    );
    return res.json();
}
export async function generateMetadata(
    { params: { slug }, searchParams },
    parent
) {
    const activeSlug = slug.pop();

    const meta = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/category/meta?slug=${activeSlug}`
    ).then((meta) => meta.json());
    // console.log("metaDatametaDatametaData");
    // console.log(activeSlug);
    // const meta = metaData;
    return {
        title: meta.meta.title ? meta.meta.title : meta.title,
        description: meta.meta.description
            ? meta.meta.description
            : meta.description,
    };
}

export default async function Shop({ params: { slug } }) {
    let catgeory;
    //Get Product Category Slug
    const activeSlug = slug.pop();
    //Fetch Category Details
    const fetchCategory = await getCategoryData(activeSlug);
    catgeory = fetchCategory.docs[0];
    if (!catgeory) {
        return notFound();
    }
    return (
        <>
            {/* <NextSeo title={catgeory.heading} description="hfkflsdjljfl" /> */}
            <main className="flex min-h-screen flex-col items-center justify-between">
                <Archive category={catgeory} />
            </main>
        </>
    );
}
