"use clinet"
import { useState, useEffect } from "react";


import Show from "../Component/Show.jsx"
import LoadingSpinner from "./Loading.jsx";

import { Poppins } from "next/font/google";
const popp = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins", // you can use the 'poppins' variable in your styles or components
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Product() {
    const [isActive, setIsActive] = useState(1)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [changeData, setChangeData] = useState([])
    const [numProducts, setNumProducts] = useState(4);
    const [buttonLoad, setButtonLoad] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(req => setData(req))
            .catch(setLoading(false))
            .finally(setLoading(false))
    }, [])

    if (loading) {
        return <LoadingSpinner />;
    }

    const loadMore1 = () => {
        setNumProducts(numProducts + 4);
        if (numProducts == (data.length - 4)) {
            setButtonLoad(!buttonLoad)
        }
    }
    const loadMore2 = () =>{
        setNumProducts(numProducts + 4);
        if (numProducts <= changeData.length ) {
            setButtonLoad(!buttonLoad)
        }
    }

    const Filter = (name) => {
        setButtonLoad(true)
        setChangeData([])
        setNumProducts(4)
        data.map((val) => {
            if (val.category == name) {
                setChangeData(changeData => [...changeData, val])
            }
        })
    }
    const Filter2 = () =>{
        setNumProducts(4)
        setButtonLoad(true)
    }


    return (
        <section className="bg-[#fff] pb-36 pt-6 w-full">
            <div className="mx-auto px-3.5 w-full lg:px-36">
                <div className="pb-2.5 ">
                    <h3 className={`${popp.className} text-4xl leading-10 uppercase text-[#222] font-bold`}>Product Overview</h3>
                </div>
                <div className="pb-12">
                    <ul className="my-2.5 flex flex-wrap">
                        <button onClick={() => {setIsActive(1); Filter2()}} className={`${popp.className} ${isActive == 1 ? "text-[#333] border-b border-b-[#797979]" : "text-[#888] border-b border-b-transparent"} text-[15px] leading-5  transition-all duration-[0.4s] mr-8 my-1`} type="button">All Products</button>
                        <button onClick={() => { setIsActive(2); Filter("women's clothing"); }} className={`${popp.className} ${isActive == 2 ? "text-[#333] border-b border-b-[#797979]" : "text-[#888] border-b border-b-transparent"} text-[15px] leading-5  transition-all duration-[0.4s] mr-8 my-1`} type="button">Women</button>
                        <button onClick={() => { setIsActive(3); Filter("men's clothing"); }} className={`${popp.className} ${isActive == 3 ? "text-[#333] border-b border-b-[#797979]" : "text-[#888] border-b border-b-transparent"} text-[15px] leading-5  transition-all duration-[0.4s] mr-8 my-1`} type="button">Men</button>
                        <button onClick={() => { setIsActive(4); Filter("jewelery"); }} className={`${popp.className} ${isActive == 4 ? "text-[#333] border-b border-b-[#797979]" : "text-[#888] border-b border-b-transparent"} text-[15px] leading-5  transition-all duration-[0.4s] mr-8 my-1`} type="button">Jewelery</button>
                        <button onClick={() => { setIsActive(5); Filter("electronics"); }} className={`${popp.className} ${isActive == 5 ? "text-[#333] border-b border-b-[#797979]" : "text-[#888] border-b border-b-transparent"} text-[15px] leading-5  transition-all duration-[0.4s] mr-8 my-1`} type="button">Electronics</button>
                    </ul>
                </div>
            </div>
            <div className="pb-9 px-3.5 lg:px-36 mx-auto">
                {isActive == 1 && (
                    <Show products={data.slice(0, numProducts)} />
                )}
                {isActive != 1 && (
                    <Show products={changeData.slice(0, numProducts)} />
                )}

            </div>
            {buttonLoad && isActive == 1 &&  (
                <div className="w-full flex justify-center items-center pt-11 ">
                    <div onClick={() => loadMore1()} className={`${popp.className} rounded-3xl border border-[#e6e6e6] bg-[#e6e6e6] text-[15px] leading-6 uppercase text-[#222] flex justify-center items-center transition-all duration-[0.4s] px-12 py-2.5 hover:text-[#fff] hover:border-[#e65540] hover:bg-[#e65540] cursor-pointer`}>Load More</div>
                </div>
            )}
            {buttonLoad && isActive != 1 && numProducts != changeData.length && (
                <div className="w-full flex justify-center items-center pt-11 ">
                    <div onClick={() => loadMore2()} className={`${popp.className} rounded-3xl border border-[#e6e6e6] bg-[#e6e6e6] text-[15px] leading-6 uppercase text-[#222] flex justify-center items-center transition-all duration-[0.4s] px-12 py-2.5 hover:text-[#fff] hover:border-[#e65540] hover:bg-[#e65540] cursor-pointer`}>Load More</div>
                </div>
            )}

        </section>
    )
}