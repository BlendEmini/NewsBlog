import React from "react";
import Hero from "./Hero";
import AllBlogs from "./AllBlogs";

const Homepage = ({ darkMode }) => {
    return (
        <main
            className={`flex ${
                darkMode ? "bg-mainBgDark text-white" : "bg-white text-black"
            } min-h-screen flex-col items-center justify-between`}
        >
            <Hero darkMode={darkMode} />
            <AllBlogs />
        </main>
    );
};

export default Homepage;
