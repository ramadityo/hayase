import Image from "next/image";
import Link from "next/link";

// FONTS
import { jakarta_bold, jakarta_regular, jakarta_semibold, jakarta_medium, jakarta_light } from "@/fonts";

// ICONS
import { IoIosArrowBack } from "react-icons/io";

// COMPONENTS
import SignupForm from "@/components/forms/SignupForm";
import ClientWrapper from "@/components/ClientWrapper";

export default function page() {
    return (
        <div className="w-full h-screen flex md:gap-0 xl:gap-10 gap-0">
            <ClientWrapper>
                <div className=" bg-[#7A6CCF] relative transition-all duration-500 md:flex-0 xl:flex-1 flex-0 overflow-hidden">
                    <Image src="/images/hayase-login.png" alt="hayase login" width={500} height={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" />
                    <div className="absolute inset-0 bg-[#1A0C69]/30 z-20"></div>
                    <Image src="/images/signup-yuuka.webp" quality={100} placeholder="blur" blurDataURL="/" alt="login" className="absolute w-full h-full object-cover z-10" width={800} height={800} />
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

                    <SignupForm />
                </div>
            </ClientWrapper>
        </div>
    );
}
