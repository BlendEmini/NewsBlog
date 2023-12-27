"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="">
            <div className="w-full bg-footerBG text-white box-border p-8 flex flex-wrap justify-center ">
                <div className="flex gap-4 flex-wrap  md:justify-center">
                    <div className="w-72 box-border p-4  h-60 flex flex-col align-items-start">
                        <strong>About</strong>
                        <p>
                            Welcome to AmericanLensNews! We're passionate about
                            delivering reliable, diverse news across topics that
                            inform and engage.
                        </p>
                        <br></br>
                        <strong className="">
                            Email: americanlensnews@gmail.com
                        </strong>
                    </div>
                    <div className="box-border p-5 flex  flex-col h-60">
                        <strong>Category</strong>
                        <Link href={"/"}>Homepage</Link>
                        <Link href={"/blog/politics"}>Politics</Link>
                        <Link href={"/blog/business"}>Business</Link>
                        <Link href={"/blog/health"}>Health</Link>
                        <Link href={"/blog/sports"}>Sports</Link>
                        <Link href={"/blog/technology"}>Technology</Link>
                        <Link href={"/blog/others"}>Others</Link>
                    </div>
                    <div className="w-72 flex flex-col gap-3 align-items-center h-60 box-border p-6">
                        <strong>Weekly Newsletter</strong>
                        <p>Get blog articles and offers via Email</p>
                        <input
                            className="box-border p-2 border1pxBoxDark  w-52"
                            placeholder="Email"
                        />
                        <button className="box-border p-2 bg-blueButton text-white border1pxBoxDark w-52">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
