// src/app/blog/[id]/page.js
import React from "react";
import { BlogProvider } from "@/app/context/BlogContext";
import SingleBlogView from "@/app/components/SingleBlogView";
import Head from "next/head";
import { supabase } from "@/app/supabase";

export const metadata = {
    title: "...",
    description: "....",
};
const Page = async () => {
    const { data: post, error } = await supabase.from("news").select("*");

    return (
        <>
            <BlogProvider>
                <SingleBlogView />
            </BlogProvider>
        </>
    );
};
export default Page;
