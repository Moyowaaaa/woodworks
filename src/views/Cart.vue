<template>
    <div>
        <Navbar />

        <MainLayout>
            <div class="min-h-screen flex flex-col mt-12">
                <div class="flex items-center text-[#57A695] text-sm">
                            <p class="font-[avenir-light]">Categories /</p>
                            <p class="font-[avenir-medium]">Shopping Cart</p>
                        </div>

                        <h1 class="text-4xl font-[avenir-medium] text-[#02886B]">Shopping Cart</h1>

                <div class="flex justify-center gap-4 ">
                    <div class="w-9/12 flex flex-col gap-4">
                        <div class="w-full flex items-center">
                            <div class="w-6/12">Product</div>
                            <div class="w-3/12">Quantity</div>
                            <div class="w-3/12">Price</div>
                        </div>


                     {{ CartStore.cart }}
                        
                    

                    </div>
                    <div class="w-3/12  bg-white flex flex-col py-12 px-4">
                        
                        <div class="flex justify-between">
                            <p class="text-[#02886B] font-[avenir-medium]">Your Cart</p>

                            {{ CartStore.itemsInCart }} items
                        </div>

                            <div class="my-4 border-y-2 border-y-[#C4C4C4] py-4 flex justify-between">
                                <p>Subtotal</p>
                                <p>N155K</p>
                            </div>

                            <div class="flex justify-between text-[#02886B] text-lg font-[avenir-medium]">
                                <p>Total</p>
                                <p>N140K</p>
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




const CartStore = useCartStore()


</script>

<style scoped>

</style>