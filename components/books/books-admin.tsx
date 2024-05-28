"use clinet "
import Image from "next/image"
import {
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CreateBookModal from "./create-book-modal"
import { Book, allCategorys } from "@/types/admin"
import { toast } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { delBookById } from "@/app/actions/productsAction"
import UpdateBookModal from "./update-book-modal"
import React, { Fragment, useEffect, useState } from "react"

interface userType {
  allBooks: Book[] | null;
  allCategorys: allCategorys[]
}

interface allData {
  categoryName: string;
  books: Book[];
}


export default function Books({ allBooks, allCategorys }: userType) {
  const [allData, setallData] = useState<{ categoryName: string; books: Book[] }[] | null>(null);

  async function delBookHandler(bookId: string) {
    if (!bookId)
      return

    const book = await delBookById(bookId)

    if (book.status === "200") {
      toast("Kitob o'chirildi")
    } else {
      toast(book.massage)
    }
  }

  useEffect(() => {
    function createData() {
      if (!allBooks || !allCategorys) {
        return;
      }

      const getBooksByCategory = (categoryId: string): Book[] => allBooks.filter(book => book.categoryId === categoryId);

      const result = allCategorys.map(category => ({
        categoryName: category.title,
        books: getBooksByCategory(category.id)
      }));

      setallData(result);
    }

    createData();
  }, [allBooks, allCategorys]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 ">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex flex-wrap  items-center mb-6">
              <TabsList className="flex-wrap justify-start hidden sm:flex gp-2">
                <TabsTrigger value="all">Hammasi</TabsTrigger>
                {allCategorys.map(category => (
                  <Fragment key={category.id}>
                    <TabsTrigger value={category.title} className="capitalize">{category.title}</TabsTrigger>
                  </Fragment>
                ))}
              </TabsList>
              <TabsList className="flex-wrap justify-start sm:hidden flex gp-2">
                <TabsTrigger value="all">Hammasi</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <CreateBookModal allCategorys={allCategorys} />
              </div>
            </div>
            {allData && allData.map((data, i) => (
              <TabsContent value={data.categoryName} key={i}>
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Kitoblar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="hidden w-[100px] sm:table-cell">
                            <span>Rams</span>
                          </TableHead>
                          <TableHead>Nomi</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Narxi
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Malumot
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Yaratilgan vaqti
                          </TableHead>
                          <TableHead>
                            <span>Menu</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.books.map(book => (
                          <TableRow key={book.id}>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="164"
                                src={book.imageUrl}
                                width="164"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {book.name.toUpperCase()}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {book.price}
                            </TableCell>
                            <TableCell className="hidden md:table-cell capitalize">
                              {book.description.slice(0, 15)}...
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {book.createdAt.getFullYear()}, {book.createdAt.getMonth()}, {book.createdAt.getDate()}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                                  <DropdownMenuItem asChild>
                                    <UpdateBookModal allCategorys={allCategorys} bookId={book.id} />
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Button variant={"ghost"} className="w-full flex  justify-start gap-2 " onClick={() => delBookHandler(book.id)}>
                                      <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                      </svg>
                                      O&apos;chirish
                                    </Button>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
            <TabsContent value={"all"}>
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Kitoblar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span>Rams</span>
                        </TableHead>
                        <TableHead>Nomi</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Narxi
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Malumot
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Yaratilgan vaqti
                        </TableHead>
                        <TableHead>
                          <span>Menu</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allBooks && allBooks.map(book => (
                        <TableRow key={book.id}>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height={84}
                              src={book.imageUrl}
                              width={64}
                            />
                          </TableCell>
                          <TableCell className="font-medium capitalize">
                            {book.name}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {book.price}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {book.description.slice(0, 15)}...
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {book.createdAt.getFullYear()}, {book.createdAt.getMonth()}, {book.createdAt.getDate()}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                                <DropdownMenuItem asChild>
                                  <UpdateBookModal allCategorys={allCategorys} bookId={book.id} />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Button variant={"ghost"} className="w-full flex  justify-start gap-2 " onClick={() => delBookHandler(book.id)}>
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                    </svg>
                                    O&apos;chirish
                                  </Button>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}