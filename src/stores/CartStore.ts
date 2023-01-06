import { defineStore } from "pinia";
import useProductStore from "./ProductStore";


interface Item {
    id:number,
    quantity:number
}

interface Product extends Item {
    id:number,
    image:string
    name:string
    price:string
    category:string
    type:string
    size:string
    material:string
    country:string
    // colors:['black','g
    productCode:number
    large:boolean
    slug:string
    Limage:string
}

const useCartStore = defineStore('cart', {
    state:() => ({
        cart:[] as Item[]
    }),
    getters: {
        itemsInCart:(state) => {
          return state.cart.length
        },
    
    },
    actions: {
        addItemToCart(id:number, quantity=1) {
            const ItemId = this.cart.find((product:Item) => product.id === (+id))
            if(ItemId) {
                ItemId.quantity ++
            } else {
                this.cart.push({id, quantity})
            }
            
        },
        increaseItem(id:number) {
            const ItemId  = this.cart.find((item) => item.id === (+id))
            if(ItemId) {
                ItemId.quantity ++
            }
        },
        decreaseItem(id:number) {
            const ItemId  = this.cart.find((item) => item.id === (+id))
            if(ItemId) {
                ItemId.quantity --
            }
        },

        removeItemFromCart(id:number) {
            this.cart = this.cart.filter((item) => item.id ! == (+id))
        }
        
    }




})

export default useCartStore;