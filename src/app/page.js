// "use client";

// import Navbar from "./components/Navbar";
// import { BlogProvider } from "./context/BlogContext";
// import Homepage from "./components/Homepage";
// import { useState, useEffect } from "react";
// import HamburgerMenu from "./components/HamburgerMenu";
// import { getThemePreference, setThemePreference } from "./cookies";
// import CookieConsent from "./components/CookieConsent";
// export default function Home() {
//     const [showCookieConsent, setShowCookieConsent] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);
//     useEffect(() => {
//         // Retrieve the theme preference from the cookie on component mount
//         const themePreference = getThemePreference();
//         if (themePreference === "dark") {
//             setDarkMode(true);
//         }
//     }, []);

//     const toggleDarkMode = () => {
//         const newDarkMode = !darkMode;
//         setDarkMode(newDarkMode);
//         setThemePreference(newDarkMode ? "dark" : "light"); // Set the theme preference in the cookie
//     };
//     const handleAccept = () => {
//         setThemePreference("light"); // Set default theme preference after accepting
//         setShowCookieConsent(false); // Hide the cookie consent after accepting
//     };
//     return (
//         <div>
//             <BlogProvider>
//                 <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />{" "}
//                 {/* Pass toggleDarkMode function as a prop */}
//                 <HamburgerMenu
//                     darkMode={darkMode}
//                     setDarkMode={toggleDarkMode}
//                 />
//                 <Homepage darkMode={darkMode} />
//                 {showCookieConsent && <CookieConsent onAccept={handleAccept} />}
//             </BlogProvider>
//         </div>
//     );
// }
"use client";
import Navbar from "./components/Navbar";
import { BlogProvider } from "./context/BlogContext";
import Homepage from "./components/Homepage";
import { useState, useEffect } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import { getThemePreference, setThemePreference } from "./cookies";
import CookieConsent from "./components/CookieConsent";

export default function Home() {
    const [showCookieConsent, setShowCookieConsent] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const themePreference = getThemePreference();
        if (!themePreference) {
            setShowCookieConsent(true);
        } else {
            setDarkMode(themePreference === "dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        setThemePreference(newDarkMode ? "dark" : "light");
    };

    const handleAccept = () => {
        setShowCookieConsent(false); // Hide the cookie consent after accepting
    };

    return (
        <div>
            <BlogProvider>
                <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
                <HamburgerMenu
                    darkMode={darkMode}
                    setDarkMode={toggleDarkMode}
                />
                <Homepage darkMode={darkMode} />
                {showCookieConsent && <CookieConsent onAccept={handleAccept} />}
            </BlogProvider>
        </div>
    );
}
