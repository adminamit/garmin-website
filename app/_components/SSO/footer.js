import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white font-medium">
            <div className="mx-auto px-6 py-3 flex justify-between items-center">
                <span className="text-[0.8em] sm:text-[0.8em]">
                    Copyright © 1996-2024 Garmin Ltd. or its subsidiaries
                </span>
                <div className="flex gap-8 text-[0.8em] sm:text-[0.8em]">
                    <a href="/terms" className="hover:underline">
                        Terms of Use
                    </a>
                    <a href="/privacy" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="/security" className="hover:underline">
                        Security
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
