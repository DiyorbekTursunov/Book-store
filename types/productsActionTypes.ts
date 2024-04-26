interface bookData {
    name: string,
    categoryName: string,
    description: string,
    imageUrl: string,
    price: string,
    categoryId: string
}

interface categoryData {
    title: string
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