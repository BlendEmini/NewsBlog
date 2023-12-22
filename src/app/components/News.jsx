import React from "react";
import BlogBox from "./BlogBox";
import BlogContext from "../context/BlogContext";
import { useContext } from "react";
import AdsMap from "./AdsMap";
const News = ({ darkMode }) => {
    const { blog } = useContext(BlogContext);

    return (
        <div className="flex max-w-5xl mt-5 lg:mt-9 justify-center flex-wrap gap-7">
            {blog.map(
                (
                    box,
                    index // Added index as key for each BlogBox
                ) => (
                    <div key={index}>
                        <BlogBox blog={box} darkMode={darkMode} />
                        <div className="md:hidden ">
                            <AdsMap />
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default News;
