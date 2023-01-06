<template>
  
    <div class="w-3/12 rounded-xl bg-[#ffffff] p-4 flex flex-col gap-4 items-center justify-center ">
        <RouterLink :to="('/item/' + product.id)">
        <div class="h-full w-full">
            

        <img :src="product.image" />
        <div class="w-full  flex justify-between items-center">
            <div class="font-[avenir-bold]"> {{ product.name }} <br/>
            {{ product.productCode }}

        </div>
            <div>
                <small class="">Goal Design</small>
                <p class="font-[avenir-bold] text-[#57A695] text-xl">{{ product.price }}</p>
            </div>
        </div>
        
        </div>
    </RouterLink>   
        </div>

    
      

</template>

<script setup lang="ts">
// type item = {
//     name:string,
//     category:string,
//     description:string,
//     id:string,
//     image:string,
//     price:number
//     colors:[string,string]
//     company:string,
//     productCode:number

import router from '@/router';

// }
// interface Product {
//     product:item
// }

defineProps(['product'])




</script>

<style scoped>

</style>