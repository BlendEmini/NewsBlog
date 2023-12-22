import React from "react";
import Hero from "./Hero";
import BlogBox from "./BlogBox";
import News from "./News";

const Homepage = ({ darkMode }) => {
    return (
        <main
            className={`flex ${
                darkMode ? "bg-mainBgDark text-white" : "bg-white text-black"
            } min-h-screen flex-col items-center justify-between`}
        >
            <Hero darkMode={darkMode} />
            <News darkMode={darkMode} />
        </main>
    );
};

export default Homepage;
