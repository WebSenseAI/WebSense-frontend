<template>
  <div id="home">
    <h1>WebSense AI</h1>
    <h2 class=" mt-20 text-3xl">
      Easily deploy a chat assistant for your website with just one click!
    </h2>
    <h4>
      WebSense get all the information needed from your website automatically
      you just need to install it.
    </h4>
    <WebSenseVue />
  </div>
</template>

<script setup>
import WebSenseVue from "../components/websense/WebSense.vue";


</script>

<style>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
