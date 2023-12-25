import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import PoliticsHero from "./PoliticsHero";

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
            <PoliticsHero
                politicsData={politicsData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        </div>
    );
};

export default PoliticsRoute;
