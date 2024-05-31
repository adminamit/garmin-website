import { Roboto, Oswald } from "next/font/google";
import "../globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import { Providers } from "../_providers";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    variable: "--font-oswald",
    subsets: ["latin"],
});

export const metadata = {
    title: "Garmin | India | Home",
    description: "",
    icons: {
        icon: "/icon.webp", // /public path
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className}`}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
                <Toaster position="top-center" reverseOrder={false} />
            </body>
        </html>
    );
}
