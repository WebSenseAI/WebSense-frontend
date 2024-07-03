<template>
  <div class="setup">
    <ClassicView :list="list">
      <div class="w-fit m-auto grid grid-cols-1 gap-20 md:grid-cols-2 p-10">
        <div class="flex flex-col gap-4">
          <h1 class="text-3xl font-bold">
            Welcome
            <span class="uppercase">{{ userInfoStore.given_name }}</span> 👋
            <br />
            <span class="text-xl font-thin"
              >here you can manage your chatbot</span
            >
          </h1>
          <!--TODO: add if user has already a bot or not-->
          <template v-if="botInfoStore.botExists">
            <span class="line"></span>
            <div class="divider">You have currently a chat bot set up.</div>
            <div class="stats shadow">
              <div class="stat">
                <div class="stat-value">{{ botInfoStore.fullName }}</div>
                <div class="stat-title text-primary">{{ botInfoStore.id }}</div>
                <div class="stat-title text-primary">
                  {{ botInfoStore.website }}
                </div>
                <div class="stat-desc">{{ botInfoStore.description }}</div>
              </div>
            </div>
            <div class="divider">Analitycs</div>
            <div class="indicator w-full">
              <span class="indicator-item badge badge-primary"
                >12 new users</span
              >
              <div class="w-full stats shadow">
                <div class="stat">
                  <div class="stat-title">Total messages</div>
                  <div class="stat-value font-thin">12,413</div>
                  <!-- TODO: get from API -->
                  <div class="stat-desc">532 users have used this bot</div>
                </div>
              </div>
            </div>
            <div class="w-full stats shadow">
              <div class="stat">
                <div class="stat-title">Tokens used</div>
                <div class="stat-value font-thin">321,413</div>
                <!-- TODO: get from API -->
                <div class="stat-desc">212 euro</div>
              </div>
            </div>
            <button class="btn btn-primary" @click="clickDeleteBot">
              Delete bot
            </button>
          </template>

          <NewBot v-if="!botInfoStore.botExists" />
          <!--  -->
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
import NewBot from '@/components/setup/NewBot.vue';
import { useUserInfoStore, useBotInfoStore } from '@/store/index';
import { deleteBot } from '@/services/botService';

const userInfoStore = useUserInfoStore();
const botInfoStore = useBotInfoStore();

const list = [
  { text: 'Login', href: '/login', isCurrent: true },
  { text: 'Setup', href: '/setup', isCurrent: false },
];

function clickDeleteBot() {
  deleteBot(botInfoStore.id);
}
</script>

<style scoped lang="scss"></style>
