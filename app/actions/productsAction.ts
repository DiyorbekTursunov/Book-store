"use server"

import prisma from '@/db/prisma'
import { revalidatePath } from 'next/cache';



// this is function create catigory

export async function createCatigory(categoryData: categoryData,) {
    const { title } = categoryData
    try {
        // Create a new category
        if (!title)
            return { massage: "Malumot to'liq kiritilmagan", status: "404" }

        await prisma.category.create({
            data: {
                title: title.toLowerCase(),
            },
        });
        revalidatePath("/admin")

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

        //cheack if catigoryId not available return error
        if (!Allcategory.find((element) => element.id === categoryId))
            return { massage: "Categoriya mavjud emas !", status: "400" }

        //cheack if all cridentials available create book
        if (name.length && price.length && imageUrl.length && description.length && categoryId.length && categoryName.length) {
            await prisma.book.create({
                data: {
                    name: name.toLowerCase(),
                    categoryId,
                    categoryName: categoryName.toLowerCase(),
                    description: description.toLowerCase(),
                    imageUrl,
                    price,
                }
            })
            return { massage: "Kitob yaratildi", status: "201" }
        } else {
            return { massage: "Malumot toliq kiritilmagan", status: "400" }
        }

    } catch (error) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", status: "500", error }
    }
}



export async function updateBook(bookData: bookData) {
    const { categoryId, categoryName, description, imageUrl, name, price, bookId } = bookData

    try {
        // get all categoys
        const Allcategory = await prisma.category.findMany();

        //cheack if catigoryId not available return error
        if (!Allcategory.find((element) => element.id === categoryId))
            return { massage: "Categoriya mavjud emas !", status: "400" }

        //cheack if all cridentials available create book
        if (name.length && price.length && imageUrl.length && description.length && categoryId.length && categoryName.length) {
            await prisma.book.update({
                where: {
                    id: bookId
                },
                data: {
                    categoryId,
                    categoryName: categoryName.toLowerCase(),
                    description: description.toLowerCase(),
                    imageUrl,
                    name: name.toLowerCase(),
                    price
                }
            })
            return { massage: "Kitob o'zgartirildi", status: "201" }
        } else {
            return { massage: "Malumot toliq kiritilmagan", status: "400" }
        }

    } catch (error) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", status: "500", error }
    }
}


export async function updateCatigory(categoryData: categoryData,) {
    const { title, categoryId } = categoryData

    try {
        // Create a new category
        if (!title)
            return { massage: "Malumot to'liq kiritilmagan", status: "404" }

        await prisma.category.update({
            where: {
                id: categoryId
            },
            data: {
                title: title.toLowerCase(),
            },
        });
        return { massage: "categorya muvafaqiyatli o'zgartirildi", status: "201" }

    } catch (error: any) {
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
        // del all category
        const bookData = await prisma.book.delete({
            where: {
                id: bookId
            }
        });

        if (!bookData) {
            return {
                massage: "Bad request",
                status: "500"
            }
        }
        
        // if category a found return category 
        return {
            massage: "Kitob o'chirildi",
            status: "200"
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error, status: "500" }
    }
}




export async function getBookById(bookData: bookType[]) {
    try {
        // if category not found return error 
        if (!bookData.length)
            return {
                message: "Malumot toliq kiritilmagan",
                status: "404",
            }

        // Retrieve all book details concurrently
        const bookDetailPromises = bookData.map(async (book) => {
            const count = (book.count && book.count > 0 && book.count <= 10) ? book.count : null;

            const bookDetail = await prisma.book.findUnique({
                where: {
                    id: book.data
                }
            });
            if (!bookDetail) {
                return {
                    count,
                    data: null,
                };
            }
            return {
                count,
                data: bookDetail
            };
        });

        // Wait for all promises to resolve
        const bookDetails = await Promise.all(bookDetailPromises);
        // if category a found return category 

        return {
            message: "success",
            bookDetails,
            status: "200"
        }
    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error, status: "500" }
    }
}









export async function delCategoryById(categoryId: string) {
    try {
        // if category not found return error 
        if (!categoryId.length)
            return {
                massage: "Malumot toliq kiritilmagan",
                status: "404",
            }
        // del all category
        await prisma.category.delete({
            where: {
                id: categoryId
            }
        });
        revalidatePath("/admin")

        // if category a found return category 
        return {
            massage: "Bo'lim o'chirildi",
            status: "200"
        }

    } catch (error: any) {
        return { massage: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error, status: "500" }
    }
}



export async function searchBooks(bookName: string) {
    try {
        if (!bookName) {
            return {
                massage: "success",
                status: "400"
            }
        }
        // get all category
        const books = await prisma.book.findMany({
            where: {
                name: {
                    contains: bookName.toLowerCase()
                },
            }
        })

        // if category not found return error 
        if (!books.length)
            return {
                massage: "Kitob topilmadi!",
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
