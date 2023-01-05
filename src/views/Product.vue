<template>
    <div>
        <Navbar />
     
        <div class="flex flex-col px-10 py-10">

            <div class="flex flex-col gap-2 mt-8">
                <div class="flex items-center gap-2">Catalog / {{ product[0].category }}s /{{ product[0].name }}</div>
                <h1 class="text-4xl text-[#02886B] font-medium">{{ product[0].name }}</h1>
                <div class="flex">Product Code: {{ product[0].id }}</div>

            </div>


            <div class="w-full flex justify-center gap-4 ">

                <div class="w-6/12 flex flex-col items-center py-8 gap-6">
                    <div class="bg rounded-xl bg-white h-[30rem] w-9/12" :style="{ backgroundImage: `url('${product[0].image}')` }">
                        <!-- <img :src="product[0].image" class="w-9/12 "/> -->
                    </div>


                    <div class="flex flex-col border-2 border-[green] w-9/12">
                        <h1 class="underline text-center font-[avenir-medium] text-[#009676]">Additional Information</h1>
                    </div>
                   
                </div>
                <div class="w-5/12  py-32 flex flex-col gap-2">
                  <p class="text-[#02886B] font-[avenir-bold] text-xl"> N{{ convertedPrice }}K </p>

                  <p class="w-[25rem] text-justify">{{ product[0].description }}</p>
                </div>
            </div>
        </div>
   
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted,ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useProductStore from '../stores/ProductStore'
const ProductStore = useProductStore()
const route = useRoute();
const router = useRouter();

// interface Product {
// id:number,
// image:string,
// name:string,
// price:string,
// category:string,
// type:string,
// size:string,
// material:string,
// country:string,
// productCode:number,
// large:boolean
// slug:string
// }


// let product = ref<Product>()

// watchEffect(() => {
//     const id = route.params.id as any
  

//     product.value = ProductStore.productById(id)


//     console.log(product.value)
// })


let product = ref()

watchEffect(() => {
    const id = route.params.id as any
    console.log(id)
    product.value = ProductStore.getSingleProduct(id)

    console.log(product.value[0].name)

})

const convertedPrice = product.value[0].price.toString().slice(0,3)


</script>

<style scoped>
.bg{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>