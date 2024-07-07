'use client'

import { useEffect, useState } from "react";

import { FaAnglesUp } from "react-icons/fa6";



export default function Button() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    const goTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }
    return (
        <>
            {scrollY > 400 && (

                <div onClick={() => goTop()} className="scroll-smooth w-10 h-10 bg-black opacity-50 fixed bottom-10 right-10 justify-center items-center rounded text-white flex font-normal leading-6 cursor-pointer z-40 transition duration-[0.4s] hover:opacity-100">
                    <FaAnglesUp />
                </div>
            )}
        </>
    )
}