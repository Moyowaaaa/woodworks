<template>
      <!-- <RouterLink :to="('/item/' + product.id)"> -->
    <div class="col-span-1 min-h-[20rem] h-auto  flex flex-col gap-2 mb-6" @click="viewProduct(product.id)">
        <!-- <div class="bg h-4/6 border-2 border-[red]" style="{ backgroundImage: `url('${product.image}')` }"></div> -->
        <!-- <img :src="product.image"  class="h-4/6 w-full"/> -->
  
        <div class="bg  w-full h-5/6 rounded-t-xl" :style="{ backgroundImage: `url('${product.image}')` }"></div>
        <div class="flex  p-2 flex flex-col">
            <p class="font-[avenir-medium] text-lg">{{ product.name }}</p>
            <div class="flex justify-between items-center ">
                <small class="text-[#BCBCBC] text-xs">Goal Design</small>
                <p class="text-[#57A695] font-[avenir-bold] text-lg">N{{ convertedPrice}}k</p>
            </div>
        </div>
        
    </div>
<!-- </RouterLink> -->
<!-- 
    <div class="card  min-h-[25rem]  h-auto flex flex-col bg-white  grid  row-span-4 rounded-lg flex flex-col " :class="[product.large ? 'col-span-2' : 'col-span-1' ]"   >
        <RouterLink :to="('/item/' + product.id)"> -->
        <!-- <div class= "bg w-full flex flex-col "  :class="[product.large ? 'h-full object-contain' : 'h-[19rem] relative justify-center items-center' ]" :style="{ backgroundImage: `url('${product.image}')` }"> -->
              

              <!-- <div :class="[product.large ? 'relative left-6 top-10 bg-white w-max py-2 px-4 rounded-xl font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
            {{ product.price }}
            </div>

            <div :class="[product.large ? 'relative left-6 top-64 flex flex-col  w-max py-2 px-4  font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
               <p class="text-xl text-white">{{ product.name }}</p>
               <small class="text-white">Goal Design</small>
                </div>
        </div>
         -->

        <!-- <div class="h-1/6">
            <p>{{ product.name }}</p>
        </div> -->
        <!-- <div class=" flex flex-col px-4 font-[avenir]" :class="[product.large ? 'hidden':'h-[6rem] ']">
            <div>{{ product.name }} <br/> {{ product.productCode }}</div>



            <div class="flex justify-between items-center">

                <small class="text-xs">Goal Design</small>

                <p class="font-[avenir-bold] text-lg text-[#57A695]">{{ product.price }}</p>
            </div>
            

            
        
        </div> -->

    

    
    <!-- </RouterLink>
    </div> -->


   
</template>

<script setup lang="ts">
import router from '@/router';

type item = {
    name:string,
    category:string,
    description:string,
    id:string,
    image:string,
    price:number
    colors:[string,string]
    company:string

}
interface Product {
    product:item
}

const props = defineProps<Product>()

const convertedPrice = props.product.price.toString().slice(0,3)


const viewProduct = (id:string) => {
    router.push({name: 'item-id', params:{id}})
}


</script>

<style scoped>
.bg{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}


</style>