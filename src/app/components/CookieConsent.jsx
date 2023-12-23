import { useState } from "react";

const CookieConsent = ({ onAccept }) => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        onAccept(); // Call the callback to handle cookie storage
    };

    if (accepted) {
        return null; // If accepted, hide the consent component
    }

    return (
        <div className="cookie-consent">
            <p>This website uses cookies to improve user experience.</p>
            <button onClick={handleAccept}>Accept</button>
        </div>
    );
};

export default CookieConsent;
