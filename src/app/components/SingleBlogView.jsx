// src/app/components/SingleBlogView.js

import React, { useContext, useEffect } from "react";
import Head from "next/head";
import BlogContext from "@/app/context/BlogContext";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import SingleBlog from "./SingleBlog";
import Footer from "./Footer";

const SingleBlogView = () => {
    const { fetchPostById, currentPost, darkMode, setDarkMode } =
        useContext(BlogContext);

    useEffect(() => {
        const currentURL = window.location.pathname;
        const parts = currentURL.split("/");
        const urlId = parts[parts.length - 1];

        // Fetch single blog post based on the URL ID
        fetchPostById(urlId);
    }, [fetchPostById]);

    useEffect(() => {
        // Update metadata when currentPost changes
        if (currentPost) {
            updateMetadata(currentPost.title, currentPost.description);
        }
    }, [currentPost]);

    const updateMetadata = (title, description) => {
        // Update the page title and meta description dynamically
        document.title = title;
        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }
    };

    if (!currentPost) {
        return (
            // Loading indicator or placeholder content
            <div className="flex justify-center" role="status">
                {/* Add your loading animation */}
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <>
            <Head>
                {/* Update metadata based on the fetched blog post */}
                <title>{currentPost.title}</title>
                <meta name="description" content={currentPost.description} />
                {/* Other meta tags specific to the blog post */}
            </Head>
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
