"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";
import BusinessRoute from "@/app/components/BusinessRoute";

const Page = () => {
    return (
        <BlogProvider>
            <BusinessRoute />
        </BlogProvider>
    );
};

export default Page;
