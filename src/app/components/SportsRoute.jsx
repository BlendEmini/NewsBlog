import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import SportsHero from "./SportsHero";
import Footer from "./Footer";
import CategoryProps from "./CategoryProps";

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
            <CategoryProps category={"Sports"} />
            <SportsHero
                sportsData={sportsData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Footer />
        </div>
    );
};

export default SportsRoute;
