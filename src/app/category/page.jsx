import Link from "next/link"
import Image from "next/image"

import Baner1 from "../../../public/banner-01.jpg"
import Baner2 from "../../../public/banner-02.jpg"
import Baner3 from "../../../public/slide-02.jpg"

import { Poppins } from "next/font/google";
const popp = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins", // you can use the 'poppins' variable in your styles or components
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Category() {
    const year = new Date()
    return (
        <section className="w-full bg-[#fff] pb-14 pt-20">
            <div className="md:flex flex-wrap gap-8 px-4 lg:px-40">
                <div className="md:w-[45%] lg:flex-1 border border-[#e6e6e6] mx-auto">
                    <Link href="/" className="w-full h-full relative group overflow-hidden">
                        <Image src={Baner1} alt="Baner1" className="w-full h-full object-cover" />
                        <div className={`${popp.className} px-10 py-9 bg-[rgba(103, 117, 214, 0.0)] absolute top-0 left-0 group-hover:z-20`}>
                            <span className="text-2xl leading-4 text-[#333] transition-all duration-500 pb-2 group-hover:text-[#fff] block font-bold">Women</span>
                            <span className="block text-xs leading-7 text-[#333] transition-all duration-500 group-hover:text-[#fff]">Collection {year.getFullYear()}</span>
                        </div>
                        <div className={`${popp.className} px-10 py-9 bg-[rgba(103, 117, 214, 0.0)] absolute bottom-0 left-0 group-hover:z-20`}>
                            <div className="text-[15px] uppercase leading-6 transition-all duration-500 text-[#fff] transform translate-y-16 group-hover:translate-y-0">Shop Now</div>
                            <div className="w-0 h-[1px] bg-[#fff] group-hover:w-24 transition-all duration-500"></div>
                        </div>
                        <div className="w-full h-full bg-[#e65640a8] absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 z-10">
                        </div>
                    </Link>
                </div>
                <div className="md:w-[45%] lg:flex-1  border border-[#e6e6e6] mx-auto my-4 md:my-0">
                    <Link href="/" className="w-full h-full relative group overflow-hidden">
                        <Image src={Baner2} alt="Baner2" className="w-full h-full object-cover" />
                        <div className={`${popp.className} px-10 py-9 bg-[rgba(103, 117, 214, 0.0)] absolute top-0 left-0 group-hover:z-20`}>
                            <span className="text-2xl leading-4 text-[#333] transition-all duration-500 pb-2 group-hover:text-[#fff] block font-bold">Men</span>
                            <span className="block text-xs leading-7 text-[#333] transition-all duration-500 group-hover:text-[#fff]">Collection {year.getFullYear()}</span>
                        </div>
                        <div className={`${popp.className} px-10 py-9 bg-[rgba(103, 117, 214, 0.0)] absolute bottom-0 left-0 group-hover:z-20`}>
                            <div className="text-[15px] uppercase leading-6 transition-all duration-500 text-[#fff] transform translate-y-16 group-hover:translate-y-0">Shop Now</div>
                            <div className="w-0 h-[1px] bg-[#fff] group-hover:w-24 transition-all duration-500"></div>
                        </div>
                        <div className="w-full h-full bg-[#e65640a8] absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 z-10">
                        </div>
                    </Link>
                </div>
                <div className="md:w-[45%] lg:flex-1  border border-[#e6e6e6] mx-auto">
                    <Link href="/" className="w-full h-full relative group overflow-hidden">
                        <Image src={Baner3} alt="Baner3" className="w-full h-full object-cover" />
                        <div className={`${popp.className} px-10 py-9 bg-[rgba(103, 117, 214, 0.0)] absolute top-0 left-0 group-hover:z-20`}>
                            <span className="text-xl leading-4 text-[#333] transition-all duration-500 pb-2 group-hover:text-[#fff] block font-bold">Accessories</span>
                            <span className="block text-xs leading-7 text-[#333] transition-all duration-500 group-hover:text-[#fff]">Collection {year.getFullYear()}</span>
                        </div>
                        <div className={`${popp.className} px-10 py-9 bg-[rgba(103, 117, 214, 0.0)] absolute bottom-0 left-0 group-hover:z-20`}>
                            <div className="text-[15px] uppercase leading-6 transition-all duration-500 text-[#fff] transform translate-y-16 group-hover:translate-y-0">Shop Now</div>
                            <div className="w-0 h-[1px] bg-[#fff] group-hover:w-24 transition-all duration-500"></div>
                        </div>
                        <div className="w-full h-full bg-[#e65640a8] absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 z-10">
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}