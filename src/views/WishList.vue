<template>
    <div class="">
        <Navbar />
        <WishListEmpty />
      
            <div class=" mt-24 flex flex-col " v-if="wishlist.length > 0">

                <div class="px-4 lg:px-10">
                    <div class="flex items-center text-[#57A695] text-sm pt-6">
                            <p class="font-[avenir-light]">Categories /</p>
                            <p class="font-[avenir-medium]">WishList</p>
                        </div>

                        <div class="w-full flex flex-col lg:flex-row  lg:items-center justify-between">
                            <h1 class="text-4xl font-[avenir-medium] text-[#02886B] lg:pt-8 lg:pb-8">WishList</h1>
                            <div class="flex gap-2 text-xl font-[avenir-medium] text-[#02886B]">
                                {{ wishlist.length }}
                                <p >Item<span v-if="wishlist.length > 1 ">s</span></p>
                            </div>
                        
                        </div>
            

            

            <div class="w-full  flex flex-col">
                <div class="w-full py-2">Products</div>
                </div>
               
               
            </div>

           <div class="w-full  py-4">
            <div class="w-11/12 mx-auto flex gap-2 flex-wrap lg:px-6">
                <WishListItem :product="item" v-for="item in itemsinWishlist "  />
            </div>

           </div>
                    
              

                
          
         


           
        </div>
      

        
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import WishListEmpty from '../components/WishListEmptyState.vue'
import useWishlistStore from '@/stores/WishlistStore';
import { storeToRefs } from 'pinia';
import MainLayout from '@/layouts/MainLayout.vue';
import WishListItem from '../components/WishListItem.vue'
import { ref } from 'vue';

const {wishlist, itemsinWishlist} = storeToRefs(useWishlistStore())

let product:any = ref<any>()



</script>

<style scoped>

</style>