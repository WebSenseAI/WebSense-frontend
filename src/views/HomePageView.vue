<template>
  <ClassicView :list="list">
    <CreateBotHome v-if="botInfoStore.id === ''"/>
    <WelcomeHome v-else :user-name="userInfoStore.name"/>
    <div class="flex flex-col gap-3">
      <p class=" ml-10">Whats new in WebSense.AI </p>
      <Alert />
    </div>
  </ClassicView>
  <web-sense v-if="botInfoStore.id" :id="botInfoStore.id" />
</template>

<script setup lang="ts">
import ClassicView from '@/layouts/ClassicView.vue';
import Alert from '@/components/common/Alert.vue';
import '@luisbeqja/web-sense/web-sense.js';
import { useBotInfoStore } from '@/store/index';
import { useUserInfoStore } from '@/store/index';
import CreateBotHome from '@/components/home/CreateBotHome.vue';
import WelcomeHome from '@/components/home/WelcomeHome.vue';

const botInfoStore = useBotInfoStore();
const userInfoStore = useUserInfoStore();

const list = [
  { text: 'Login', href: '/login', isCurrent: false },
  { text: 'Setup', href: '/setup', isCurrent: false },
  { text: 'Dashboard', href: '/dashboard', isCurrent: true },
];
</script>

<style scoped></style>
