interface bookData {
    name: string,
    categoryName: string,
    description: string,
    imageUrl: string,
    price: string,
    categoryId: string
    createdAt?: string
    bookId?: string
}

interface categoryData {
    title: string
    categoryId?: string
    id?: string
}

interface UsersProps {
    categoryId: string
    categoryName: string
    description: string
    id: string
    imageUrl: string
    name: string
    price: string
}


interface bookType {
    count: number | null,
    data: string
}