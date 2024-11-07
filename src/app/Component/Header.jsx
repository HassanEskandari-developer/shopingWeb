'use client'

import { useEffect, useState } from "react";
import { useCart } from './CartContext';
import Link from "next/link"
import Image from "next/image";

import AddToCart from "./AddToCart";

import Logo from "../../../public/logo.png"
import Profile from "../../../public/icon-header-01.png"
import CartLogo from "../../../public/icon-header-02.png"

import { FaFacebookF, FaPinterestP, FaSnapchatGhost, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiList } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";


import { Montserrat } from "next/font/google";
const monst = Montserrat({ subsets: ["latin"] });


export default function Header() {
    const { cartItems } = useCart();
    const [scrollY, setScrollY] = useState(0)
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPro, setIsOpenPro] = useState(false)
    const [isOpenCart, setIsOpenCart] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsOpen(false)
            setIsOpenPro(false)
        }
        handleScroll()
        const handleOutSideClick = () => {
            setIsOpen(false)
            setIsOpenPro(false)
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [])

    useEffect(() => {
        if (isOpenCart) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenCart]);

    const updateSharedState = (newState) => {
        setIsOpenCart(newState);
    };


    return (
        <header className="w-full h-fit lg:h-[120px] transition duration-300">
            <div className="w-full lg:fixed top-0 left-0 z-40 transition-all duration-300">
                {scrollY < 110 && (
                    <div className="h-10 bg-[#f5f5f5] justify-center items-center gap-4 hidden lg:flex transition-all duration-300">
                        <div className="h-full flex-1 flex pl-5 items-center">
                            <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaFacebookF />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaInstagram />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaPinterestP />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaSnapchatGhost />
                            </Link>
                            <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                                <FaYoutube />
                            </Link>
                        </div>
                        <div className="h-full flex-1 flex justify-center items-center">
                            <span className={`${monst.className} text-[#888888] text-[13px] leading-7`}>DeveLoped by Hassan Eskandari</span>
                        </div>
                        <div className="h-full flex-1 flex justify-end items-center pr-12">
                            <Link href="mailto:fashe@gmail.com" className={`${monst.className} text-[#888888] text-[13px] leading-7`}>Hassan.eskandari.sky@gmail.com</Link>
                        </div>
                    </div>
                )}
                <div className={`${scrollY > 110 ? "h-14" : "h-20"} w-full flex justify-center items-center gap-2 bg-[#222222] transition duration-300 shadow-[0_1px_5px_0px_rgba(0,0,0,0.2)]`}>
                    <div className="h-full w-1/2 lg:w-1/4 flex pl-5 lg:pl-10 py-2.5 items-center justify-start">
                        <Link href="/">
                            <Image src={Logo} width={100} height={100} alt="Logo Page(Fashe)"></Image>
                        </Link>
                    </div>
                    <div className="h-full w-2/4 lg:flex justify-center items-center hidden ">
                        <nav className="w-full h-full flex justify-center items-center">
                            <ul className="w-3/4 h-full flex justify-center items-center lg:gap-1">
                                <li className="flex-1 h-full flex justify-center items-center group lg:px-1 xl:px-0">
                                    <Link href="/" className={`${monst.className} text-[#FFFFFF] text-[15px] group-hover:border-b-[1px] group-hover:border-b-[#333333] transition-all duration-400`}>Home</Link>
                                </li>
                                <li className="flex-1 h-full flex justify-center items-center group lg:px-1 xl:px-0">
                                    <Link href="/" className={`${monst.className} text-[#FFFFFF] text-[15px] group-hover:border-b-[1px] group-hover:border-b-[#333333] transition-all duration-400`}>Shop</Link>
                                </li>
                                <li className="flex-1 h-full flex justify-center items-center group lg:px-1 xl:px-0">
                                    <Link href="/" className={`${monst.className} text-[#e65540] text-[15px] group-hover:border-b-[1px] group-hover:border-b-[#333333] transition-all duration-400`}>Sale</Link>
                                </li>
                                <li className="flex-1 h-full flex justify-center items-center group lg:px-1 xl:px-0">
                                    <Link href="/" className={`${monst.className} text-[#FFFFFF] text-[15px] group-hover:border-b-[1px] group-hover:border-b-[#333333] transition-all duration-400`}>Favorites</Link>
                                </li>
                                <li className="flex-1 h-full flex justify-center items-center group lg:px-1 xl:px-0">
                                    <Link href="/" className={`${monst.className} text-[#FFFFFF] text-[15px] group-hover:border-b-[1px] group-hover:border-b-[#333333] transition-all duration-400`}>Blog</Link>
                                </li>
                                <li className="flex-1 h-full flex justify-center items-center group lg:px-1 xl:px-0">
                                    <Link href="/" className={`${monst.className} text-[#FFFFFF] text-[15px] group-hover:border-b-[1px] group-hover:border-b-[#333333] transition-all duration-400`}>About</Link>
                                </li>
                                <li className="flex-1 h-full flex justify-center items-center group lg:px-1 xl:px-0">
                                    <Link href="/" className={`${monst.className} text-[#FFFFFF] text-[15px] group-hover:border-b-[1px] group-hover:border-b-[#333333] transition-all duration-400`}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="h-full w-1/2 lg:w-1/4 flex justify-end items-center pr-3 lg:pr-12 z-50">
                        <div onClick={() => setIsOpenPro(!isOpenPro)} className="flex justify-center items-center cursor-pointer mx-3 lg:mx-0 relative">
                            <Image src={Profile} width={30} height={30} alt="Logo Profile" ></Image>
                            {isOpenPro && (
                                <div className="w-40 absolute right-0 bottom-0 bg-[#f5f5f5] transform translate-x-[-15px] translate-y-[125px] rounded">
                                    <ul>
                                        <li className="px-4 pr-6 py-2 flex justify-start items-center border-b-[1px] border-b-[#929292]">
                                            <Link href="/" className="text-[#333333]">Login</Link></li>
                                        <li className="px-4 pr-6 py-2 flex justify-start items-center border-b-[1px] border-b-[#929292]">
                                            <Link href="/" className="text-[#333333]">Sign in</Link></li>
                                        <li className="px-4 pr-6 py-2 flex justify-start items-center">
                                            <Link href="/" className="text-[#333333]">Profile Setting</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <span className="hidden lg:flex justify-center items-center text-[#e5e5e5] mx-5 mt-1">|</span>
                        <div onClick={() => setIsOpenCart(true)} className="flex justify-center items-center cursor-pointer mx-3 lg:mx-0 relative group">
                            <Image src={CartLogo} width={25} height={25} alt="Logo Shopping Cart"></Image>
                            <div className="absolute w-5 h-5 rounded-full  bg-[#000000d6] right-0 top-0 transform translate-x-[5px] translate-y-[-5px] text-white flex justify-center items-center text-sm p-1 group-hover:bg-[#e65540] group-hover:text-black transition duration-300">{cartItems.length}</div>
                        </div>
                        {isOpenCart && (
                            <AddToCart state={isOpenCart} updateState={updateSharedState} />
                        )}
                        <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex justify-center items-center cursor-pointer">
                            {isOpen && (
                                <IoCloseOutline className="text-[#000] text-4xl" />
                            )}
                            {!isOpen && (
                                <PiList className="text-[#000] text-4xl" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "max-h-fit" : "max-h-0 hidden"} w-full lg:hidden transition-all duration-1000 ease-in-ou`}>
                <div className="w-full h-fit bg-[#f5f5f5] px-4 border-t-[1px] border-t-[#ececec]">
                    <div className="w-full border-b-[1px] border-b-[#ececec] flex justify-start items-center">
                        <span className={`${monst.className} text-[#888888] text-[13px] leading-7`}>Free DeveLoped by Hassan Eskandari</span>
                    </div>
                    <div className="w-full border-b-[1px] border-b-[#ececec] flex justify-start items-center">
                        <Link href="mailto:fashe@gmail.com" className={`${monst.className} text-[#888888] text-[13px] leading-7`}>Hassan.eskandari.sky@gmail.com</Link>
                    </div>
                    <div className="w-full border-b-[1px] border-b-[#ececec] flex justify-start items-center">
                        <Link href="/" className="h-full flex justify-center items-center pl-0 p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                            <FaFacebookF />
                        </Link>
                        <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                            <FaInstagram />
                        </Link>
                        <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                            <FaPinterestP />
                        </Link>
                        <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                            <FaSnapchatGhost />
                        </Link>
                        <Link href="/" className="h-full flex justify-center items-center p-2.5 text-[#888888] text-lg hover:text-[#e65540]">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
                <div className="w-full h-fit bg-white lg:hidden">
                    <nav className="w-full">
                        <ul className="w-full">
                            <li className="px-4 py-2">
                                <Link href="/" className={`${monst.className} text-[#333333] text-[15px]`}>Home</Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/" className={`${monst.className} text-[#333333] text-[15px]`}>Shop</Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/" className={`${monst.className} text-[#e65540] text-[15px]`}>Sale</Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/" className={`${monst.className} text-[#333333] text-[15px]`}>Features</Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/" className={`${monst.className} text-[#333333] text-[15px]`}>Blog</Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/" className={`${monst.className} text-[#333333] text-[15px]`}>About</Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/" className={`${monst.className} text-[#333333] text-[15px]`}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}