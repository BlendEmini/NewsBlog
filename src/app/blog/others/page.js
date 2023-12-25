"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";
import OthersRoute from "@/app/components/OthersRoute";

const Page = () => {
    return (
        <BlogProvider>
            <OthersRoute />
        </BlogProvider>
    );
};

export default Page;
