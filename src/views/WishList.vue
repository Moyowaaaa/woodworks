<template>
    <div class="">
        <Navbar />
        <WishListEmpty />
      
            <div class=" mt-24 flex flex-col " v-if="wishlist.length > 0">

                <div class="px-10">
                    <div class="flex items-center text-[#57A695] text-sm pt-6">
                            <p class="font-[avenir-light]">Categories /</p>
                            <p class="font-[avenir-medium]">WishList</p>
                        </div>

            <h1 class="text-4xl font-[avenir-medium] text-[#02886B] pt-8 pb-8">WishList</h1>

            

            <div class="w-full  flex flex-col">
                <div class="w-full py-2">Products</div>
                </div>
               

                <!-- <div class="flex  flex-wrap border-2 border-[blue]">
                    <WishListItem :product="item" v-for="item in itemsinWishlist " />
                </div> -->
               
            </div>

           <div class="w-full  py-4">
            <div class="w-11/12 mx-auto flex gap-2 flex-wrap px-6">
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

const {wishlist, itemsinWishlist} = storeToRefs(useWishlistStore())

console.log({wishlist})
</script>

<style scoped>

</style>