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
                    <p class="text-lg font-[avenir]">MODERN & MINIMALISTIC</p>
                    <h1 class="text-6xl font-[avenir-bold]" >FIND YOUR <br/> PERFECT FURNITURE</h1>
                    <p class="font-[avenir-medium] w-[35rem]">Nothing beats finding the perfect furniture for your home, office,
resturants & parks. 
</p>
<p class="font-[avenir-medium] w-[35rem]">
    Your home should be a story of who you are, and be a collection
of what you love.” – Nate Berkus . 


</p>


<router-link to="/catalog" >
<div class=" flex gap-2 items-center font-[avenir-medium] pt-12">
    <p class="link">View Catalog</p> <img src="../assets/images/leftArrow.svg" />
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
.link{
display: inline-block;
  padding-bottom:2px;
  background-image: linear-gradient( #222222,#222222);
  background-position: right -100% bottom 0;
  background-size: 200% 2px;
  background-repeat: no-repeat;
  transition:
  background-size 0.3s,
  background-position 0s 0.3s; /*change after the size immediately*/
}


.link:hover {
  background-position: 100% 100%; 
  background-size: 100% 2px;
}
</style>