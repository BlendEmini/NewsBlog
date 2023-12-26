"use client";
import { createContext, useEffect, useContext, useState } from "react";
import { supabase } from "../supabase";

const BlogContext = createContext();

export function BlogProvider({ children }) {
    const [blog, setBlog] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [visiblePosts, setVisiblePosts] = useState(6);

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
                setBlog(news.reverse());
            } catch (error) {
                console.error("Error fetching blog posts:", error.message);
            }
        }

        fetchPosts();
    }, []);

    const loadMorePosts = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
    };

    return (
        <BlogContext.Provider
            value={{
                blog: blog.slice(0, visiblePosts),
                darkMode,
                setDarkMode,
                loadMorePosts,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;
