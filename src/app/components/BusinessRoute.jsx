import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import BusinessHero from "./BusinessHero";
import Footer from "./Footer";
import CategoryProps from "./CategoryProps";

const BusinessRoute = () => {
    const { blog, darkMode, setDarkMode } = useContext(BlogContext);
    const [businessData, setBusinessData] = useState(null);
    useEffect(() => {
        const filteredBusinessData = blog.filter(
            ({ category }) => category.toString() === "Business"
        );

        setBusinessData(filteredBusinessData);
    }, [blog]);

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <CategoryProps category={"Business"} />
            <BusinessHero
                businessData={businessData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Footer />
        </div>
    );
};

export default BusinessRoute;
