import React from "react";

const CategoryProps = ({ category }) => {
    return (
        <div className="flex pt-4 justify-center ">
            <h2 className="font-bold text-xl">{category}</h2>
        </div>
    );
};

export default CategoryProps;
