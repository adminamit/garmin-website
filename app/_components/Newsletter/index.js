"use client";
import React, { useState } from "react";
import Link from "next/link";
import HtmlParser from "react-html-parser";
import { RenderRichText } from "@/app/_utilities/RenderRichText";
import toast from "react-hot-toast";
const NewsletterSignup = ({ title, description }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle the newsletter signup logic here
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_LIVE_URL}/api/newsletter`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                }),
            }
        );
        const data = await res.json();
        if (res.status == 200) {
            if (data.errors) {
                toast.error("You email is already in our mailing list!");
            } else {
                toast.success("Email added to our mailing list!");
            }
        }
        setEmail("");
    };

    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between items-center  px-4 py-2">
                    <h3 className="oswald text-2xl tracking-wider">
                        {HtmlParser(title)}
                    </h3>
                    <form
                        onSubmit={handleSubmit}
                        className="flex border border-borderColor mt-4"
                    >
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="outline-none flex-1 px-2 py-1 h-[37px] text-base text-[#333] md:w-[21.5em]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#333] text-white px-4 py-1  transition duration-300"
                        >
                            <svg
                                data-v-2aa592cf=""
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 10 16"
                                className="w-[7px] fill-white text-white"
                            >
                                <title data-v-2aa592cf="">Submit</title>
                                <path
                                    data-v-2aa592cf=""
                                    d="M5.7 8L0 13.8 2.1 16 10 8 2.1 0 0 2.2 5.7 8z"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
                <p className="text-xs text-gray-600 mt-6 flex flex-col justify-center items-center">
                    {/* <RenderRichText children={description} /> */}
                    Get product news and promotions based on your preferences
                    and registered devices.
                    <Link href="" className="underline">
                        Learn about email privacy.
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
