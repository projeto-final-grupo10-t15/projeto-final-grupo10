export interface iChildren {
    children: React.ReactNode;
}

export interface ICars {
    id?: number;
    brand: string;
    model: string;
    year: number;
    fuel_type: string;
    mileage: number;
    color: string;
    FIPE_price: number | string;
    price: number | string;
    description: string;
    cover_image: string;
    first_image: string;
}