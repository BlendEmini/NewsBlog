"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";

import HealthRoute from "@/app/components/HealthRoute";

const Page = () => {
    return (
        <BlogProvider>
            <HealthRoute />
        </BlogProvider>
    );
};

export default Page;
