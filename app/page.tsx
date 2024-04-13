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
import book_2 from '@/components/images/books/book_2.jpg'
import Footer from "@/components/ui_elements/footer";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <header className="bg-[#f1faf0] h-full">
        <div className="max-w-[1440px] mx-auto p-3 py-[127px] flex md:flex-row sm:flex-col max-sm:flex-col items-center  justify-between">
          <div className="max-w-[700px]">
            <h1 className={cn("lg:text-[64px] md:text-[44px]  sm:text-[54px] max-sm:text-[34px] font-black leading-[110%] tracking-tighter mb-6 uppercase")}>ENG YOQTIRGAN KITOBINGIZNI TOPING</h1>
            <p className="mb-6 text-[18px] font-medium">Eng mashhur kitoblarni ko'rib chiqing va sotib oling</p>
            <Button className="px-[67px] py-[25px] rounded-[62px] hidden md:flex"  onClick={() => router.push("#catigorys")}>
              Sotib olish
            </Button>
          </div>
          <div className="w-full flex flex-col">
            <Image src={header_reading_side} priority alt="header_reading_side" className=" md:w-[100%] sm:w-[100%] max-sm:w-[100%]" />
            <Button  className="py-[35px] max-sm:py-[35px] rounded-[62px] text-[18px] w-[300px] max-sm:w-full  md:hidden" onClick={() => router.push("#catigorys")}>
              Sotib Olish
            </Button>
          </div>
        </div>
      </header>
      <main className="p-3 bg-[#ffff]" id="catigorys">
        <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">o'zbak adabyotlari</h2>
        <section className="p-1 flex flex-wrap items-center justify-center">

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
        <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">Bolalar adabyoti</h2>
        <section className="p-1 flex flex-wrap items-center justify-center">

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
        <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">Jahon adabyotlari</h2>
        <section className="p-1 flex flex-wrap items-center justify-center">

          <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-2xl cursor-pointer">
            <div className="relative pt-10 px-10 flex items-center justify-center ">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
              </div>
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
              <Image src={book_1} alt="book image" className="relative w-50 hover:scale-105 transition-all" />
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
      <Footer/>
    </>
  );
}