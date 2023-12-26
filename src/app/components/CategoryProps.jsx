"use client";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
const CategoryProps = ({ category }) => {
    const { darkMode } = useContext(BlogContext);
    return (
        <div className="flex pt-4 justify-center ">
            <h2
                className={`font-bold ${
                    darkMode ? "text-white" : "text-mainBgDark"
                } text-xl`}
            >
                Homepage / {category}
            </h2>
        </div>
    );
};

export default CategoryProps;
