"use client"

import { useEffect, useState } from "react";
import Navbar from "@/components/ui_elements/navbar";
import Books from "@/components/books/books-admin";
import { verifyUser } from "../actions/auth";
import { getBooks, getCategory } from "../actions/productsAction";
import { useRouter } from "next/navigation";
import { Book, allCategorys } from "@/types/admin";
import Categorys from "@/components/category/categorys-admin";
import Footer from "@/components/ui_elements/footer";

// Define the types for Book and Category



export default function Admin() {
  const [allCategorys, setAllCategorys] = useState<allCategorys[] | null>(null);
  const [allBooks, setAllBooks] = useState<Book[] | null>(null);
  const router = useRouter();
  

  useEffect(() => {
    async function fetchData() {
      try {
        const verificationToken = localStorage.getItem("verification_token");
        if (!verificationToken) {
          router.push("/404");
          return;
        }

        const token = JSON.parse(verificationToken);
        const response = await verifyUser(token);

        if (response.status !== "200" || !response.user || response.user.role !== "ADMIN") {
          router.push("/404");
          return;
        }

        const categoryResponse = await getCategory();
        if (categoryResponse.status === "200") {
          setAllCategorys(categoryResponse.category || []);
        }

        const booksResponse = await getBooks();
        if (booksResponse.status === "200") {
          // Extract the books array from the response object
          const books = booksResponse.books || [];
          setAllBooks(books); // Pass the array of book objects
        }

      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here, e.g., display an error message to the user
      }
    }

    fetchData();
  }, []);

  

  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] flex justify-center flex-col gap-12 mx-auto px-3">
        <Books allBooks={allBooks || []} allCategorys={allCategorys || []} />
        <Categorys allCategorys={allCategorys || []} />
      </main>
      <Footer />
    </>
  );
}
