import React from "react";
import {
    FaFacebook,
    FaYoutube,
    FaPinterest,
    FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white p-6 ">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-4 mb-4">
                <div>
                    <h3 className="footer-heading">CUSTOMER SERVICE</h3>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://support.garmin.com/en-IN/"
                                className=""
                            >
                                Support Centre
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/contact" className="">
                                Contact Us
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/shipping" className="">
                                Shipping & Returns
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/account/orders/search" className="">
                                Order Status
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="/consumer-limited-warranty/"
                                className=""
                            >
                                Warranty Information
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/account/orders/return" className="">
                                Return Request
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="#" className="">
                                Deals and Promotions
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="/consumer-limited-warranty"
                                className=""
                            >
                                Warranty Information
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/refund-policy" className="">
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Company</h3>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-list-item">
                            <Link href="/about-garmin" className="">
                                About Us
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/blog" className="">
                                Blog
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/faq" className="">
                                FAQ{"'"}s
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="/blog/category/press-release/"
                                className=""
                            >
                                Newsroom
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://www.garmin.com/en-IN/sustainability/overview/"
                                className=""
                            >
                                Sustainability
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link href="/career" className="">
                                Jobs
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">PLATFORMS</h3>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://connect.garmin.com/"
                                className=""
                            >
                                Garmin Connect
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://www.garmin.com/en-IN/software/express/mac/"
                                className=""
                            >
                                Garmin Express
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://apps.garmin.com/en-GB/"
                                className=""
                            >
                                Connect IQ
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://fly.garmin.com/fly-garmin/"
                                className=""
                            >
                                flyGarmin
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://explore.garmin.com/en-IN/Account/LogOn?ReturnUrl=%2fen-GB%2f"
                                className=""
                            >
                                Garmin Explore
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">FOR BUSINESS</h3>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://dealers.garmin.com/en-IN/partner-portal/welcome/"
                                className=""
                            >
                                Dealer Resource Center
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://developer.garmin.com/"
                                className=""
                            >
                                Developers
                            </Link>
                        </li>
                        <li className="footer-menu-list-item">
                            <Link
                                href="https://discover.garmin.com/en-GB/aoem/"
                                className=""
                            >
                                Automotive OEM
                            </Link>
                        </li>

                        <li className="footer-menu-list-item">
                            <Link
                                href="https://discover.garmin.com/en-GB/who-we-work-with/"
                                className=""
                            >
                                Who We Work With
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center border-b-4 border-white mt-12 pb-6">
                <div className="text-[0.9rem] font-medium ">India</div>
                <div className="flex space-x-8">
                    <Link href="#" className="">
                        <FaFacebook className="text-[1.25rem]" />
                    </Link>
                    <Link href="#" className="text-[1.25rem]">
                        <FaYoutube />
                    </Link>
                    <Link href="#" className="text-[1.25rem]">
                        <FaPinterest />
                    </Link>
                    <Link href="#" className="text-[1.25rem]">
                        <FaInstagram />
                    </Link>
                </div>
            </div>

            <div className="flex justify-between items-center pt-3">
                <div className="text-sm">
                    © Garmin Ltd. or its subsidiaries. All rights reserved.
                </div>
                <div className="flex space-x-8">
                    <Link href="#" className="footer-menu-list-item">
                        Site Map
                    </Link>{" "}
                    <Link href="terms" className="footer-menu-list-item">
                        Terms of Use
                    </Link>{" "}
                    <Link href="/privacy" className="footer-menu-list-item">
                        Privacy
                    </Link>{" "}
                    {/* <Link href="#" className="footer-menu-list-item">
                        Security
                    </Link>{" "} */}
                    <Link
                        href="https://support.garmin.com/en-GB/"
                        className="footer-menu-list-item"
                    >
                        Compliance
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
