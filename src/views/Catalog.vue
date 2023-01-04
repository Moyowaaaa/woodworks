<template>
    <div class="flex flex-col min-h-screen h-auto">


      
        <div class="jumbotron w-full h-[60vh]">
            <Navbar />
        </div>
        
            <div class="w-10/12 mx-auto ">
                <h1 class="font-[avenir-medium]  pt-6   ">Catalog</h1>
                <div class="w-full  grid grid-cols-5 grid-rows-4  gap-4 py-12">
                    <StoreProductCard :product="product" v-for="product in ProductStore.products"/>
                 
                </div>

                <!-- <div class=" flex flex-wrap gap-4  w-full border-2 border-[red]">

                    <StoreProductCard :product="product" v-for="product in ProductStore.products"/>
                <StoreProductCard />
                </div> -->


            </div>
   
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import TestCard from '@/components/TestCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import useProductStore from '@/stores/ProductStore';
import StoreProductCard from '../components/StoreProductCard.vue'
const ProductStore = useProductStore()



</script>

<style scoped>
.jumbotron{
    background-image: url('images/catalog.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>