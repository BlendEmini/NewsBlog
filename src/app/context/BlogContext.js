"use client";
import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabase";

const BlogContext = createContext();

export function BlogProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    // Function to fetch a single post by ID
    const fetchPostById = async (postId) => {
        try {
            const { data: post, error } = await supabase
                .from("news")
                .select("*")
                .eq("id", postId)
                .single();

            if (error) {
                console.error("Error fetching blog post by ID:", error.message);
                return;
            }

            setCurrentPost(post);
        } catch (error) {
            console.error("Error fetching blog post by ID:", error.message);
        }
    };

    return (
        <BlogContext.Provider
            value={{
                darkMode,
                setDarkMode,
                fetchPostById,
                currentPost,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;
export const useBlogContext = () => useContext(BlogContext);
