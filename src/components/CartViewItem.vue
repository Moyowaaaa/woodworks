<template>
      <div class="w-full lg:w-11/12  flex flex-col lg:flex-row py-4 border-t-2 border-t-[#C4C4C4] " >
                        <div class="w-full lg:w-8/12 cursor-pointer" @click="viewProduct(cartItem.id)">
                            <div class="flex flex-col lg:flex-row items-center gap-6 h-[18rem] py-6 lg:py-0">
                                <div class="image  rounded-md w-11/12 lg:w-4/12" :class="[cartItem.large? 'bg-none h-full' : 'bg-white  h-4/5 ']"   :style="{ backgroundImage: `url('${cartItem.image}')` }"></div>

                                <div>
                                    <h2 class="font-[avenir-medium] text-lg">{{ cartItem.name }}</h2>
                                 

                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-2/12 flex items-center justify-center flex-col">
                            <div class="flex items-center gap-4 cursor-pointer text-xl">
                                <p @click="CartStore.decreaseItem(cartItem.id)">-</p>    
                                
                                {{ cartItem.quantity }} 
                                
                                <p @click="CartStore.increaseItem(cartItem.id)">+</p></div>
                        </div>

                        <div class="w-full lg:w-2/12 ">
                        
                            <div class="relative w-full  h-full lg:flex flex-col">
                                <div class="relative bottom-80 w-max mx-auto lg:mx-0 flex justify-center  lg:bottom-0 lg:left-28 cursor-pointer hover:border-b-2 hover:border-b-[teal] lg:w-max" @click="CartStore.removeItemFromCart(cartItem.id)">
                                    <img src="../assets/images/close.svg" class="w-[1rem]" />
                                </div>
                                <div class="h-full w-full flex flex-col items-center justify-center text-[#02886B] font-[avenir-medium] text-xl">
                                    N{{ cartItem.price }}K
                                </div>
                               
                            </div>
                        </div>
                     </div>
</template>

<script setup lang="ts">
import useCartStore from '../stores/CartStore'
import { useRouter } from 'vue-router';
const router = useRouter()

const CartStore = useCartStore()


defineProps(['cartItem'])

const viewProduct = (id:number) => {
    router.push({ name:'item-id', params: {id}})
}
</script>

<style scoped>
.image{
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>