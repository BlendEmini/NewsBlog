"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";
import PoliticsRoute from "@/app/components/PoliticsRoute";

const Page = () => {
    return (
        <BlogProvider>
            <PoliticsRoute />
        </BlogProvider>
    );
};

export default Page;
