import { defineStore } from "pinia";
import useProductStore from "./ProductStore";


interface Item {
    id:number,
    quantity:number,
    slug:string
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
        numberOfItems:(state) => {
          return state.cart.length
        },
        productsInCart(state) {
            const ProductStore = useProductStore()
           
            // let cartProducts:any = [];
            // state.cart.forEach((cartItem) => {
            //     const productIndex = ProductStore.products.findIndex((product) => product.slug === cartItem.slug);
            //     if (productIndex > -1) {
            //         cartProducts.push({ ...ProductStore.products[productIndex], ...cartItem });
            //     }
            // });

            // return cartProducts;

         
        
        },
        totalAmountOfProductsInCart() {
            let total = 0;
            this.cart.forEach((product) => {
                total += product.quantity * product.price;
            });
            return total;
        },
    
    },
    actions: {
        addItemToCart(id:number, quantity=1, slug:string) {
            const ItemId = this.cart.find((product:Item) => product.id === (+id))
            if(ItemId) {
                ItemId.quantity ++
            } else {
                this.cart.push({id, quantity, slug})
              
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
        
    },
  




})

export default useCartStore;