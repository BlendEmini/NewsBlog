// src/app/blog/[id]/page.js

import React from "react";
import { BlogProvider } from "@/app/context/BlogContext";
import SingleBlogView from "@/app/components/SingleBlogView";
import Head from "next/head";

// export const metadata = {
//     title: "AmericanLensNews",
//     description:
//         "Welcome to AmericanLensNews! Our commitment is to offer dependable and diverse news coverage.",
// };

const Page = () => {
    return (
        <>
            <BlogProvider>
                <SingleBlogView />
            </BlogProvider>
        </>
    );
};

export default Page;
