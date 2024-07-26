<template>
  <div class="mockup-window border bg-base-300 m-10">
    <div class="hero bg-base-200">
      <div class="hero-content text-left flex flex-col">
        <h1 class="text-5xl font-bold">Welcome home {{ userName }}</h1>
        <p class="py-6 text-center">
          Wellcome back to WebSense.AI Dashboard, your chatbot is being replying
          to your customers all day long. Ready see the analytics about your
          website?
        </p>
        <router-link to="setup" class="btn btn-primary"
          >Go to analytics 🚀</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  userName: string;
}>();
</script>

<style scoped lang="scss"></style>
