"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/app/supabase";
import Dashboard from "@/app/components/admin/Dashboard";

const AdminDashboard = () => {
    const [checkedAuth, setCheckedAuth] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data: session, error } =
                    await supabase.auth.getSession();
                if (error || !session) {
                    // If error occurs or session doesn't exist, the user is not authenticated
                    setAuthenticated(false);
                } else {
                    // If session exists, the user is authenticated
                    setAuthenticated(true);
                }
            } catch (error) {
                console.error("Error fetching session:", error.message);
                setAuthenticated(false);
            } finally {
                setCheckedAuth(true);
            }
        };

        checkAuth();
    }, []);

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            setAuthenticated(false);
            window.location.href = "/admin"; // Redirect to the login page
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    useEffect(() => {
        if (checkedAuth) {
            if (!authenticated) {
                // Redirect to the login page if not authenticated
                window.location.href = "/admin";
            }
        }
    }, [checkedAuth, authenticated]);

    return (
        <div>
            {!checkedAuth && <p>Checking authentication status...</p>}
            {authenticated && <Dashboard handleLogout={handleLogout} />}
        </div>
    );
};

export default AdminDashboard;
