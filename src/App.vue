<script setup lang="ts">
import '@luisbeqja/web-sense/web-sense.js';
</script>

<template>
  <div class="main">
      <RouterView />
  </div>
</template>

<style scoped>
.main{
  background: url('./assets/blur_bg.png');
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
}
</style>
