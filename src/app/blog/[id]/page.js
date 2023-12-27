"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";

import SingleBlogView from "@/app/components/SingleBlogView";

const Page = () => {
    return (
        <BlogProvider>
            <SingleBlogView />
        </BlogProvider>
    );
};

export default Page;
