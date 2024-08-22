import React from "react";
import Filters from "./Filters";
import ColorPicker from "./ColorPicker";
import { isEqual, isMatch } from "lodash";
export const Attributes = ({ productData, variationData }) => {
    //Prepare Model/Color
    const models = [],
        attributes = [];
    // Current Product attribute
    const activeAttributes = {};
    productData.attributes &&
        productData.attributes.map((attribute) => {
            activeAttributes[attribute.attributeName] = attribute.title;
        });

    //Get All Attributes
    productData.attributes &&
        productData.attributes.map((attribute) => {
            attributes.push({
                title: attribute.attributeName,
                id: attribute.attribute,
                text: attribute.attributeName,
                values: [],
            });
        });

    //Get All Attributes Available
    variationData.map((product) => {
        const variationAttributes = {};
        productData.attributes &&
            product.attributes.map((attribute) => {
                variationAttributes[attribute.attributeName] = attribute.title;
            });

        //Prepare Variation Model
        models.push({
            id: product.id,
            title: product.title,
            image: product.featuredImageUrl,
            sku: product.sku,
            current: productData.id === product.id ? true : false,
            attributes: variationAttributes,
            activeAttributes: activeAttributes,
            active: isEqual(variationAttributes, activeAttributes),
            // active: productData.id === product.id ? true : false,
        });

        productData.attributes &&
            product.attributes.map((attribute) => {
                attributes.map((el) => {
                    const att = {};
                    att[attribute.attributeName] = attribute.title;

                    if (el.id.id === attribute.attribute.id) {
                        el.values.push({
                            title: attribute.title,
                            sku: product.sku,
                            active: isMatch(activeAttributes, att),
                        });
                    }
                });
            });
    });

    // //GET Unique Attributes
    attributes.map((el) => {
        el.values = [
            ...new Map(el.values.map((item) => [item["title"], item])).values(),
        ];
    });
    variationData.map((variation, index) => {
        console.log(variation);
        const trimmedAttributes = {};

        variation.attributes &&
            variation.attributes.map((attribute) => {
                trimmedAttributes[attribute.attributeName] = attribute.title;
            });
        variationData[index]["trimmedAttributes"] = trimmedAttributes;
    });
    return (
        <div>
            <Filters
                attributes={attributes}
                product={productData}
                activeAttributes={activeAttributes}
                variationData={variationData}
            />
            {models ? <ColorPicker models={models} /> : <></>}
        </div>
    );
};
