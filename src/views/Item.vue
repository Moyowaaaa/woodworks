<template>
    <div>
        <Navbar />

        
        <div class="flex flex-col px-10 py-10">

<div class="flex flex-col gap-2 mt-8">
    <div class="flex items-center gap-2">Catalog / {{ product?.category }}s /{{ product?.name }}</div>
    <h1 class="text-4xl text-[#02886B] font-medium">{{ product?.name }}</h1>
    <div class="flex">Product Code: {{ product?.productCode }}</div>

</div>


<div class="w-full flex justify-center gap-4 ">

    <div class="w-6/12 flex flex-col items-center py-8 gap-6">

       <div class="bg w-full  rounded-lg h-[25rem]" :style="{ backgroundImage: `url('${product?.Limage}')` }" :class="[product.large === true ? 'bg-transparent' : 'bg-white']"></div>
            
            

        <div class="flex flex-col border-2 border-[green] w-9/12">
            <h1 class="underline text-center font-[avenir-medium] text-[#009676]">Additional Information</h1>
        </div>
       
    </div>
    <div class="w-5/12  py-12 flex flex-col gap-2">
      <p class="text-[#02886B] font-[avenir-bold] text-xl">{{ product.price }}</p>

      <p class="w-[25rem] text-justify">{{ product?.description }}</p>
    </div>
</div>
</div>

</div>
    
</template>

<script setup lang="ts">
import { onMounted,ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useProductStore from '@/stores/ProductStore';
import useItemStore from '@/stores/ItemStore';
import Navbar from '@/components/Navbar.vue';
const ProductStore = useProductStore()
const ItemStore = useItemStore()
const route = useRoute();
const router = useRouter();

let product = ref()


watchEffect(() => {
    const id = route.params.id as any
    console.log(typeof(id))

    product.value = ItemStore.productById(id)


    console.log(product.value)

    // console.log(ProductStore.singleProduct(id))

})




</script>

<style scoped>
.bg{
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}

</style>