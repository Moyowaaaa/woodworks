<template>
    <div class="">
        <Navbar />
        <WishListEmpty />
        <WishListContents />
    

        
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import WishListEmpty from '../components/WishListEmptyState.vue'
import useWishlistStore from '@/stores/WishlistStore';
import { storeToRefs } from 'pinia';
import MainLayout from '@/layouts/MainLayout.vue';
import WishListItem from '../components/WishListItem.vue'
import { ref } from 'vue';
import WishListContents from '@/components/WishListContents.vue';

const {wishlist, itemsinWishlist} = storeToRefs(useWishlistStore())

let product:any = ref<any>()



</script>

<style scoped>

</style>