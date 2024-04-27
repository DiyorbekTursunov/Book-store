"use server"

import prisma from '@/db/prisma'



// this is function create catigory

export async function createCatigory(categoryData: categoryData,) {
    const { title } = categoryData
    try {
        // Create a new category
        if (!title)
            return { massage: "Malumot to'liq kiritilmagan", status: "404" }

        await prisma.category.create({
            data: {
                title: title,
            },
        });
        return { massage: "categorya muvafaqiyatli yaratildi yaratildi", status: "201" }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", status: "500", error }
    }
}








// this is function create book

export async function createBook(bookData: bookData) {
    const { categoryId, categoryName, description, imageUrl, name, price } = bookData

    try {
        // get all categoys
        const Allcategory = await prisma.category.findMany();
        console.log(Allcategory);

        //cheack if catigoryId not available return error
        if (!Allcategory.find((element) => element.id === categoryId))
            return { massage: "Categoriya mavjud emas !", status: "400" }

        //cheack if all cridentials available create book
        if (name.length && price.length && imageUrl.length && description.length && categoryId.length && categoryName.length) {
            const res = await prisma.book.create({
                data: {
                    name,
                    categoryId,
                    categoryName,
                    description,
                    imageUrl,
                    price,
                }
            })
            return { massage: "Kitob yaratildi", status: "200" }
        } else {
            return { massage: "Malumot toliq kiritilmagan", status: "400" }
        }

    } catch (error) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", status: "500", error }
    }
}


export async function getCategory() {
    try {
        // get all category
        const category = await prisma.category.findMany();

        // if category not found return error 
        if (!category)
            return {
                massage: "catigoys not found please create one",
                status: "404",

            }

        // if category a found return category 
        return {
            massage: "success",
            category,
            status: "200"
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error, status: "500" }
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
                status: "404",
            }

        // if category a found return category 
        return {
            massage: "success",
            books,
            status: "200"
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", status: "500", error }
    }
}



interface getCategoryByTitleProps {
    title: string
}

export async function getCategoryByTitle(categoryTitle: getCategoryByTitleProps) {
    try {
        // get all category
        const category = await prisma.category.findMany();

        // if category not found return error 
        if (!category)
            return {
                massage: "catigoys not found please create one",
                status: "404",

            }

        // if category a found return category 
        const FiltredCategory = category.find(category => category.title === categoryTitle.title)
        return {
            massage: "success",
            FiltredCategory,
            status: "200"
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error, status: "500" }
    }
}





export async function delBookById(bookId: string) {
    try {
        // if category not found return error 
        if (!bookId.length)
            return {
                massage: "Malumot toliq kiritilmagan",
                status: "404",

            }
        // get all category
        const book = await prisma.book.delete({
            where: {
                id: bookId
            }
        });


        // if category a found return category 
        return {
            massage: "Kitob o'chirildi",
            book,
            status: "200"
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error, status: "500" }
    }
}