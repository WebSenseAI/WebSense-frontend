<template>
  <span class="line"></span>
  <div class="divider">You have currently a chat bot set up.</div>
  <div class="stats shadow">
    <div class="stat">
      <router-link to="howtouse" >BOT INFO</router-link>
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
    <span class="indicator-item badge badge-primary">12 new users</span>
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
  <button class="btn btn-error" @click="clickDeleteBot">Delete bot</button>
</template>

<script setup lang="ts">
import { deleteBot } from '@/services/botService';
import { useBotInfoStore } from '@/store/index';

const botInfoStore = useBotInfoStore();

function clickDeleteBot() {
  if (confirm('Are you sure you want to delete this bot?')) {
    deleteBot(botInfoStore.id).finally(() => {
      window.location.href = '/setup';
    });
  } else {
    return;
  }
}
</script>

<style scoped lang="scss"></style>
