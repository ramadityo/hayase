"use client"

import React, { useState } from "react";

// FONTS
import { jakarta_bold, jakarta_regular, jakarta_semibold, jakarta_medium, jakarta_light } from "@/fonts";

// ICONS
import { IoSunny, IoMoon } from "react-icons/io5";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="flex items-center justify-between w-full py-10">
            <h1 className={`${jakarta_bold.className} text-[#7A6CCF] text-3xl`}>Hayase</h1>

            <div className="flex items-center gap-4">
                <p className={`${jakarta_light.className} text-2xl`}>10:00 AM</p>
                <div className="relative">
                    <span className="w-5 h-5 bg-green-500"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
