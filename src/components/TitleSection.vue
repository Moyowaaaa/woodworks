<template>
    <div class="title-section min-h-screen  w-full h-screen">
        <Navbar />

        <div class="absolute top-0  w-full h-full mb-8 flex flex-col justify-center px-10">
            <div class="flex gap-8">

                <div class="flex flex-col gap-2 w-max ">
                    <img src="../assets/images/tealDash.svg" />
                    <img src="../assets/images/blackDash.svg" />
                    <img src="../assets/images/tealDash.svg" />
                </div>

                <div class="flex flex-col gap-2">
                    <p class="text-lg font-[avenir]">MORDERN & MINIMALISTIC</p>
                    <h1 class="text-6xl font-[avenir-bold]" >FIND YOUR <br/> PERFECT FURNITURE</h1>
                    <p class="font-[avenir-medium] w-[35rem]">Nothing beats finding the perfect furniture for your home, office,
resturants & parks. 
</p>
<p class="font-[avenir-medium] w-[35rem]">
    Your home should be a story of who you are, and be a collection
of what you love.” – Nate Berkus . 


</p>



<div class="flex gap-2 items-center font-[avenir-medium] pt-12">
    View Catalog <img src="../assets/images/leftArrow.svg" />
</div>
                </div>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'


</script>

<style scoped>
.title-section{
    background-image: url('../assets/images/homeBackground.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -5vh;
}
</style>