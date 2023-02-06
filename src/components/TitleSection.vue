<template>
    <div class="title-section  min-h-screen w-full lg:w-full lg:h-screen ">
        <Navbar />

        <div class="lg:absolute top-0  w-full h-full mb-8 flex flex-col justify-center lg:px-10">
            <div class="flex gap-8">

                <div class="hidden lg:flex flex-col gap-2 w-full lg:w-max ">
                    <img src="../assets/images/tealDash.svg"  alt="dash"/>
                    <img src="../assets/images/blackDash.svg" alt="dash"/>
                    <img src="../assets/images/tealDash.svg"  alt="dash"/>
                </div>

                <div class="flex flex-col gap-2 w-full  h-screen justify-center lg:h-auto px-4 lg:px-0">
                    <p class="text-base lg:text-lg font-[avenir]">MODERN & MINIMALISTIC</p>
                    <h1 class="text-5xl lg:text-6xl font-[avenir-bold]" >FIND YOUR <br/> PERFECT FURNITURE</h1>
                    <p class="font-[avenir-medium] w-[16rem] lg:w-[35rem] text-sm lg:text-base">Nothing beats finding the perfect furniture for your home, office,
resturants & parks. 
</p>
<p class="text-sm lg:text-base font-[avenir-medium] w-[16rem] lg:w-[35rem]">
    Your home should be a story of who you are, and be a collection
of what you love.” – Nate Berkus . 


</p>


<router-link to="/catalog" >
<div class="link flex gap-2 items-center font-[avenir-medium] pt-12 w-max ">
    <p class="">View Catalog</p> <img src="../assets/images/leftArrow.svg" alt="left arrow" width="50" />
</div>
</router-link>  

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
@media screen and (max-width:485px) {
    .title-section {
        /* background:n; */
        background-position-x: -80vh;
        background-position-y: 0vh;
    }
}
</style>