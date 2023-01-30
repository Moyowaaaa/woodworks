<script setup lang="ts">
import useWishlistStore from '@/stores/WishlistStore';
import type { Product } from '@/types/interfaces';


interface productProps{
    product:Product
}

const props = defineProps<productProps>()

const wishlistStore = useWishlistStore()

const removefromList = () => {
    wishlistStore.removeItemfromWishlist(props.product.id)
}

</script>

<template>
   <!-- <div class="w-11/12 lg:w-[20rem] rounded-xl bg-[#ffffff] p-4 lg:p-4 flex flex-col gap-4 lg:items-center lg:justify-center ">
        <RouterLink :to="('/item/' + product.id)">
        <div class="h-full w-full flex flex-col items-center lg:block">
            <div class="h-4/5">
                <img :src="product.image" alt="product image" width="300" height="500"/>
            </div>
       -->
        

        <!-- <div class="w-[16rem] px-8 text-xs lg:text-base lg:w-full flex lg:gap-12  justify-between items-center px-2 lg:px-0">
            <div class="font-[avenir-bold]"> {{ product.name }} <br/>
            {{ product.productCode }}

        </div>
            <div>
                <small class="">Goal Design</small>
                <p class="font-[avenir-bold] text-[#57A695] text-base lg:text-xl">N{{ product.price }}K</p>
            </div>
        </div> -->
        
        <!-- </div>
    </RouterLink>   
        </div> -->

        <div class="w-[20rem] h-[25rem] bg-white  rounded-xl px-2">
            <RouterLink :to="('/item/' + product.id)">
            <div class="h-4/5 flex items-center justify-center">
                <img :src="product.image" alt="product image" width="300" height="500"/>
            </div>
        </RouterLink>

            <div class="h-1/5  flex flex-col justify-end pb-3">
                <div class="flex justify-between items-end">
                    <h1 class="font-[avenir-bold] text-lg"> {{ product.name }} </h1>

                    <button class="p-2 rounded-full bg-white" @click="removefromList"><img src="../assets/images/star3.svg" /></button>
                </div>
               
            </div>
           
        </div>

    
</template>



<style lang="scss" scoped>

</style>