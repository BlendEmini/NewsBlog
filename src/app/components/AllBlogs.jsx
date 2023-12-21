import { useEffect, useState } from "react";
import { fetchBlogData } from "../utils/fetchData"; // Your data-fetching function

const AllBlogs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const blogData = await fetchBlogData(); // Use your data-fetching function here
                setData(blogData);
            } catch (error) {
                console.error("Error fetching blog posts:", error.message);
                // Handle error state
            }
        }

        fetchData();
    }, []); // Fetch data on component mount

    return (
        <section>
            {data.map((blogPost) => (
                <div key={blogPost.id}>
                    {/* Render each blog post */}
                    <h2>{blogPost.title}</h2>
                    {/* Other details */}
                </div>
            ))}
        </section>
    );
};

export default AllBlogs;
