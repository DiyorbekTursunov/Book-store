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
    adminButtonVisible: boolean
    menuIsOpen: boolean
}

export default function Menu({ setmenuIsOpen, adminButtonVisible, menuIsOpen }: MenuProps) {
    const router = useRouter()

    function searchInputHandel() {
        router.push("/search")
    }
    return (
        <div className={`fixed w-full h-screen top-0 right-0 bg-slate-100 z-50 md:hidden py-6 px-3 transition-all duration-500 ${menuIsOpen ? "right-0" : "right-[900px]"}`}>
            <div className="flex justify-between mb-6">
                <Button variant={"ghost"} className="block md:hidden" onClick={() => setmenuIsOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000" /></svg>
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
            {adminButtonVisible && <Button className="mt-6" variant={"ghost"} onClick={() => router.push("/admin")}>
                <span className="text-[16px] font-medium">Adminga o&apos;tish</span>
            </Button>}
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
