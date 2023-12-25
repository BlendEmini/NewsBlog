"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";

import SportsRoute from "@/app/components/SportsRoute";

const Page = () => {
    return (
        <BlogProvider>
            <SportsRoute />
        </BlogProvider>
    );
};

export default Page;
