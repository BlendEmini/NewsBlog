import SingleBlog from "./SingleBlog";

const SingleBlogView = ({ singleBlogData }) => {
    console.log(singleBlogData);
    if (!singleBlogData) {
        return <div>Loading...</div>;
    
    return <SingleBlog singleBlogData={singleBlogData} />;
=======
    return (
        <>
            {/* <Head>
                <title>{currentPost.title}</title>
                <meta
                    name="description"
                    content={currentPost.shortdescription}
                />
                <meta property="og:title" content={currentPost.title} />
                <meta
                    property="og:description"
                    content={currentPost.shortdescription}
                />
                <meta property="og:image" content={currentPost.image} />
                <meta
                    property="og:url"
                    content={`https://www.americanlensnews.com/blog/${currentPost.id}`}
                />
                <meta property="og:type" content="article" />
            </Head> */}
            <div>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
                <SingleBlog singleBlogData={currentPost} />
                <Footer />
            </div>
        </>
    );
>>>>>>> parent of 25973a9 (trying to fix meta data)
};

export default SingleBlogView;
