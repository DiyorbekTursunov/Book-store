export interface allCategorys {
    id: string
    title: string
}

export interface Book {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
    categoryId: string;
    categoryName: string;
    createdAt: Date;
  }