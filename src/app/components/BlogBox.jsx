import React from "react";
import Image from "next/image";

// className="box-border lg:mt-6 p-2 border1pxBox gap-2 flex flex-col w-80 "
const BlogBox = ({ darkMode, blog }) => {
    return (
        <div
            className={`box-border shadow-md transition duration-300 group *:  p-3 ${
                darkMode
                    ? "border1pxBox hover:bg-darkHoverBG"
                    : "hover:bg-lightHoverBG border1pxBoxDark"
            } gap-2 flex flex-col w-80`}
        >
            <div>
                <Image
                    width={800}
                    height={462}
                    alt="BlogBoxImage"
                    src={blog.image}
                />
            </div>

            <div>
                <h2
                    className={`lg:text-xl text-lg font-bold ${
                        darkMode
                            ? " hover:bg-darkHoverBG"
                            : "hover:bg-lightHoverBG "
                    } `}
                >
                    {blog.title}
                </h2>
            </div>
            <div className="flex align-items-center justify-between">
                <h5
                    className={`text-sm w-28  font-semibold text-gray-400 ${
                        darkMode
                            ? " group-hover:text-white"
                            : "group-hover:text-mainBgDark"
                    } `}
                >
                    Created At: {blog.created_at.slice(0, 10)}
                </h5>
                <div className="w-28 py-1  bg-blueButton flex flex-col justify-items-center align-items-center box-border border-radius-btn">
                    <h6 className="text-white font-bold">{blog.category} </h6>
                </div>
            </div>
        </div>
    );
};

export default BlogBox;
