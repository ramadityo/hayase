"use client";

import React, { useState } from "react";

// Toaster
import { Toaster } from "react-hot-toast";
import { failedLogin, successLogin, successRegister, failedRegister } from "@/components/ToastNotif";

// Database
// import supabase from "@/utils/supabase/client";

// FONTS
import { jakarta_bold, jakarta_regular, jakarta_semibold, jakarta_medium, jakarta_light } from "@/fonts";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // ERROR STATE
    const [errorEmail, setErrorEmail] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const [errorLogin, setErrorLogin] = useState(false);

    // VALIDATION STATE
    const validateEmail = (email) => {
        let error = "";
        if (!email) {
            error = "Email cannot be empty";
            setEmail();
        } else if (!/^[A-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i.test(email)) {
            error = "Invalid email address";
            setEmail();
        } else {
            error = "";
            setEmail(email);
        }

        setErrorEmail(error);
    };

    const validateUsername = (username) => {
        let error = "";
        if (!username) {
            error = "Username cannot be empty";
            setUsername();
        } else if (username.length < 3) {
            error = "Username must be at least 3 characters long";
            setUsername();
        } else if (/\s/.test(username)) {
            error = "Username cannot contain spaces";
            setUsername();
        } else {
            error = "";
            setUsername(username);
        }

        setErrorUsername(error);
    };

    const validatePassword = (password) => {
        let error = "";

        if (!password) {
            error = "Password cannot be empty";
            setPassword();
        } else if (password.length < 8) {
            error = "Password must be at least 8 characters long";
            setPassword();
        } else {
            error = "";
            setPassword(password);
        }

        setErrorPassword(error);
    };

    // SUBMIT STATE
    async function handleSubmit(e) {
        e.preventDefault();

        if (errorEmail || errorUsername || errorPassword) {
            return null;
        } else if (!email || !username || !password) {
            failedRegister();
            return null;
        } else {
            const { data, error } = await supabase.auth.signUp({
                username: username,
                email: email,
                password: password,
            });
        }
    }

    return (
        <div className="py-2 min-w-96 md:px-3 xl:px-0 px-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <h1 className={`text-4xl ${jakarta_bold.className} w-max`}>Create an account</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <span className={` ${jakarta_regular.className}`}>Username</span>
                            <input onChange={(e) => validateUsername(e.target.value)} className={`transition-all w-full px-3 py-2 rounded-xl border-2 ${errorUsername ? "border-red-500" : "border-[#7A6CCF]"} outline-none`} type="text" name="username" id="username" />
                            <div className={`grid grid-rows-[0fr] ${errorUsername ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} overflow-hidden duration-200 transition-[grid-template-rows_1s]`}>
                                <div className={`min-h-0 visible`}>
                                    <span className="text-red-500 text-sm">{errorUsername}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className={` ${jakarta_regular.className}`}>Email</span>
                            <input onChange={(e) => validateEmail(e.target.value)} className={`transition-all w-full px-3 py-2 rounded-xl border-2 ${errorEmail ? "border-red-500" : "border-[#7A6CCF]"} outline-none`} type="text" name="email" id="email" />
                            <div className={`grid grid-rows-[0fr] ${errorEmail ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} overflow-hidden duration-200 transition-[grid-template-rows_1s]`}>
                                <div className={`min-h-0 visible`}>
                                    <span>{email}</span>
                                    <span className="text-red-500 text-sm">{errorEmail}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className={` ${jakarta_regular.className}`}>Password</span>
                            <input onChange={(e) => validatePassword(e.target.value)} className={`transition-all w-full px-3 py-2 rounded-xl border-2 ${errorPassword ? "border-red-500" : "border-[#7A6CCF]"} outline-none`} type="text" name="password" id="password" />
                            <div className={`grid grid-rows-[0fr] ${errorPassword ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} overflow-hidden duration-200 transition-[grid-template-rows_1s]`}>
                                <div className={`min-h-0 visible`}>
                                    <span className="text-red-500 text-sm">{errorPassword}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input disabled={errorUsername || errorEmail || errorPassword || !email || !username || !password ? true : false} type="submit" value={"Sign Up"} className={`cursor-pointer bg-[#7A6CCF] text-white py-3  rounded-xl disabled:cursor-not-allowed disabled:bg-[#7A6CCF]/50`} />
                </div>

                {/* <div className="flex items-center gap-5">
                            <span className="flex-1 bg-black/10 h-[2px]"></span>
                            <p className={`text-black/30`}>Or sign in with</p>
                            <span className="flex-1 bg-black/10 h-[2px]"></span>
                        </div> */}

                {/* <Link href={"#"}>
                            <button className="w-full border border-black flex items-center justify-center gap-3 py-3 rounded-xl bg-white hover:bg-black/5 transition-all">
                                <Image src={"/images/google.svg"} alt="google" width={24} height={24} />
                                <p>Sign in with Google</p>
                            </button>
                        </Link> */}
            </form>
        </div>
    );
}
