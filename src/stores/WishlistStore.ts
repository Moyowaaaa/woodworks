import { defineStore,acceptHMRUpdate } from "pinia";
import useProductStore from "./ProductStore";
import useToastStore from "./ToastStore";
import type { Product, wishListItem } from "@/types/interfaces";


const useWishlistStore = defineStore('WishlistStore', {
    state:() => ({
        wishlist:[] as unknown as wishListItem[]
    }),
    getters: {
        favouritesCount: (state) =>{
            return state.wishlist.length
        },
        itemsinWishlist:(state) => {
            const ProductStore = useProductStore()
            let wishlistProducts: Product[] = [];
            state.wishlist.forEach((item) => {
                const product:any = ProductStore.products.find((product) => product.id === item.id)
                if(product) {
                    wishlistProducts.push({...product,...item})
                }
            });
            return wishlistProducts;
        }
    },
    actions: {
        addItemToWishList(id:number){
            const itemId = this.wishlist.find((product:wishListItem) => product.id === (+id))
            if(itemId) {
                this.wishlist.push({id})
            }
        },
        removeItemfromWishlist(id:number){
            this.wishlist = this.wishlist.filter((item) => item.id !== (+id))
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useWishlistStore, import.meta.hot));
}


export default useWishlistStore;