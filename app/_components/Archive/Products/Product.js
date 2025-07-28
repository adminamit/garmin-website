import React from "react";
import Link from "next/link";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import { useQueryState } from "nuqs";

const formatPrice = (price) => {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};

export const Product = ({
  compare,
  product,
  compareProducts,
  handleCompareProductsChange,
}) => {
  const [compareProductParam, setCompareProductParam] =
    useQueryState("compareProduct");
  return (
    <div key={product.name} className="group product-card-container">
      <Link href={`/p/${product.sku}`} className="product-card">
        {product.new ? (
          <div className="kicker-wrapper">
            <div className="blue kicker irregular">New</div>
          </div>
        ) : (
          ""
        )}
        {product.salePrice ? (
          <div className="kicker-wrapper">
            <div className="blue kicker irregular">SALE</div>
          </div>
        ) : (
          ""
        )}
        <div className="product-card__wrapper">
          <div className="product-card__image-container ">
            <Image
              alt="default alt"
              src={
                product.seriesImageUrl
                  ? product.seriesImageUrl
                  : product.featuredImageUrl
              }
              width="160"
              height="160"
              className="w-full h-full object-center object-contain"
              unoptimized
            />
          </div>

          <div className="product-card__description">
            <h2 className="product-card__title">
              {product.CseriesName || product.title ? HtmlParser(
                product.CseriesName ? product.CseriesName : product.title
              ) : ""}{" "}
            </h2>
            <p className="product-card__description__copy">
              {product.description ? HtmlParser(product.description) : ""}
            </p>
            {/* <p className="pricing-wrapper">
              {product.type == "simple" ? (
                ""
              ) : (
                <span className="text-sm font-light">from{"  "}</span>
              )}
              <span className="">AED {product.price}</span>
            </p> */}

            {/* updated code for strikethrough price  */}
            <div className="product-card__price">
              {product.salePrice ? (
                <div className="amount ">
                  <span
                    className="line-through opacity-50"
                    style={{ color: "red" }}
                  >
                    {formatPrice(product.price)}
                  </span>

                  <span className="ml-3">{formatPrice(product.salePrice)}</span>
                </div>
              ) : (
                <span className="">{formatPrice(product.price)}</span>
              )}

              {/* end of updated code for strikethrough price  */}
            </div>
          </div>
        </div>
      </Link>
      {compare ? (
        compareProductParam &&
        compareProductParam.split(",").includes(product.sku) ? (
          <button
            className="product-card-compare product-card-compare--active"
            aria-label="Add to comparison"
            onClick={() => handleCompareProductsChange(product, "REMOVE")}
          >
            <span className="compare-icon compare-icon--remove">x</span>
          </button>
        ) : (
          <button
            className="product-card-compare "
            aria-label="Add to comparison"
            onClick={() => handleCompareProductsChange(product, "ADD")}
          >
            <span className="compare-icon compare-icon--add"> + </span>
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
};
