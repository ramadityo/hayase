"use client";

import React from "react";

// Toaster
import { Toaster } from "react-hot-toast";

export default function ClientWrapper({ children }) {
    return (
        <>
            {children}

            <Toaster position="bottom-right" />
        </>
    );
}
