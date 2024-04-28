"use client"
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { createCatigory } from "@/app/actions/productsAction";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";



export default function CreateCategoryModal() {
    const [categoryName, setCategoryName] = useState<string>("");
    const [DialogIsOpen, setDialogIsOpen] = useState(false)

    const createCategoryFun = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault();
        try {
            if (!categoryName) {
                toast("Malumot toliq kiritilmagan")
                return
            };


            const categoryData = {
                title: categoryName
            };

            const categorys = await createCatigory(categoryData);
            console.log(categorys);
            
            if (categorys.status === "201") {
                toast("Bo'lim yaratildi")
                setDialogIsOpen(false)
            } else {
                toast("Hatolik yuz berdi iltimos yana bir bor urunib ko'ring")
                setDialogIsOpen(false)
            }
        } catch (error) {
            console.error("Error creating category:", error);
        }
    };



    return (
        <Dialog open={DialogIsOpen} onOpenChange={setDialogIsOpen}>
            <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 transition-all h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Bo&apos;lim yaratish
                </span>
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
                                    <Button type="submit" onClick={createCategoryFun}>Yaratish</Button>
                                </DialogClose>
                            </CardContent>
                        </Card>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
