<template>
  <ClassicView :list="list">
    <div class="mockup-window border bg-base-300 m-10 h-full">
      <div class="hero bg-base-200">
        <div class="hero-content text-left flex flex-col">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </ClassicView>
</template>

<script setup lang="ts">
import ClassicView from '@/layouts/ClassicView.vue';

const list = [
  { text: 'Login', href: '/login', isCurrent: false },
  { text: 'Setup', href: '/setup', isCurrent: false },
  { text: 'Dashboard', href: '/dashboard', isCurrent: true },
];
</script>

<style scoped></style>
