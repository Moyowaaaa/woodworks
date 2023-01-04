<template>
    <div class="card  min-h-[25rem]  h-auto flex flex-col bg-white  grid  row-span-4 rounded-lg flex flex-col " :class="[product.large=== true ? 'col-span-2' : 'col-span-1' ]"   >
        <div class= "bg w-full flex flex-col items-center justify-center"  :class="[product.large ? 'h-full object-contain' : 'h-[19rem] relative' ]" :style="{ backgroundImage: `url('${product.image}')` }">
              <!-- <img :src="product.image" class=""/> -->
        </div>
        

        <!-- <div class="h-1/6">
            <p>{{ product.name }}</p>
        </div> -->
        <div class=" flex flex-col px-4 font-[avenir]" :class="[product.large ? 'hidden':'h-[6rem] ']">
            <div>{{ product.name }} <br/> {{ product.productCode }}</div>



            <div class="flex justify-between">

                <small>Goal Design</small>

                <p class="font-[avenir-bold] text-lg text-[#57A695]">{{ product.price }}</p>
            </div>
            

            
        
        </div>

    

    
      
    </div>
</template>

<script setup lang="ts">
interface ProductProps {
    image:string,
    name:string,
    price:string
    id:number,
    category:string,
    type:string,
    country:string,
    productCode:number,
    material:string,
    size:string
    bestSeller?:string,
    large?:boolean
}

interface Product {
    product:ProductProps
}

defineProps<Product>()



</script>

<style scoped>
.bg{
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}


</style>