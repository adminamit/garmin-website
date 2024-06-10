import React from "react";
import Link from "next/link";
const BreadCrumb = ({ breadCrumbs }) => {
    return (
        <div className="app__breadcrumbs block py-[1em] px-0">
            <nav className="flex justify-center relative w-full">
                {breadCrumbs.map((breadcrumb, index) => {
                    return (
                        <div
                            className="app__breadcrumb inline-flex items-center box-border uppercase text-base leading-[1] justify-center relative text-left first:after:content-['/'] after:text-[#1a1a1a] after:w-[0.4rem] after:pl-[10px] after:pr-[1rem] after:text-center"
                            key={index}
                        >
                            <Link
                                href={breadcrumb.link}
                                className="app__breadcrumb__link text-xs md:text-base"
                            >
                                {breadcrumb.label}
                            </Link>
                        </div>
                    );
                })}
            </nav>
        </div>
    );
};

export default BreadCrumb;
