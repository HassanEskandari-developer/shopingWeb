
import Image from "next/image";
import Link from "next/link";

import S1 from "../../../public/slide-01.jpg"
import S2 from "../../../public/slide-02.jpg"
import S3 from "../../../public/slide-03.jpg"

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { Poppins, Playfair_Display, Montserrat } from "next/font/google";

const popp = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins", // you can use the 'poppins' variable in your styles or components
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const play = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair-display"
})
const monst = Montserrat({ subsets: ["latin"] });

export default function App() {
    const year = new Date()
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
    };

    return (
        <>
            <Swiper on={{ slideChange: handleSlideChange }} navigation={{ enabled: true, disabledClass: 'hover:bg-red-500' }} effect={'fade'} loop={true} rewind={true} modules={[Navigation, Autoplay, EffectFade]} breakpointsBase={"window"} autoplay={{ delay: 5000, disableOnInteraction: false, }} className="mySwiper w-full !h-[85vh]">
                <SwiperSlide className='text-center flex justify-center items-center relative'>
                    <div className="absolute top-0 left-0 w-full h-full px-4 flex items-center justify-start">
                        <div className="py-[50px] px-[50px] lg:px-[150px] w-full h-fit flex justify-start flex-wrap">
                            <span className={`${popp.className} text-lg text-nowrap md:text-3xl leading-5 text-[#333] w-full text-start slider11`}>Women Collection {year.getFullYear()} </span>
                            <h2 className={`${play.className} w-full text-start text-4xl md:text-6xl leading-10 uppercase text-[#333] pb-11 pt-9 slider12 font-bold`}>NEW SEASON</h2>
                            <div className="w-[161px] slider13">
                                <Link href="/" className={`${monst.className} rounded-3xl w-full h-[46px] text-base leading-6 uppercase text-[#111111] bg-white flex justify-center items-center hover:bg-[#e65540] hover:text-white cursor-pointer transition-all duration-[0.4s] shadow-[0_1px_5px_0px_rgba(0,0,0,0.2)]`}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <Image src={S1} alt="Slider1" className="w-full h-full object-cover" />
                </SwiperSlide>

                <SwiperSlide className='text-center flex justify-center items-center relative'>
                    <div className="absolute top-0 left-0 w-full h-full px-4 flex items-center justify-start">
                        <div className="py-[50px] px-[50px] lg:px-[150px] w-full h-fit flex justify-start flex-wrap">
                            <span className={`${popp.className} text-lg text-nowrap md:text-3xl leading-5 text-[#333] w-full text-start slider21`}>New Trend</span>
                            <h2 className={`${play.className} w-full text-start text-4xl md:text-6xl leading-10 uppercase text-[#333] pb-11 pt-9 slider22 font-bold`}>Accessories</h2>
                            <div className="w-[161px] slider23">
                                <Link href="/" className={`${monst.className} rounded-3xl w-full h-[46px] text-base leading-6 uppercase text-[#111111] bg-white flex justify-center items-center hover:bg-[#e65540] hover:text-white cursor-pointer transition-all duration-[0.4s] shadow-[0_1px_5px_0px_rgba(0,0,0,0.2)]`}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <Image src={S2} alt="Slider2" className="w-full h-full object-cover" />
                </SwiperSlide>

                <SwiperSlide className='text-center flex justify-center items-center relative'>
                    <div className="absolute top-0 left-0 w-full h-full px-4 flex items-center justify-start">
                        <div className="py-[50px] px-[50px] lg:px-[150px] w-full h-fit flex justify-start flex-wrap">
                            <span className={`${popp.className} text-lg text-nowrap md:text-3xl leading-5 text-[#333] w-full text-start slider31`}>Men Collection {year.getFullYear()}</span>
                            <h2 className={`${play.className} w-full text-start text-4xl md:text-6xl leading-10 uppercase text-[#333] pb-11 pt-9 slider32 font-bold`}>New arrivals</h2>
                            <div className="w-[161px] slider33">
                                <Link href="/" className={`${monst.className} rounded-3xl w-full h-[46px] text-base leading-6 uppercase text-[#111111] bg-white flex justify-center items-center hover:bg-[#e65540] hover:text-white cursor-pointer transition-all duration-[0.4s] shadow-[0_1px_5px_0px_rgba(0,0,0,0.2)]`}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <Image src={S3} alt="Slider3" className="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
