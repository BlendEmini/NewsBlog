import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import SingleBlog from "./SingleBlog";

const SingleBlogView = () => {
    const { blog, darkMode, setDarkMode } = useContext(BlogContext);
    const [singleBlogData, setSingleBlogData] = useState(null);

    useEffect(() => {
        if (blog && blog.length > 0) {
            const currentURL = window.location.pathname;
            const parts = currentURL.split("/");
            const urlId = parts[parts.length - 1];

            const singleBlog = blog.find(({ id }) => id.toString() === urlId);
            if (singleBlog) {
                setSingleBlogData(singleBlog);
            }
        }
    }, [blog]);

    if (!singleBlogData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            <SingleBlog singleBlogData={singleBlogData} />
        </div>
    );
};

export default SingleBlogView;
