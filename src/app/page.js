import Image from "next/image";
import Link from "next/link";

// FONTS
import { jakarta_bold, jakarta_regular, jakarta_semibold, jakarta_medium, jakarta_light } from "@/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="container flex flex-col min-h-screen mx-auto">
      <Navbar />

      <div className="hero-section flex-1 flex flex-col gap-7 items-center justify-center">
        <h1 className={`text-8xl text-center text-[#7A6CCF] ${jakarta_bold.className}`}>Keep track of<br />your finances rapidly!</h1>
        <div className="flex items-center gap-4">
          <Link href="/signup">
            <button className={`border border-[#7A6CCF] text-[#7A6CCF] px-8 py-5 rounded-xl ${jakarta_semibold.className}`}>Sign Up</button>
          </Link>
          <Link href="/signin">
            <button className={`bg-[#7A6CCF] text-white px-8 py-5 rounded-xl ${jakarta_semibold.className}`}>Sign In</button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
