import Navbar from "@/components/ui_elements/navbar";

export default function Admin() {
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <Navbar />
    </div>
  )
}






















// async function create() {
//   const catigory = await getCatigory()
//   // console.log(catigory.category);
//   const booksData = {
//     name: "Book name",
//     categoryName: "Jahon Adabiyoti",
//     description: "good book",
//     imageUrl: "image url",
//     price: "100 ming so'm",
//     categoryId: "4330cd66-af0d-4ce4-98c7-ea1c151e6bea"
//   }
//   const data = await createBook(booksData)
//   console.log(data);
// }

// // create()

// async function getAllBooks() {
//   const books = await getBooks()
//   console.log(books);
// }

// getAllBooks()