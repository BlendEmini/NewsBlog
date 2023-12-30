import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import SingleBlog from "./SingleBlog";
import Footer from "./Footer";

const SingleBlogView = () => {
    const { fetchPostById, currentPost, darkMode, setDarkMode } =
        useContext(BlogContext);
    const [metadata, setMetadata] = useState({
        title: "AmericanLensNews",
        description:
            "Welcome to AmericanLensNews! Our commitment is to offer dependable and diverse news coverage.",
        image: "",
    });

    useEffect(() => {
        const currentURL = window.location.pathname;
        const parts = currentURL.split("/");
        const urlId = parts[parts.length - 1];

        // Fetch single blog post based on the URL ID
        fetchPostById(urlId);
    }, [fetchPostById]);

    useEffect(() => {
        if (currentPost) {
            // Update metadata when currentPost is available
            setMetadata((prevMetadata) => ({
                ...prevMetadata,
                image: currentPost.image,
            }));
        }
    }, [currentPost]);

    if (!currentPost) {
        return "loading";
    }

    return (
        <>
            <div>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
                <SingleBlog singleBlogData={currentPost} />
                <Footer />
            </div>
        </>
    );
};

export default SingleBlogView;
