import React from "react";
import AdsMid from "./AdsMid";
import CategoryBtn from "./CategoryBtn";
import Image from "next/image";
import { useSelector } from "react-redux";
import AdsWidgetInArticle from "./AdsWidgetInArticle";
import AdsWidgetHeader from "./AdsWidgetHeader";
import AdsSidebar from "./AdsSidebar";

const SingleViewPage = ({ singleBlogData }) => {
    const darkMode = useSelector((state) => state.darkMode);
    if (!singleBlogData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div
                className={`flex ${
                    darkMode ? "bg-mainBgDark" : "bg-gray-100"
                }  justify-center gap-8`}
            >
                <div
                    className={`flex box-border align-items-center ${
                        darkMode ? "bg-mainBgDark" : "bg-gray-100"
                    } flex-col justify-center`}
                >
                    <div className="box-border py-4">
                        <div className="flex box-border p-3 gap-4 max-w-3xl flex-col justify-center">
                            <div className="flex w-full justify-between">
                                <CategoryBtn
                                    category={singleBlogData.category}
                                />
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
                            <AdsWidgetInArticle />
                            <div>
                                <Image
                                    className="md:max-w-3xl box-border  border-radius-btn"
                                    width={800}
                                    height={100}
                                    priority={true}
                                    alt="IMG"
                                    src={singleBlogData.image}
                                />
                            </div>
                            <div className="box-border p-3 flex flex-wrap align-items-center">
                                <h6
                                    className={` ${
                                        darkMode
                                            ? "text-white"
                                            : "text-lightParagraphColor"
                                    } text-lg font-normal font-family-single`}
                                >
                                    {singleBlogData.shortdescription}
                                </h6>

                                <h3 className="text-center w-full font-bold py-5">
                                    Scroll Down to continue reading ⏬
                                </h3>
                                <AdsWidgetHeader />
                                <h6
                                    className={` ${
                                        darkMode
                                            ? "text-white"
                                            : "text-lightParagraphColor"
                                    } text-lg font-normal font-family-single`}
                                >
                                    {singleBlogData.description}
                                </h6>
                                {singleBlogData.image2nd ||
                                singleBlogData.image3nd ? (
                                    <h3 className="text-center w-full font-bold py-5">
                                        Keep Scrolling for More Images ⏬
                                    </h3>
                                ) : null}
                                <AdsWidgetInArticle />
                                {singleBlogData.image2nd ? (
                                    <>
                                        <div>
                                            <Image
                                                className="md:max-w-3xl box-border  border-radius-btn"
                                                width={800}
                                                height={100}
                                                priority={true}
                                                alt="IMG"
                                                src={singleBlogData.image2nd}
                                            />
                                        </div>
                                        <AdsWidgetInArticle />
                                    </>
                                ) : null}
                                {singleBlogData.image3nd ? (
                                    <div>
                                        <Image
                                            className="md:max-w-3xl box-border  border-radius-btn"
                                            width={800}
                                            height={100}
                                            priority={true}
                                            alt="IMG"
                                            src={singleBlogData.image3nd}
                                        />
                                    </div>
                                ) : null}
                                <AdsWidgetInArticle />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block max-w-44">
                    <AdsSidebar />
                </div>
            </div>
        </>
    );
};

export default SingleViewPage;
