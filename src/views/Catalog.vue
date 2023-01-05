<template>
    <div class="flex flex-col min-h-screen h-auto">


      
        <div class="jumbotron w-full h-[60vh]">
            <Navbar />

            <div class="relative h-full w-full  flex flex-col justify-center pl-24">

                <div class="w-full ">
                    <!-- <h2>Catalog</h2> -->
                    <small class="font-[avenir-light] text-lg">Catalog</small>
                        <h1 class="font-[avenir-medium] text-[#005454] text-4xl">NEW CHAIR COLLECTION</h1>
                        <p class="text-lg font-[avenir-medium]">Sofa Chairs, Dining Chair, Hull Chair, Nolan Chair, Mordern Chair, Ingatop Chair.</p>
                </div>
            </div>

      
           
        </div>
        
            <div class="w-10/12 mx-auto ">
                <h1 class="font-[avenir-medium]  pt-6   ">Catalog</h1>
                <div class="w-full  grid grid-cols-4 grid-rows-3  gap-4 py-12">
                    <StoreProductCard :product="product" v-for="product in ProductStore.products"/>
                 
                </div>

                <!-- <div class=" flex flex-wrap gap-4  w-full border-2 border-[red]">

                    <StoreProductCard :product="product" v-for="product in ProductStore.products"/>
                <StoreProductCard />
                </div> -->


            </div>
            <Footer />
   
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import TestCard from '@/components/TestCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import Footer from '@/components/Footer.vue';
import useProductStore from '@/stores/ProductStore';
import StoreProductCard from '../components/StoreProductCard.vue'
const ProductStore = useProductStore()

console.log(ProductStore.getProducts)


</script>

<style scoped>
.jumbotron{
    background-image: url('../assets/images/catalog.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>