import SingleBlog from "./SingleBlog";

const SingleBlogView = ({ singleBlogData }) => {
    console.log(singleBlogData);

    return (
    
            <div>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode} />
                <SingleBlog singleBlogData={currentPost} />
                <Footer />
            </div>
        </>
    );

};

export default SingleBlogView;
