"use client";
import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import HealthHero from "./HealthHero";
import Footer from "./Footer";
import CategoryProps from "./CategoryProps";

const HealthRoute = () => {
    const { blog, darkMode, setDarkMode } = useContext(BlogContext);
    const [healthData, setHealthData] = useState(null);

    useEffect(() => {
        const filteredHealthData = blog.filter(
            ({ category }) => category.toString() === "Health"
        );

        setHealthData(filteredHealthData);
    }, [blog]);

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <CategoryProps category={"Health"} />
            <HealthHero
                healthData={healthData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Footer />
        </div>
    );
};

export default HealthRoute;
