<template>
    <div class="min-h-screen  mt-32 w-10/12 mx-auto flex">

        <div class=" w-5/12 flex flex-col justify-center">
            <div class="h-4/6  flex flex-col justify-center bg-[#EAF3F3]">
                <div class="w-11/12 flex flex-col text-[#005454] pl-8">
                    <p>Subscribe to our</p>
                    <h1 class="text-4xl font-[avenir-bold]">NEWSLETTER</h1>
                    <p>Get promotions, discounts and new products in your email</p>

                    <div class="w-full  flex border-b-2 border-[#C4C4C4]">
                        <input type="text" class="w-9/12 bg-transparent outline-none border-none p-2" 
                        placeholder="E-mail"/>

                        <div class="flex items-center gap-2 mt-4">
                            <p>SUBSCRIBE</p>
                            <img src="../assets/images/greenLeftArrow.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" w-7/12">
            <div class="bg h-full w-full"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg{
    background-image: url('../assets/images/newsletter.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>