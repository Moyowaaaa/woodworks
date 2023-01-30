import { defineStore,acceptHMRUpdate } from "pinia";
import useProductStore from "./ProductStore";
import useToastStore from "./ToastStore";
import type { Product, wishListItem } from "@/types/interfaces";
const ToastStore = useToastStore()

const useWishlistStore = defineStore('WishlistStore', {
    state:() => ({
        wishlist:[] as unknown as wishListItem[],
        isInWishList:false,
    }),
    getters: {
        favouritesCount: (state) =>{
            return state.wishlist.length
        },
        itemExists:(state) => {

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
        addItemToWishList(id:number,inList:boolean = true){
            const itemId = this.wishlist.find((product:wishListItem) => product.id === (+id))
            if(!itemId) {
                this.wishlist.push({id,inList})
                ToastStore.addedWishList()
            }
        },
        removeItemfromWishlist(id:number){
            this.wishlist = this.wishlist.filter((item) => item.id !== (+id))
            ToastStore.removedWishList()
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useWishlistStore, import.meta.hot));
}


export default useWishlistStore;