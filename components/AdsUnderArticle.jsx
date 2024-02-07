"use client";
import { useEffect, useState } from "react";

const AdsUnderArticle = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <>
                    <div id="M939080ScriptRootC1582903"></div>
                    <script
                        src="https://jsc.adskeeper.com/a/m/americanlensnews.com.1582903.js"
                        async
                    ></script>
                </>
            )}
        </>
    );
};

export default AdsUnderArticle;
