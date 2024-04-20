<template>
  <div id="demo">
    <h1>WebSense AI</h1>
    <p>
      Our product is not relised yet, but here you try a Demo that hase learned
      every think from this page
      <span
        ><a class="link" href="https://luisbeqja.com/"
          >https://luisbeqja.com/</a
        ></span
      >
    </p>
    <web-sense id="luisbeqja_collection" />
  </div>
</template>

<script setup>
import WebSenseVue from '../components/websense/WebSense.vue';
import '@luisbeqja/web-sense/web-sense.js';
</script>

<style>
#demo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
