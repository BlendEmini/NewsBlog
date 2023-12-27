import SingleBlogView from "@/app/components/SingleBlogView";
import { supabase } from "@/app/supabase";

const BlogPost = ({ singleBlogData }) => {
    return <SingleBlogView singleBlogData={singleBlogData} />;
};

export async function getServerSideProps(context) {
    const { params } = context;
    const postId = params.id;

    try {
        // Fetch data from Supabase using postId
        const { data: post, error } = await supabase
            .from("news")
            .select("*")
            .eq("id", postId)
            .single();

        if (error || !post) {
            console.error("Error fetching blog post by ID:", error);
            return {
                notFound: true,
            };
        }

        const singleBlogData = post;

        return {
            props: {
                singleBlogData,
            },
        };
    } catch (error) {
        console.error("Error fetching blog post by ID:", error.message);
        return {
            notFound: true,
        };
    }
}

export default BlogPost;
