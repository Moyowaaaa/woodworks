<template>
    <div class="error min-h-screen px-6 lg:px-24 flex flex-col justify-center gap-2">
        <p class=" font-[avenir-medium] text-sm lg:text-base">Page not found</p>
       <h2 class="text-4xl lg:text-6xl font-[avenir-bold]">404 ERROR</h2>
  
       <p>We know it's a beautiful 404 page, but you need to go back home : )</p>
       
       
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