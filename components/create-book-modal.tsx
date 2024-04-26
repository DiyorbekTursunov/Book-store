"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { allCategorys } from "@/types/admin"
import Image from "next/image"
import ImageUpload from "./upload-image"
import { PlusCircle } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { FiUpload } from "react-icons/fi"

interface CreateBookModalProps {
    allCategorys: allCategorys[]
}

interface categorysType {
    id: string
    title: string
}

export default function CreateBookModal({ allCategorys }: CreateBookModalProps) {
    const [loading, setloading] = useState<boolean>(false)
    const [imageUrl, setimageUrl] = useState<string | null>(null)

    async function createBook() {
        
    }

    return (
        <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 transition-all h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Kitob yaratish
                </span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className=" mb-3">Upload Profile Picture</DialogTitle>
                    <form className="w-full flex justify-center">
                        <Card className="w-full grid gap-4 pt-6">
                            <CardContent className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Kitob nomi</Label>
                                    <Input id="name" type="text" placeholder="Kitob nomini yozing" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Bo&apos;lim nomi</Label>
                                    <div className="grid gap-3">
                                        <Select required>
                                            <SelectTrigger
                                                id="model"
                                                className="items-start [&_[data-description]]:hidden"
                                            >
                                                <SelectValue placeholder="Bo'limni tanlang" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {allCategorys ? allCategorys.map((category: categorysType) => (
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
                                    <Label htmlFor="password">Malumot</Label>
                                    <Input id="description" type="text" placeholder="Kitob haqida malumot yozing" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Narx</Label>
                                    <Input id="description" type="text" placeholder="Kitob narxini kiriting" required />
                                </div>
                                <div className="grid gap-2">
                                    {loading && <div className="cursor-wait flex items-center justify-center py-2 px-3 rounded-md hover:bg-opacity-80">
                                        <FiUpload size="1.2em" />
                                        <span className=" ml-2 text-sm">Yuknalmoqda</span>
                                    </div>}
                                    {imageUrl && <img src={imageUrl} width={300} height={800} alt="book image" className="w-full justify-center"/>}
                                    <ImageUpload setimageUrl={setimageUrl} setloading={setloading} loading={loading} />
                                </div>
                                <Button className="">Yaratish</Button>
                            </CardContent>
                        </Card>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}