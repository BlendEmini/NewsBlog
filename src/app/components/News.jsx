import React from "react";
import BlogBox from "./BlogBox";
import BlogContext from "../context/BlogContext";
import { useContext } from "react";
const News = ({ darkMode }) => {
    const { blog } = useContext(BlogContext);

    return (
        <div className="flex max-w-5xl mt-5 lg:mt-9 justify-center flex-wrap gap-7">
            {blog.map(
                (
                    box,
                    index // Added index as key for each BlogBox
                ) => (
                    <BlogBox key={index} blog={box} darkMode={darkMode} />
                )
            )}
        </div>
    );
};

export default News;
