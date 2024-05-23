"use client";
import { Loader } from "@/app/_components/Loader";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex justify-center w-full py-16">
            <Loader />
        </div>
    );
}
