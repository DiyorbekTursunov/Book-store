"use client"
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { updateCatigory } from "@/app/actions/productsAction";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";

interface UpdateCategoryModalProps {
    categoryId: string
}

export default function UpdateCategoryModal({ categoryId }: UpdateCategoryModalProps) {
    const [categoryName, setCategoryName] = useState<string>("");
    const [DialogIsOpen, setDialogIsOpen] = useState(false)

    const UpdateCategoryFun = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault();
        try {
            if (!categoryName) {
                toast("Malumot toliq kiritilmagan")
                return
            };


            const categoryData = {
                title: categoryName,
                categoryId
            };

            console.log(categoryData);
            const category = await updateCatigory(categoryData);
            console.log(category);

            if (category.status === "201") {
                toast("Bo'lim o'zgartirildi")
                setDialogIsOpen(false)
            } else {
                toast("Hatolik yuz berdi iltimos yana bir bor urunib ko'ring")
                setDialogIsOpen(false)
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
                                    <Label htmlFor="name">Bo&apos;lim nomi</Label>
                                    <Input id="name" type="text" placeholder="Bo'lim nomini yozing" required onChange={(e) => setCategoryName(e.target.value)} />
                                </div>
                                <DialogClose asChild>
                                    <Button type="submit" onClick={UpdateCategoryFun}>Yaratish</Button>
                                </DialogClose>
                            </CardContent>
                        </Card>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
