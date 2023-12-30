// src/app/blog/[id]/page.js
"use client";
import React, { useState } from "react";
import { BlogProvider } from "@/app/context/BlogContext";

import SingleBlogView from "@/app/components/SingleBlogView";

// import { hydrate, render } from "react-dom";

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//     hydrate(<App />, rootElement);
// } else {
//     render(<App />, rootElement);
// }

const Page = () => {
    return (
        <BlogProvider>
            <SingleBlogView />
        </BlogProvider>
    );
};

export default Page;
