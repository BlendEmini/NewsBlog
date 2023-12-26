import React, { useEffect, useState } from "react";
import Image from "next/image";
import Ads from "./Ads";
import Link from "next/link";
import { supabase } from "../supabase";

const Hero = ({ darkMode }) => {
    const [singleBlog, setSingleBlog] = useState(null);

    useEffect(() => {
        async function fetchLastBlog() {
            try {
                const { data: blogs, error } = await supabase
                    .from("news")
                    .select("*")
                    .order("created_at", { ascending: false })
                    .range(0, 1);

                if (error) {
                    console.error(
                        "Error fetching last blog post:",
                        error.message
                    );
                    return;
                }

                if (blogs && blogs.length > 0) {
                    setSingleBlog(blogs[0]);
                }
            } catch (error) {
                console.error("Error fetching last blog post:", error.message);
            }
        }

        fetchLastBlog();
    }, []);

    if (!singleBlog) {
        return (
            <div className="flex justify-center" role="status">
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
        <div className="flex flex-col justify-center align-items-center gap-3">
            <div className="relative gap-11 box-border py-3">
                <div className="relative cursor-pointer ">
                    <Link href={`/blog/${singleBlog.id}`}>
                        <div className="md:w-800 w-96 h-56 hero-res-mid md:h-462 border1px border3px border-radius">
                            <Image
                                src={singleBlog.image}
                                alt={`Image`}
                                className="md:w-800 w-96  h-56 md:h-462 border1px border3px border-radius"
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                            />
                        </div>
                        <div
                            className={`absolute smallD box-border p-5 border1px border-radius gap-3 -bottom-40 w-350 lg:-bottom-10 left-10 flex md:w-478 md:h-243 ${
                                darkMode
                                    ? "bg-mainBgDark text-white "
                                    : "bg-gray-100 text-black shadow-lg "
                            } flex-col justify-between`}
                        >
                            <div className="w-28 py-1  bg-blueButton flex flex-col justify-items-center align-items-center box-border border-radius-btn">
                                <h6 className="text-white font-bold">
                                    {singleBlog.category}
                                </h6>
                            </div>
                            <div>
                                <h2 className="lg:text-3xl text-xl">
                                    {singleBlog.title}
                                </h2>
                            </div>
                            <div className="flex align-items-center justify-between">
                                <h5 className="text-sm w-28 text-gray-400">
                                    Created At:{" "}
                                    {singleBlog.created_at.slice(0, 10)}
                                </h5>
                                <div className="md:px-4 px-3 py-2 flex justify-center bg-blue-950 rounded-md">
                                    <h5 className="text-sm text-white font-bold">
                                        Latest News
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Ads />
            <h5 className="font-bold mt-6">LATEST NEWS</h5>
        </div>
    );
};

export default Hero;
