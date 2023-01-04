<template>
    <div class="min-h-screen flex">
        <div class="auth-bg w-6/12 flex flex-col pl-20 pt-12">
            <img src="../assets/images/logo.svg" class="w-[10rem]" />
        </div>

        <div class="w-6/12 flex flex-col items-center">
            <SignupForm />
        </div>
    </div>
</template>

<script setup lang="ts">
import SignupForm from '@/components/SignupForm.vue';


</script>

<style scoped>
.auth-bg{
    background-image: url('/images/statsBg.png');
    background-size: contain;
    background-repeat: no-repeat;
}
</style>