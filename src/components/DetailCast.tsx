"use client"

import { AiTwotoneSound } from "react-icons/ai";
import { Button } from "@/components/ui/button"
import { FaFire } from "react-icons/fa";
import { BsFire } from "react-icons/bs";

export default function DetailCast() {
    return (
        <div className="flex bg-black text-white justify-between items-center h-11 mx-1 p-2 rounded-4xl">
            <div className="text-xl">
                <AiTwotoneSound />
            </div>
            <div>
                <p className="text-[9px] font-semibold">RECHARGE YOUR ACCOUNT AND GET PERCENT E</p>
                <p className="text-[9px] font-semibold">ADDITIONAL BONUSES ON EVERY RRECHARG</p>
            </div>
            <div className="">
                 <Button variant="secondary" className="rounded-2xl px-9">
                    <BsFire /> Details </Button>
            </div>
        </div>
    )
}



