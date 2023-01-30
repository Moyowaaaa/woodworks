import { defineStore } from "pinia";

 const useToastStore = defineStore('ToastStore', {
    state:() => ({
        message: '',
        color:'',
        show:false
    }),
    actions:{
         success() {
            this.message = 'Item added to cart',
            this.show = true,
            this.color='#02886B'
            

            setTimeout(() => {
                this.message = '',
                this.show= false
            },2000)
        },
        itemIncreaased() {
            this.message = 'Item quantity increased',
            this.show = true,
            this.color='#02886B'

            setTimeout(() => {
                this.message = '',
                this.show= false
            },2000)
        },
        addedWishList() {
            this.message = 'Item added to Wishlist',
            this.show = true
            this.color='#02886B'
            

            setTimeout(() => {
                this.message = '',
                this.show= false
               
            },2000)
        },


        removedWishList() {
            this.message = 'Item removed from WishList',
            this.show = true
            this.color='orange'
            

            setTimeout(() => {
                this.message = '',
                this.show= false
            },2000)
        },
        ItemDecreased() {
            this.message = 'Item quantity decreased',
            this.show = true
            this.color='orange'
            

            setTimeout(() => {
                this.message = '',
                this.show= false
            },2000)
        },
        ItemRemoved() {
            this.message = 'Item removed from cart',
            this.show = true
            this.color='red'

            setTimeout(() => {
                this.message = '',
                this.show= false
            },4000)
        }
    }
})

export default useToastStore