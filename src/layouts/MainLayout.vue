<template>
   
    <div class="main max-w-[112rem]  flex flex-col justify-center mx-auto">
        <slot/>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.main{
    padding: 1.5rem 5rem 3rem;
}
</style>