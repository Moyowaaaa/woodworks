<template>
  <div class="min-h-screen flex overflow-hidden">
    <div class="auth-bg w-6/12 hidden lg:flex flex-col pl-20 pt-12">
      <router-link to="/">
        <img src="../assets/images/logo.svg" width="160px" alt="logo" />
      </router-link>
    </div>

    <div class="w-full lg:w-6/12 flex flex-col items-center">
      <SignupForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import SignupForm from "@/components/SignupForm.vue";
</script>

<style scoped>
.auth-bg {
  background-image: url("/images/statsBg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
