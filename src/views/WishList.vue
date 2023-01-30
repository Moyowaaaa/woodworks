<template>
    <div>
        <Navbar />
        <WishListEmpty />
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import WishListEmpty from '../components/WishListEmptyState.vue'
import useWishlistStore from '@/stores/WishlistStore';
import { storeToRefs } from 'pinia';

const {wishlist} = storeToRefs(useWishlistStore())

console.log({wishlist})
</script>

<style scoped>

</style>