import React, { useState, useContext, useEffect } from "react";
import BlogContext from "@/app/context/BlogContext";

const SingleBlogView = () => {
    const { blog } = useContext(BlogContext);
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
            {" "}
            <div>{singleBlogData.title}</div>
            <img src={singleBlogData.image} />
        </div>
    );
};

export default SingleBlogView;
