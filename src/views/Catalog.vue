<template>


    <div class="flex flex-col min-h-screen h-auto">


      
<div class="jumbotron w-full h-[60vh]">
    <Navbar />

    <div class="relative h-full w-full  flex flex-col justify-center pl-6 lg:pl-24">

        <div class="w-full ">
      
            <p class="font-[avenir-medium] font-medium text-sm">Catalog</p>
                <h1 class="font-[avenir-medium] font-semibold text-[#005454] text-3xl lg:text-4xl">NEW CHAIR COLLECTION</h1>
                <p class="text-sm lg:text-lg font-[avenir-medium] font-semibold">Sofa Chairs, Dining Chair, Hull Chair, Nolan Chair, Modern Chair, Ingatop Chair.</p>
        </div>
    </div>


   


   
</div>

<div class="w-11/12 lg:w-10/12 mx-auto  mt-4 ">

    <div class="w-full lg:w-6/12  flex items-center flex-col-reverse lg:flex-row gap-6 lg:grid grid-cols-5 ">

        <div class="flex items-center bg-white py-2  lg:pl-4 rounded-2xl col-span-4 justify-between px-4">
            <input v-model="search" placeholder="Search..." class="w-full lg:w-10/12 h-auto p-1 font-[avenir-medium] border-none outline-none" />
            <div
            class="w-max p-2 rounded-full bg-black flex items-center justify-center"
          >
            <img src="../assets/images/search.svg" class="w-[1rem]" alt="search icon" />
          </div>
        </div>
        

        <h1 class="font-[avenir-medium] text-2xl font-medium ">Catalog</h1>

        
    </div>
                
                <div class="w-full  grid auto-rows-1 lg:grid-cols-5 lg:grid-rows-4  gap-4 py-12">
                    <StoreProductCard :product="product" v-for="product in searchedItem"/>
                </div>

                <div v-if="searchedItem.length === 0" class="h-[40rem] w-full flex flex-col items-center gap-6">
                    <h1 class="text-2xl lg:text-4xl font-bold font-[avenir-bold]">
                        No Products Found.
                    </h1>
                    <p>Please search for something else</p>
                </div>
                </div>

    <Footer />

</div>


</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import Footer from '@/components/Footer.vue';

import StoreProductCard from '../components/StoreProductCard.vue'
import useProductStore from '@/stores/ProductStore';
import { storeToRefs } from 'pinia';
import { onMounted,computed,ref,watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import type { Product } from '@/types/interfaces';

const router = useRouter()
const ProductStore = useProductStore()
const {products} = storeToRefs(ProductStore)
const search = ref<string>('')


    const searchedItem = computed(() => {
    return products.value.filter((product:Product)=> {
        return product.name.toLowerCase().includes(search.value.toLowerCase())

})
})


onMounted(() => {
    if(!products) {
        router.push('/')
    }
})




</script>

<style scoped>
.jumbotron{
    background-image: url('../assets/images/catalog.png');
    background-size: cover;
    background-repeat: no-repeat;
}

@media screen and (max-width:485px) {
    .jumbotron{
        background-size: cover;
        background-position-x:-70vh ;
       
    }
}
</style>