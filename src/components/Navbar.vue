<script setup lang="ts">
// import {} from 'vue-router'
import { onMounted,ref } from 'vue';


let menu = ref<boolean>(false)


        

    
       
    


</script>


<template>
    <div class="fixed z-10 w-full bg-none flex py-4 justify-between pr-10 pl-24 items-center" >
        <router-link to="/">
        <img src="../assets/images/logo.svg" class="w-[10rem]"/>
        </router-link>   


        <div class="flex items-center w-[45rem] justify-between">
            <div class="flex gap-4 items-center font-[avenir-medium]">
                <router-link to="/">  
                    <div> <p class="link">Home</p> </div>
                   </router-link>
                <router-link to="/catalog" ><p class="link">Catalog</p></router-link>
            <p>About Us</p>
            <p>Contact</p>
        </div>


        <div class="flex gap-2 items-center">
         
            <div class="w-max p-2 rounded-md bg-[#57A695]  flex items-center justify-center">
                <img src="../assets/images/star.svg" class="w-[1rem]"/>
            </div>


            <div class="w-max p-2 rounded-md bg-black  flex items-center justify-center">
                <img src="../assets/images/cart.svg" class="w-[1rem]"/>
            </div>


            <router-link to="/signup">
            <div class="w-max p-2 rounded-md bg-black flex items-center justify-center">
                <img src="../assets/images/wishlist.svg" class="w-[1rem]"/>
            </div>
            </router-link>
         
        
            
           
          



        </div>
        </div>
    
    </div>
</template>


<style scoped>
.link {
  display: inline-block;
  padding-bottom:2px;
  background-image: linear-gradient( #222222,#222222);
  background-position: right -100% bottom 0;
  background-size: 200% 2px;
  background-repeat: no-repeat;
  transition:
  background-size 0.3s,
  background-position 0s 0.3s; /*change after the size immediately*/
}


.link:hover {
  background-position: 100% 100%; 
  background-size: 100% 2px;
}
.link a.router-link-active{
    color:#F6FF82
}


</style>