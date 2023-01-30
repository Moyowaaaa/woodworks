export interface Item {
    id:number,
    quantity:number 
}


export interface wishListItem {
    id:number
}



export interface Product {
    id:number,
    image:string,
    name:string,
    category:string,
    type:string,
    size:string,
    material:string,
    productCode:number,
    large?:boolean,
    slug:string,
    Limage:string,
    notLarge?:boolean,
    bestSeller?:boolean,
    price:number,
    country?:string
    colors?:ProductColors[],
  
}

export interface ProductColors{
    name:string,
    color:string
}