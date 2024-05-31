import { Roboto, Oswald } from "next/font/google";
import "../globals.css";
import "../_css/checkout.css";
import Header from "@/app/_components/Checkout/Header";
import Footer from "@/app/_components/Footer";
import { Providers } from "../_providers";
import toast, { Toaster } from "react-hot-toast";
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
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} ${oswald.variable}`}>
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
