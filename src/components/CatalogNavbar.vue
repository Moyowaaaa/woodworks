<template>
    <div class="fixed z-10 w-full bg-none flex py-4 justify-between px-4 lg:px-0 lg:pr-10 lg:pl-24 items-center bg-[#FFFFFF] z-20" >
        <router-link to="/">
        <img src="../assets/images/logo.svg" width="160" alt="woodworks"/>
        </router-link>   

        <div class="lg:hidden  nav-button z-50">
            <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
                    <path d="M10,2 L2,2" class="bar1"></path>
                    <path d="M2,5 L10,5" class="bar2"></path>
                    <path d="M10,8 L2,8" class="bar3"></path>

                </svg>
        </div>

        <div class="links hidden lg:flex items-center w-[45rem] justify-between">
            <div class="flex gap-4 items-center font-[avenir-medium]">
                <router-link to="/">  
                    <div> <p class="link">Home</p> </div>
                   </router-link>
                <router-link to="/catalog" ><p class="link">Catalog</p></router-link>
            <p>About Us</p>
            <p>Contact</p>
        </div>


        <div class="links hidden lg:flex gap-2 items-center">

            <router-link to="/signup">
            <div class="w-max p-2 rounded-md bg-[#57A695] flex items-center justify-center">
                <img src="../assets/images/wishlist.svg" class="w-[1rem]" alt="wishlist"/>
            </div>
            </router-link>

            <router-link to="/wishlist">
            <div class="w-max p-2 rounded-md bg-black  flex items-center justify-center">
                <img src="../assets/images/star.svg" class="w-[1rem]" alt="star"/>
            </div>
            </router-link>


            <router-link to="/cart">
            <div class="w-max p-2 rounded-md bg-black  flex items-center justify-center">
                <img src="../assets/images/cart.svg" class="16" alt="cart"/>

                <div class="absolute top-2  ml-6 text-white bg-[#57A695] px-1 rounded-full text-xs">
                    {{ CartStore.itemsInCart }}
                </div>
            </div>
            </router-link>



          
         
        
            
           
          



        </div>

      

        </div>



    </div>
</template>

<script setup lang="ts">
import useCartStore from '@/stores/CartStore';

const CartStore = useCartStore()

    

</script>

<style scoped>

</style>