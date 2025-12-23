export interface Products {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category

}

 type Category = {
    id: number;
    name: string;
    image: string;
    slug: string
}