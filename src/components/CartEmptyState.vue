<template>
  <div
    class="w-11/12 mx-auto lg:w-full h-screen flex flex-col items-center justify-center gap-6"
    v-if="CartStore.itemsInCart === 0"
  >
    <h2
      class="font-[avenir-bold] text-3xl lg:text-4xl flex items-center text-center lg:text-left"
    >
      You have nothing in your cart :)
    </h2>
    <router-link to="/catalog">
      <p class="link font-[avenir-medium] text-base lg:text-lg">
        Catalog &rarr;
      </p>
    </router-link>

    <img
      src="../assets/images/Empty.svg"
      class="h-[12rem] lg:h-[20rem]"
      alt="empty Icon"
    />
  </div>
</template>

<script setup lang="ts">
import useCartStore from "../stores/CartStore";
const CartStore = useCartStore();
</script>

<style scoped></style>
