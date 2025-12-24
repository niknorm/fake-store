export interface Products {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    images: Image;
    category: Category;
    

}

type Category = {
    id: number;
    name: string;
    image: string;
    slug: string

}

type Image = string[]