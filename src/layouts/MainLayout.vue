<template>
   
    <div class="max-w-[148rem]  flex flex-col justify-center mx-auto">
        <slot/>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<style scoped>

</style>