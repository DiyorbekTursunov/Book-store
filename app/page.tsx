"use client"
//components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui_elements/navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
//images
import header_reading_side from '@/components/images/icons/header-reading-side.gif'
import search_icon from "@/components/images/svgs/icons/search_icon.svg"
import Footer from "@/components/ui_elements/footer";
import BooksModal from "@/components/ui_elements/books_modal";
import { ChangeEvent, ChangeEventHandler, Fragment, useEffect, useState } from "react";
import { getBooks, getCategory, searchBooks } from "./actions/productsAction";
import { Book } from "@/types/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css"
import { Input } from "@/components/ui/input";

interface Category {
  id: string;
  title: string;
}

interface AllCategoryResponse {
  category: Category[] | undefined;
  message: string;
  status: string;
}

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allCategories, setAllCategories] = useState<Category[] | undefined>(undefined);
  const [allBooks, setAllBooks] = useState<Book[] | undefined>(undefined);
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);
  const [filteredBooks, setFilteredBooks] = useState<Book[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false)

  const [bookForModalData, setbookForModalData] = useState<Book | null>(null)

  const [isDataNotFound, setisDataNotFound] = useState(false)


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const AllCategoryResponse = await getCategory();
        const booksResponse = await getBooks();
        if (AllCategoryResponse.status === "200") {
          setAllCategories(AllCategoryResponse.category);
        }
        if (booksResponse.status === "200") {
          setAllBooks(booksResponse.books);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (allCategories && allBooks) {
      const filteredCategory = selectedCategory ? allBooks.filter(book => book.categoryId === selectedCategory) : allBooks;
      if (filteredBooks?.length === 0) {

      }
      setFilteredBooks(filteredCategory.slice(0, 12));
    }
  }, [selectedCategory, allCategories, allBooks]);

  const handleCategoryClick = (categoryId: string | null) => {
    setActiveButtonId(categoryId);
    setSelectedCategory(categoryId);
  };


  const handlelOpenModal = (book: Book) => {
    setmodalIsOpen(true)
    setbookForModalData(book)
  }

  async function searchInputHandel(e: ChangeEvent<HTMLInputElement>) {
    const searchedBooks = await searchBooks(e.target.value)


    if (searchedBooks.status === "200" && searchedBooks.books) {
      setFilteredBooks(searchedBooks.books)
    } else {
      setFilteredBooks(null)
      setisDataNotFound(true)
    }

    if (!e.target.value.length && allBooks) {
      setisDataNotFound(false)
      setFilteredBooks(allBooks)
    }
  }



  return (
    <>
      <Navbar setSelectedCategory={setSelectedCategory} setActiveButtonId={setActiveButtonId} />
      <header className="bg-[#f1faf0] h-full">
        <div className="max-w-[1440px] mx-auto p-3 py-[127px] flex md:flex-row sm:flex-col max-sm:flex-col items-center  justify-between">
          <div className="max-w-[700px]">
            <h1 className={cn("lg:text-[64px] md:text-[44px]  sm:text-[54px] max-sm:text-[34px] font-black leading-[110%] tracking-tighter mb-6 uppercase")}>ENG YOQTIRGAN KITOBINGIZNI TOPING</h1>
            <p className="mb-6 text-[18px] font-medium">Eng mashhur kitoblarni ko&apos;rib chiqing va sotib oling</p>
            <Button className="px-[67px] py-[25px] rounded-[62px] hidden md:flex" onClick={() => router.push('#categories')}>
              Sotib olish
            </Button>
          </div>
          <div className="w-full flex flex-col">
            <Image src={header_reading_side} priority unoptimized alt="header_reading_side" className=" md:w-[100%] sm:w-[100%] max-sm:w-[100%]" />
            <Button className="py-[35px] max-sm:py-[25px] rounded-[62px] text-[18px] w-[300px] max-sm:w-full  md:hidden" onClick={() => router.push('#categories')}>
              Sotib Olish
            </Button>
          </div>
        </div>
      </header>
      <main className="p-3 bg-[#ffff] pb-12 w-full flex flex-col items-center bg-slate-100 " id="categories">
        {/* Category toggle buttons section */}
        <section className="w-full">
          <div className="max-w-[1440px]   mx-auto px-3">
            <h2 className="sm:text-[24px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">BO&apos;LIMLAR</h2>
            <div className="flex justify-between lg:flex-row  md:flex-col max-md:flex-col md:gap-5 max-md:gap-5">
              <div className="flex flex-wrap gap-3">
                {allCategories && allCategories.length > 0 ? (
                  <>
                    <Button onClick={() => handleCategoryClick(null)} className={activeButtonId === null ? "" : "bg-white text-black border border-black hover:text-white"}>
                      Hammasi
                    </Button>
                    {allCategories.map((category: Category) => (
                      <Button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={activeButtonId === category.id ? "bg-black" : "bg-white text-black border border-black hover:text-white"}
                      >
                        {category.title}
                      </Button>
                    ))}
                  </>
                ) : (
                  <h2>Loading...</h2>
                )}
              </div>
              <div className="relative  xl:w-[600px] lg:w-[400px] max-lg:w-full">
                <button className="absolute h-full flex items-center left-3"   >
                  <Image src={search_icon} alt="search icon" className="cursor-pointer" />
                </button>
                <Input placeholder="kitoblarni qidirish..." id="search_input" onChange={searchInputHandel} className="flex w-full h-[48px] text-[18px] items-center gap-3 rounded-[62px] pl-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Display filtered books */}
        <section className="max-w-[1440px] gap-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {filteredBooks ? (
            <>
              {filteredBooks.map((book) => (
                <div key={book.id} className="p-1 flex flex-wrap items-center justify-center">
                  <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs hover:shadow-2xl shadow-xl transition-all duration-500 cursor-pointer" onClick={() => handlelOpenModal(book)}>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                      <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
                      </div>
                      <div className="sm:w-[240px] max-sm:w-full h-[365px] flex justify-center items-center">
                        <img src={book.imageUrl} alt="book image" className="relative w-full h-full max-sm:h-[365px] max-sm:w-[260px] hover:scale-105 duration-200 transition-all" />
                      </div>
                    </div>
                    <div className="relative  px-6 pb-6 mt-6">
                      <span className="block text-[14px] mb-1 capitalize">{book.description.slice(0, 35)}...</span>
                      <div className="flex justify-between flex-wrap gap-2">
                        <span className="block font-semibold text-xl capitalize">{book.name}</span>
                        <span className="bg-black rounded-full text-white h-full text-sm font-bold px-3 py-2 leading-none flex items-center">{book.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            isLoading && <div className="fixed flex justify-center items-center inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" data-aria-hidden="true" aria-hidden="true" style={{ pointerEvents: "auto" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" className="max-sm:w-[2em] max-sm:h-[2em] z-50">
                <g stroke="currentColor">
                  <circle cx="12" cy="12" r="9.5" fill="none" strokeLinecap="round" strokeWidth="3">
                    <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
                    <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
                  </circle>
                  <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                </g>
              </svg>
            </div>)}
        </section>
        {isDataNotFound && <div className="w-full flex justify-center text-4xl max-sm:text-2xl uppercase font-black mt-12 text-[#747474] opacity-50">
          <h1>Malumot topilmadi</h1>
        </div>}
      </main>
      <Footer setSelectedCategory={setSelectedCategory} setActiveButtonId={setActiveButtonId} allCategories={allCategories} />


      {<BooksModal modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen} bookForModalData={bookForModalData} />}
      <ToastContainer />
    </>
  );
}
