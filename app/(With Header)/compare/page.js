"use client";
import React from "react";
import Container from "@/app/_components/Common/Container";
import Link from "next/link";
import "@/app/_css/compare/compare.css";
import Card from "@/app/_components/Compare/Card";
import { Collapsible } from "@/app/_components/Compare/Collapsible";
import { Accordion } from "@/app/_components/Helpers/Accordion";
import Sticky from "react-sticky-el";

const compare = () => {
    const products = [
        {
            id: "1057989",
            title: 'vívoactive <sup className="registered-symbol">®</sup> 5',
            img: "https://res.garmin.com/en_GB/products/010-02862-12/g/cf-sm.jpg",
            imgMid: "https://res.garmin.com/en/products/010-02862-12/g/cf-md.jpg",
            regularPrice: "15999",
            discountedPrice: "13999",
        },
        {
            id: "1057984",
            title: 'venu <sup className="registered-symbol">®</sup> 3',
            img: "https://res.garmin.com/en/products/010-02784-01/g/cf-sm.jpg",
            imgMid: "https://res.garmin.com/en/products/010-02784-01/g/cf-md.jpg",
            regularPrice: "12999",
            discountedPrice: "11999",
        },
        {
            id: "1057983",
            title: 'epix <sup className="registered-symbol">®</sup>  Pro (Gen 2) – Sapphire Edition | 51 mm',
            img: "https://res.garmin.com/en/products/010-02804-00/g/cf-sm.jpg",
            imgMid: "https://res.garmin.com/en/products/010-02804-00/g/cf-md.jpg",
            regularPrice: "17999",
            discountedPrice: "16999",
        },
    ];
    return (
        <div className="main" id="main">
            <div className="app-header">
                <Container>
                    <Link
                        href="https://www.garmin.com/en-GB/"
                        target="_self"
                        className="app-header__link"
                    >
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
                    <div className="grid grid-cols-5 gap-4 mb-4">
                        {products.map((product) => {
                            return <Card product={product} key={product.id} />;
                        })}
                    </div>
                </div>
            </Sticky>

            <div className="app_body">
                <div className="container-inner">
                    <Accordion title="What You'll Love">
                        <div slot="body">
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecAdvSleepMonitor"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/health-science/sleep-tracking/">
                                                    Sleep Score and Insights
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecBatteryLifeWatch"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Battery life (smartwatch mode)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Up to 11 days (5 days
                                                    display always-on)
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Up to 14 days</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    Up to 31 days (11 days
                                                    always-on)
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecBIMapping"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Built-in mapping
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecDailyWorkout"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/physiological-measurements/daily-suggested-workouts-feature/">
                                                    Daily Suggested Workouts
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecPulseOxBOS"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/health-science/pulse-ox/">
                                                    Pulse Ox Blood Oxygen
                                                    Saturation
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Yes (spot-check, and
                                                    optionally all-day and in
                                                    sleep)
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Yes (spot-check, and
                                                    optionally all-day and in
                                                    sleep)
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecFlashlight"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">LED flashlight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecGarminPay"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Garmin Pay
                                                <sup className="tm-symbol">
                                                    ™
                                                </sup>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecMultiBandGPS"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Multi-band GPS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecMusicStorageCheck"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Music storage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecTextVoice"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Make calls and send texts via
                                                voice
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm"></td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecTrainingReady"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/physiological-measurements/training-readiness/">
                                                    Training Readiness
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecTrainingStatus"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/physiological-measurements/training-status/">
                                                    Training Status
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWatchDisplayType"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Watch display type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    AMOLED Optional Always-On
                                                    Mode
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    AMOLED Optional Always-On
                                                    Mode
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>AMOLED</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWatchTouchScreen"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Touchscreen</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWatchWaterRating"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/legal/waterrating-definitions/">
                                                    Watch water rating
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Swim, 5 ATM</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Swim, 5 ATM</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>10 ATM</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWheelchairMode"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Wheelchair mode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm"></td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Accordion>
                    <Accordion title="General">
                        <div slot="body">
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecLensMaterial"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Lens material</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Corning
                                                    <sup className="registered-symbol">
                                                        ®
                                                    </sup>{" "}
                                                    Gorilla
                                                    <sup className="registered-symbol">
                                                        ®
                                                    </sup>{" "}
                                                    Glass 3
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Corning
                                                    <sup className="registered-symbol">
                                                        ®
                                                    </sup>{" "}
                                                    Gorilla
                                                    <sup className="registered-symbol">
                                                        ®
                                                    </sup>{" "}
                                                    Glass 3
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Sapphire crystal</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecBezelMaterial"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Bezel material</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Anodised aluminium</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Stainless steel</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Titanium</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecCaseMaterial"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Case material</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Fibre-reinforced polymer
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Fibre-reinforced polymer
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    Fibre-reinforced polymer
                                                    with titanium rear cover
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecQuickFit"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                QuickFit
                                                <sup className="tm-symbol">
                                                    ™
                                                </sup>{" "}
                                                watch band compatible
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span></span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span></span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Included (26 mm)</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecQRBand"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Quick release bands
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Yes (20 mm, Industry
                                                    standard)
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Yes (22 mm, Industry
                                                    standard)
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm"></td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecStrapMaterial"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Strap material</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Silicone</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Silicone</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Silicone</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecCaseSize"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Physical size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    42.2 x 42.2 x 11.1 mm
                                                    <br />
                                                    Fits wrists with a
                                                    circumference of 125-190 mm
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    45 x 45 x 12 mm
                                                    <br />
                                                    Fits wrists with a
                                                    circumference of 135-200 mm
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    51 x 51 x 14.9 mm
                                                    <br />
                                                    Fits wrists with the
                                                    following circumference:
                                                    <br /> Silicone band:
                                                    127-210 mm <br />
                                                    Leather band: 135-213 mm
                                                    <br /> Fabric band: 135-213
                                                    mm <br /> Metal band:
                                                    135-225 mm
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecPhysicalWeight"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Weight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    26 g (36 g with included
                                                    band)
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Silicone : 46 g with
                                                    included band
                                                    <br /> Leather : 42 g with
                                                    included band{" "}
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    88 g (case only: 60 g)
                                                    <br />
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecBISpeakerMicro"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Built-in speaker/microphone
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm"></td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecPhysicalDisplaySize"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Display Size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    30.4 mm (1.2″) diameter
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    35.4 mm (1.4″) diameter
                                                    <br />
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    1.4″ (35,56 mm) diameter
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecPhysicalDisplayResolution"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Display Resolution
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>390 x 390 pixels</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    454 x 454 pixels
                                                    <br />
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>454 x 454 pixels</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecColorDisplay"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Colour display</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecLargeFont"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Large font option
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecPhysicalBatteryLife"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Battery life</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Smartwatch mode: Up to 11
                                                    days (5 days display
                                                    always-on)
                                                    <br /> Battery Saver
                                                    Smartwatch mode: Up to 21
                                                    days <br />
                                                    GPS-Only GNSS mode: Up to 21
                                                    hours
                                                    <br /> All-Systems GNSS
                                                    mode: Up to 17 hours <br />{" "}
                                                    All-Systems GNSS mode with
                                                    music: Up to 8 hours
                                                    <br />{" "}
                                                    <a href="https://support.garmin.com/en-GB/?faq=RtVov30ntw11MKI3k93DA6&amp;productID=1057989&amp;tab=topics">
                                                        See details
                                                    </a>{" "}
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Smartwatch mode: Up to 14
                                                    days
                                                    <br /> Battery saver
                                                    smartwatch mode: Up to 26
                                                    days <br />
                                                    GPS-Only GNSS mode: Up to 26
                                                    hours
                                                    <br /> All-Systems GNSS
                                                    mode: Up to 20 hours <br />{" "}
                                                    All systems GNSS mode with
                                                    music playback Up to 11
                                                    hours
                                                    <br />{" "}
                                                    <a href="https://support.garmin.com/?faq=wRMnVRKL5i3YvvL05lqMi6&amp;productID=873008&amp;tab=topics&amp;sas_source=grmn">
                                                        See details
                                                        <br />
                                                    </a>{" "}
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    Smartwatch: Up to 31 days
                                                    (11 days always-on)Battery
                                                    saver watch mode: Up to 41
                                                    days
                                                    <br /> GPS Only: Up to 82
                                                    hours (58 hours always-on){" "}
                                                    <br />
                                                    All Satellite Systems: Up to
                                                    62 hours (48 hours
                                                    always-on)
                                                    <br /> All Satellite Systems
                                                    + Multi-band: Up to 38 hours
                                                    (30 hours always-on) All
                                                    Satellite Systems + Music:
                                                    Up to 17 hours
                                                    <br />
                                                    Max Battery GPS: Up to 145
                                                    hours
                                                    <br /> Expedition GPS: Up to
                                                    27 days{" "}
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecDDChargingMethod"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Charging method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Garmin proprietary plug
                                                    charger
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Garmin proprietary plug
                                                    charger
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    Garmin proprietary plug
                                                    charger
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecNavBuiltInMemory"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Memory/history</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>4 GB</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>8 GB</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>32 GB</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Accordion>
                    <Accordion title="HEALTH & WELLNESS MONITORING">
                        <div slot="body">
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecAdvSleepMonitor"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/health-science/sleep-tracking/">
                                                    Sleep Score and Insights
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecBatteryLifeWatch"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Battery life (smartwatch mode)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Up to 11 days (5 days
                                                    display always-on)
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Up to 14 days</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>
                                                    Up to 31 days (11 days
                                                    always-on)
                                                </span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecBIMapping"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Built-in mapping
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecDailyWorkout"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/physiological-measurements/daily-suggested-workouts-feature/">
                                                    Daily Suggested Workouts
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecPulseOxBOS"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/health-science/pulse-ox/">
                                                    Pulse Ox Blood Oxygen
                                                    Saturation
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    Yes (spot-check, and
                                                    optionally all-day and in
                                                    sleep)
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    Yes (spot-check, and
                                                    optionally all-day and in
                                                    sleep)
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecFlashlight"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">LED flashlight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecGarminPay"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Garmin Pay
                                                <sup className="tm-symbol">
                                                    ™
                                                </sup>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecMultiBandGPS"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Multi-band GPS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecMusicStorageCheck"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Music storage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecTextVoice"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Make calls and send texts via
                                                voice
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm"></td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecTrainingReady"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/physiological-measurements/training-readiness/">
                                                    Training Readiness
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecTrainingStatus"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/physiological-measurements/training-status/">
                                                    Training Status
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5"></td>
                                            <td data-product-name="Venu® 3"></td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWatchDisplayType"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                Watch display type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>
                                                    AMOLED Optional Always-On
                                                    Mode
                                                </span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>
                                                    AMOLED Optional Always-On
                                                    Mode
                                                </span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>AMOLED</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWatchTouchScreen"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Touchscreen</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWatchWaterRating"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">
                                                {" "}
                                                <a href="https://www.garmin.com/en-GB/legal/waterrating-definitions/">
                                                    Watch water rating
                                                </a>{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Swim, 5 ATM</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Swim, 5 ATM</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm">
                                                <span>10 ATM</span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table
                                    className="table columns-5"
                                    data-test="productSpecWheelchairMode"
                                >
                                    <thead>
                                        <tr>
                                            <th colspan="5">Wheelchair mode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-product-name="vívoactive® 5">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="Venu® 3">
                                                <span>Yes</span>
                                            </td>
                                            <td data-product-name="epix™ Pro (Gen 2) – Sapphire Edition | 51 mm"></td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                            <td data-product-name="">
                                                <span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default compare;
