"use client"
import Image from "next/image";
import Link from "next/link";

import { PiHeart } from "react-icons/pi";
import { FcLike } from "react-icons/fc";

import Insta1 from "../../../public/gallery-01.jpg"
import Insta2 from "../../../public/gallery-02.jpg"
import Insta3 from "../../../public/gallery-03.jpg"
import Insta4 from "../../../public/gallery-04.jpg"
import Insta5 from "../../../public/gallery-05.jpg"

import { Montserrat } from "next/font/google";
import { useState} from "react";
const monst = Montserrat({ subsets: ["latin-ext"] });

export default function Instagram() {
    const [isLike1, setIsLike1] = useState(false)
    const [isLike2, setIsLike2] = useState(false)
    const [isLike3, setIsLike3] = useState(false)
    const [isLike4, setIsLike4] = useState(false)
    const [isLike5, setIsLike5] = useState(false)


    const handleClick1 = () => {
        setIsLike1(!isLike1)
    }
    const handleClick2 = () => {
        setIsLike2(!isLike2)
    }
    const handleClick3 = () => {
        setIsLike3(!isLike3)
    }
    const handleClick4 = () => {
        setIsLike4(!isLike4)
    }
    const handleClick5 = () => {
        setIsLike5(!isLike5)
    }
    return (
        <div className="w-full pt-5 h-fit">
            <h3 className={`${monst.className} pb-12 text-center align-middle text-[#222222] text-3xl uppercase`}>@ follow us on Instagram</h3>
            <div className="md:flex flex-wrap">
                <div className="md:w-1/2 lg:w-1/3 xl:flex-1 cursor-pointer relative group overflow-hidden">
                    <Image src={Insta1} alt="Insta1" />
                    <div className="bg-[rgba(0,0,0,0.9)] opacity-0 absolute top-0 left-0 w-full h-full invisible group-hover:visible transition-all duration-[0.4s] group-hover:opacity-100">
                        <div className="pl-10 pt-6 mb-8 w-full flex justify-start items-center leading-7 transform translate-x-[-100px] translate-y-[-100px] transition-all duration-[0.4s] group-hover:translate-x-0 group-hover:translate-y-0">
                            {isLike1 && (
                                <FcLike onClick={() => handleClick1()} className={`${monst.className} pr-2 text-[#e65540] text-2xl `} />
                            )}
                            {!isLike1 && (
                                <PiHeart onClick={() => handleClick1()} className={`${monst.className} pr-2 text-[#adadad] text-2xl`} />
                            )}
                            <span className={`${monst.className} text-[#adadad] text-sm`}>{isLike1 ? "40" : "39" }</span>
                        </div>
                        <div className={`${monst.className} pr-6 pl-10 pb-7 text-[#cccccc] text-[13px] leading-6 transform translate-y-[500px] transition-all duration-[0.4s] group-hover:translate-y-0`}>
                            <p className="mb-3.5">Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 xl:flex-1 cursor-pointer relative group overflow-hidden">
                    <Image src={Insta2} alt="Insta2" />
                    <div className="bg-[rgba(0,0,0,0.9)] opacity-0 absolute top-0 left-0 w-full h-full invisible group-hover:visible transition-all duration-[0.4s] group-hover:opacity-100">
                        <div className="pl-10 pt-6 mb-8 w-full flex justify-start items-center leading-7 transform translate-x-[-100px] translate-y-[-100px] transition-all duration-[0.4s] group-hover:translate-x-0 group-hover:translate-y-0">
                            {isLike2 && (
                                <FcLike onClick={() => handleClick2()} className={`${monst.className} pr-2 text-[#e65540] text-2xl `} />
                            )}
                            {!isLike2 && (
                                <PiHeart onClick={() => handleClick2()} className={`${monst.className} pr-2 text-[#adadad] text-2xl`} />
                            )}
                            <span className={`${monst.className} text-[#adadad] text-sm`}>{isLike2 ? "20" : "19" }</span>
                        </div>
                        <div className={`${monst.className} pr-6 pl-10 pb-7 text-[#cccccc] text-[13px] leading-6 transform translate-y-[500px] transition-all duration-[0.4s] group-hover:translate-y-0`}>
                            <p className="mb-3.5">Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 xl:flex-1 cursor-pointer relative group overflow-hidden">
                    <Image src={Insta3} alt="Insta3" />
                    <div className="bg-[rgba(0,0,0,0.9)] opacity-0 absolute top-0 left-0 w-full h-full invisible group-hover:visible transition-all duration-[0.4s] group-hover:opacity-100">
                        <div className="pl-10 pt-6 mb-8 w-full flex justify-start items-center leading-7 transform translate-x-[-100px] translate-y-[-100px] transition-all duration-[0.4s] group-hover:translate-x-0 group-hover:translate-y-0">
                            {isLike3 && (
                                <FcLike onClick={() => handleClick3()} className={`${monst.className} pr-2 text-[#e65540] text-2xl `} />
                            )}
                            {!isLike3 && (
                                <PiHeart onClick={() => handleClick3()} className={`${monst.className} pr-2 text-[#adadad] text-2xl`} />
                            )}
                            <span className={`${monst.className} text-[#adadad] text-sm`}>{isLike3 ? "53" : "52" }</span>
                        </div>
                        <div className={`${monst.className} pr-6 pl-10 pb-7 text-[#cccccc] text-[13px] leading-6 transform translate-y-[500px] transition-all duration-[0.4s] group-hover:translate-y-0`}>
                            <p className="mb-3.5">Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 xl:flex-1 cursor-pointer relative group overflow-hidden">
                    <Image src={Insta4} alt="Insta4" />
                    <div className="bg-[rgba(0,0,0,0.9)] opacity-0 absolute top-0 left-0 w-full h-full invisible group-hover:visible transition-all duration-[0.4s] group-hover:opacity-100">
                        <div className="pl-10 pt-6 mb-8 w-full flex justify-start items-center leading-7 transform translate-x-[-100px] translate-y-[-100px] transition-all duration-[0.4s] group-hover:translate-x-0 group-hover:translate-y-0">
                            {isLike4 && (
                                <FcLike onClick={() => handleClick4()} className={`${monst.className} pr-2 text-[#e65540] text-2xl `} />
                            )}
                            {!isLike4 && (
                                <PiHeart onClick={() => handleClick4()} className={`${monst.className} pr-2 text-[#adadad] text-2xl`} />
                            )}
                            <span className={`${monst.className} text-[#adadad] text-sm`}>{isLike4 ? "25" : "24" }</span>
                        </div>
                        <div className={`${monst.className} pr-6 pl-10 pb-7 text-[#cccccc] text-[13px] leading-6 transform translate-y-[500px] transition-all duration-[0.4s] group-hover:translate-y-0`}>
                            <p className="mb-3.5">Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 xl:flex-1 cursor-pointer relative group overflow-hidden">
                    <Image src={Insta5} alt="Insta5" />
                    <div className="bg-[rgba(0,0,0,0.9)] opacity-0 absolute top-0 left-0 w-full h-full invisible group-hover:visible transition-all duration-[0.4s] group-hover:opacity-100">
                        <div className="pl-10 pt-6 mb-8 w-full flex justify-start items-center leading-7 transform translate-x-[-100px] translate-y-[-100px] transition-all duration-[0.4s] group-hover:translate-x-0 group-hover:translate-y-0">
                            {isLike5 && (
                                <FcLike onClick={() => handleClick5()} className={`${monst.className} pr-2 text-[#e65540] text-2xl `} />
                            )}
                            {!isLike5 && (
                                <PiHeart onClick={() => handleClick5()} className={`${monst.className} pr-2 text-[#adadad] text-2xl`} />
                            )}
                            <span className={`${monst.className} text-[#adadad] text-sm`}>{isLike5 ? "6" : "5" }</span>
                        </div>
                        <div className={`${monst.className} pr-6 pl-10 pb-7 text-[#cccccc] text-[13px] leading-6 transform translate-y-[500px] transition-all duration-[0.4s] group-hover:translate-y-0`}>
                            <p className="mb-3.5">Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white pt-12 pb-16">
                <div className="md:flex px-4">
                    <div className="flex-1 p-4">
                        <h4 className={`${monst.className} text-[#555555] text-lg leading-6 text-center `}>Free Delivery Worldwide</h4>
                        <Link href="/" className={`${monst.className} text-[#888888] text-[13px] leading-7 text-center transition-all duration-300 hover:text-[#e65540] flex justify-center items-center`}>Click here for more info</Link>
                    </div>
                    <div className="flex-1 p-4 border-t-[1px] border-b-[1px] border-t-[#d9d9d9] border-b-[#d9d9d9] border-r-0 border-l-0 md:border-t-0 md:border-b-0 md:border-l-[1px] md:border-r-[1px] md:border-l-[#d9d9d9] md:border-r-[#d9d9d9]">
                        <h4 className={`${monst.className} text-[#555555] text-lg leading-6 text-center `}>30 Days Return</h4>
                        <Link href="/" className={`${monst.className} text-[#888888] text-[13px] leading-7 text-center transition-all duration-300 hover:text-[#e65540] flex justify-center items-center`}>Simply return it within 30 days for an exchange.</Link>
                    </div>
                    <div className="flex-1 p-4">
                        <h4 className={`${monst.className} text-[#555555] text-lg leading-6 text-center `}>Store Opening</h4>
                        <Link href="/" className={`${monst.className} text-[#888888] text-[13px] leading-7 text-center transition-all duration-300 hover:text-[#e65540] flex justify-center items-center`}>Shop open from Monday to Sunday</Link>
                    </div>


                </div>
            </section>

        </div>
    )
}