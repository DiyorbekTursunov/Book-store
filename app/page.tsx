"use client"
//components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui_elements/navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
//images
import header_reading_side from '@/components/images/icons/header-reading-side.gif'
import Footer from "@/components/ui_elements/footer";
import BooksModal from "@/components/ui_elements/books_modal";
import { Fragment, useEffect, useState } from "react";
import { getBooks, getCategory } from "./actions/productsAction";
import { Book } from "@/types/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

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
      setFilteredBooks(filteredCategory);
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

  return (
    <>
      <Navbar />
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
        <div className="w-full">
          <section className="max-w-[1440px] mx-auto">
            <h2 className="sm:text-[24px] max-sm:text-[24px] font-semibold uppercase mt-16 mb-6">BO&apos;LIMLAR</h2>
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
          </section>
        </div>

        {/* Display filtered books */}
        <div className="max-w-[1440px] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {filteredBooks ? (
            <>
              {filteredBooks.map((book) => (
                <section key={book.id} className="p-1 flex flex-wrap items-center justify-center">
                  <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-2xl cursor-pointer" onClick={() => handlelOpenModal(book)}>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                      <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{ background: " radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2" }}>
                      </div>
                      <div className="sm:w-[240px] max-sm:w-full h-[365px] flex justify-center items-center">
                        <img src={book.imageUrl} alt="book image" className="relative w-full h-full max-sm:h-[365px] max-sm:w-[25px] hover:scale-105 transition-all" />
                      </div>
                    </div>
                    <div className="relative  px-6 pb-6 mt-6">
                      <span className="block text-[14px] mb-1">{book.description}</span>
                      <div className="flex justify-between">
                        <span className="block font-semibold text-xl">{book.name}</span>
                        <span className="bg-white rounded-full text-black text-lg font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </>
          ) : (
            <div className="fixed flex justify-center items-center inset-0 z-40 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" data-aria-hidden="true" aria-hidden="true" style={{ pointerEvents: "auto" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" className="max-sm:w-[2em] max-sm:h-[2em] z-50">
                <g stroke="currentColor">
                  <circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3">
                    <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
                    <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
                  </circle>
                  <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                </g>
              </svg>
            </div>)}
        </div>
      </main>
      <Footer />
      {<BooksModal modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen} bookForModalData={bookForModalData} />}
      <ToastContainer />
    </>
  );
}
