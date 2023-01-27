import { defineStore, acceptHMRUpdate } from "pinia";
import useProductStore from "./ProductStore";
import useToastStore from "./ToastStore";
import type { Item, Product } from "@/types/interfaces";
const ToastStore = useToastStore()


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
                ToastStore.itemIncreaased()
            } else {
                this.cart.push({id, quantity})
                ToastStore.success()
            }
            
        },
        increaseItem(id:number) {
            const ItemId  = this.cart.find((item) => item.id === (+id))
            if(ItemId) {
                ItemId.quantity ++
                ToastStore.itemIncreaased()
            }
            
        },
        decreaseItem(id:number) {
            const ItemId = this.cart.find((item) => item.id === (+id));
        if (ItemId) {
            ItemId.quantity--;
            ToastStore.ItemDecreased()
            if (ItemId.quantity <= 0) {
                this.removeItemFromCart(id);
                ToastStore.ItemRemoved()
            }
        }
        },

        removeItemFromCart(id:number) {
            this.cart = this.cart.filter((item) => item.id !== (+id))
            ToastStore.ItemRemoved()
        }
        
        
    }




})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}


export default useCartStore;