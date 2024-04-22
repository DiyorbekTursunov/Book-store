"use server"

import prisma from '@/db/prisma'



// this is function create catigory

export async function createCatigory(categoryData: categoryData,) {
    const { title } = categoryData
    try {
        // Create a new category
        if (!title)
            return { massage: "Malumot to'liq kiritilmagan" }

        await prisma.category.create({
            data: {
                title: title,
            },
        });
        return { massage: "categorya muvafaqiyatli yaratildi yaratildi" }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error }
    }
}








// this is function create book

export async function createBook(bookData: bookData) {
    const { categoryId, categoryName, description, imageUrl, name, price } = bookData
    try {
        // get all categoys
        const Allcategory = await prisma.category.findMany();

        //cheack if catigoryId not available return error
        if (!Allcategory.find((element) => element.id === categoryId))
            return { massage: "Categoriya mavjud emas !" }


        //cheack if all cridentials available create book
        if (name &&
            categoryName &&
            description &&
            imageUrl &&
            price &&
            categoryId
        ) {
            await prisma.book.create({
                data: {
                    name,
                    categoryName,
                    description,
                    imageUrl,
                    price,
                    categoryId,
                },
            });
            return { massage: "kitob muvafaqiyatli yaratildi yaratildi" }
            //cheack if all cridentials not fully included return error
        } else {
            return { massage: "Malumot to'liq kiritilmagan" }

        }
    } catch (error) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error }
    }
}


export async function getCatigory() {
    try {
        // get all category
        const category = await prisma.category.findMany();

        // if category not found return error 
        if (!category)
            return {
                massage: "catigoys not found please create one",
            }

        // if category a found return category 
        return {
            massage: "success",
            category
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error }
    }
}


export async function getBooks() {
    try {
        // get all category
        const books = await prisma.book.findMany();

        // if category not found return error 
        if (!books)
            return {
                massage: "books not found please create one",
            }

        // if category a found return category 
        return {
            massage: "success",
            books
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error }
    }
}