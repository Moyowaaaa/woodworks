<template>
   
    <div class="main w-11/12 lg:max-w-[112rem]  flex flex-col lg:justify-center mx-auto">
        <slot/>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<!-- <style scoped>
.main{
    padding: 1.5rem 5rem 3rem;
}

@media screen and (max-width:485px) {
    .main{
    padding:auto
}

}
</style> -->