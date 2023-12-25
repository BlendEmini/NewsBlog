import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import HealthHero from "./HealthHero";

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
            <HealthHero
                healthData={healthData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        </div>
    );
};

export default HealthRoute;
