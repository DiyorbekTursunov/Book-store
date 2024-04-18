"use client"
//components
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
//types
import { Dispatch, SetStateAction } from "react";
//images
import menu_icon from '../images/svgs/icons/menu_icon.svg'
import search_icon from "../images/svgs/icons/search_icon.svg"
import bag_icon from '../images/svgs/icons/bag_icon.svg'

interface MenuProps {
    setmenuIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Menu({ setmenuIsOpen }: MenuProps) {
    const router = useRouter()

    function searchInputHandel() {
        router.push("/search")
    }
    return (
        <div className="fixed w-full h-screen top-0 right-0 bg-slate-100 z-50 md:hidden py-6 px-3 ">
            <div className="flex justify-between mb-6">
                <Button variant={"ghost"} className="block md:hidden" onClick={() => setmenuIsOpen(false)}>
                    <Image src={menu_icon} alt="" />
                </Button>
                <Link href={"/"}>
                    <span className="lg:text-[37px] md:text-[27px] max-md:text-[27px] uppercase font-semibold">Book Shop</span>
                </Link>
            </div>
            <div className="w-full  border border-[#000]  rounded-[62px]">
                <form className="relative " onSubmit={() => searchInputHandel()}>
                    <button className="absolute h-full flex items-center left-3 z-50"   >
                        <Image src={search_icon} alt="search icon" className="cursor-pointer" />
                    </button>
                    <Input placeholder="kitoblarni qidirish..." id="search_input" className="flex w-full h-[48px] text-[18px] items-center gap-3 bg-[#F0F0F0] rounded-[62px] pl-12" />
                </form>
            </div>
            <ul className="gap-6 font-medium flex justify-center mt-6">
                <li>
                    <Link href={"/"}>
                        <span>Book Shop</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <span>Book Shop</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <span>Book Shop</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
