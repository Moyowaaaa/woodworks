<template>
    <div class="error min-h-screen px-24 flex flex-col justify-center">
       <h2 class="text-5xl lg:text-6xl font-[avenir-bold]">404 ERROR</h2>
       <p class=" font-[avenir-medium] text-sm lg:text-base">This page is not found</p>
       <small class="pt-8">Go back Home</small>
       
       <router-link to="/" >
<div class=" flex gap-2 items-center font-[avenir-medium] pt-4 w-max ">
   <img src="../assets/images/rightArrow.svg" />   <p class="link">Home</p>
</div>
</router-link>  
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.error{
    background-image: url('../assets/images/error.png');
    background-size: cover;
}
</style>