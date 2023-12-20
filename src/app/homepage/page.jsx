import React from "react";

export default function Homepage({ darkMode }) {
    return (
        <main
            className={`flex ${
                darkMode ? "bg-mainBgDark text-white" : "bg-white text-black"
            } min-h-screen flex-col items-center justify-between`}
        ></main>
    );
}
