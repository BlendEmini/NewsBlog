import React from "react";
import Hero from "./Hero";

const Homepage = ({ darkMode }) => {
    return (
        <main
            className={`flex ${
                darkMode ? "bg-mainBgDark text-white" : "bg-white text-black"
            } min-h-screen flex-col items-center justify-between`}
        >
            <Hero />
        </main>
    );
};

export default Homepage;
