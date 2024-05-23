"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    FiChevronsLeft,
    FiChevronsRight,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";

const Pagination = ({
    totalPages,
    hasPrevPage,
    hasNextPage,
    page,
    prevPage,
    nextPage,
}) => {
    // Dummy function to simulate page change
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const year = searchParams.get("year");

    const changePageNumber = (page) => {
        router.replace(
            `${pathname}?page=${page}${year ? "&year=" + year + "" : ""}`
        );
    };

    return (
        <div className="flex justify-center items-center space-x-2 my-8">
            <button
                onClick={() => {
                    hasPrevPage ? changePageNumber(prevPage) : null;
                }}
                className={`bg-white text-black border border-black px-3 h-6 text-sm ${
                    hasNextPage ? "" : "opacity-60 pointer-events-none"
                }`}
            >
                <FiChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        changePageNumber(index + 1);
                    }}
                    className={`bg-black text-white px-3 h-6 text-sm ${
                        page === index + 1 ? "bg-primary text-white" : ""
                    }`}
                >
                    {index + 1}
                </button>
            ))}
            {/* Map through your page numbers here */}

            <button
                onClick={() => {
                    hasNextPage ? changePageNumber(nextPage) : null;
                }}
                className={`bg-white text-black border border-black px-3 h-6 text-sm ${
                    hasNextPage ? "" : "opacity-60 pointer-events-none"
                }`}
            >
                <FiChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
