<template>

    <div class="card  min-h-[25rem] h-auto flex flex-col bg-white  grid  row-span-4 rounded-lg flex flex-col " :class="[product.large ? 'col-span-2 ' : 'col-span-2 lg:col-span-1' ]"   >

        <div class="py-2 absolute hidden  lg:flex justify-between items-center px-2" :class="[product.large ? 'w-[30rem] ml-2' : 'w-[15rem] mt-6' ]">
            <div :class="[product.large ? 'relative left-6 cursor-pointer bg-white w-max py-2 px-4 rounded-xl font-[avenir-bold] text-full text-[#57A695] ' : 'text-white opacity-0' ]">
                
                N{{ product.price }}K
                </div>

                <!-- <div @click="addTofavorite(product.id)" v-if="!inList ">
                    <img src="../assets/images/star2.svg" />
                </div>

                <div @click="removeItem(product.id)" v-if="inList ">
                    <img src="../assets/images/star3.svg" />
                </div> -->


               


            <!-- <div class=" border-2 border-[blue] p-4 ">j</div>
        <div class="border-2 border-[green] ">
            <img src="../assets/images/star2.svg" />
                <img src="../assets/images/favourites.svg" />
            </div> -->
        </div>

        
        <RouterLink :to="('item/' + product.id)">
            <div class=" flex rounded-2xl" :class="[product.large  ? 'h-full' : 'h-4/5 items-center justify-center w-full']">
                <img :src="product.image" class="" />

            </div>
            

            
           


            
        <!-- <div class= "bg w-full flex flex-col "  :class="[product.large ? 'h-full ' : 'h-[19rem] relative justify-center items-center' ]" :style="{ backgroundImage: `url('${product.image}')` } ">
          
            <img :src="product.image" />

              <div :class="[product.large ? 'relative left-6 top-10 bg-white w-max py-2 px-4 rounded-xl font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
            N{{ product.price }}K
            </div>

            <div :class="[product.large ? 'relative left-6 top-64 flex flex-col  w-max py-2 px-4  font-[avenir-bold] text-full text-[#57A695] ' : 'hidden' ]">
                
               <p class="text-xl text-white font-[avenir-medium]">{{ product.name }}</p>
               <small class="text-white font-[avenir-medium]">Goal Design</small>
                </div>

            
        </div> -->
        

    
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
import useWishlistStore from '@/stores/WishlistStore';
import { watchEffect,ref } from 'vue';
const WishlistStore = useWishlistStore()
const router = useRouter()

const viewItem = (id:any) => {
    router.push({name:'item-id', params: id})
}

interface productProps{
    product:Product
}

const props = defineProps<productProps>()
    let inList = ref<boolean | null>(null)


const addTofavorite = (id:number) => {
    WishlistStore.addItemToWishList(id)
}

const removeItem = (id:number) => {
    WishlistStore.removeItemfromWishlist(id)
}

watchEffect(() => {
    const exists = ref<boolean | null>((WishlistStore.wishlist.map((item) => item.id).includes(props.product.id)))
        inList.value = exists.value
})


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