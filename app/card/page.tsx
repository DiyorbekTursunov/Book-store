//components
import Footer from "@/components/ui_elements/footer";
import Navbar from "@/components/ui_elements/navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
//images
import plus_icon from '@/components/images/svgs/icons/plus_icon.svg'
import minus_icon from '@/components/images/svgs/icons/minus_icon.svg'
import del_icon from '@/components/images/svgs/icons/del_icon.svg'
import book_2 from '@/components/images/books/book_2.jpg'
import arrow from '@/components/images/svgs/icons/arrow-down-bold 1.svg'


export default function Card() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1440px] mx-auto px-3 mb-16">
                <div className="flex items-center gap-2 mb-12">
                    <Link href={"/"}>Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z" fill="black" fillOpacity="0.6" />
                    </svg>
                    <Link href={"/card"}>card</Link>
                </div>
                <h1 className="text-[40px] font-extrabold uppercase mb-16">My card</h1>
                <div className="flex md:flex-row sm:flex-col max-sm:flex-col gap-[20px]">
                    <div className="border flex flex-col gap-6 md:w-[60%] pt-6 h-full rounded-[20px]">

                        <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-12 justify-between px-6 pb-6 gap-4">
                            <Image src={book_2} alt="book image" className="w-[164px] h-[224px]" />
                            <div className="flex flex-col max-sm:gap-6 justify-between w-full">
                                <div className="flex justify-between max-sm:flex-col  items-center">
                                    <span className="sm:text-[20px] font-semibold">Gradient Graphic T-shirt</span>
                                    <span className="sm:text-[18px] font-bold">300 ming so&apos;m</span>
                                </div>
                                <div className="flex w-full  max-sm:gap-6 items-center justify-between">
                                    <div className="bg-[#F0F0F0] px-[10px] py-2 flex items-center rounded-[62px] gap-[20px]">
                                        <Button variant={"ghost"}>
                                            <Image src={minus_icon} alt="plus icon" />
                                        </Button>
                                        <span>1</span>
                                        <Button variant={"ghost"}>
                                            <Image src={plus_icon} alt="plus icon" />
                                        </Button>
                                    </div>
                                    <Button variant={"ghost"}>
                                        <Image src={del_icon} alt="plus icon" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border px-6 py-[20px] flex md:w-[40%] flex-col h-full rounded-[20px]">
                        <h2 className="text-[24px] font-bold mb-6">Jami Buyurtmalar</h2>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="flex w-full justify-between">
                                <span>Kitoblar narxi</span>
                                <span className="text-[18px] font-bold">300 ming so&apos;m</span>
                            </li>
                            <li className="flex w-full justify-between">
                                <span>Chegirma</span>
                                <span className="text-[18px] font-bold">0</span>
                            </li>
                            <li className="flex w-full justify-between">
                                <span>Yetkazib berish</span>
                                <span className="text-[18px] font-bold">100 ming so&apos;m</span>
                            </li>
                            <hr />
                            <li className="flex w-full justify-between">
                                <span>Jami narx</span>
                                <span className="text-[18px] font-bold">400 ming so&apos;m</span>
                            </li>
                            <Button className="py-6">
                                Go to Checkout
                                <Image src={arrow} alt="arrow"/>
                            </Button>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
