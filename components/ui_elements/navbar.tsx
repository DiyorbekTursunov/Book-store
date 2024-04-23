"use client"
//components
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
//images
import search_icon from "../images/svgs/icons/search_icon.svg"
import bag_icon from '../images/svgs/icons/bag_icon.svg'
import menu_icon from '../images/svgs/icons/menu_icon.svg'
import Menu from "./menu";
import { useState } from "react";

export default function Navbar() {
    const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false)
    const router = useRouter()

    function searchInputHandel() {
        router.push("/search")
    }

    return (
        <nav className="max-w-[1440px] mx-auto flex items-center  transition-all justify-between py-6 px-3">
            {menuIsOpen && <Menu setmenuIsOpen={setmenuIsOpen} />}
            <Button variant={"ghost"} className="block md:hidden" onClick={() => setmenuIsOpen(true)}>
                <Image src={menu_icon} alt="" />
            </Button>
            <Link href={"/"}>
                <span className="lg:text-[37px] md:text-[27px] max-md:text-[27px] uppercase font-semibold">Book Shop</span>
            </Link>
            <ul className="gap-6 hidden font-medium md:flex">
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
            <div className="flex items-center gap-3">
                <form className="relative  hidden  md:flex xl:w-[560px] lg:w-[460px] md:w-[240px]" onSubmit={() => searchInputHandel()}>
                    <button className="absolute h-full flex items-center left-3 z-50"   >
                        <Image src={search_icon} alt="search icon" className="cursor-pointer" />
                    </button>
                    <Input placeholder="kitoblarni qidirish..." id="search_input" className="flex w-full h-[48px] text-[18px] items-center gap-3 bg-[#F0F0F0] rounded-[62px] pl-12" />
                </form>
                <Button variant={"ghost"} onClick={() => router.push("/card")}>
                    <Image src={bag_icon} alt="Bag image" />
                </Button>
                <Button variant={"ghost"} onClick={() => router.push("/admin")}>
                    <span className="text-[16px] font-medium">Adminga o&apos;tish</span>
                </Button>
            </div>
        </nav>
    )
}
