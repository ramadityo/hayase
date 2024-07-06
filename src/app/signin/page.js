"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Database
import { createClient } from "@/utils/supabase/client";

// FONTS
import { jakarta_bold, jakarta_regular, jakarta_semibold, jakarta_medium, jakarta_light } from "@/fonts";

// ICONS
import { IoIosArrowBack } from "react-icons/io";
import { Toaster } from "react-hot-toast";

export default function page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        // e.preventDefault();
    };
    return (
        <div className="w-full h-screen flex md:gap-0 xl:gap-10 gap-0">
            <div className=" bg-[#7A6CCF] relative transition-all duration-500 md:flex-0 xl:flex-1 flex-0 overflow-hidden">
                <Image src="/images/hayase-login.png" alt="hayase login" width={500} height={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" />
                <div className="absolute inset-0 bg-[#1A0C69]/30 z-20"></div>
                <Image src="/images/login-yuuka.webp" placeholder="blur" blurDataURL="/" alt="login" className="absolute w-full h-full object-cover z-10" width={800} height={800} />
                <Link href={"https://x.com/takataka052955/status/1702350944929976602"} target="_blank">
                    <div className=" transition-all absolute bottom-7 right-7 px-5 py-3 rounded-xl z-40 bg-[#1A0C69]/55 hover:bg-[#1A0C69]/40">
                        <p className={`text-white text-sm z-40 ${jakarta_semibold.className}`}>Source</p>
                    </div>
                </Link>
            </div>
            <div className="relative flex-[1.5] bg-white flex items-center md:justify-center xl:justify-start justify-center">
                <div className="flex self-start absolute left-3 md:left-3 xl:left-0 top-5">
                    <Link href={"/"}>
                        <button className="flex items-center gap-2 rounded-xl text-[#7A6CCF]">
                            <IoIosArrowBack />
                            <p className={`${jakarta_regular.className}`}>Back</p>
                        </button>
                    </Link>
                </div>
                <div className="py-2 min-w-96 md:px-3 xl:px-0 px-3">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <h1 className={`text-4xl ${jakarta_bold.className} w-max`}>Sign in into account</h1>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <p className={` ${jakarta_regular.className}`}>Username</p>
                                    <input className="transition-all w-full px-3 py-2 rounded-xl border-2 border-[#7A6CCF] outline-2 outline-[#7A6CCF]" type="text" name="username" id="username" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className={` ${jakarta_regular.className}`}>Password</p>
                                    <input className="transition-all w-full px-3 py-2 rounded-xl border-2 border-[#7A6CCF] outline-2 outline-[#7A6CCF]" type="text" name="password" id="password" />
                                </div>
                            </div>
                            <input type="submit" value={"Sign In"} className="cursor-pointer bg-[#7A6CCF] text-white py-3  rounded-xl" />
                        </div>
                        <div className="flex items-center gap-5">
                            <span className="flex-1 bg-black/10 h-[2px]"></span>
                            <p className={`text-black/30`}>Or sign in with</p>
                            <span className="flex-1 bg-black/10 h-[2px]"></span>
                        </div>

                        {/* <Link href={"#"}>
                            <button className="w-full border border-black flex items-center justify-center gap-3 py-3 rounded-xl bg-white hover:bg-black/5 transition-all">
                                <Image src={"/images/google.svg"} alt="google" width={24} height={24} />
                                <p>Sign in with Google</p>
                            </button>
                        </Link> */}
                    </form>
                </div>
            </div>

            <Toaster />
        </div>
    );
}
