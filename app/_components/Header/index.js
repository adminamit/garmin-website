"use client";
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
const Header = () => {
    const { status } = useAuth();
    return (
        <div>
            <header className="bg-white text-black">
                <div className="mx-auto px-6 flex justify-between items-center">
                    <div>
                        <Link href="/" className="font-bold text-2xl">
                            <Image
                                alt="default alt"
                                src={`/assets/images/Garmin-Authorised-Distributor.png`}
                                width="140"
                                height="140"
                            />
                        </Link>
                    </div>
                    <nav className="menu">
                        <Link
                            href="/c/wearables-smartwatches"
                            className="menu-item"
                        >
                            SMARTWATCHES
                        </Link>
                        <Link href="/c/sports-fitness" className="menu-item">
                            SPORTS & FITNESS
                        </Link>
                        <Link
                            href="/c/outdoor-recreation"
                            className="menu-item"
                        >
                            OUTDOOR RECREATION
                        </Link>
                        <Link href="/c/automotive" className="menu-item">
                            AUTOMOTIVE
                        </Link>
                        <Link href="/c/marine" className="menu-item">
                            MARINE
                        </Link>
                        <Link href="/c/aviation" className="menu-item">
                            Aviation
                        </Link>
                        <Link href="/sale" className="menu-item">
                            Sale
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4 relative">
                        <Link href="https://support.garmin.com/en-GB/">
                            <span className="flex space-x-1 font-medium text-xs items-center">
                                <CiCircleQuestion className="w-6 h-6" />
                                <span>Support</span>
                            </span>
                        </Link>

                        <Search />
                        <Dropdown
                            title={<HiOutlineUserCircle className="w-6 h-6" />}
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

                        <MiniCart />
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
