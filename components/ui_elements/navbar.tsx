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
import { useEffect, useState } from "react";
import { verifyUser } from "@/app/actions/auth";
import logo from "@/components/images/logo.jpg"

export default function Navbar() {
    const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false)
    const verification_token = typeof window !== 'undefined' ? localStorage.getItem("verification_token") : null;
    const [adminButtonVisible, setAdminButtonVisible] = useState<boolean>(false);
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
    }, [verification_token]);

    return (
        <nav className="max-w-[1440px] mx-auto flex items-center  transition-all justify-between py-6 px-3">
            {<Menu adminButtonVisible={adminButtonVisible} setmenuIsOpen={setmenuIsOpen} menuIsOpen={menuIsOpen} />}
            <div className="flex items-center gap-6">
                <Button variant={"ghost"} className="block md:hidden" onClick={() => setmenuIsOpen(true)}>
                    <Image src={menu_icon} alt="" />
                </Button>
                <Link href={"/"}>
                    <span className="lg:text-[37px] md:text-[27px] max-md:text-[27px] uppercase font-semibold">
                        <Image src={logo} alt="site logo" className="w-[100px]" />
                    </span>
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
            </div>
            <div className="flex items-center gap-3">
                {adminButtonVisible && <Button className="hidden sm:block" variant={"ghost"} onClick={() => router.push("/admin")}>
                    <span className="text-[16px] font-medium">Adminga o&apos;tish</span>
                </Button>}
                <Button variant={"ghost"} onClick={() => router.push("/card")}>
                    <Image src={bag_icon} alt="Bag image" />
                </Button>
            </div>
        </nav>
    )
}
