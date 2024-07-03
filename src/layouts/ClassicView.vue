<template>
  <!-- <Breadcrumbs :list="list" /> -->
  <Header :picture="userInfoStore.picture"/>
  <LoadingPage />
  <slot />
</template>

<script setup lang="ts">
//import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import Header from '@/components/common/Header.vue';
import { useUserInfoStore, useBotInfoStore } from '@/store/index';
import { onBeforeMount, onMounted } from 'vue';
import { fetchUserInfo } from '@/services/authService';
import { fetchBotInfo } from '@/services/botService';
import LoadingPage from '@/components/common/LoadingPage.vue';

const userInfoStore = useUserInfoStore();
const botInfoStore = useBotInfoStore();

onBeforeMount(async () => {
  try {
    if (userInfoStore.id === '') {
      const userInfo = await fetchUserInfo();
      userInfoStore.setUserInfo(userInfo);
    }
    if (!botInfoStore.botExists) {
      const botInfo = await fetchBotInfo(userInfoStore.id);
      botInfoStore.setBotInfo(botInfo);
    }
  } catch (error) {
    console.error('Error fetching info:', error);
  }
});

onMounted(async () => {
  try {
    if (userInfoStore.id === '') {
      const userInfo = await fetchUserInfo();
      userInfoStore.setUserInfo(userInfo);
    }
    if (!botInfoStore.botExists) {
      const botInfo = await fetchBotInfo(userInfoStore.id);
      botInfoStore.setBotInfo(botInfo);
    }
  } catch (error) {
    console.error('Error fetching info:', error);
  }
});

defineProps<{
  list: any[];
}>();
</script>

<style scoped lang="scss">
.breadcrumbs {
  padding-top: 10px;
  padding-left: 20px;
}

.navbar {
  padding-top: 0;
  padding-left: 20px;
}
</style>
