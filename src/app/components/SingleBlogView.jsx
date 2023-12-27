import SingleBlog from "./SingleBlog";

const SingleBlogView = ({ singleBlogData }) => {
    console.log(singleBlogData);
    if (!singleBlogData) {
        return <div>Loading...</div>;
    }

    return <SingleBlog singleBlogData={singleBlogData} />;
};

export default SingleBlogView;
