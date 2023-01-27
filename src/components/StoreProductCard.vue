<template>

    <div class="card  min-h-[25rem]  h-auto flex flex-col bg-white  grid  row-span-4 rounded-lg flex flex-col " :class="[product.large ? 'col-span-2' : 'col-span-2 lg:col-span-1' ]"   >
        <RouterLink :to="('item/' + product.id)">
            
        <div class= "bg w-full flex flex-col "  :class="[product.large ? 'h-full ' : 'h-[19rem] relative justify-center items-center' ]" :style="{ backgroundImage: `url('${product.image}')` } ">
          

              <div :class="[product.large ? 'relative left-6 top-10 bg-white w-max py-2 px-4 rounded-xl font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
            N{{ product.price }}K
            </div>

            <div :class="[product.large ? 'relative left-6 top-64 flex flex-col  w-max py-2 px-4  font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
               <p class="text-xl text-white font-[avenir-medium]">{{ product.name }}</p>
               <small class="text-white font-[avenir-medium]">Goal Design</small>
                </div>

            
        </div>
        

    
        <div class=" flex flex-col px-4 font-[avenir-medium]" :class="[product.large ? 'hidden':'h-[6rem] ']">
            <div class="text-sm lg:text-base">{{ product.name }} <br/> {{ product.productCode }}</div>



            <div class="flex justify-between items-center font-[avenir-light]">

                <small class="text-xs">Goal Design</small>

                <p class="font-[avenir-bold] text-lg text-[#57A695]">N{{ product.price }}K</p>
            </div>
            

            
        
        </div>

    

    
    </RouterLink>
    </div>
   
</template>

<script setup lang="ts">
import type { Product } from '@/types/interfaces';
import { useRouter } from 'vue-router';

const router = useRouter()

const viewItem = (id:any) => {
    router.push({name:'item-id', params: id})
}

interface productProps{
    product:Product
}

defineProps<productProps>()

const addTofavorite = (id:number) => {
    console.log(id)
}
</script>

<style scoped>
.bg{
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: contain; */
}

@media screen and (max-width:485px) {
    .bg{
        background-size:80%;
    }
}
</style>