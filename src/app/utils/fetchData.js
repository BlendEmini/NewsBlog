// utils/fetchData.js

import { supabase } from "../supabase";

export async function fetchBlogData() {
    try {
        const { data, error } = await supabase.from("news").select("*"); // Replace 'news' with your Supabase table name
        if (error) {
            throw new Error(error.message);
        }

        return data || []; // Return fetched data (an array) or an empty array if there's no data
    } catch (error) {
        console.error("Error fetching blog posts:", error.message);
        return []; // Return an empty array or handle error accordingly
    }
}
