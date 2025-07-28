import React from "react";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import Link from "next/link";
export const Items = ({ accessories, activeCategory }) => {
    return (
        <div className="app__product__accessories__wrapper">
            {accessories?.map((accessory) => {
                return activeCategory === accessory.id
                    ? accessory.products?.map((item) => {
                          return (
                              <div
                                  className={`app__product__accessories__section app__product__accessories__section--${accessory.accessoryCategory?.title}`}
                                  key={item.title}
                              >
                                  <div className="app__product__accessories__section__card">
                                      <Link href={`/p/${item.sku}`}>
                                          <div className="app__product__accessories__section__card-content">
                                              <Image
                                                  alt="Apps"
                                                  loading="lazy"
                                                  width="130"
                                                  height="130"
                                                  src={item.featuredImageUrl}
                                              />
                                              <div className="app__product__accessories__section__card-content__heading">
                                                  {item.title ? HtmlParser(item.title) : ""}
                                              </div>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          );
                      })
                    : "";
            })}
        </div>
    );
};
