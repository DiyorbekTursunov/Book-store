"use client"
import { allCategorys } from "@/types/admin";
//components
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
//types
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
//images
import logo from "@/components/images/logo.png"


interface MenuProps {
    setmenuIsOpen: Dispatch<SetStateAction<boolean>>
    adminButtonVisible: boolean
    menuIsOpen: boolean
    setSelectedCategory?: Dispatch<SetStateAction<string | null>>
    setActiveButtonId?: Dispatch<SetStateAction<string | null>>
    allCategorys: allCategorys[] | null
}

export default function Menu({ setmenuIsOpen, adminButtonVisible, menuIsOpen, setSelectedCategory, setActiveButtonId, allCategorys }: MenuProps) {
    const router = useRouter()

    const handleCategoryClick = (categoryId: string | null) => {
        router.push(`/categorys/${categoryId}`)
        setmenuIsOpen(false)
    };

    return (
        <div className={`fixed w-full h-screen top-0 right-0 bg-slate-100 z-50 lg:hidden py-6 px-3 transition-all duration-500 ${menuIsOpen ? "right-0" : "right-[1200px]"}`}>
            <div className="flex justify-between mb-6">
                <Button variant={"ghost"} onClick={() => setmenuIsOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000" /></svg>
                </Button>
                <Link href={"/"} onClick={() => setmenuIsOpen(false)}>
                    <span className="lg:text-[37px] md:text-[27px] max-md:text-[27px] uppercase font-semibold flex items-center">
                        <Image src={logo} alt="site logo" className="w-[100px] max-sm:w-[75px]" />
                        <span className="text-[42px] max-sm:text-[22px] uppercase select-none">books</span>
                    </span>
                </Link>
            </div>
            <ul className="gap-6 font-medium flex justify-center flex-wrap items-center mt-6">
                {allCategorys && allCategorys.map(category => (
                    <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                        <Link href={"#categories"}>
                            <span className="capitalize">{category.title}</span>
                        </Link>
                    </li>
                ))}
                {adminButtonVisible && <Button onClick={() => router.push("/admin")}>
                    <span className="text-[16px] font-medium">Adminga o&apos;tish</span>
                </Button>}
            </ul>
        </div>
    )
}
