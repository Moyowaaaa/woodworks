export interface Item {
    id:number,
    quantity:number 
}


export interface wishListItem {
    id:number,
    inList?:boolean
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
    medium?:boolean,
    scale:string
  
}

export interface ProductColors{
    name:string,
    color:string
}