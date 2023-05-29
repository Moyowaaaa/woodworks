<script setup lang="ts">
import useWishlistStore from "@/stores/WishlistStore";
import type { Product } from "@/types/interfaces";

interface productProps {
  product: Product;
}

const props = defineProps<productProps>();

const wishlistStore = useWishlistStore();

const removefromList = () => {
  wishlistStore.removeItemfromWishlist(props.product.id);
};
</script>

<template>
  <div
    class="w-full lg:w-[20rem] h-[25rem] rounded-xl"
    :class="[product.scale === 'large' ? 'glass px-0' : 'bg-white ']"
  >
    <RouterLink :to="'/item/' + product.id">
      <div class="h-4/5 flex items-center justify-center object-contain">
        <img :src="product.image" alt="product image" class="" />
      </div>
    </RouterLink>

    <div class="h-1/5 flex flex-col justify-end pb-3 px-2">
      <div class="flex justify-between items-end">
        <h1 class="font-[avenir-bold] text-lg">{{ product.name }}</h1>

        <button class="p-2 rounded-full bg-white" @click="removefromList">
          <img src="../assets/images/star3.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
