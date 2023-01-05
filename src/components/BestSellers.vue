<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import useItemStore from '@/stores/ItemStore';

const ItemStore = useItemStore()
console.log(ItemStore.bestSellers)

const stats = [
    {
    count:'250+',
    title:'Created designs for clients'
},
{
    count:'520+',
    title:'Satisfied clients with the service'
},
{
    count:'950+',
    title:'Goods in stock in our store'
},

]
</script>

<template>
    <div class=" min-h-screen flex flex-col w-10/12 mx-auto 
     h-auto">
        <div class=" mb-[12rem]">
            <h1 class="font-[avenir-bold] text-[#005454] text-xl pt-8 pb-6">Best Sellers</h1>
            
          <div class="w-full flex gap-8">
            <ProductCard :product="product" v-for="product in ItemStore.bestSellers"/>
          </div> 
      
        </div>

        <div class="w-full  min-h-screen flex justify-center mb-[12rem] ">
            <div class="w-6/12  flex flex-col">
                    <div class="bg-[#EAF3F3] py-24 flex flex-col  items-center" >
                        <div class="w-9/12">
                            <p>-We Create</p>
                        <h2 class="text-4xl text-[#005454] font-[avenir-bold] w-[30rem]">MODERN & MINIMALISTIC
FURNITURE FOR YOU</h2>

<p class="w-[25rem]">
    Nothing beats finding the perfect furniture for your <br/>
home, office, resturants & parks. This is when Woodwork
comes in, to offer you the very best.

</p>
                        </div>
                        
                    </div>


                    <div class="w-full  py-12 my-12">
                        <div class="flex w-full  justify-around" >
                            <div class="flex flex-col " v-for="stat in stats">
                            <h2 class="text-[#005454] text-4xl font-[avenir-bold]">{{ stat.count }}</h2>
                            <p class="w-[8rem]">{{ stat.title }}</p>
                        </div>
                        </div>
                        <!-- <div class="w-full gap-4" v-for="stat in stats">
                            <div class="flex flex-col ">
                            <h2 class="text-[#005454] text-4xl font-[avenir-bold]">{{ stat.count }}</h2>
                            <p class="w-[8rem]">{{ stat.title }}</p>
                        </div>
                        </div> -->
                       
                    </div>
            </div>

            <div class="statsBg  flex items-center justify-center w-6/12">
               
            </div>
        </div>
    </div>
</template>



<style scoped>
.statsBg{
    background-image: url('/images/statsBg.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>