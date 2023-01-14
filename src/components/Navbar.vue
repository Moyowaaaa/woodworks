<script setup lang="ts">
// import {} from 'vue-router'
import useCartStore from "@/stores/CartStore";
import { onMounted, ref,watchEffect } from "vue";
let menu = ref<boolean>(false);
const CartStore = useCartStore();

watchEffect(() => {
    window.screenY
    console.log(window.scrollY)
})
</script>

<template>
  <div
    class="fixed z-30 w-full bg-none flex py-4 justify-between px-4 lg:px-0 lg:pr-10 lg:pl-24 items-center"
  >
    <router-link to="/">
      <img src="../assets/images/logo.svg" class="w-[10rem]" />
    </router-link>

    <div class="lg:hidden nav-button z-50">
      <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
        <path d="M10,2 L2,2" class="bar1"></path>
        <path d="M2,5 L10,5" class="bar2"></path>
        <path d="M10,8 L2,8" class="bar3"></path>
      </svg>
    </div>

    <div class="links hidden lg:flex items-center w-[45rem] justify-between">
      <div class="flex gap-4 items-center font-[avenir-medium]">
        <router-link to="/">
          <div><p class="link">Home</p></div>
        </router-link>
        <router-link to="/catalog"><p class="link">Catalog</p></router-link>
        <p>About Us</p>
        <p>Contact</p>
      </div>

      <div class="hidden lg:flex gap-2 items-center">
        <router-link to="/wishlist">
          <div
            class="w-max p-2 rounded-md bg-[#57A695] flex items-center justify-center"
          >
            <img src="../assets/images/star.svg" class="w-[1rem]" />
          </div>
        </router-link>

        <router-link to="/cart">
          <div
            class="w-max p-2 rounded-md bg-black flex items-center justify-center"
          >
            <img src="../assets/images/cart.svg" class="w-[1rem]" />

            <div
              class="absolute top-2 ml-6 text-white bg-[#57A695] px-1 rounded-full text-xs"
            >
              {{ CartStore.itemCount }}
            </div>
          </div>
        </router-link>

        <router-link to="/signup">
          <div
            class="w-max p-2 rounded-md bg-black flex items-center justify-center"
          >
            <img src="../assets/images/wishlist.svg" class="w-[1rem]" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  display: inline-block;
  padding-bottom: 2px;
  background-image: linear-gradient(#222222, #222222);
  background-position: right -100% bottom 0;
  background-size: 200% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s; /*change after the size immediately*/
}

.link:hover {
  background-position: 100% 100%;
  background-size: 100% 2px;
}


.hamburger path {
  fill: none;
  stroke: black;
  stroke-linecap: round;
}
</style>
