import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import OthersHero from "./OthersHero";
import Footer from "./Footer";
import CategoryProps from "./CategoryProps";

const OthersRoute = () => {
    const { blog, darkMode, setDarkMode } = useContext(BlogContext);
    const [othersData, setothersData] = useState(null);
    useEffect(() => {
        const filteredothersData = blog.filter(
            ({ category }) => category.toString() === "Others"
        );

        setothersData(filteredothersData);
    }, [blog]);

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <CategoryProps category={"Others"} />
            <OthersHero
                othersData={othersData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Footer />
        </div>
    );
};

export default OthersRoute;
