"use client";
import { useEffect, useState } from "react";

const AdsWidgetInArticle = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <div id="M939080ScriptRootC1581687">
                    <script
                        src="https://jsc.adskeeper.com/a/m/americanlensnews.com.1581687.js"
                        async
                    ></script>
                </div>
            )}
        </>
    );
};

export default AdsWidgetInArticle;
