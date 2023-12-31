// src/app/component/SingleBlog
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import AdsMid from "./AdsMid";
import CategoryBtn from "./CategoryBtn";
import BlogContext from "../context/BlogContext";

const SingleBlog = ({ singleBlogData }) => {
    const { darkMode } = useContext(BlogContext);
    const [currentPost, setCurrentPost] = useState(null);

    useEffect(() => {
        setCurrentPost(singleBlogData);
    }, [singleBlogData]);

    useEffect(() => {
        if (currentPost) {
            setMetaTags();
        }
    }, [currentPost]);
    const setMetaTags = () => {
        if (typeof window !== "undefined") {
            document.title = currentPost.title;

            // Setting description meta tag
            const descriptionMeta = document.querySelector(
                'meta[name="description"]'
            );
            if (descriptionMeta) {
                descriptionMeta.setAttribute(
                    "content",
                    currentPost.description
                );
            } else {
                const newDescriptionMeta = document.createElement("meta");
                newDescriptionMeta.setAttribute("name", "description");
                newDescriptionMeta.setAttribute(
                    "content",
                    currentPost.description
                );
                document.head.appendChild(newDescriptionMeta);
            }

            // Setting image meta tag
            const imageMeta = document.querySelector(
                'meta[property="og:image"]'
            );
            if (imageMeta) {
                imageMeta.setAttribute("content", currentPost.image);
            } else {
                const newImageMeta = document.createElement("meta");
                newImageMeta.setAttribute("property", "og:image");
                newImageMeta.setAttribute("content", currentPost.image);
                document.head.appendChild(newImageMeta);
            }
        }
    };

    if (!currentPost) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div
                className={`flex box-border align-items-center ${
                    darkMode ? "bg-mainBgDark" : "bg-white"
                } flex-col justify-center`}
            >
                <AdsMid />
                <div className="box-border py-4">
                    <div className="flex box-border p-3 gap-4 max-w-3xl flex-col justify-center">
                        <div className="flex w-full justify-between">
                            <CategoryBtn category={singleBlogData.category} />
                            <div>
                                <h5
                                    className={`text-sm w-28 font-semibold text-gray-400 ${
                                        darkMode
                                            ? "group-hover:text-white"
                                            : "group-hover:text-mainBgDark"
                                    }`}
                                >
                                    Created At:{" "}
                                    {singleBlogData.created_at.slice(0, 10)}
                                </h5>
                            </div>
                        </div>
                        <div
                            className={`${
                                darkMode ? "text-white" : "text-mainBgDark"
                            } md:text-4xl text-3xl font-semibold`}
                        >
                            {singleBlogData.title}
                        </div>
                        <div>
                            <Image
                                className="md:max-w-3xl box-border md:max-h-400 border-radius-btn"
                                width={800}
                                height={100}
                                priority={true}
                                alt="IMG"
                                src={singleBlogData.image}
                            />
                        </div>
                        <div className="box-border p-3">
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-darkParagraphColor"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal`}
                            >
                                {singleBlogData.shortdescription}
                            </h6>
                            <br />
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-darkParagraphColor"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal`}
                            >
                                {singleBlogData.midDescription}
                            </h6>
                            <br />
                            <h6
                                className={` ${
                                    darkMode
                                        ? "text-darkParagraphColor"
                                        : "text-lightParagraphColor"
                                } text-sm md:text-base font-normal`}
                            >
                                {singleBlogData.description}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;
