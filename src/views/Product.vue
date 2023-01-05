<template>
    <div>
        <h1>Hola</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useProductStore from '@/stores/ProductStore';
const ProductStore = useProductStore()
const route = useRoute();
const router = useRouter();

watchEffect(() => {
    const id = route.params.id as any
    console.log(id)

    console.log(ProductStore.singleProduct(id))
})




</script>

<style scoped>

</style>