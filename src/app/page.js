"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";

import Homepage from "./homepage/page";
import { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Homepage darkMode={darkMode} />
        </div>
    );
}
