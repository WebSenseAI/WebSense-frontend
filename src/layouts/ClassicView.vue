<template>
  <!-- <Breadcrumbs :list="list" /> -->
  <div class="h-screen">
    <Header :picture="userInfoStore.picture" />
    <div class="flex view-container">
      <SideBar />
      <div class="content">
        <LoadingPage />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import Header from '@/components/common/Header.vue';
import { useUserInfoStore, useBotInfoStore } from '@/store/index';
import { onBeforeMount, onMounted } from 'vue';
import { fetchUserInfo } from '@/services/authService';
import { fetchBotInfo } from '@/services/botService';
import LoadingPage from '@/components/common/LoadingPage.vue';
import SideBar from '@/components/common/SideBar.vue';

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
.view-container {
  height: calc(100vh - 64px);
}
.breadcrumbs {
  padding-top: 10px;
  padding-left: 20px;
}

.navbar {
  padding-top: 0;
  padding-left: 20px;
}
.content {
  width: 85vw;
}
.sidebar {
  width: 15vw;
  background-color: #f5f5f5;
  z-index: 9;
}
</style>
