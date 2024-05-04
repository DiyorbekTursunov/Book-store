"use client"
import { MouseEventHandler, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { FiUpload } from "react-icons/fi";
import { updateBook, getCategoryByTitle } from "@/app/actions/productsAction";
import ImageUpload from "../upload-image";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { allCategorys } from "@/types/admin";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";
import Image from "next/image";

interface updateBookModalProps {
    allCategorys: allCategorys[];
    bookId: string
}

interface Category {
    id: string;
    title: string;
}

export default function UpdateBookModal({ allCategorys, bookId }: updateBookModalProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [bookName, setBookName] = useState<string>("");
    const [bookCategory, setBookCategory] = useState<string>("");
    const [bookDescription, setBookDescription] = useState<string>("");
    const [bookPrice, setBookPrice] = useState<string>("");
    const [DialogIsOpen, setDialogIsOpen] = useState(false)

    const updateBookFun = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault();
        try {


            const bookCategoryTitle = { title: bookCategory }
            if (!imageUrl || !bookName || !bookCategory || !bookDescription || !bookPrice || !bookCategoryTitle) {
                toast("Malumot toliq kiritilmagan")
                return
            };

            const category = await getCategoryByTitle(bookCategoryTitle);

            if (category.status === "200" && category.FiltredCategory) {
                const booksData = {
                    name: bookName,
                    categoryName: bookCategory,
                    description: bookDescription,
                    price: bookPrice,
                    imageUrl,
                    categoryId: category.FiltredCategory.id || "",
                    bookId
                };

                const books = await updateBook(booksData);
                console.log(books, booksData);

                if (books.status === "201") {
                    toast("Kitob o'zgartirildi")
                    setDialogIsOpen(false)
                } else {
                    toast("Hatolik yuz berdi iltimos yana bir bor urunib ko'ring")
                    setDialogIsOpen(false)
                }
            } else {
                console.error("Error fetching category or category not found");
            }
        } catch (error) {
            console.error("Error creating book:", error);
        }
    };



    return (
        <Dialog open={DialogIsOpen} onOpenChange={setDialogIsOpen}>
            <DialogTrigger className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-all w-full flex items-center justify-start gap-2">
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                </svg>
                O&apos;zgartirish
            </DialogTrigger>
            <DialogContent className="p-2">
                <DialogHeader>
                    <form className="w-full flex ">
                        <Card className="w-full grid gap-4 pt-6">
                            <CardContent className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Kitob nomi</Label>
                                    <Input id="name" type="text" placeholder="Kitob nomini yozing" required value={bookName} onChange={(e) => setBookName(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Bo&apos;lim nomi</Label>
                                    <div className="grid gap-3">
                                        <Select required onValueChange={(e) => setBookCategory(e)} value={bookCategory}>
                                            <SelectTrigger
                                                id="model"
                                                className="items-start [&_[data-description]]:hidden"
                                            >
                                                <SelectValue placeholder="Bo'limni tanlang" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {allCategorys.length ? allCategorys.map((category: Category) => (
                                                    <SelectItem value={category.title} key={category.id}>
                                                        <div className="flex items-start gap-3 text-muted-foreground">
                                                            <div className="grid gap-0.5">
                                                                <p className="font-medium text-foreground">
                                                                    {category.title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </SelectItem>
                                                )) :
                                                    <div className="p-6">
                                                        <p className="font-medium text-foreground mb-3 text-red-800">
                                                            Kitob uchun bo&apos;lim topilmadi, iltimos birinchi bo&apos;lim yarating
                                                        </p>
                                                        <Button >Bo&apos;lim yaratish</Button>
                                                    </div>
                                                }
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Malumot</Label>
                                    <Input id="description" type="text" placeholder="Kitob haqida malumot yozing" value={bookDescription} required onChange={(e) => setBookDescription(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Narx</Label>
                                    <Input id="price" type="text" placeholder="Kitob narxini kiriting" required value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    {loading && <div className="cursor-wait flex items-center justify-center py-2 px-3 rounded-md hover:bg-opacity-80">
                                        <FiUpload size="1.2em" />
                                        <span className=" ml-2 text-sm">Yuknalmoqda</span>
                                    </div>}
                                    <div className="w-full md:flex-col flex justify-center md:items-start items-end  mb-3">
                                        {imageUrl && <Image width={500} height={500} src={imageUrl} alt="book image" className="md:w-[90%] mb-3" />}
                                        <ImageUpload setimageUrl={setImageUrl} setloading={setLoading} loading={loading} />
                                    </div>
                                </div>
                                <DialogClose asChild>
                                    <Button type="submit" onClick={updateBookFun}>Yaratish</Button>
                                </DialogClose>
                            </CardContent>
                        </Card>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
