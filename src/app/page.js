"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { BlogProvider } from "./context/BlogContext";
import Homepage from "./components/Homepage";
import { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div>
            <BlogProvider>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
                <Homepage darkMode={darkMode} />
            </BlogProvider>
        </div>
    );
}
