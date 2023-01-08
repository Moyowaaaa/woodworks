<template>
  
    <div class="w-11/12 lg:w-3/12 rounded-xl bg-[#ffffff] p-4 lg:p-4 flex flex-col gap-4 lg:items-center lg:justify-center ">
        <RouterLink :to="('/item/' + product.id)">
        <div class="h-full w-full flex flex-col items-center lg:block">
            

        <img :src="product.image" />
        <div class="w-[16rem] px-8 text-xs lg:text-base lg:w-full flex lg:gap-12  justify-between items-center px-2 lg:px-0">
            <div class="font-[avenir-bold]"> {{ product.name }} <br/>
            {{ product.productCode }}

        </div>
            <div>
                <small class="">Goal Design</small>
                <p class="font-[avenir-bold] text-[#57A695] text-base lg:text-xl">{{ product.price }}</p>
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
@media screen and (max-width:485px) {
 
}
</style>