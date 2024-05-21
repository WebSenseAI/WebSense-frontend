<template>
  <div id="home">
    <h1>{{ $t('website.web_sense_ai') }}</h1>
    <img class="mt-20 center loading_img" src="../assets/loadingLogo.png" alt="" />
    <p class=" absolute bottom-20 font-semibold text-xl w-3/4">
      Hi Luis, your bot is in the process of learning everything from your
      website. This may take a few minutes. We'll notify you via email once the
      process is complete.
    </p>
  </div>
</template>

<script setup></script>

<style>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.center {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading_img {
  animation: spin 2s linear infinite alternate;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -45%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
