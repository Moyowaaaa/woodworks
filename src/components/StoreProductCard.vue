<template>
    <div class="card  min-h-[25rem]  h-auto flex flex-col bg-white  grid  row-span-4 rounded-lg flex flex-col " :class="[product.large=== true ? 'col-span-2' : 'col-span-1' ]"   >
        <div class= "bg w-full flex flex-col "  :class="[product.large ? 'h-full object-contain' : 'h-[19rem] relative justify-center items-center' ]" :style="{ backgroundImage: `url('${product.image}')` }">
              <!-- <img :src="product.image" class=""/> -->

              <div :class="[product.large ? 'relative left-6 top-10 bg-white w-max py-2 px-4 rounded-xl font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
            {{ product.price }}
            </div>

            <div :class="[product.large ? 'relative left-6 top-64 flex flex-col  w-max py-2 px-4  font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
               <p class="text-xl text-white">{{ product.name }}</p>
               <small class="text-white">Goal Design</small>
                </div>
        </div>
        

        <!-- <div class="h-1/6">
            <p>{{ product.name }}</p>
        </div> -->
        <div class=" flex flex-col px-4 font-[avenir]" :class="[product.large ? 'hidden':'h-[6rem] ']">
            <div>{{ product.name }} <br/> {{ product.productCode }}</div>



            <div class="flex justify-between items-center">

                <small class="text-xs">Goal Design</small>

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
    bestSeller:string | undefined,
    large:boolean | undefined
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