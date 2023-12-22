import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import Image from "next/image";

const Hero = ({ darkMode }) => {
    const { blog } = useContext(BlogContext);
    const singleBlog = blog.slice(0, 1);

    if (!blog) {
        return <div>Loading...</div>; // or handle the undefined case in another way
    }

    return (
        <div className="flex flex-col justify-center align-items-center gap-3">
            <div className="w-80 h-32 border-radius flex align-items-center justify-center mt-5 lg:mt-0 bg-slate-500">
                <h4 className=" text-white">ADS HERE</h4>
            </div>
            <div className="relative box-border p-5">
                {singleBlog.map((e, index) => (
                    <div className="relative" key={index}>
                        <Image
                            src={e.image}
                            alt={`Image ${index}`}
                            className="w-full border1px border-radius"
                            width={800}
                            height={462}
                            priority
                        />
                        <div
                            className={`absolute box-border p-5 border1px border-radius gap-3 -bottom-40 w-350 lg:-bottom-10 left-10 flex md:w-478 md:h-243 ${
                                darkMode
                                    ? "bg-mainBgDark text-white "
                                    : "bg-gray-100 text-black shadow-lg "
                            } flex-col justify-between`}
                        >
                            <div className="w-28 py-1  bg-blueButton flex flex-col justify-items-center align-items-center box-border border-radius-btn">
                                <h6 className="text-white font-bold">
                                    {e.category}{" "}
                                </h6>
                            </div>
                            <div>
                                <h2 className="lg:text-3xl text-xl">
                                    {e.title}
                                </h2>
                            </div>
                            <div className="flex align-items-center justify-between">
                                <h5 className="text-sm w-28 text-gray-400">
                                    Created At: {e.created_at.slice(0, 10)}
                                </h5>
                                <div className="md:px-4 px-3 py-2 flex justify-center bg-blue-950 rounded-md">
                                    <h5 className="text-sm text-white font-bold">
                                        Latest News
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-80 h-32 border-radius flex align-items-center justify-center mt-40 lg:mt-6 bg-slate-500">
                <h4 className=" text-white">ADS HERE</h4>
            </div>
        </div>
    );
};

export default Hero;
