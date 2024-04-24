"use client"
//components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui_elements/navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
//images
import header_reading_side from '@/components/images/icons/header-reading-side.gif'
import book_1 from '@/components/images/books/book_1.jpg'
import Footer from "@/components/ui_elements/footer";
import BooksModal from "@/components/ui_elements/books_modal";
import { useEffect, useState } from "react";
import { createAdmin, getAllUsers, verifyUser } from "./actions/auth";
import { getCatigory } from "./actions/productsAction";

interface allcategoryType {
  category: allcategory[] | undefined
  massage: string
  status: string
}

interface allcategory {
  id: string
  title: string
}

export default function Home() {
  const router = useRouter()
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [allcategory, setallcategory] = useState<allcategoryType | null>(null)
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false)
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);

  // Example usage

  useEffect(() => {
    async function getAllCategory() {
      setisLoading(true)
      try {
        const data = await getCatigory()
        if (data.category !== undefined) {
          setallcategory(data);
        } else {
          // Handle the case when data.category is undefined
        }
      } catch (error) {
        console.log(error);
      }
      setisLoading(false)
    }
    getAllCategory()
  }, [])


  const handleButtonClick = (id: string) => {
    setActiveButtonId(id);
  };

  useEffect(() => {
    async function name() {
      const allUsers = await getAllUsers()
      console.log(allUsers);
    }

    name()
  }, [])


  return (
    <>
      {modalIsOpen && <BooksModal setmodalIsOpen={setmodalIsOpen} />}
      <Navbar />
      <header className="bg-[#f1faf0] h-full">
        <div className="max-w-[1440px] mx-auto p-3 py-[127px] flex md:flex-row sm:flex-col max-sm:flex-col items-center  justify-between">
          <div className="max-w-[700px]">
            <h1 className={cn("lg:text-[64px] md:text-[44px]  sm:text-[54px] max-sm:text-[34px] font-black leading-[110%] tracking-tighter mb-6 uppercase")}>ENG YOQTIRGAN KITOBINGIZNI TOPING</h1>
            <p className="mb-6 text-[18px] font-medium">Eng mashhur kitoblarni ko&apos;rib chiqing va sotib oling</p>
            <Button className="px-[67px] py-[25px] rounded-[62px] hidden md:flex" onClick={() => router.push("#catigorys")}>
              Sotib olish
            </Button>
          </div>
          <div className="w-full flex flex-col">
            <Image src={header_reading_side} priority unoptimized alt="header_reading_side" className=" md:w-[100%] sm:w-[100%] max-sm:w-[100%]" />
            <Button className="py-[35px] max-sm:py-[25px] rounded-[62px] text-[18px] w-[300px] max-sm:w-full  md:hidden" onClick={() => router.push("#catigorys")}>
              Sotib Olish
            </Button>
          </div>
        </div>
      </header>
      <main className="p-3 bg-[#ffff] mb-12" id="catigorys">
        <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">BO&apos;LIMLAR</h2>
        <section className="p-1 max-w-[1440px] mx-auto">
          <div className="flex gap-3">
            {allcategory && allcategory.category ? (
              <>
                <Button onClick={() => setActiveButtonId(null)} className={activeButtonId === null ? "" : "bg-white text-black border border-black hover:text-white"}>
                  Hammasi
                </Button>
                {allcategory.category.map(category => (
                  <Button
                    key={category.id}
                    onClick={() => handleButtonClick(category.id)}
                    className={activeButtonId === category.id ? "bg-black" : "bg-white text-black border border-black hover:text-white"}
                  >
                    {category.title}
                  </Button>
                ))}
              </>

            ) :
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.25" />
                <path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                  <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                </path>
              </svg>
            }

          </div>
        </section>

        <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">o&apos;zbek adabiyoti</h2>
        <section className="p-1 flex flex-wrap items-center justify-center">

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer" onClick={() => setmodalIsOpen(!modalIsOpen)}>
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer" >
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer" >
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer" >
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer" >
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>


        </section>


        <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">Bolalar adabiyoti</h2>
        <section className="p-1 flex flex-wrap items-center justify-center">

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer" >
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>


        </section>


        <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">Jahon adabiyoti</h2>
        <section className="p-1 flex flex-wrap items-center justify-center">

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <div className="w-[240px] h-[365px] flex justify-center items-center">
                <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
              </div>
            </div>
            <div className="relative  px-6 pb-6 mt-6">
              <span className="block -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>


        </section>
      </main>
      <Footer />
    </>
  );
}