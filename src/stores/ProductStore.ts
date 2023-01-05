import { defineStore } from "pinia";

type Product= {
    name:string,
    category:string,
    description:string,
    id:string,
    image:string,
    price:number
    colors:[string,string]
    company:string

}

const useProductStore = defineStore('ProductStore', {
    state:() => ({
        products:[] as unknown as Product[],
        loading:false as boolean,
        selectedProduct:[]
    }),
    getters:{
       async getProducts() {
        this.loading = true
        const res = await fetch('https://course-api.com/react-store-products')
        const data = await res.json()
        console.log({data})
        this.loading = false
        this.products = data
       },
     getSingleProduct: (state) => {
        return (productId:any) => (state.products.filter((product) => product.id === productId))   
        // this.loading = true
        // const res = await fetch(`https://course-api.com/react-store-product?id=${productId}`)
        // const data = await res.json()
        // console.log(data)
        // this.loading = false
        // this.selectedProduct = data
   
       }
    },
  


})


export default useProductStore