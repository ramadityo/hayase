import Image from "next/image";
import Link from "next/link";

// FONTS
import { jakarta_bold, jakarta_regular, jakarta_semibold, jakarta_medium, jakarta_light, jakarta_extrabold } from "@/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NotFound() {
    return (
        <main className="container flex flex-col min-h-screen mx-auto">
            <Navbar />

            <div className="hero-section flex-1 flex flex-col gap-7 items-center justify-center">
                <h1 className={`text-center text-[#7A6CCF] text-9xl ${jakarta_extrabold.className}`}>404 NOT FOUND</h1>
                <p className="text-3xl text-[#7A6CCF]">Oops! Looks like this page took a wrong turn.</p>
                <div className="flex items-center gap-4">
                    <Link href="/signup">
                        <button className={`border border-[#7A6CCF] text-[#7A6CCF] px-8 py-5 rounded-xl ${jakarta_semibold.className}`}>Back</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
