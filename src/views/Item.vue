<template>
    <div>
        {{ route.params.id }}
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useProductStore from '@/stores/ProductStore';
const ProductStore = useProductStore()
const route = useRoute();
const router = useRouter();

let product = ref()


watchEffect(() => {
    const id = route.params.id as any
    console.log(typeof(id))

    product.value = ProductStore.getSingleProduct(id)


    console.log(product.value)

    // console.log(ProductStore.singleProduct(id))

})




</script>

<style scoped>

</style>