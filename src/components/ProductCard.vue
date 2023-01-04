<template>
    <div class="w-3/12 rounded-xl bg-[#ffffff] p-4 flex flex-col gap-4 items-center justify-center ">
        <img :src="product.image" />
        <div class="w-full  flex justify-between items-center">
            <div class="font-[avenir-bold]"> {{ product.name }} <br/>
            {{ product.id }}

        </div>
            <div>
                <small class="">Goal Design</small>
                <p class="font-[avenir-bold] text-[#57A695] text-xl">{{ product.price }}</p>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
type ProductProps ={
    image:string,
    name:string,
    price:string
    id:number
}

interface Product {
    product:ProductProps
}

defineProps<Product>()


</script>

<style scoped>

</style>