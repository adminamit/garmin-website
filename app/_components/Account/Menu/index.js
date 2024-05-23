"use client";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const AccountMenu = ({}) => {
    const currentRoute = usePathname();

    const accountMenu = [
        { id: "profile", href: "/account/profile", label: "profile" },
        { id: "orders", href: "/account/orders", label: "orders" },
        { id: "wishlist", href: "/account/wishlist", label: "your wishlist" },
        { id: "address", href: "/account/address", label: "addresses" },
        { id: "logout", href: "/account/sign-out", label: "Sign out" },
    ];
    let activeMenu = "";
    accountMenu.map((link) => {
        if (currentRoute.includes(link.href)) {
            activeMenu = link.id;
        }
    });

    return (
        <div className="account-menu-breadcrumb w-full flex justify-center mt-4 mb-12 z-10 relative">
            <nav className="flex gap-3 items-center uppercase text-base ">
                <Link href="/account/">Account</Link>
                <span>/</span>
                <div className="relative">
                    <Menu>
                        {({ open }) => (
                            <>
                                <Menu.Button className="uppercase font-semibold flex gap-1 items-center text-base">
                                    <span className="">{activeMenu}</span>{" "}
                                    <FiChevronDown
                                        className={`transition ease-linear duration-150 text-lg ${
                                            open ? "rotate-180" : ""
                                        }`}
                                    />
                                </Menu.Button>
                                <Menu.Items className="absolute flex flex-col space-y-3 bg-white py-5 px-5 w-60 top-[110%] left-0 border border-borderColor tracking-wide hover:bg-white">
                                    {accountMenu.map((link) =>
                                        /* Use the `active` state to conditionally style the active item. */
                                        link.id != activeMenu ? (
                                            <Menu.Item
                                                key={link.href}
                                                as={Fragment}
                                            >
                                                {({ active }) => (
                                                    <Link
                                                        href={link.href}
                                                        className={`${
                                                            active
                                                                ? "text-primary"
                                                                : "text-black"
                                                        }`}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </Menu.Items>
                            </>
                        )}
                    </Menu>
                </div>
            </nav>
        </div>
    );
};
