"use clinet"
import React, { useEffect, useState} from 'react';
import { getProducts, setProducts } from './localStorageUtils';
import { addToCart  } from './localStorageAddToCart';
import Image from "next/image";
import Link from "next/link";
import AddLikePopUp from './AddLikePopUp';
import AddToCartPopUp from './AddToCartPopUp';

import { PiHeart } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
const monst = Montserrat({ subsets: ["latin-ext"] });
const popp = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Show({ products }) {
    const [likedProducts, setLikedProductsState] = useState([]);
    const [quick, setQuick] = useState(null)
    const [pop, setPop] = useState(false)
    const [addPop , setAddPop] = useState(false)
    const [view, setView] = useState(false)
    let localStorageKey = 'likedProducts';


    const savedLikes = getProducts("likedProducts");
    useEffect(() => {
        setLikedProductsState(savedLikes);
    }, []);


    useEffect(() => {
        setProducts("likedProducts", likedProducts?.length || likedProducts)
    }, [likedProducts]);

    useEffect(() => {
        if (view) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }, [view]);


    const handleLikeClick = (productId) => {
        setPop(true)
        setTimeout(() => {
            setPop(false)
        }, 4000);
        localStorageKey = 'likedProducts';
        setLikedProductsState((prevLikedProducts) => {
            const updatedLikes = {
                ...prevLikedProducts,
                [productId]: !prevLikedProducts[productId],
            };
            setProducts(localStorageKey, updatedLikes);
            return updatedLikes;
        })
        return clearTimeout()
    };

    const handleAddCart = (item) =>{
        setAddPop(!addPop)
        setTimeout(() => {
            setAddPop(false)
        }, 4000);
        addToCart(item);
    }

    const handleViewClick = (id) => {
        setQuick(id)
        setView(!view)
        
    }
    return (
        <div className="w-full md:flex md:flex-wrap md:gap-16 lg:gap-7">
            {products.map((val) => {
                return (
                    <div className="w-full md:w-[23%] mb-4 relative" key={val.id}>
                        <div className="h-[85%] flex justify-center items-center">
                            <Image src={val.image} width={500} height={500} alt="product" className="object-cover" />
                        </div>
                        <div className="absolute bottom-20 md:bottom-16 lg:bottom-20 right-3 flex flex-nowrap overflow-hidden gap-2 p-2">
                            <div onClick={() => handleAddCart(val)} className="w-9 h-9 bg-[#fff] shadow-[0_1px_5px_0px_rgba(0,0,0,0.2)] rounded-full text-lg text-[#000] hover:px-4 hover:w-fit flex justify-center items-center flex-nowrap transition-all duration-[0.4s] group cursor-pointer">
                                <CiShoppingCart />
                                <span className="font-bold uppercase hidden group-hover:flex transition-all duration-[0.4s] text-xs pl-2 addCart">Add To Cart</span>
                            </div>
                            <div onClick={() => handleViewClick(val.id)} className="w-9 h-9 bg-[#fff] shadow-[0_1px_5px_0px_rgba(0,0,0,0.2)] rounded-full text-lg text-[#000] hover:px-4 hover:w-fit flex justify-center items-center flex-nowrap transition-all duration-[0.4s] group cursor-pointer">
                                <FaRegEye />
                                <span className="font-bold uppercase hidden group-hover:flex transition-all duration-[0.4s] text-xs pl-2 addCart">Quick View</span>
                            </div>
                        </div>
                        <div className="h-[15%] pt-3.5 flex flex-nowrap px-1">
                            <div className="h-full w-[80%]">
                                <Link href="/" className={`${popp.className} text-sm text-[#999] transition-all duration-[0.4s] hover:text-[#e65540] pb-1.5 block`}>{val.title}</Link>
                                <span className={`${popp.className} text-sm tracking-wider text-[#666] block`}>${val.price}</span>
                            </div>
                            <div className="h-full w-[20%] flex justify-end items-start">
                                {likedProducts[val.id] ? (
                                    <FcLike onClick={() => handleLikeClick(val.id)} className={`${monst.className} pr-2 text-[#e65540] text-2xl cursor-pointer transition-all duration-[0.4s] hover:scale-125`} />

                                ) : (
                                    <PiHeart onClick={() => handleLikeClick(val.id)} className={`${monst.className} pr-2 text-[#adadad] text-2xl cursor-pointer transition-all duration-[0.4s] hover:scale-125`} />
                                )}


                            </div>
                        </div>
                    </div>
                )
            })}
            {pop ? <AddLikePopUp prop={pop} /> : null}
            {addPop ? <AddToCartPopUp/> : null}
            {view && (
                <section className="w-full h-[100vh] py-24 bg-[#000000dd] fixed top-0 left-0 z-40 flex justify-center items-center overflow-y-auto">
                    {products.map((val) => {
                        if (val.id == quick) {
                            return (
                                <div className={`${view ? "open" : ""} w-full my-auto m-5 lg:w-1/2 md:h-fit p-10 bg-white flex flex-wrap md:flex-nowrap justify-center items-center rounded-md relative`}>
                                    <div className="absolute -top-14 text-white hover:text-[#e65540] right-0 transition duration-300 text-5xl"><IoCloseCircleOutline className={`cursor-pointer`} onClick={() => setView(!view)} /></div>
                                    <div className="h-full mr-10 flex justify-center items-center">
                                        <Image src={val.image} width={1000} height={1000} alt="product" className="object-cover" />
                                    </div>
                                    <div>
                                        <div className={`${monst.className} px-2 mb-2 bg-[#e65540] inline-block rounded-3xl text-white`}>rate: {val.rating.rate}</div>
                                        <h3 className={`${popp.className} text-black font-bold text-xl mb-2 `}>{val.title}</h3>
                                        <p className={`${popp.className} text-[#686868] text-sm text-justify mb-2`}>{val.description}</p>
                                        <h2 className={`${monst.className} text-black font-extrabold text-4xl mb-8`}>${val.price}</h2>
                                        <div className="md:flex gap-2 ">
                                            <button onClick={() => handleAddCart(val)} className="w-full md:w-auto my-2 md:m-0 border border-[#cdcdcd] text-[#333] p-2 transition duration-300 hover:border-0 hover:text-[#e65540] hover:bg-[#e6e6e6] rounded-md flex-1 flex justify-center items-center text-nowrap"><CiShoppingCart className="mr-1 text-xl" />Add to Cart</button>
                                            <button onClick={() => handleLikeClick(val.id)} className="w-full md:w-auto my-2 md:m-0 border border-[#cdcdcd] text-[#333] p-2 transition duration-300 hover:border-0 hover:text-[#e65540] hover:bg-[#e6e6e6] rounded-md flex-1 flex justify-center items-center text-nowrap">{likedProducts[val.id] ? <FcLike className="mr-1 text-xl" /> : <PiHeart className="mr-1 text-xl" />}{likedProducts[val.id] ? "Added to favorites" : "Add to favorites"}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </section>
            )}

        </div>
    )
}