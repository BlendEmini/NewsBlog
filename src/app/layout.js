import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { BlogProvider } from "./context/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AmericanLensNews",
    description: "Welcome to AmericanLensNews!",
    icons: {
        icon: ["/favicon.ico?v=4"],
        apple: ["/apple-touch-icon.png?v=4"],
        shortcut: ["/apple-touch-icon.png"],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <BlogProvider>
                <body className={inter.className}>{children}</body>
            </BlogProvider>
            <SpeedInsights />
        </html>
    );
}
