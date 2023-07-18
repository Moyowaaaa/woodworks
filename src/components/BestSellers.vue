<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import useProductStore from "@/stores/ProductStore";

const ProductStore = useProductStore();

const stats = [
  {
    count: "250+",
    title: "Created designs for clients",
  },
  {
    count: "520+",
    title: "Satisfied clients with the service",
  },
  {
    count: "950+",
    title: "Goods in stock in our store",
  },
];
</script>

<template>
  <div class="lg:h-auto flex flex-col w-11/12 lg:w-10/12 mx-auto h-auto">
    <div class="mb-[12rem]">
      <h1 class="font-[avenir-bold] text-[#005454] text-xl pt-8 pb-6">
        Best Sellers
      </h1>

      <div class="best w-full flex gap-8">
        <ProductCard
          :product="product"
          v-for="product in ProductStore.bestSellers"
        />
      </div>
    </div>

    <div
      class="w-full flex-col flex lg:h-auto lg:flex-row justify-center mb-2 lg:mb-[12rem]"
      id="about"
    >
      <div class="w-full lg:w-6/12 flex flex-col">
        <div class="px-4 bg-[#EAF3F3] py-6 lg:py-24 flex flex-col items-center">
          <div class="lg:w-9/12 flex flex-col">
            <p>-We Create</p>
            <h2 class="text-4xl text-[#005454] font-[avenir-bold] lg:w-[30rem]">
              MODERN & MINIMALISTIC FURNITURE FOR YOU
            </h2>

            <p class="lg:w-[25rem]">
              Nothing beats finding the perfect furniture for your <br />
              home, office, resturants & parks. This is when Woodwork comes in,
              to offer you the very best.
            </p>
          </div>
        </div>

        <div class="w-full py-12 my-12">
          <div class="flex w-full flex-col lg:flex-row lg:justify-around">
            <div class="flex flex-col" v-for="stat in stats">
              <h2
                class="text-[#005454] text-center py-10 lg:py-0 lg:text-left text-4xl font-[avenir-bold]"
              >
                {{ stat.count }}
              </h2>
              <p class="text-base text-center lg:text-left lg:w-[8rem]">
                {{ stat.title }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="statsBg flex items-center justify-center w-6/12"></div>
    </div>
  </div>
</template>

<style scoped>
.statsBg {
  background-image: url("/images/statsBg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (max-width: 485px) {
  .best {
    flex-direction: column;
    align-items: center;
  }
}
</style>
