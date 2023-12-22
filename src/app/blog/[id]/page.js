"use client";
import React, { useState } from "react";
import BlogContext, { BlogProvider } from "@/app/context/BlogContext";
import { useContext } from "react";
import SingleBlogView from "@/app/components/SingleBlogView";

const Page = () => {
    return (
        <BlogProvider>
            <SingleBlogView />
        </BlogProvider>
    );
};

export default Page;
