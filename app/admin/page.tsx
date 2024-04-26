"use client"

import { useEffect, useState } from "react";
import Navbar from "@/components/ui_elements/navbar";
import Books from "@/components/books-admin";
import { verifyUser } from "../actions/auth";
import { getBooks, getCategory } from "../actions/productsAction";
import { useRouter } from "next/navigation";

// Define the types for Book and Category
interface Book {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  description: string;
  imageUrl: string;
  price: string;
}

interface Category {
  id: string;
  title: string; // Ensure that this matches the actual property name in Category
}

export default function Admin() {
  const [allCategorys, setAllCategorys] = useState<Category[] | null>(null);
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
          setAllBooks(booksResponse.books || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here, e.g., display an error message to the user
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <Navbar />
      <Books allBooks={allBooks || []} allCategorys={allCategorys || []} />
    </div>
  );
}
