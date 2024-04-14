"use client"
//components
import Footer from '@/components/ui_elements/footer'
import Navbar from '@/components/ui_elements/navbar'
import { useParams } from 'next/navigation'
import book_1 from '@/components/images/books/book_1.jpg'
import Image from 'next/image'



export default function Page() {
  const { slug } = useParams<{ slug: [] }>()

  return (
    <>
      <Navbar />
      <main className='mt-24'>
        {slug.map(catigory => (
          <>
            {catigory === "jahon-adabiyoti" && <>
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
            </>}
            {catigory === "bolalar-adabiyoti" &&
              <>
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
              </>}
            {catigory === "o'zbek-adabiyoti" &&
              <>
                <h2 className="text-center sm:text-[34px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">o&apos;zbak adabiyoti</h2>
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
              </>}
          </>
        ))}
      </main>
      <Footer />
    </>
  )
}
