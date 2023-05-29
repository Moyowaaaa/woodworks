<template>
  <Transition name="fade">
    <div
      class="fixed z-30 top-24 right-6 py-4 h-auto w-auto text-white flex justify-between pl-6 pr-2 items-center rounded-md shadow-md gap-4"
      v-if="statusvisible"
      :style="{ backgroundColor: `${statusColor}` }"
    >
      <p class="">{{ status }}</p>

      <div
        class="relative flex justify-end mx-2 text-xl cursor-pointer"
        @click="statusvisible = false"
      >
        X
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import useToastStore from "@/stores/ToastStore";
import { watchEffect, ref } from "vue";

let status = ref();
let statusColor = ref();
let statusvisible = ref(false);

watchEffect(() => {
  const { message, color, show } = useToastStore();
  status.value = message;
  statusvisible.value = show;
  statusColor.value = color;
});
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
