<template>
    <div class="flex flex-col">
        <Navbar />
<MainLayout >
        <div class="flex flex-col lg:px-10 py-10" id="page">

<div class="flex flex-col gap-2 mt-8" id="page">
    
    <div class="link flex flex-col lg:flex-row items-center w-max" @click="router.back()"> <img src="../assets/images/rightArrow.svg" class="w-[30px]"/> Back</div>
<div class="flex flex-wrap items-center gap-2 font-[avenir-medium]">
    <p>Catalog /</p>  <p> {{ product?.type }}s / </p> <p class="font-[avenir-bold]">{{ product?.name }}</p></div>
<h1 class="text-4xl text-[#02886B] font-medium">{{ product?.name }}</h1>
<div class="flex flex-col lg:flex-row gap-2 lg:gap-6 font-[avenir-medium] font-medium">
    <p>Product Code: {{ product?.productCode }}</p>

    <p>{{ reviews }} Reviews</p>

    <p>Bought over {{ numberOfTimesBought }} times</p>




</div>

<div class="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-6">
    <div class="w-full lg:w-6/12 flex flex-col items-center py-8 gap-6 ">

        <div class="bg w-full  rounded-lg h-[25rem]" :style="{ backgroundImage: `url('${product?.Limage}')` }" :class="[product.large === true ? 'bg-transparent' : 'bg-white']"></div>

        <div class="flex flex-col w-full font-[avenir-medium]">
            <div class="flex w-full justify-between items-center">
            <p>Description</p>

            <h1 class="underline text-center font-[avenir-medium] text-[#009676]">Additional Information</h1>

            <p>Reviews</p>
        </div>

        <div class="flex pt-2 justify-between border-b-2 border-b-[#C4C4C4] mt-4 ">
            <p>Category</p>
            <p>{{ product.type }}</p>
        </div>

        <div class="flex pt-2 justify-between border-b-2 border-b-[#C4C4C4]">
            <p>Size</p>
            <p>{{ product.size }}</p>
        </div>

        <div class="flex pt-2 justify-between border-b-2 border-b-[#C4C4C4]">
            <p>Material</p>
            <p>{{ product.material }}</p>
        </div>

        <div class="flex pt-2 justify-between border-b-2 border-b-[#C4C4C4]">
            <p>Brand</p>
            <p>Design PRP</p>
        </div>

        <div class="flex pt-2 justify-between border-b-2 border-b-[#C4C4C4]">
            <p>Country</p>
            <p>{{ product.country }}</p>
        </div>
        </div>

        
        </div>  

        <div class="w-full lg:w-6/12  py-12 flex flex-col gap-2">
            <p class="text-[#02886B] font-[avenir-bold] text-4xl">N{{ product.price }}K</p>

            
  <p class="w-full lg:w-11/12 text-justify font-[avenir]">Natural materials combine with a sculptural silhouette for an irresistible fusion of form and function. This gorgeous Weave solid wood chair Features: an artfully tapered frame complete with a contrasting rope woven seat that will keep you sitting comfortably for hours on end.</p>


  <div class="w-full flex my-8 gap-2">
    <button class="py-4 px-8 bg-[#02886B] border-none - outline-none text-white " @click="addToCart">Add To Cart</button>
    <!-- <button class="bg-black py-4 px-5"><img src="../assets/images/star.svg"/></button> -->
  </div>
        </div>

       
        

</div>
<div class="w-full  flex flex-col">
    <h2 class="py-4 text-3xl font-[avenir-bold]">You might like</h2>

    <div class="w-full flex gap-8 overflow-x-scroll lg:overflow-x-hidden" @click="scrollTop">
            <ProductCard :product="product" v-for="product in ProductStore.bestSellers.slice(0,4)"/>
          </div> 
    
</div>

</div>
</div>
</MainLayout>
    </div>
    
</template>

<script setup lang="ts">
import { onMounted,ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useProductStore from '@/stores/ProductStore';
import Navbar from '@/components/Navbar.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ProductCard from '@/components/ProductCard.vue';
import useCartStore from '@/stores/CartStore';
import { storeToRefs } from 'pinia';



const ProductStore = useProductStore()

const route = useRoute();
const router = useRouter();
let reviews = ref( Math.floor(Math.random() * 15)+ 4)
let numberOfTimesBought = ref( Math.floor(Math.random() * 30) +5)
const CartStore = useCartStore()



let product = ref()

watchEffect(() => {
    const id = route.params.id as any
    if(!ProductStore.productById(id)) {
        router.push('/')
    } else {
        product.value = ProductStore.productById(id)
    }
 
})


onMounted(() => {
    let page:any = document.querySelector('#page')
    setTimeout(() => {
        page.scrollIntoView()
    },200)


  
})

const scrollTop = () => {
    let page:any = document.querySelector('#page')
    page.scrollIntoView({
        behavior: 'smooth'
    })
}


const addToCart = () => {
    CartStore.addItemToCart(product.value.id, 1)
    
}







</script>

<style scoped>
.bg{
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
}



</style>