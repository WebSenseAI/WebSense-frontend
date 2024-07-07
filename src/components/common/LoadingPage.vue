<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-page">
      <div class="loading-page__content">
        <div class="loading-page__content__title">
          <div class="flex justify-between mt-4">
            <span class="loading loading-ball loading-xs bg-primary"></span>
            <span class="loading loading-ball loading-sm bg-primary"></span>
            <span class="loading loading-ball loading-md bg-primary"></span>
            <span class="loading loading-ball loading-lg bg-primary"></span>
            <span class="loading loading-ball loading-md bg-primary"></span>
            <span class="loading loading-ball loading-sm bg-primary"></span> 
            <span class="loading loading-ball loading-xs bg-primary"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  console.log('Loading page mounted');
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  right: 0;
  width: 85vw;;
  height: 100%;
  background-color: #ffffff;
  z-index: 9999999999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
