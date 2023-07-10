

export interface Product{
    id?:number;
    label:string;
    basePrice:number;
    description:string;
    picture:string;
    id_shop:number;
}
export interface Shop{
    id?:number;
    name:string;
    address:string;
}

export interface Order{
    id?:number;
    createAt:Date;
    customerName : string;
    idProduct : number;
} 

export interface Option{
    id?:number;
    label:string;
    price:number;
    idProduct:number;
}




