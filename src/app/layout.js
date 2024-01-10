import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { BlogProvider } from "./context/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AmericanLensNews TEST",
    description:
        "Welcome to AmericanLensNews! Our commitment is to offer dependable and diverse news coverage.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <BlogProvider>
                <body className={inter.className}>{children}</body>
            </BlogProvider>
            {/* <SpeedInsights /> */}
        </html>
    );
}
