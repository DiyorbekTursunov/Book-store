"use clinet "


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
import { allCategorys } from "@/types/admin"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { delCategoryById } from "@/app/actions/productsAction"
import CreateCategoryModal from "./create-category-modal"
import UpdateCategoryModal from "./update-category-modal"

interface userType {
  allCategorys: allCategorys[]
}

export default function Categorys({ allCategorys }: userType) {
  async function delCategoryHandler(categoryId: string) {
    console.log(categoryId);

    if (!categoryId)
      return

    const category = await delCategoryById(categoryId)

    if (category.status === "200") {
      toast("Kitob o'chirildi")
    } else {
      toast("Hatolik yuz berdi yana bir bor urunib ko'ring")
    }
  }



  return (
    <>
      <div className="flex w-full flex-col">
        <ToastContainer />
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="all">Hammasi</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <CreateCategoryModal />
                </div>
              </div>
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Bo&apos;limlar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nomi</TableHead>
                          <TableHead>
                            <span>Menu</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {allCategorys && allCategorys.map(category => (
                          <TableRow key={category.id}>
                            <TableCell className="font-medium normal-case">
                              {category.title}
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
                                    <UpdateCategoryModal categoryId={category.id} />
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Button variant={"ghost"} className="w-full flex items-center justify-start gap-2" onClick={() => delCategoryHandler(category.id)}>
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