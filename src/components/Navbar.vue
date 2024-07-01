<script setup lang="ts">
import { onMounted, ref, onUnmounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import useCartStore from "@/stores/CartStore";
import useWishlistStore from "@/stores/WishlistStore";

let menu = ref<boolean>(false);
const router = useRouter();
const CartStore = useCartStore();
const WishlistStore = useWishlistStore();

const isScrolled = ref<boolean>(false);
const isOpen = ref<boolean>(false);
const route = useRoute();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  if (window.scrollY > 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollTop = () => {
  window.scroll(0, 0);
};

const goToAboutSection = () => {
  isOpen.value = !isOpen.value;
  const aboutElement = document.getElementById("about");
  if (aboutElement) {
    isOpen.value = !isOpen.value;
    aboutElement.scrollIntoView({ behavior: "smooth" });
  } else {
    isOpen.value = !isOpen.value;
    router.push("/").then(() => {
      setTimeout(() => {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    });
  }
};

const goToContactSection = () => {
  isOpen.value = !isOpen.value;
  const contactElement = document.getElementById("subscribe");
  if (contactElement) {
    isOpen.value = !isOpen.value;
    contactElement.scrollIntoView({ behavior: "smooth" });
  } else {
    isOpen.value = !isOpen.value;
    router.push("/").then(() => {
      setTimeout(() => {
        const contactElement = document.getElementById("subscribe");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    });
  }
};
</script>

<template>
  <div class="flex flex-col w-full h-auto">
    <div
      class="fixed z-30 w-full bg-none flex py-4 justify-between px-4 lg:px-0 lg:pr-10 lg:pl-24 items-center"
      :class="[isScrolled ? 'bg-white shadow-md' : '']"
    >
      <router-link to="/">
        <img
          src="../assets/images/logo.svg"
          class="logo"
          alt="woodworks"
          @click="scrollTop()"
        />
      </router-link>

      <div class="lg:hidden flex gap-2 items-center">
        <router-link to="/wishlist">
          <div
            class="w-max p-2 rounded-md bg-[#57A695] flex items-center justify-center"
          >
            <img src="../assets/images/star.svg" class="w-[1rem]" alt="star" />

            <div
              class="absolute top-2 ml-6 text-white bg-[#57A695] px-1 rounded-full text-xs"
            >
              {{ WishlistStore.favouritesCount }}
            </div>
          </div>
        </router-link>

        <router-link to="/cart">
          <div
            class="w-max p-2 rounded-md bg-black flex items-center justify-center"
          >
            <img src="../assets/images/cart.svg" width="16" alt="cart" />

            <div
              class="absolute top-2 ml-6 text-white bg-[#57A695] px-1 rounded-full text-xs"
            >
              {{ CartStore.itemCount }}
            </div>
          </div>
        </router-link>

        <!-- -----mobile nav button  -->

        <div class="nav-button z-50" @click="toggleMenu" v-if="!isOpen">
          <svg viewBox="0 0 12 10" class="hamburger w-[2rem] h-[2rem]">
            <path d="M10,2 L2,2" class="bar1"></path>
            <path d="M2,5 L10,5" class="bar2"></path>
            <path d="M10,8 L2,8" class="bar3"></path>
          </svg>
        </div>

        <div
          class="text-3xl w-[2rem] h-[2rem]"
          v-if="isOpen"
          @click="toggleMenu"
        >
          X
        </div>
        <!-- --------- -->
      </div>

      <div class="links hidden lg:flex items-center w-[45rem] justify-between">
        <div class="flex gap-8 items-center font-[avenir-medium]">
          <router-link to="/"
            ><div>
              <p class="link" @click="scrollTop()">Home</p>
            </div></router-link
          >

          <router-link to="/catalog"
            ><p class="link" @click="scrollTop()">Catalog</p></router-link
          >

          <div @click="goToAboutSection()" class="link">About us</div>

          <a @click="goToContactSection()" class="link">
            <p>Contact</p>
          </a>
        </div>

        <div class="hidden lg:flex gap-2 items-center">
          <router-link to="/wishlist">
            <div
              class="w-max p-2 rounded-md bg-[#57A695] flex items-center justify-center"
            >
              <img
                src="../assets/images/star.svg"
                class="w-[1rem] transition ease-in-out delay-150 hover:-translate-y-1 lg:hover:scale-110 duration-300"
                alt="star"
              />

              <div
                class="absolute top-2 ml-6 text-white bg-[#57A695] px-1 rounded-full text-xs"
              >
                {{ WishlistStore.favouritesCount }}
              </div>
            </div>
          </router-link>

          <router-link to="/cart">
            <div
              class="w-max p-2 rounded-md bg-black flex items-center justify-center"
            >
              <img
                src="../assets/images/cart.svg"
                class="transition ease-in-out delay-150 hover:-translate-y-1 lg:hover:scale-110 duration-300"
                width="16"
                alt="cart"
              />

              <div
                class="absolute top-2 ml-6 text-white bg-[#57A695] px-1 rounded-full text-xs"
              >
                {{ CartStore.itemsInCart }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- ----- mobile navbar---- -->
    <div
      class="fixed z-50 bg-white w-full h-screen mt-16 flex flex-col px-4 font-[avenir-medium] pt-6 ease-in-out duration-700"
      :class="[isOpen ? 'translate-x-0' : 'translate-x-full']"
      @click="toggleMenu"
    >
      <router-link to="/wishlist">
        <div class="flex items-center gap-4"></div>
      </router-link>

      <div class="flex flex-col gap-6 h-full pt-6">
        <router-link to="/">
          <div><p class="mobileLink">Home</p></div>
        </router-link>
        <router-link to="/catalog" class="mobileLink"
          ><p>Catalog</p></router-link
        >

        <div class="mobileLink" @click="goToAboutSection()">
          <p>About Us</p>
        </div>

        <div class="mobileLink" @click="goToContactSection()">
          <p>Contact</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  /* display: inline-block; */
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
.logo {
  width: 160px;
}
@media screen and (max-width: 485px) {
  .logo {
    width: 128px;
  }
  .mobileLink:hover,
  .mobileLink:active {
    color: #57a695;
  }
}
</style>
