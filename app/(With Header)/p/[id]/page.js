import React from "react";
// export const revalidate = 0;
import "@/app/_css/product/product.css";
import notFound from "../../not-found";

import { ProductWrapper } from "../wrapper";

export async function generateMetadata(
    { params: { id }, searchParams },
    parent
) {
    const metaData = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/product/meta?sku=${id}`
    )
        .then((meta) => meta.json())
        .catch((err) => {
            metaData: {
            }
        });

    return {
        title: metaData
            ? metaData.meta.title
                ? metaData.meta.title
                : metaData.title
            : "",
        description: metaData
            ? metaData.meta.description
                ? metaData.meta.description
                : metaData.description
            : "",
    };
}

async function getProduct(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/data/${id}`
    );
    return res.json();
}

const page = async ({ params: { id } }) => {
    let productData = null,
        variationData = null;
    const fetchProduct = await getProduct(id);
    productData = fetchProduct.product;
    variationData = fetchProduct.variations ? fetchProduct.variations : [];

    if (!productData) {
        return notFound();
    }

    //Prepare Breadcrumb
    const breadCrumbs = [
        {
            label: "All SmartWatches",
            link: `${process.env.NEXT_PUBLIC_LIVE_URL}/c/wearables-smartwatches`,
        },
    ];
    // productData.categories.map((category) => {
    //     breadCrumbs.push({
    //         label: category.title,
    //         link: `${process.env.NEXT_PUBLIC_LIVE_URL}/c/${category.slug}`,
    //     });
    // });
    breadCrumbs.push({
        label: productData.categories[0].title,
        link: `${process.env.NEXT_PUBLIC_LIVE_URL}/c/${productData.categories[0].slug}`,
    });

    return (
        // <ProductWrapper
        //     productData={productData}
        //     variationData={variationData}
        //     breadCrumbs={breadCrumbs}
        // />
        <></>
    );
};

export default page;
