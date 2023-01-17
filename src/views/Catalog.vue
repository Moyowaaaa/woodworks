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

<div class="w-10/12 mx-auto ">
                <h1 class="font-[avenir-medium]  pt-6   ">Catalog</h1>
                <div class="w-full  grid auto-rows-1 lg:grid-cols-5 lg:grid-rows-4  gap-4 py-12">
                    <StoreProductCard :product="product" v-for="product in products"/>

                  
                 
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
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const ProductStore = useProductStore()
const {products} = storeToRefs(ProductStore)

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