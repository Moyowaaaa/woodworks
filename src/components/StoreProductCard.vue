<template>
  <div
    class="card h-auto flex flex-col bg-white grid row-span-4 rounded-lg flex flex-col"
    :class="[product.scale]"
  >
    <RouterLink :to="'item/' + product.id">
      <div
        class="flex rounded-2xl"
        :class="[
          product.scale === 'large'
            ? 'rounded-xl h-full'
            : 'h-4/5 items-center justify-center w-full',
        ]"
      >
        <img
          :src="product.image"
          class=""
          :class="[product.scale === 'large' ? 'rounded-xl' : '']"
        />
      </div>

      <div
        class="flex flex-col px-4 font-[avenir-medium]"
        :class="[product.scale === 'large' ? 'hidden' : 'h-[6rem] ']"
      >
        <div class="text-sm lg:text-base">
          {{ product.name }} <br />
          {{ product.productCode }}
        </div>

        <div class="flex justify-between items-center font-[avenir-light]">
          <small class="text-xs">Goal Design</small>

          <p class="font-[avenir-bold] text-lg text-[#57A695]">
            N{{ product.price }}K
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/interfaces";
import { useRouter } from "vue-router";
import useWishlistStore from "@/stores/WishlistStore";
import { watchEffect, ref } from "vue";
const WishlistStore = useWishlistStore();


interface productProps {
  product: Product;
}

const props = defineProps<productProps>();
let inList = ref<boolean | null>(null);
watchEffect(() => {
  const exists = ref<boolean | null>(
    WishlistStore.wishlist.map((item) => item.id).includes(props.product.id)
  );
  inList.value = exists.value;
});
</script>

<style scoped>
.bg {
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: contain; */
}

.large {
  grid-column: span 2 / span 2;
  min-height: 25rem;
}

.medium {
  grid-column: span 2 / span 2;
  min-height: 25rem;
}

.small {
  grid-column: span 1 / span 1;
  min-height: 25rem;
}

@media screen and (max-width: 485px) {
  .bg {
    background-size: 80%;
  }
  .large {
    min-height: auto;
  }
  .small {
    grid-column: span 2 / span 2;
  }
}
</style>
