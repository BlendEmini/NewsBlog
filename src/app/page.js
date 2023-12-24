"use client";
import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import { BlogProvider } from "./context/BlogContext";
import Homepage from "./components/Homepage";
import HamburgerMenu from "./components/HamburgerMenu";
import { getThemePreference, setThemePreference } from "./cookies";
import CookieConsent from "./components/CookieConsent";
import BlogContext from "./context/BlogContext";

export default function Home() {
    const [showCookieConsent, setShowCookieConsent] = useState(false);
    const { darkMode, setDarkMode } = useContext(BlogContext);

    useEffect(() => {
        const themePreference = getThemePreference();
        if (!themePreference) {
            setShowCookieConsent(true);
        } else {
            setDarkMode(themePreference === "dark");
        }
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        setThemePreference(newDarkMode ? "dark" : "light");
    };

    const handleAccept = () => {
        setShowCookieConsent(false);
        setThemePreference("light");
    };

    const handleReject = () => {
        setShowCookieConsent(false);
        setThemePreference("light");
    };

    return (
        <div>
            <BlogProvider>
                <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
                <HamburgerMenu
                    darkMode={darkMode}
                    setDarkMode={toggleDarkMode}
                />
                {showCookieConsent && (
                    <CookieConsent
                        onAccept={handleAccept}
                        onReject={handleReject}
                    />
                )}
                <Homepage darkMode={darkMode} />
            </BlogProvider>
        </div>
    );
}
