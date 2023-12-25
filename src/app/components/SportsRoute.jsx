import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import SportsHero from "./SportsHero";

const SportsRoute = () => {
    const { blog, darkMode, setDarkMode } = useContext(BlogContext);
    const [sportsData, setsportsData] = useState(null);
    useEffect(() => {
        const filteredsportsData = blog.filter(
            ({ category }) => category.toString() === "Sports"
        );

        setsportsData(filteredsportsData);
    }, [blog]);

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <SportsHero
                sportsData={sportsData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        </div>
    );
};

export default SportsRoute;
