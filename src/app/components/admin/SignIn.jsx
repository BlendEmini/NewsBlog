"use client";
import React, { useState } from "react";
import { supabase } from "@/app/supabase";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignIn = async () => {
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
            } else {
                // Redirect to a different route upon successful sign-in
                // For example, replace '/dashboard' with your desired route
                window.location.href = "/admin/dashboard";
            }
        } catch (error) {
            console.error("Sign in error:", error.message);
            setError("An error occurred during sign-in.");
        }
    };

    return (
        <div className="flex bg-mainBgDark h-screen w-screen justify-center items-center">
            <div className="flex border-2 border-gray-400 box-border px-8 py-12 rounded-lg gap-2 items-center flex-col">
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    className="rounded-md border-2 border-blue-500 p-4"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="rounded-md border-2 border-blue-500 p-4"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="rounded-md text-white w-full py-3 border-2 border-blue-900 bg-blue-500"
                    onClick={handleSignIn}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default SignIn;
