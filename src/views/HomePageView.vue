<template>
  <ClassicView :list="list">
    <div class="mockup-window border bg-base-300 m-10">
      <div class="hero bg-base-200">
        <div class="hero-content text-left flex flex-col">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Wellcome to WebSense.AI Dashboard, here you can manage your chatbot
            and get analytics about your website.
          </p>
          <p class="text-green-500">
            In this page you will receive all the important notifications
          </p>
          <router-link to="setup" class="btn btn-primary"
            >Get Started 🚀</router-link
          >
        </div>
      </div>
    </div>
    <Alert />
  </ClassicView>
</template>

<script setup lang="ts">
import ClassicView from '@/layouts/ClassicView.vue';
import Alert from '@/components/common/Alert.vue';

const list = [
  { text: 'Login', href: '/login', isCurrent: false },
  { text: 'Setup', href: '/setup', isCurrent: false },
  { text: 'Dashboard', href: '/dashboard', isCurrent: true },
];
</script>

<style scoped></style>
