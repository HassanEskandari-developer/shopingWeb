
import Link from "next/link"

import { FcCheckmark } from "react-icons/fc";

import { Poppins } from "next/font/google";

const popp = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins", // you can use the 'poppins' variable in your styles or components
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function AddToCartPopUp(pop) {
    

    return (
        <section className={`${pop ? "opa" : ""} bottom-0 left-0 z-50 fixed m-8 p-6 flex justify-center items-center flex-nowrap bg-white shadow-[0_1px_5px_0px_rgba(0,0,0,0.2)] rounded-2xl overflow-hidden`}>
            <div className="w-28 h-28 bg-emerald-50 rounded-full absolute -left-14 -bottom-1 flex justify-end items-center pr-3">
                <FcCheckmark className="text-4xl" />
            </div>
            <div className={`${popp.className} pl-10`}>
                <h2>Thank you for your purchase!</h2>
                <p className="text-[#888888] text-[13px] leading-7">You can see your purchases in the <Link href="/" className="text-[#e65540]">Shopping Cart</Link> .</p>
            </div>
            <div className={`${pop ? "time" : "w-0"}  absolute bottom-0 left-0 bg-green-400 transition duration-500 h-1 rounded-2xl`}></div>

        </section>
    )
}