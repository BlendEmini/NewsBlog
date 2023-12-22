import React from "react";
import Image from "next/image";

// className="box-border lg:mt-6 p-2 border1pxBox gap-2 flex flex-col w-80 "
const BlogBox = ({ darkMode, blog }) => {
    return (
        <div
            className={`box-border p-3 ${
                darkMode ? "border1pxBox" : "border1pxBoxDark"
            } gap-2 flex flex-col w-80`}
        >
            <div>
                <Image
                    width={360}
                    height={240}
                    alt="BlogBoxImage"
                    src={blog.image}
                />
            </div>

            <div>
                <h2 className="lg:text-xl text-lg font-bold">{blog.title}</h2>
            </div>
            <div className="flex align-items-center justify-between">
                <h5 className="text-sm w-28 text-gray-400">
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
