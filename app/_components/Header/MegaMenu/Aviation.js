import React from "react";
import { ItemWrapper } from "./ItemWrapper";
import { SubItemWrapper } from "./SubItemWrapper";

export const Aviation = () => {
  return (
    <ItemWrapper title="AVIATION">
      <div className="gh__nav__categories__items__menu">
        {/* Column 1 starts      */}
        {/* Column 1 Ends */}
        {/* Column 2 Starts*/}
        <SubItemWrapper title="PRODUCTS">
          <div className="gh__nav__categories__items__menu__subcategories">
            <a
              className="gh__nav__categories__items__menu__link"
              href="https://www.garmin.com/en-US/c/aviation/general/"
              target="_blank"
              aria-label="General Aviation - open in a new tab"
              data-uw-rm-ext-link
              uw-rm-external-link-id="https://www.garmin.com/en-us/c/aviation/general/$generalaviation"
              data-uw-rm-brl="PR"
              data-uw-original-href="https://www.garmin.com/en-US/c/aviation/general/"
            >
              General Aviation{" "}
            </a>
            <a
              className="gh__nav__categories__items__menu__link"
              href="https://www.garmin.com/en-US/c/aviation/helicopters/"
              target="_blank"
              aria-label="Helicopters - open in a new tab"
              data-uw-rm-ext-link
              uw-rm-external-link-id="https://www.garmin.com/en-us/c/aviation/helicopters/$helicopters"
              data-uw-rm-brl="PR"
              data-uw-original-href="https://www.garmin.com/en-US/c/aviation/helicopters/"
            >
              Helicopters{" "}
            </a>
            <a
              className="gh__nav__categories__items__menu__link"
              href="https://www.garmin.com/en-US/c/aviation/experimental/"
              target="_blank"
              aria-label="Experimental - open in a new tab"
              data-uw-rm-ext-link
              uw-rm-external-link-id="https://www.garmin.com/en-us/c/aviation/experimental/$experimental"
              data-uw-rm-brl="PR"
              data-uw-original-href="https://www.garmin.com/en-US/c/aviation/experimental/"
            >
              Experimental{" "}
            </a>
            <a
              className="gh__nav__categories__items__menu__link"
              href="https://www.garmin.com/en-US/c/aviation/gps-wearables-apps/"
            >
              Portable GPS &amp; Wearables{" "}
            </a>
            <a
              className="gh__nav__categories__items__menu__link"
              href="/c/apps/"
              target="_self"
              data-uw-rm-brl="PR"
              data-uw-original-href="/c/apps/"
            >
              Apps{" "}
            </a>
            <a
              className="gh__nav__categories__items__menu__link"
              href="https://fly.garmin.com/fly-garmin/"
              target="_blank"
              aria-label="fly Garmin Services - open in a new tab"
              data-uw-rm-ext-link
              uw-rm-external-link-id="https://fly.garmin.com/fly-garmin/$flygarminservices"
              data-uw-rm-brl="PR"
              data-uw-original-href="https://fly.garmin.com/fly-garmin/"
            >
              fly Garmin Services{" "}
            </a>
          </div>
        </SubItemWrapper>
        {/* Column 2 Ends*/}
        {/* Column 3 Starts*/}
        <SubItemWrapper title="DISCOVER">
          <div className="gh__nav__categories__items__menu__subcategories">
            <a
              className="gh__nav__categories__items__menu__link"
              href="/blog/"
              target="_blank"
              aria-label="Blog - open in a new tab"
              data-uw-rm-ext-link
              uw-rm-external-link-id="/blog/$blog"
              data-uw-rm-brl="PR"
              data-uw-original-href="/blog/"
            >
              Blog{" "}
            </a>
            <a
              className="gh__nav__categories__items__menu__link"
              href="https://www.garmin.com/en-GB/careers/"
              target="_blank"
              aria-label="Careers - open in a new tab"
              data-uw-rm-ext-link
              uw-rm-external-link-id="https://www.garmin.com/en-gb/careers/$careers"
              data-uw-rm-brl="PR"
              data-uw-original-href="https://www.garmin.com/en-GB/careers/"
            >
              Careers{" "}
            </a>
          </div>
        </SubItemWrapper>
        {/* Column 3 Ends */}
        {/* Column 4 Starts */}
        <div className="gh__nav__categories__items__menu__column">
          <div className="gh__nav__categories__items__menu__promo-card">
            <a
              className="vertical"
              href="https://discover.garmin.com/en-GB/autonomi/"
              target="_self"
              data-uw-rm-brl="PR"
              data-uw-original-href="https://discover.garmin.com/en-GB/autonomi/"
            >
              <img
                className="gh__nav__categories__items__menu__promo-card__image"
                src="https://legacy.garmin.ae/wp-content/uploads/2022/07/top_nav_promo-large-autoland-2-225x300-1.jpeg"
                loading="lazy"
                alt="Garmin Autoland Protect your most precious cargo"
                data-uw-rm-alt-original="Garmin Autoland Protect your most precious cargo"
                data-uw-rm-alt="ALT"
              />
              <div className="grouping">
                <h3 className="gh__nav__categories__items__menu__promo-card__heading">
                  Garmin Autoland Protect your most precious cargo
                </h3>
                <div className="gh__nav__categories__items__menu__promo-card__copy" />
                <span className="gh__nav__categories__items__menu__promo-card__cta">
                  LEARN MORE
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
