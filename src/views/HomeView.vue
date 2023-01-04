<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import TitleSection from '../components/TitleSection.vue'
import SubscribeSection from '@/components/SubscribeSection.vue';
import BestSellers from '@/components/BestSellers.vue';
import Collection from '@/components/Collection.vue';

</script>

<template>
  <div>
      <TitleSection />
      <MainLayout>
        <BestSellers />
        <Collection />
        <SubscribeSection />
    
    </MainLayout>
  </div>
</template>

<style scoped>

</style>
