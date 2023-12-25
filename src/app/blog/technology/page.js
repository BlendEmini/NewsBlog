"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";
import TechnologyRoute from "@/app/components/TechnologyRoute";

const Page = () => {
    return (
        <BlogProvider>
            <TechnologyRoute />
        </BlogProvider>
    );
};

export default Page;
