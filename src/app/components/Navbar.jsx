"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoDark from "../assets/logodark1.png";
import LogoLight from "../assets/logolight1.png";
import SearchLogo from "../assets/search-outline.png";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
    const toggleMode = () => {
        setDarkMode(!darkMode); // Update darkMode based on the prop setDarkMode
    };

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setDarkMode(!showMenu);
    };

    return (
        <div
            className={`flex navbar items-center gap-12 justify-center p-7 ${
                darkMode ? "bg-mainBgDark text-white" : "bg-white text-black"
            }`}
        >
            <div>
                <Image
                    alt="logo"
                    width={220}
                    height={52}
                    src={darkMode ? LogoDark : LogoLight}
                />
            </div>
            <div className="flex flex-wrap gap-3">
                <a
                    href="/homepage"
                    className={` text-lg ${
                        darkMode ? "text-white" : "text-text-scLightText"
                    }`}
                >
                    Homepage
                </a>
                <a
                    href="/Politics"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Politics
                </a>
                <a
                    href="/Sports"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Sports
                </a>
                <a
                    href="/Business"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Business
                </a>
                <a
                    href="/Technology"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Technology
                </a>
                <a
                    href="/Health"
                    className={`text-lg ${
                        darkMode ? "text-white" : "text-scLightText"
                    }`}
                >
                    Health
                </a>
            </div>
            <div>
                <div className="relative">
                    <form
                        action="/search"
                        method="GET"
                        className="flex items-center"
                    >
                        <input
                            className={`w-48 h-11 bg-transparent rounded border border-gray-300 px-4 ${
                                darkMode
                                    ? "text-white placeholder-gray-300"
                                    : "text-black bg-scLightBg placeholder-gray-500"
                            }`}
                            type="text"
                            name="query"
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                            className={`absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 ${
                                darkMode ? "text-black" : "text-white"
                            }`}
                        >
                            <Image alt="search-icon" src={SearchLogo} />
                        </button>
                    </form>
                </div>
            </div>

            <button
                onClick={toggleMode}
                className={`px-4 py-2 flex-wrap border-radius ${
                    darkMode
                        ? "bg-white text-black"
                        : "bg-mainBgDark text-white"
                }`}
            >
                <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl "
                />
            </button>
        </div>
    );
};

export default Navbar;
