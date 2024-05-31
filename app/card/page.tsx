"use client"
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
import arrow from '@/components/images/svgs/icons/arrow-down-bold 1.svg'
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getBookById } from "../actions/productsAction";



type BookData = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
    categoryId: string;
    categoryName: string;
    createdAt: Date;
};

type BookWithCount = {
    count: number | null;
    data: BookData;
};





export default function Card() {
    const [books, setbooks] = useState<BookWithCount[] | null>(null);
    const [dataIsNotFound, setdataIsNotFound] = useState(false)
    const [isLoading, setisLoading] = useState(false);
    const [localStorageData, setlocalStorageData] = useState<null | string>(null)
    const router = useRouter()

    useEffect(() => {
        setdataIsNotFound(true)
        async function getBookData() {
            setisLoading(true)
            if (typeof window !== 'undefined') {
                const booksData = localStorage.getItem("products-hash");
                setlocalStorageData(booksData)

                if (!booksData?.length) {
                    setbooks(null)
                    setisLoading(false)
                    return
                }

                const data = JSON.parse(booksData)


                const allBookData = await getBookById(data)

                if (allBookData.status === "200" && allBookData.bookDetails) {
                    setbooks(allBookData.bookDetails as BookWithCount[]);
                    setdataIsNotFound(false)
                }
            }
            setisLoading(false)
            setdataIsNotFound(false)
        }
        getBookData()
    }, [])




    const handleIncrement = (id: string | undefined) => {
        if (id && books) {
            const updatedBooks = books.map(book => {
                if (book.data.id === id) {
                    const newCount = (book.count || 0) + 1;
                    return { ...book, count: newCount >= 10 ? 10 : newCount };
                }
                return book;
            });
            setbooks(updatedBooks);
            updateLocalStorage(updatedBooks);
        }
    };

    const handleDecrement = (id: string | undefined) => {
        if (id && books) {
            const updatedBooks = books.map(book => {
                if (book.data.id === id && book.count && book.count > 1) {
                    return { ...book, count: book.count - 1 };
                }
                return book;
            });
            setbooks(updatedBooks);
            updateLocalStorage(updatedBooks);
        }
    };


    const updateLocalStorage = (updatedBooks: BookWithCount[]) => {
        const simplifiedBooks = updatedBooks.map(book => ({
            count: book.count || 0,
            data: book.data.id
        }));
        localStorage.setItem("products-hash", JSON.stringify(simplifiedBooks));
    };



    const calculateTotal = () => {
        if (!books || books.length === 0) {
            return {
                totalPrice: 0,
                discount: 0,
                deliveryCost: 100000, // Assuming delivery cost is 100000 ming so&apos;m
                finalPrice: 100000 // Assuming delivery cost is included in the final price
            };
        }

        let totalPrice = 0;

        // Calculate total price
        books.forEach(book => {
            const bookPrice = parseFloat(book.data.price.replace(/\D/g, ''));
            totalPrice += bookPrice * (book.count || 0);
        });

        // Calculate discount (assuming no discount for now)
        const discount = 0;

        // Calculate final price
        const deliveryCost = 100000; // Assuming delivery cost is 100000 ming so&apos;m
        const finalPrice = totalPrice + deliveryCost - discount;

        return {
            totalPrice,
            discount,
            deliveryCost,
            finalPrice
        };
    };



    const handleDelete = async (book_id: string) => {
        if (books?.length) {
            const undeletedBooks = books.filter((book: any) => book.data !== book_id);
            console.log(undeletedBooks);

            setbooks(undeletedBooks)

            const forLocalStorage = undeletedBooks.map((book: any) => ({
                count: 1,
                data: book.data.id
            }));

            localStorage.removeItem("products-hash");
            localStorage.setItem("products-hash", JSON.stringify(forLocalStorage));

            if (!undeletedBooks.length) {
                router.push('/');
            }
        }
    }


    const { totalPrice, discount, deliveryCost, finalPrice } = calculateTotal();


    return (
        <>
            <Navbar />
            <main className="max-w-[1440px] sm:min-h-[85vh] mx-auto px-3 mb-16">
                <div className="flex items-center gap-2 mb-12">
                    <Link href={"/"}>Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z" fill="black" fillOpacity="0.6" />
                    </svg>
                    <Link href={"/card"}>card</Link>
                </div>
                <h1 className="text-[40px] font-extrabold uppercase mb-16">My card</h1>
                {books?.length && <div className="flex lg:flex-row flex-col  gap-[20px]">
                    <div className="border flex flex-col gap-6 pt-6 h-full rounded-[20px]">

                        {!isLoading ?
                            <>
                                {books && books.map((book: any) => {
                                    if (book.data === null || book.count === null && typeof window !== 'undefined') {
                                        localStorage.removeItem("products-hash")
                                        setdataIsNotFound(true)
                                        return null
                                    }
                                    return (
                                        book.data && <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-12 justify-between px-6 pb-6 gap-4" key={book.data.id}>
                                            <Image src={book.data.imageUrl} alt="book image" width={294} height={270} className="scale-[.8]" />
                                            <div className="flex flex-col max-sm:gap-6 justify-between w-full">
                                                <div className="flex justify-between flex-col">
                                                    <span className="sm:text-[20px] font-semibold mb-3">{book.data.name.split(`"`)}...</span>
                                                    <span className="sm:text-[18px] font-bold">{book.data.price}</span>
                                                </div>
                                                <div className="flex w-full  max-sm:gap-6 items-center justify-between">
                                                    <div className="bg-[#F0F0F0] px-[10px] py-2 flex items-center rounded-[62px] gap-[20px]">
                                                        <Button variant={"ghost"} onClick={() => handleDecrement(book.data.id)}>
                                                            <Image src={minus_icon} alt="plus icon" />
                                                        </Button>
                                                        <span>{book.count}</span>
                                                        <Button variant={"ghost"} onClick={() => handleIncrement(book.data.id)}>
                                                            <Image src={plus_icon} alt="plus icon" />
                                                        </Button>
                                                    </div>
                                                    <Button variant={"ghost"} onClick={() => handleDelete(book.data)}>
                                                        <Image src={del_icon} alt="plus icon" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <div className="fixed flex justify-center items-center inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" data-aria-hidden="true" aria-hidden="true" style={{ pointerEvents: "auto" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" className="max-sm:w-[2em] max-sm:h-[2em] z-50">
                                    <g stroke="currentColor">
                                        <circle cx="12" cy="12" r="9.5" fill="none" strokeLinecap="round" strokeWidth="3">
                                            <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
                                            <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
                                        </circle>
                                        <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                                    </g>
                                </svg>
                            </div>}
                    </div>
                    <div className="border px-6 py-[20px] flex md:w-[60%] flex-col h-full rounded-[20px]">
                        <h2 className="text-[24px] font-bold mb-6">Jami Buyurtmalar</h2>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="flex w-full justify-between">
                                <span>Kitoblar narxi</span>
                                <span className="text-[18px] font-bold">{totalPrice} so&apos;m</span>
                            </li>
                            <li className="flex w-full justify-between">
                                <span>Chegirma</span>
                                <span className="text-[18px] font-bold">{discount} so&apos;m</span>
                            </li>
                            <li className="flex w-full justify-between">
                                <span>Yetkazib berish</span>
                                <span className="text-[18px] font-bold">{deliveryCost} so&apos;m</span>
                            </li>
                            <hr />
                            <li className="flex w-full justify-between">
                                <span>Jami narx</span>
                                <span className="text-[18px] font-bold">{finalPrice} so&apos;m</span>
                            </li>
                            <Button className="py-6" asChild>
                                <Link href={"https://t.me/Comfort_new"} target="_blank">
                                    Go to Checkout
                                    <Image src={arrow} alt="arrow" />
                                </Link>
                            </Button>
                        </ul>
                    </div>
                </div>}


                {!books?.length &&
                    <div className="flex justify-center text-4xl max-sm:text-2xl uppercase font-black   md:min-h-[40vh] sm:min-h-[250px] max-sm:min-h-[250px] items-center text-[#747474] opacity-50">
                        <h1>Malumot topilmadi</h1>
                    </div>}
            </main>
            <Footer />
        </>
    )
}