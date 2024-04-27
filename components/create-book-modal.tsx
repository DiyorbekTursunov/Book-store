"use client"
import { MouseEventHandler, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { FiUpload } from "react-icons/fi";
import { createBook, getCategoryByTitle } from "@/app/actions/productsAction";
import ImageUpload from "./upload-image";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { allCategorys } from "@/types/admin";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";

interface CreateBookModalProps {
    allCategorys: allCategorys[];
}

interface Category {
    id: string;
    title: string;
}

export default function CreateBookModal({ allCategorys }: CreateBookModalProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [bookName, setBookName] = useState<string>("");
    const [bookCategory, setBookCategory] = useState<string>("");
    const [bookDescription, setBookDescription] = useState<string>("");
    const [bookPrice, setBookPrice] = useState<string>("");
    const [DialogIsOpen, setDialogIsOpen] = useState(false)

    const createBookFun = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

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
                    categoryId: category.FiltredCategory.id || ""
                };

                const books = await createBook(booksData);
                if (books.status === "200") {
                    toast("Kitob yaratildi")
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
            <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 transition-all h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Kitob yaratish
                </span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <form className="w-full flex ">
                        <Card className="w-full grid gap-4 pt-6">
                            <CardContent className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Kitob nomi</Label>
                                    <Input id="name" type="text" placeholder="Kitob nomini yozing" required onChange={(e) => setBookName(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Bo&apos;lim nomi</Label>
                                    <div className="grid gap-3">
                                        <Select required onValueChange={(e) => setBookCategory(e)}>
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
                                    <Input id="description" type="text" placeholder="Kitob haqida malumot yozing" required onChange={(e) => setBookDescription(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Narx</Label>
                                    <Input id="price" type="text" placeholder="Kitob narxini kiriting" required onChange={(e) => setBookPrice(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    {loading && <div className="cursor-wait flex items-center justify-center py-2 px-3 rounded-md hover:bg-opacity-80">
                                        <FiUpload size="1.2em" />
                                        <span className=" ml-2 text-sm">Yuknalmoqda</span>
                                    </div>}
                                    <div className="w-full md:flex-col flex justify-center md:items-start items-end">
                                        {imageUrl && <img src={imageUrl} alt="book image" className="md:w-[50%] md:h-[300px] sm:h-[300px] max-sm:h-[200px]" />}
                                        <ImageUpload setimageUrl={setImageUrl} setloading={setLoading} loading={loading} />
                                    </div>
                                </div>
                                <DialogClose asChild>
                                    <Button type="submit" onClick={createBookFun}>Yaratish</Button>
                                </DialogClose>
                            </CardContent>
                        </Card>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
