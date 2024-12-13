import React from "react";
import { ItemWrapper } from "./ItemWrapper";
import { SubItemWrapper } from "./SubItemWrapper";
export const Sale = () => {
  return (
    <ItemWrapper title="SALE">
      <div className="gh__nav__categories__items__menu">
        {/* Column 1 starts      */}
        <SubItemWrapper title="SALES AND PROMOTIONS">
          <div className="gh__nav__categories__items__menu__subcategories">
            <a
              className="gh__nav__categories__items__menu__link"
              href="/sales-promotions/"
              target="_self"
              data-uw-rm-brl="PR"
              data-uw-original-href="/sales-promotions/"
            >
              Shop all sales{" "}
            </a>
          </div>
        </SubItemWrapper>

        <div className="gh__nav__categories__items__menu__column">
          <div className="gh__nav__categories__items__menu__promo-card">
            <a
              className="vertical"
              href="/sales-promotions/"
              target="_self"
              data-uw-rm-brl="PR"
              data-uw-original-href="/sales-promotions/"
            >
              <img
                className="gh__nav__categories__items__menu__promo-card__image"
                src="https://legacy.garmin.ae/wp-content/uploads/2022/07/32357-top-nav-sale-OS-300x300-1.png"
                loading="lazy"
                alt="PROMOTIONS Check out our current offers"
                data-uw-rm-alt-original="PROMOTIONS Check out our current offers"
                data-uw-rm-alt="ALT"
              />
              <div className="grouping">
                <h3 className="gh__nav__categories__items__menu__promo-card__heading">
                  PROMOTIONS Check out our current offers
                </h3>
                <div className="gh__nav__categories__items__menu__promo-card__copy" />
                <span className="gh__nav__categories__items__menu__promo-card__cta">
                  DISCOVER
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* Column 4 Ends */}
      </div>
    </ItemWrapper>
  );
};
