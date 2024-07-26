<template>
  <div class="setup">
    <ClassicView :list="list">
      <div class="w-fit m-auto grid grid-cols-1 gap-20 md:grid-cols-2 p-10">
        <div class="flex flex-col gap-4">
          <h1 class="text-3xl font-bold">
            Welcome
            <span class="uppercase">{{ userInfoStore.name }}</span> 👋
            <br />
            <span class="text-xl font-thin"
              >here you can manage your chatbot</span
            >
          </h1>
          <template v-if="botInfoStore.botExists">
            <BotInfo />
          </template>
          <NewBot v-if="!botInfoStore.botExists" />
        </div>
        <div class="flex justify-start">
          <img src="@/assets/WebSenseAI.png" alt="Chatbot" />
        </div>
      </div>
    </ClassicView>
  </div>
</template>

<script setup lang="ts">
import ClassicView from '@/layouts/ClassicView.vue';
import NewBot from '@/components/setup/NewBotForm.vue';
import BotInfo from '@/components/setup/BotInfo.vue';
import { useUserInfoStore, useBotInfoStore } from '@/store/index';

const userInfoStore = useUserInfoStore();
const botInfoStore = useBotInfoStore();

const list = [
  { text: 'Login', href: '/login', isCurrent: true },
  { text: 'Setup', href: '/setup', isCurrent: false },
];
</script>

<style scoped lang="scss"></style>
