import React from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryBtn from "./CategoryBtn";

// className="box-border lg:mt-6 p-2 border1pxBox gap-2 flex flex-col w-80 "
const BlogBox = ({ darkMode, blog }) => {
    if (!blog || blog.length === 0) {
        return (
            <div role="status">
                <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
    return (
        <div
            className={`box-border shadow-md transition duration-300 group *:  p-3 ${
                darkMode
                    ? "border1pxBox hover:bg-darkHoverBG"
                    : "hover:bg-lightHoverBG border1pxBox "
            } gap-2 flex flex-col w-80`}
        >
            <div>
                <Image
                    width={800}
                    height={462}
                    alt="BlogBoxImage"
                    src={blog.image}
                    priority={true}
                />
            </div>
            <CategoryBtn category={blog.category} />

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
            <div className="flex align-items-end justify-between">
                <h5
                    className={`text-sm w-28  font-semibold text-gray-400 ${
                        darkMode
                            ? " group-hover:text-white"
                            : "group-hover:text-mainBgDark"
                    } `}
                >
                    Created At: {blog.created_at.slice(0, 10)}
                </h5>
                <div>
                    <h6
                        className={`border-b ${
                            darkMode
                                ? "border-b-white text-white hover:text-red-500 hover:border-b-red-500"
                                : "border-b-mainBgDark text-mainBgDark hover:text-blue-600 hover:border-b-blue-600"
                        }  cursor-pointer font-semibold`}
                    >
                        Read More
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default BlogBox;
