'use client'

import Link from "next/link"
import Image from "next/image";

import f1 from "../../../public/r1.jpg"
import f2 from "../../../public/r2.jpg"
import f3 from "../../../public/r3.jpg"
import f4 from "../../../public/r5.jpg"
import f5 from "../../../public/r7.jpg"
import f6 from "../../../public/r8.jpg"
import Hassan from "../../../public/hassan.jpg"

import { FaFacebookF, FaPinterestP, FaSnapchatGhost, FaYoutube , FaPhone } from "react-icons/fa";
import { FaInstagram, FaLocationArrow } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

import { Montserrat } from "next/font/google";
const monst = Montserrat({ subsets: ["latin"] });

export default function Footer() {
    return (
        <footer className="w-full h-fit bg-[#222222] p-11 overflow-x-hidden">
            <div className="w-full flex flex-wrap lg:flex-nowrap pb-26">
                <div className="px-4 pt-7">
                    <h4 className={`${monst.className} text-[#FFFFFF] text-[15px] leading-normal pb-7 uppercase`}>GET IN TOUCH</h4>
                    <div>
                        <p className="max-w-[482px] text-[#555555] text-[13px]">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        {/* <Image src={Hassan} width={100} height={100}></Image> */}
                        <div className="flex justify-start items-center pt-7">
                            <Link href="/" className="h-full flex justify-center items-center pl-0 p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaFacebookF />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center pl-0 p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaInstagram />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center pl-0 p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaPinterestP />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center pl-0 p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaSnapchatGhost />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center pl-0 p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-7 px-4 flex flex-wrap lg:flex-nowrap ">
                    <div className="md:mx-20 pb-12 pr-5 md:pr-0 md:pb-0">
                        <h4 className={`${monst.className} text-[#FFFFFF] text-[15px] leading-normal pb-7 uppercase text-nowrap`}>Quick Links</h4>
                        <ul>
                            <li className="pr-4">
                                <Link href="/" className={`${monst.className} text-[#555555] text-[13px] leading-7 hover:text-[#e65540] transition-all duration-300`}>Home</Link>
                            </li>
                            <li className="pr-4">
                                <Link href="/" className={`${monst.className} text-[#555555] text-[13px] leading-7 hover:text-[#e65540] transition-all duration-300`}>Shop</Link>
                            </li>
                            <li className="pr-4">
                                <Link href="/" className={`${monst.className} text-[#555555] text-[13px] leading-7 hover:text-[#e65540] transition-all duration-300`}>Sale</Link>
                            </li>
                            <li className="pr-4">
                                <Link href="/" className={`${monst.className} text-[#555555] text-[13px] leading-7 hover:text-[#e65540] transition-all duration-300`}>Features</Link>
                            </li>
                            <li className="pr-4">
                                <Link href="/" className={`${monst.className} text-[#555555] text-[13px] leading-7 hover:text-[#e65540] transition-all duration-300`}>Blog</Link>
                            </li>
                            <li className="pr-4">
                                <Link href="/" className={`${monst.className} text-[#555555] text-[13px] leading-7 hover:text-[#e65540] transition-all duration-300`}>About</Link>
                            </li>
                            <li className="pr-4">
                                <Link href="/" className={`${monst.className} text-[#555555] text-[13px] leading-7 hover:text-[#e65540] transition-all duration-300`}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:mx-20 md:mt-0">
                        <h4 className={`${monst.className} text-[#FFFFFF] text-[15px] leading-normal pb-7 uppercase`}>Gallery</h4>
                        <div className="grid grid-cols-2 grid-rows-3 gap-1">
                            <div>
                                <Image src={f1} width={100} height={100}></Image>
                            </div>
                            <div>
                                <Image src={f2} width={100} height={100}></Image>
                            </div>
                            <div>
                                <Image src={f3} width={100} height={100}></Image>
                            </div>
                            <div>
                                <Image src={f4} width={100} height={100}></Image>
                            </div>
                            <div>
                                <Image src={f5} width={100} height={100}></Image>
                            </div>
                            <div>
                                <Image src={f6} width={100} height={100}></Image>
                            </div>
                        </div>
                    </div>
                    <div className="md:mx-20 mt-12 md:mt-0">
                        <h4 className={`${monst.className} text-[#FFFFFF] text-[15px] leading-normal pb-7 uppercase`}>Contact Us</h4>
                        <div>
                            <div className="flex justify-start items-center flex-wrap">
                                <span className="w-7 h-7 rounded-full bg-[#e65540] text-[#ffffff] text-center flex justify-center items-center mr-2.5">
                                    <FaLocationArrow />
                                </span>
                                <p className={`${monst.className} text-[#555555] text-[13px] leading-7`}>Head Office</p>
                                <p className={`${monst.className} text-[#007BFF] text-[13px] leading-7 pl-10`}>123, Main Street, Your City</p>
                            </div>
                            <div className="flex justify-start items-center flex-wrap">
                                <span className="w-7 h-7 rounded-full bg-[#e65540] text-[#ffffff] text-center flex justify-center items-center mr-2.5">
                                    <FaPhone />
                                </span>
                                <p className={`${monst.className} text-[#555555] text-[13px] leading-7`}>Phone Number</p>
                                <p className={`${monst.className} text-[#007BFF] text-[13px] leading-7 pl-10`}>+989396821022 <br /> +989396821022</p>
                            </div>
                            <div className="flex justify-start items-center flex-wrap">
                                <span className="w-7 h-7 rounded-full bg-[#e65540] text-[#ffffff] text-center flex justify-center items-center mr-2.5">
                                    <AiOutlineMail />
                                </span>
                                <p className={`${monst.className} text-[#555555] text-[13px] leading-7`}>Email</p>
                                <p className={`${monst.className} text-[#007BFF] text-[13px] leading-7 pl-10`}>hassan.eskandari.sky@gmail.com <br/> hassan.eskandari.sky@gmail.com </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}