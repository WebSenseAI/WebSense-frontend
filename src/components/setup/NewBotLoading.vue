<template>
  <div class="loading-bot">
    <img class="mt-20 center loading_img" src="@/assets/loadingLogo.png" alt="" />
    <p class="absolute bottom-20 font-semibold text-xl w-3/4 text-center">
      Hi Luis, your bot is in the process of learning everything from your
      website. This may take a few minutes. We'll notify you via email once the
      process is complete.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loading-bot {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
}

.loading_img {
  animation: spin 2s linear infinite alternate;
}

@keyframes spin {
  0% {
    transform: translate(0, -15%);
  }
  100% {
    transform: translate(0, -10%);
  }
}
</style>
