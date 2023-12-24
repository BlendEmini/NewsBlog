import Image from "next/image";
import React, { useContext } from "react";
import Ads from "./Ads";
import CookieConsent from "./CookieConsent";
import BlogContext from "../context/BlogContext";
import AdsMid from "./AdsMid";

const SingleBlog = ({ singleBlogData }) => {
    const { darkMode, setDarkMode } = useContext(BlogContext);
    const formattedDescription = singleBlogData.shortdescription
        .split(". ")
        .map((sentence, index) => (
            <React.Fragment key={index}>
                {sentence.trim()}
                .<br />
                {/* <AdsMid /> */}
            </React.Fragment>
        ));
    return (
        <div
            className={`flex box-border align-items-center ${
                darkMode ? "bg-mainBgDark" : "bg-white"
            } flex-col justify-center`}
        >
            <AdsMid />
            <div className="box-border py-4">
                <div className="flex box-border p-3 gap-4  max-w-3xl flex-col justify-center align-items-start">
                    <div className="flex w-full justify-between">
                        <div className="w-28 py-1  bg-blueButton flex flex-col justify-items-center align-items-center box-border border-radius-btn">
                            <h6 className="text-white font-bold">
                                {singleBlogData.category}{" "}
                            </h6>
                        </div>
                        <div>
                            <h5
                                className={`text-sm w-28  font-semibold text-gray-400 ${
                                    darkMode
                                        ? " group-hover:text-white"
                                        : "group-hover:text-mainBgDark"
                                } `}
                            >
                                Created At:{" "}
                                {singleBlogData.created_at.slice(0, 10)}
                            </h5>
                        </div>
                    </div>
                    <div
                        className={` ${
                            darkMode ? "text-white" : "text-mainBgDark"
                        }  md:text-4xl text-3xl font-semibold `}
                    >
                        {singleBlogData.title}
                    </div>
                    <div>
                        <Image
                            className="md:max-w-3xl  box-border md:max-h-400 border-radius-btn"
                            width={800}
                            height={100}
                            alt="IMG"
                            src={singleBlogData.image}
                        />
                    </div>
                    <div className="box-border p-3">
                        <h5
                            className={`${
                                darkMode
                                    ? "text-darkParagraphColor"
                                    : "text-lightParagraphColor"
                            } md:text-xl text-lg font-normal`}
                        >
                            {formattedDescription}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
