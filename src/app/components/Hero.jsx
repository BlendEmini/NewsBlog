import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const Hero = () => {
    const { blog } = useContext(BlogContext);

    if (!blog) {
        return <div>Loading...</div>; // or handle the undefined case in another way
    }
    return (
        <div>
            {blog.map((e, index) => (
                <img key={index} src={e.image} alt={`Image ${index}`} />
            ))}
        </div>
    );
};

export default Hero;
