<template>
  <div v-if="userInfo.bot.id === ''">
    <h1>WebSense AI</h1>
    <h3>Welcome, here you can configure your new Chat Assistant.</h3>
    <NewBotInput msg="Vite + Vue" :userId="userInfo.user" />
    <web-sense id="luisbeqja_collection"></web-sense>
  </div>
  <div v-else>
    <h1>WebSense AI</h1>
    <h3>Welcome <span>{{ userInfo.user.name }}</span>, here you have all the info of your Chat Bot</h3>
    <p>{{ userInfo.bot.name }}</p>
    <p>This is the id of your chat:{{ userInfo.bot.id }}</p>
    <web-sense :id="userInfo.bot.id"></web-sense>
  </div>
</template>

<script setup>
import NewBotInput from '../components/NewBotInput.vue';
import { onBeforeMount, onMounted, ref, computed } from 'vue';
import axios from 'axios';
import { fetchUserInfo, fetchUserBotInfo } from '../api/info';
import { useUserStore } from '../store/pina';
const store = useUserStore();

const userInfo = computed(() => store.getAllInfoGetter);

onMounted(() => {
  fetchUserInfo().then((result) => {
    fetchUserBotInfo(result.id);
  });
});
</script>

<style></style>
