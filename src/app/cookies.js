// cookie.js

import Cookies from "js-cookie";

// Function to set the theme preference cookie
export const setThemePreference = (theme) => {
    Cookies.set("themePreference", theme, { expires: 365 }); // You can adjust the expiration as needed
};

// Function to get the theme preference from the cookie
export const getThemePreference = () => {
    return Cookies.get("themePreference");
};

// Function to remove the theme preference cookie (if needed)
export const removeThemePreference = () => {
    Cookies.remove("themePreference");
};
