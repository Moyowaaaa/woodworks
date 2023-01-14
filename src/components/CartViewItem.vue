<template>
      <div class="w-11/12  flex  py-4 border-t-2 border-t-[#C4C4C4]">
                        <div class="w-8/12 ">
                            <div class="flex items-center gap-6 h-[18rem]">
                                <div class="image h-4/5  bg-white rounded-md w-4/12" :style="{ backgroundImage: `url('${cartItem.image}')` }"></div>

                                <div>
                                    <h2 class="font-[avenir-medium] text-lg">{{ cartItem.name }}</h2>
                                 

                                </div>
                            </div>
                        </div>
                        <div class="w-2/12 flex items-center justify-center flex-col">
                            <div class="flex items-center gap-4 ">
                                <p @click="CartStore.decreaseItem(cartItem.id)">-</p>    
                                
                                {{ cartItem.quantity }} 
                                
                                <p @click="CartStore.increaseItem(cartItem.id)">+</p></div>
                        </div>

                        <div class="w-2/12 ">
                        
                            <div class="relative w-full  h-full flex flex-col">
                                <div class="relative left-28 cursor-pointer hover:border-b-2 hover:border-b-[teal] w-max" @click="CartStore.removeItemFromCart(cartItem.id)">
                                    <img src="../assets/images/close.svg" class="w-[1rem]" />
                                </div>
                                <div class="h-full w-full flex flex-col items-center justify-center text-[#02886B] font-[avenir-medium] text-xl">
                                    {{ cartItem.price }}
                                </div>
                               
                            </div>
                        </div>
                     </div>
</template>

<script setup lang="ts">
import useCartStore from '../stores/CartStore'


const CartStore = useCartStore()
console.log(CartStore.productsInCart)

defineProps(['cartItem'])
</script>

<style scoped>
.image{
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>