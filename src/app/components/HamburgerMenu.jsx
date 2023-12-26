"use client";
import { useState } from "react";
import {
    PaperAirplaneIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import LogoDark from "../assets/logodark1.png";
import LogoLight from "../assets/logolight1.png";
import { BsFillMoonStarsFill } from "react-icons/bs";

function HamburgerMenu({ darkMode, setDarkMode }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="HamburgerMenu">
            <nav>
                <div
                    className={`max-w-7xl mx-auto ${
                        darkMode
                            ? "bg-mainBgDark text-white"
                            : "bg-white text-dark"
                    }`}
                >
                    <div className="flex mx-auto align-items-center justify-between w-5/6 ">
                        {/* Primary menu and logo */}
                        <div className="flex items-center gap-16">
                            {/* logo */}
                            <div>
                                <Image
                                    alt="logo"
                                    width={220}
                                    height={85}
                                    src={darkMode ? LogoDark : LogoLight}
                                />
                            </div>
                            {/* primary */}
                            <div className="hidden lg:flex gap-8 ">
                                <a href="#" className="">
                                    Home
                                </a>
                                <a href="#">Benefits</a>
                                <a href="#">Our Classes</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                        {/* secondary */}
                        <div className="flex gap-6">
                            <div className="hidden xs:flex items-center gap-10">
                                <div className="hidden lg:flex items-center gap-2">
                                    <MoonIcon className="h-6 w-6" />
                                    <SunIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                                        Free Trial
                                    </button>
                                </div>
                            </div>
                            {/* Mobile navigation toggle */}
                            <div className="lg:hidden flex items-center">
                                <button
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                >
                                    <Bars3Icon className="h-6" />
                                </button>
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
                    </div>
                </div>
                {/* mobile navigation */}
                <div
                    className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                        !toggleMenu ? "h-0" : "h-full"
                    } ${
                        darkMode
                            ? "bg-mainBgDark text-white"
                            : "bg-white text-dark"
                    }`}
                >
                    <div className="px-8">
                        <div className="flex justify-center mt-11 align-items-center flex-col gap-8 font-bold tracking-wider">
                            <a href="/" className="border-l-4 border-gray-600">
                                Homepage
                            </a>
                            <a href="/blog/politics">Politics</a>
                            <a href="/blog/business">Business</a>
                            <a href="/blog/health">Health</a>
                            <a href="/blog/sports">Sports</a>
                            <a href="/blog/technology">Technology</a>
                            <a href="/blog/others">Others</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HamburgerMenu;
