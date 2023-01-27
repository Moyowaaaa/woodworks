<template>
    <div class="w-10/12 lg:w-7/12  pt-12 ">
        <div class="link flex flex-col lg:flex-row items-center w-max" @click="router.back()"> <img src="../assets/images/rightArrow.svg" class="w-[30px]" alt="right arrow"/> Back</div>

        <img src="../assets/images/logo.svg" class=" pt-6" width="160px" alt="logo"/>
        <div class="flex flex-col mt-12  w-full h-full">
            <h1 class="text-xl font-[avenir-bold]">REGISTRATION</h1>
            <div class="h-4/5 flex flex-col justify-center ">
                <div class="gap-4 flex flex-col mt-8 h-4/5  my-8">

<div class="flex flex-col gap-3">
<label>Name</label>
<input type="text" 
class="bg-transparent border-b-2 border-b-[#C4C4C4] outline-none p-2"
/>
</div>


<div class="flex flex-col gap-3">
<label>Email</label>
<input type="text" 
class="bg-transparent border-b-2 border-b-[#C4C4C4] outline-none p-2"
/>
</div>



<div class="flex flex-col gap-3">
<label>Phone Number</label>
<input type="text" 
class="bg-transparent border-b-2 border-b-[#C4C4C4] outline-none p-2"
/>
</div>



<div class="flex flex-col gap-3">
<label>Password</label>
<input type="password" 
class="bg-transparent border-b-2 border-b-[#C4C4C4] outline-none p-2"
/>
</div>

<button class="py-2 bg-[#57A695] text-white flex items-center justify-center w-10/12 lg:w-8/12 rounded-md mx-auto my-6">Sign Up</button>


</div>

            </div>
          
           
        </div>
    </div>
</template>

<script setup lang="ts">

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

</script>

<style scoped>

</style>