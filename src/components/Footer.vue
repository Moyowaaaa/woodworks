<script setup lang="ts">
import { ref,onMounted } from 'vue';
let year = ref<any>()



onMounted(()=> {
    const date = new Date();
   year.value = date.getFullYear()
})
</script>

<template>
    <div class="flex w-full border-t-2 border-[#C4C4C4] py-3 lg:px-[4rem] mt-0 lg:mt-12">
        <div class="flex flex-col lg:flex-row justify-between lg:items-center text-[#5B5B5B] w-10/12 mx-auto gap-4 lg:gap-0">
            <div class="flex flex-col gap-2 items-center lg:items-start">
            <img src="../assets/images/logo.svg" width="160"/>
            <p class="text-sm font-[avenir-light] lg:text-center">modern & minimalistic</p>
        </div>

        <div class="text-xs lg:text-base flex items-center h-full justify-center lg:justify-start">
            &copy;
            <span>{{ year }}</span>&nbsp; Modern & Minimalistic Furniture
        </div>

        <div class="flex gap-2 items-center justify-center lg:justify-start">
            <div class="p-2 w-max bg-[#DCEBEB] rounded-full flex items-center justify-center">
                <img src="../assets/images/twitter.svg" />
            </div>

            <div class="p-2 w-max bg-[#DCEBEB] rounded-full flex items-center justify-center">
                <img src="../assets/images/youtube.svg" />
            </div>


            <div class="p-2 w-max bg-[#DCEBEB] rounded-full flex items-center justify-center">
                <img src="../assets/images/instagram.svg" />
            </div>
        </div>
        </div>
       
    </div>
</template>


<style scoped>

</style>