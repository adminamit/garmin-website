"use client";
import React, { useState, useEffect } from "react";
import Container from "@/app/_components/Common/Container";
import Link from "next/link";
import "@/app/_css/compare/compare.css";
import Card from "@/app/_components/Compare/Card";
import { Accordion } from "@/app/_components/Helpers/Accordion";
import Sticky from "react-sticky-el";
import { useSearchParams } from "next/navigation";
import { some, findIndex, set, isEmpty } from "lodash";
import { useQueryState } from "nuqs";

const compare = async () => {
    const [products, setProducts] = useState([]);
    const [specGroupsData, setSpecGroupsData] = useState([]);
    const searchParams = useSearchParams();
    const compareProductParam = searchParams.get("compareProduct");
    const [compareProducts, setCompareProducts] = useQueryState(
        "compareProduct",
        {
            shallow: true,
            history: "push",
        }
    );
    let specGroups = [];
    const specs = [];

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchProducts = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/compare?products=${compareProducts}`
            );
            const data = await fetchProducts.json();
            setProducts(data);
        };
        fetchProducts();
    }, [compareProducts]);

    const removeProduct = (id) => {
        let activeCompareProducts = compareProducts
            ? compareProducts.split(",")
            : [];
        const updated = activeCompareProducts.filter((item) => item !== id);
        setCompareProducts(updated.toString(), {
            shallow: true,
            history: "push",
        });
    };

    useEffect(() => {
        //Prepare unique spec groups
        products.map((product) => {
            product.productSpecifications.specificationGroup.map((group) => {
                const data = {
                    specGroupId: group.specificationGroup.id,
                    specGroupName: group.specificationGroup.title,
                    specs: [],
                };
                !some(specGroups, data) ? specGroups.push(data) : "";
            });
        });
        products.map((product) => {
            product.productSpecifications.specificationGroup.map((group) => {
                const values = [];
                group.items.map((item) => {
                    // specs.push();
                    const index = findIndex(specGroups, function (o) {
                        return o.specGroupId == item.specification.group.id;
                    });

                    //Check SpecKey
                    const specIndex = findIndex(
                        specGroups[index]["specs"],
                        function (o) {
                            return o.specKey == item.specification.id;
                        }
                    );

                    if (specIndex == "-1") {
                        specGroups[index]["specs"].push({
                            specKey: item.specification.id,
                            specDisplayName: item.specification.title,
                            specKeyUrl: item.specification.url,
                            values: [...values, item.value],
                        });
                    } else {
                        specGroups[index]["specs"][specIndex].values.push(
                            item.value
                        );
                    }
                });
            });
        });

        setSpecGroupsData(specGroups);
    }, [products]);

    return (
        <div className="main" id="main">
            <div className="app-header">
                <Container>
                    <Link href="/" target="_self" className="app-header__link">
                        <div className="app-header__link__icon">
                            <svg
                                className="g-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 11.2 18.1"
                            >
                                <path d="M11.2 9l-9.1 9.1L0 16l6.9-7L0 2.1 2.1 0l9.1 9z"></path>
                            </svg>
                        </div>
                        Return to shopping
                    </Link>
                    <div className="app-header__heading g__heading g__heading--center g__heading--light">
                        <h1>Product Comparison</h1>
                    </div>
                </Container>
            </div>

            <Sticky
                id="sticky-menu"
                className={`sticky-menu `}
                stickyClassName={"sticky-menu active"}
            >
                <div className="container-inner">
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
                        {products.map((product) => {
                            return (
                                <Card
                                    product={product}
                                    key={product.id}
                                    removeProduct={removeProduct}
                                />
                            );
                        })}
                    </div>
                </div>
            </Sticky>

            <div className="app_body">
                <div className="container-inner">
                    {specGroupsData.map((group) => {
                        return (
                            <Accordion title={group.specGroupName}>
                                {group.specs.map((spec) => {
                                    return (
                                        <div>
                                            <table className="table columns-5">
                                                <thead>
                                                    <tr>
                                                        <th colspan="5">
                                                            {spec.specKeyUrl ? (
                                                                <a href="https://www.garmin.com/en-GB/garmin-technology/health-science/sleep-tracking/">
                                                                    {
                                                                        spec.specDisplayName
                                                                    }
                                                                </a>
                                                            ) : (
                                                                <span>
                                                                    {
                                                                        spec.specDisplayName
                                                                    }
                                                                </span>
                                                            )}
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {spec.values.map(
                                                            (value) => {
                                                                {
                                                                    return value.toLowerCase() ==
                                                                        "yes" ? (
                                                                        <td className="compare_yes"></td>
                                                                    ) : (
                                                                        <td>
                                                                            {
                                                                                value
                                                                            }
                                                                        </td>
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                })}
                            </Accordion>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default compare;
