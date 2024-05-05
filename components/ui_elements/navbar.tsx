"use client"
//components
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
//images
import bag_icon from '../images/svgs/icons/bag_icon.svg'
import menu_icon from '../images/svgs/icons/menu_icon.svg'
import Menu from "./menu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { verifyUser } from "@/app/actions/auth";
import logo from "@/components/images/logo.png"
import { getCategory } from "@/app/actions/productsAction";

interface categoryType {
    id: string,
    title: string
    createdAt: Date
}

interface NavbarType {
    setSelectedCategory?: Dispatch<SetStateAction<string | null>>
    setActiveButtonId?: Dispatch<SetStateAction<string | null>>
}

export default function Navbar({ setSelectedCategory, setActiveButtonId }: NavbarType) {
    const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false)
    const verification_token = typeof window !== 'undefined' ? localStorage.getItem("verification_token") : null;
    const [adminButtonVisible, setAdminButtonVisible] = useState<boolean>(false);
    const [allCategorys, setallCategorys] = useState<categoryType[] | null>(null)
    const router = useRouter()


    useEffect(() => {
        async function verifyUserToken() {
            if (!verification_token) return;
            const new_verification_token = JSON.parse(verification_token)

            const response = await verifyUser(new_verification_token);
            if (response.status === "200" && response.user && response.user.role === "ADMIN") {
                setAdminButtonVisible(true);
            }
        }
        verifyUserToken();
        async function getAllCategory() {
            try {
                const allCategorysData = await getCategory()
                if (allCategorysData && allCategorysData.category) {
                    setallCategorys(allCategorysData.category.slice(0, 4))
                }

            } catch (error) {
                console.log(error);

            }
        }
        getAllCategory()
    }, [verification_token]);

    const handleCategoryClick = (categoryId: string | null) => {
        router.push(`/categorys/${categoryId}`)
    };

    return (
        <nav className="max-w-[1440px] mx-auto flex items-center  transition-all justify-between px-3">
            {<Menu adminButtonVisible={adminButtonVisible} setmenuIsOpen={setmenuIsOpen} menuIsOpen={menuIsOpen} setActiveButtonId={setActiveButtonId} setSelectedCategory={setSelectedCategory} allCategorys={allCategorys} />}
            <Button variant={"ghost"} className="block lg:hidden" onClick={() => setmenuIsOpen(true)}>
                <Image src={menu_icon} alt="" />
            </Button>
            <Link href={"/"} className="">
                <span className="lg:text-[37px] md:text-[27px] max-md:text-[27px] uppercase font-semibold flex items-center">
                    <Image src={logo} alt="site logo" className="w-[100px] max-sm:w-[75px]" />
                    <span className="text-[42px] max-sm:text-[22px] uppercase select-none">books</span>
                </span>
            </Link>
            <div className="flex items-center gap-6">
                <ul className="gap-6 hidden font-medium lg:flex">
                    {allCategorys && allCategorys.map(category => (
                        <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                            <Link href={"#categories"}>
                                <span className="capitalize">{category.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-3">
                    {adminButtonVisible && <Button className="hidden lg:block" onClick={() => router.push("/admin")}>
                        <span className="text-[16px] font-medium">Adminga o&apos;tish</span>
                    </Button>}
                    <Button variant={"ghost"} onClick={() => router.push("/card")}>
                        <Image src={bag_icon} alt="Bag image" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
