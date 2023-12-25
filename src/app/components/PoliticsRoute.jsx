import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import PoliticsHero from "./PoliticsHero";
import Footer from "./Footer";
import CategoryProps from "./CategoryProps";

const PoliticsRoute = () => {
    const { blog, darkMode, setDarkMode } = useContext(BlogContext);
    const [politicsData, setpoliticsData] = useState(null);
    useEffect(() => {
        const filteredpoliticsData = blog.filter(
            ({ category }) => category.toString() === "Politics"
        );

        setpoliticsData(filteredpoliticsData);
    }, [blog]);

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <CategoryProps category={"Politics"} />
            <PoliticsHero
                politicsData={politicsData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Footer />
        </div>
    );
};

export default PoliticsRoute;
