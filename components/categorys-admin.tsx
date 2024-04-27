"use clinet "
import Image from "next/image"
import image from '@/components/images/books/book_1.jpg'
import {
  MoreHorizontal,
  PlusCircle,
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
import { useState } from "react"
import { allCategorys } from "@/types/admin"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { delBookById } from "@/app/actions/productsAction"

interface userType {
  allBooks: UsersProps[] | null;
  allCategorys: allCategorys[]
}

export default function Books({ allBooks, allCategorys }: userType) {
  async function delBookHandler(bookId: string) {
    if (!bookId)
      return

    const book = await delBookById(bookId)
    
    if (book.status === "200") {
      toast("Kitob o'chirildi")
    }else{
      toast("Hatolik yuz berdi yana bir bor urunib ko'ring")
    }
  }
  return (
    <>
      {/* {createBookModalIsOpen && <CreateBookModal setCreateBookModalIsOpen={setCreateBookModalIsOpen} allCategorys={allCategorys} />} */}
      <div className="flex min-h-screen w-full flex-col">
        <ToastContainer/>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="all">Hammasi</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <CreateBookModal allCategorys={allCategorys} />
                </div>
              </div>
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Bo'limlar</CardTitle>
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
                              <img
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="84"
                                src={book.imageUrl}
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {book.name}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {book.price}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {book.description.slice(0, 15)}...
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {""}
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
                                  <DropdownMenuItem>
                                    <Button variant={"ghost"} className="w-full flex items-center justify-start gap-2" >
                                      <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                      </svg>
                                      O&apos;zgartirish
                                    </Button>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Button variant={"ghost"} className="w-full flex items-center justify-start gap-2" onClick={() => delBookHandler(book.id)}>
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
    </>
  )
}