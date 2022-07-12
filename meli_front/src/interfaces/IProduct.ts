interface Product {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    location: string;
    description: string;
}

export interface IProducts {
    products: IProduct[];
}

export interface IProduct {
    product: Product;
}