"use client";
import { createContext, useEffect, useContext, useState } from "react";
import { supabase } from "../supabase";

const BlogContext = createContext();

export function BlogProvider({ children }) {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                let { data: news, error } = await supabase
                    .from("news")
                    .select("*");

                if (error) {
                    console.error("Error fetching blog posts:", error.message);
                    return;
                }
                setBlog(news.reverse()); // Fix the variable name here to match the destructured variable
            } catch (error) {
                console.error("Error fetching blog posts:", error.message);
            }
        }

        fetchPosts();
    }, []); // Run once on component mount

    return (
        <BlogContext.Provider value={{ blog }}>{children}</BlogContext.Provider>
    );
}

export default BlogContext;

// import React from "react";
// import Hero from "../components/Hero";
// import { BlogProvider } from "../context/BlogContext";

// export default function Homepage({ darkMode }) {
//     return;
//     <BlogProvider>
//         <Hero />;
//     </BlogProvider>;
// }
