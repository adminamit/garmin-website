"use client";
import React, { useState, useEffect } from "react";
import Container from "@/app/_components/Common/Container";
import Link from "next/link";
import "@/app/_css/compare/compare.css";
import Card from "@/app/_components/Compare/Card";
import { Accordion } from "@/app/_components/Helpers/Accordion";
import Sticky from "react-sticky-el";
import { useSearchParams } from "next/navigation";
import { some, findIndex } from "lodash";
import { useQueryState } from "nuqs";

const Compare = () => {
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchProducts = await fetch(
          `${process.env.NEXT_PUBLIC_LIVE_URL}/api/graphQl/compare?products=${compareProducts}`
        );
        const data = await fetchProducts.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
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
    let specGroups = [];

    // Prepare unique spec groups
    products.forEach((product) => {
      product.productSpecifications?.specificationGroup?.forEach((group) => {
        const data = {
          specGroupId: group.specificationGroup.id,
          specGroupName: group.specificationGroup.title,
          specs: [],
        };
        if (!some(specGroups, { specGroupId: data.specGroupId })) {
          specGroups.push(data);
        }
      });
    });

    products.forEach((product) => {
      product.productSpecifications?.specificationGroup?.forEach((group) => {
        group.items.forEach((item) => {
          const index = findIndex(specGroups, {
            specGroupId: item.specification.group.id,
          });

          // Check SpecKey
          const specIndex = findIndex(specGroups[index]?.specs, {
            specKey: item.specification.id,
          });

          if (specIndex === -1) {
            specGroups[index]?.specs.push({
              specKey: item.specification.id,
              specDisplayName: item.specification.title,
              specKeyUrl: item.specification.url,
              values: [item.value],
            });
          } else {
            specGroups[index]?.specs[specIndex]?.values.push(item.value);
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
            {products.map((product) => (
              <Card
                product={product}
                key={product.id}
                removeProduct={removeProduct}
              />
            ))}
          </div>
        </div>
      </Sticky>

      <div className="app_body">
        <div className="container-inner">
          {specGroupsData.map((group) => (
            <Accordion title={group.specGroupName} key={group.specGroupId}>
              {group.specs.map((spec) => (
                <div key={spec.specKey}>
                  <table className="table columns-5">
                    <thead>
                      <tr>
                        <th colSpan="5">
                          {spec.specKeyUrl ? (
                            <a href={spec.specKeyUrl}>{spec.specDisplayName}</a>
                          ) : (
                            <span>{spec.specDisplayName}</span>
                          )}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {spec.values.map((value, index) => (
                          <td
                            key={index}
                            className={
                              value.toLowerCase() === "yes" ? "compare_yes" : ""
                            }
                          >
                            {value.toLowerCase() !== "yes" && value}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
