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
    productData.attributes.map((attribute) => {
        activeAttributes[attribute.attributeName] = attribute.title;
    });

    //Get All Attributes
    productData.attributes.map((attribute) => {
        attributes.push({
            title: attribute.attributeName,
            id: attribute.attribute,
            text: attribute.attributeText,
            values: [],
        });
    });

    //Get All Attributes Available
    variationData.map((product) => {
        const variationAttributes = {};
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
        });

        product.attributes.map((attribute) => {
            attributes.map((el) => {
                const att = {};
                att[attribute.attributeName] = attribute.title;
                if (el.id === attribute.attribute) {
                    el.values.push({
                        title: attribute.title,
                        sku: product.sku,
                        active: isMatch(activeAttributes, att),
                    });
                }
            });
        });
    });

    //GET Unique Attributes
    attributes.map((el) => {
        el.values = [
            ...new Map(el.values.map((item) => [item["title"], item])).values(),
        ];
    });
    return (
        <div>
            <Filters attributes={attributes} product={productData} />
            {models ? <ColorPicker models={models} /> : <></>}
        </div>
    );
};
