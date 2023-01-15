<template>
    <div>
        <Navbar />

     
            <CartEmptyState />
      
       


        <MainLayout v-if="CartStore.itemsInCart > 0">
            <div class="min-h-screen flex flex-col mt-12">


                <div class="flex items-center text-[#57A695] text-sm pt-6">
                            <p class="font-[avenir-light]">Categories /</p>
                            <p class="font-[avenir-medium]">Shopping Cart</p>
                        </div>

                        <h1 class="text-4xl font-[avenir-medium] text-[#02886B]">Shopping Cart</h1>

                <div class="flex justify-center gap-4 flex-col lg:flex-row ">
                    <div class="w-full lg:w-9/12 flex flex-col gap-4">
                        <div class="w-11/12 flex items-center font-[avenir-medium] pt-6">
                            <div class="w-8/12 ">Product</div>
                            <div class="w-2/12 hidden lg:flex justify-center">Quantity</div>
                            <div class="w-2/12 hidden lg:flex justify-center">Price</div>
                        </div>


                   
                     <div v-for="cartItem in CartStore.productsInCart">
                        <CartViewItem :cartItem="cartItem" />
                    </div>
                    
                 
                        
                    

                    </div>
                    <div class="w-full lg:w-3/12  bg-white flex flex-col py-12 px-4 h-max">
                        
                        <div class="flex justify-between">
                            <p class="text-[#02886B] font-[avenir-medium]">Your Cart</p>

                          <div class="items-center flex gap-1">  {{ CartStore.itemsInCart }} <p>Item<span v-if="CartStore.itemsInCart > 1">s</span></p> </div>    
                        </div>

                            <div class="my-4 border-y-2 border-y-[#C4C4C4] py-4 flex justify-between">
                                <p>Subtotal</p>
                                <p>N{{ CartStore.totalAmountOfItemInCart}}K</p>
                            </div>

                            <div class="flex justify-between text-[#02886B] text-lg font-[avenir-medium]">
                                <p>Total</p>
                                <p>N{{ CartStore.totalAmountOfItemInCart}}K</p>
                            </div>

                            <button class="py-2 px-4 text-white bg-[#57A695] flex items-center justify-center my-6">Go to checkout</button>


                       
                        
                    </div>
                </div>
            </div>
        </MainLayout>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted } from 'vue';
import useCartStore from '../stores/CartStore'
import CartViewItem from '../components/CartViewItem.vue'
import CartEmptyState from '@/components/CartEmptyState.vue';




const CartStore = useCartStore()


</script>

<style scoped>

</style>