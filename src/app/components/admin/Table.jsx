import React, { useEffect, useState } from "react";
import { supabase } from "@/app/supabase";

const Table = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [expandedItemId, setExpandedItemId] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const { data, error } = await supabase.from("news").select("*");
                if (error) {
                    throw error;
                }
                setNews(data || []);
            } catch (error) {
                setError(error);
            }
        };

        fetchNews();
    }, []);

    const handleItemClick = (itemId) => {
        setExpandedItemId(itemId === expandedItemId ? null : itemId);
    };

    return (
        <div className="md:relative gap-2 box-border p-3 rounded-lg flex flex-col lg:left-72 lg:top-20">
            <div className="flex bg-tableDf text-tableDft justify-between box-border p-2 rounded-md xl:gap-20">
                <h3>ID</h3>
                <h3>Title</h3>
                <h3>Description</h3>
                <h3>Image</h3>
                <h3>Category</h3>
                <h3>Description</h3>
                <h3>Created At</h3>
            </div>
            {error && <p>Error: {error.message}</p>}
            <ul className="flex bg-slate-50  flex-col ">
                {[...news].reverse().map((item) => (
                    <div
                        className="flex border-t-2 text-tableText border-b-2 border-white  max-w-5xl flex-wrap box-border px-1 py-5 gap-3 "
                        key={item.id}
                    >
                        <h6 className=" box-border px-1 pr-2 ">{item.id}</h6>
                        <h5 className=" box-border px-1 ">
                            {item.title.slice(0, 20)}...
                        </h5>
                        <h5 className=" box-border px-1 ">
                            {item.shortdescription.slice(0, 15)}...{" "}
                        </h5>
                        <h5 className=" box-border px-1 ">
                            {item.image.slice(0, 20)}...
                        </h5>
                        <h5 className=" w-28 box-border px-1 ">
                            {item.category.slice(0, 15)}
                        </h5>
                        <h5 className=" box-border px-1 ">
                            {item.description.slice(0, 20)}...{" "}
                        </h5>

                        <h5 className="box-border px-1">
                            {item.created_at.slice(0, 10)}{" "}
                        </h5>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Table;
