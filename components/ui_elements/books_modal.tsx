"use client"
//components
import { Book } from '@/types/admin'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { toast } from 'react-toastify'
import Image from 'next/image'
//images

interface BooksModalProps {
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
    modalIsOpen: boolean
    bookForModalData: Book | null
}


interface localStorageDataType {
    count: number,
    data: string
}

export default function BooksModal({ setModalIsOpen, modalIsOpen, bookForModalData }: BooksModalProps) {
    const [count, setCount] = useState<number>(1)
    const [productsIdData, setProductsIdData] = useState<null | string>(null)

    useEffect(() => {
        setCount(1);
        if (typeof window !== 'undefined') {
            const productsId = localStorage.getItem("products-hash");
            setProductsIdData(productsId);
        }
    }, [modalIsOpen]);

    const handelAddCard = () => {
        if (!bookForModalData) {
            toast("Hatolik yuzberdi. Iltimos, sahifani yangilang.");
            return;
        }

        let localStorageData: localStorageDataType[] = [];
        if (productsIdData) {
            localStorageData = JSON.parse(productsIdData);
            if (localStorageData.find(data => (data.data === bookForModalData.id))) {
                toast.warning("Kitob savatga qo'shilgan !");
                setModalIsOpen(false);
                return;
            }
        }

        const data = {
            count,
            data: bookForModalData.id
        }
        localStorageData.push(data);
        localStorage.setItem("products-hash", JSON.stringify(localStorageData));
        toast("Kitob savatga qo'shildi");
        setModalIsOpen(false);
    };



    return modalIsOpen ? (
        <>
            <div onClick={() => setModalIsOpen(false)} data-state="open" className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" data-aria-hidden="true" aria-hidden="true" style={{ pointerEvents: "auto" }}>
            </div>
            <div role="dialog" id="radix-:r1j:" aria-describedby="radix-:r1l:" aria-labelledby="radix-:r1k:" data-state="open" className="items-center fixed rounded-xl left-[50%] top-[50%] z-50 grid  md:w-[700px] sm:w-[500px] max-sm:w-full translate-x-[-50%] translate-y-[-50%] gap-4 max-sm:border-none border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg p-2" tabIndex={-1} style={{ pointerEvents: "auto" }}>
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <div className="rounded-lg max-sm:border-none border bg-card text-card-foreground shadow-sm w-full grid gap-4 pt-6 relative">
                        <div className="p-6 grid gap-4 pt-6">
                            <div className="flex flex-col gap-2 sm:px-10">
                                <Image src={bookForModalData?.imageUrl || "loading  "} width={300} height={300} alt="Book image" className='w-[300px] h-[300px] max-sm:scale-[.8] mx-auto' />
                                <div>
                                    <div>
                                        <h2 className='font-semibold mb-2 text-[18px] capitalize '>{bookForModalData?.name}</h2>
                                        <p className='text-[#3d3d3d] mb-4 line-clamp-3 max-sm:hidden'>{bookForModalData?.description}</p>
                                    </div>
                                    <div className='flex max-sm:flex-col items-center gap-3'>
                                        <div className="bg-black rounded-full mb-4 justify-center text-white mt-4  text-sm font-bold px-3 py-2 leading-none flex items-center">{bookForModalData?.price}</div>
                                        <div className='flex items-center gap-3'>
                                            <Button variant={"ghost"} onClick={() => setCount(count >= 10 ? count : count + 1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="22px" viewBox="0 0 24 24" fill="none">
                                                    <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Button>
                                            <span>{count}</span>
                                            <Button variant={"ghost"} onClick={() => setCount(count <= 1 ? count : count - 1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handelAddCard} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 transition-all" type="submit">
                                Savatga qo&apos;shish
                            </button>
                        </div>
                        <button onClick={() => setModalIsOpen(false)} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    ) : null
}