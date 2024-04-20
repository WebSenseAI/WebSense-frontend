<template>
  <div class="websense">
    <WebSenseHeaderVue />
    <WebSenseBubbleVue />
  </div>
</template>

<script setup>
import WebSenseHeaderVue from "./WebSenseHeader.vue";
import WebSenseBubbleVue from "./WebSenseBubble.vue";
</script>

<style>
.websense {
    width: 466px;
    height: 650px;
    background: white;
    border-radius: 20px 20px 0 0;
    position: absolute;
    bottom: 0;
    filter: drop-shadow(0px 0px 5px #000000);
    animation: slideInFromBottom 1.5s ease 1;
}

@keyframes slideInFromBottom {
    0% {
        transform: translateY(100%);
        opacity: 0.6;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
