import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import TechnologyHero from "./TechnologyHero";
import Footer from "./Footer";
import CategoryProps from "./CategoryProps";

const TechnologyRoute = () => {
    const { blog, darkMode, setDarkMode } = useContext(BlogContext);
    const [technologyData, setTechnologyData] = useState(null);
    useEffect(() => {
        const filteredTechnologyData = blog.filter(
            ({ category }) => category.toString() === "Technology"
        );

        setTechnologyData(filteredTechnologyData);
    }, [blog]);

    return (
        <div className={`h-full ${darkMode ? "bg-mainBgDark" : "bg-white"}`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <CategoryProps category={"Technology"} />
            <TechnologyHero
                technologyData={technologyData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Footer />
        </div>
    );
};

export default TechnologyRoute;
