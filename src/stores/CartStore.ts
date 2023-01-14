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
    price:number
    category:string
    type:string
    size:string
    material:string
    country:string
    // colors:['black','g
    productCode:number
    large:boolean
    slug:string
    Limage:string,
    quantity:number
}

const useCartStore = defineStore('cart', {
    state:() => ({
        cart:[] as Item[]
    }),
    getters: {
        productsInCart: (state) => {
            const ProductStore = useProductStore();
            let cartProducts: Product[] = [];
            state.cart.forEach((item) => {
                const product:any = ProductStore.products.find((product) => product.id === item.id);
                if (product) {
                    cartProducts.push({...product, ...item});
                }
            });
            return cartProducts;
        },
        itemCount():number {
            return this.cart.length
        },
        itemsInCart:(state):number => {
            return state.cart.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
        },


        totalAmountOfItemInCart:(state) => {
            const ProductStore = useProductStore();
            return state.cart.reduce((total, item) => {
                const product = ProductStore.products.find((p) => p.id === item.id);
                if (product) {
                    return total + (product.price * item.quantity);
                }
                return total;
            }, 0);
    
        }

        
    },
    actions: {
        addItemToCart(id:number, quantity:number=1) {
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
            const ItemId = this.cart.find((item) => item.id === (+id));
        if (ItemId) {
            ItemId.quantity--;
            if (ItemId.quantity <= 0) {
                this.removeItemFromCart(id);
            }
        }
        },

        removeItemFromCart(id:number) {
            this.cart = this.cart.filter((item) => item.id !== (+id))
        }
        
        
    }




})

export default useCartStore;