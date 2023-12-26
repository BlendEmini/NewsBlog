"use client";
import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase";

const BlogContext = createContext();

export function BlogProvider({ children }) {
    const [blog, setBlog] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [currentPost, setCurrentPost] = useState(null);

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
                blog: blog.slice(0, visiblePosts),
                darkMode,
                setDarkMode,
                loadMorePosts,
                currentPost,
                fetchPostById,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;
