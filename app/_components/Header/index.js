"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiCircleQuestion } from "react-icons/ci";
import MiniCart from "@/app/_components/Cart/MiniCart";
import { Dropdown } from "@/app/_components/Helpers/Dropdown";
import { SignOut } from "@/app/_components/Auth/Signout";
import { Search } from "@/app/_components/Header/Search";
import { useAuth } from "@/app/_providers/Auth";
import { SmartWatches } from "./MegaMenu/SmartWatches";
import { Sale } from "./MegaMenu/Sale";
import { Aviation } from "./MegaMenu/Aviation";
import { Marine } from "./MegaMenu/Marine";
import { Automotive } from "./MegaMenu/Automotive";
import { Outdoor } from "./MegaMenu/Outdoor";
import { SportFitness } from "./MegaMenu/SportFitness";
import "../../_css/header.css";
const Header = () => {
    const { status } = useAuth();
    const [menuActive, setMenuActive] = useState(false);
    useEffect(() => {
        setMenuActive(false);
    }, []);
    return (
        <div>
            <header className="gh__header">
                <div
                    className={`gh__header__nav ${
                        menuActive ? "gh__header__nav--active" : ""
                    }`}
                    id="js__gh__header"
                >
                    <div className="gh__header__nav__content">
                        <div className="gh__logo-container">
                            <Link href="/" className="gh__logo-container__logo">
                                <Image
                                    alt="default alt"
                                    src={`/assets/images/Garmin-Authorised-Distributor.png`}
                                    width="140"
                                    height="140"
                                />
                            </Link>
                        </div>
                        <div
                            id="js__hamburger"
                            className="gh__hamburger"
                            onClick={() =>
                                setMenuActive(menuActive ? false : true)
                            }
                        >
                            <div className="gh__hamburger__top"></div>
                            <div className="gh__hamburger__bottom"></div>
                        </div>
                        <nav className="gh__nav" id="js__gh__nav">
                            <ul className="gh__nav__categories">
                                <SmartWatches />
                                <SportFitness />
                                <Outdoor />
                                <Automotive />
                                <Marine />
                                <Aviation />
                                <Sale />
                            </ul>
                        </nav>

                        <div className="gh__utility-bar has-search-ref">
                            <div className="gh__utility-bar__support js__utility-bar-item">
                                <Link href="https://support.garmin.com//">
                                    <span className="flex space-x-1 font-medium text-xs items-center">
                                        <CiCircleQuestion className="w-6 h-6" />
                                        <span>Support</span>
                                    </span>
                                </Link>
                            </div>

                            <Search />
                            <div className="gh__utility-bar__sign-in js__utility-bar-item">
                                <Dropdown
                                    title={
                                        <HiOutlineUserCircle className="w-6 h-6" />
                                    }
                                >
                                    <Link href="/account">Account</Link>
                                    <Link href="/account/orders">Orders</Link>

                                    {status == "loggedIn" ? (
                                        <Link href="#">
                                            <SignOut />
                                        </Link>
                                    ) : (
                                        <Link href="/login">Sign In</Link>
                                    )}
                                </Dropdown>
                            </div>
                            <span className="gh__utility-bar__cart">
                                <MiniCart />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            <div className="header-notice">
                FREE SHIPPING ON ALL ORDERS OVER £30. NOW ACCEPTING KLARNA.
            </div>
        </div>
    );
};

export default Header;
