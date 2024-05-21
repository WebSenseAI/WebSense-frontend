<template>
  <div v-if="userInfo.bot.id === '' && !isLoading">
    <h1>{{ $t('website.web_sense_ai') }}</h1>
    <h3>Welcome, here you can configure your new Chat Assistant.</h3>
    <NewBotInput msg="Vite + Vue" :userId="userInfo.user" @botCreated="handleBotCreated"/>
    <web-sense id="3f462270-1e9d-4055-b334-060867fdd0fc"></web-sense>
  </div>
  <loading_bot v-else-if="isLoading"></loading_bot>
   <div v-else>
    <h1>{{ $t('website.web_sense_ai') }}</h1>
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
import loading_bot from './loading_bot.vue';

const store = useUserStore();
const userInfo = computed(() => store.getAllInfoGetter);
const isLoading = ref(false);

onMounted(() => {
  fetchUserInfo().then((result) => {
    fetchUserBotInfo(result.id);
  });
});

const handleBotCreated = (botData) => {
  console.log('Bot created', botData);
  isLoading.value = true;
};

</script>

<style></style>
