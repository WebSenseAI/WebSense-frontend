<script setup lang="ts">
import DataStatsOne from '@/components/DataStats/DataStatsOne.vue';
import ChartOne from '@/components/Charts/ChartOne.vue';
import ChartThree from '@/components/Charts/ChartThree.vue';
import ChartTwo from '@/components/Charts/ChartTwo.vue';
import MapOne from '@/components/Maps/MapOne.vue';
import TableOne from '@/components/Tables/TableOne.vue';
import ClassicView from '@/layouts/ClassicView.vue';
import DemoAllert from '@/components/common/DemoAllert.vue';

import { onBeforeMount } from 'vue';
import { useBotInfoStore, useChatComprehensiveStatsStore, useUserInfoStore } from '@/store/index';
import { getChatStats } from '@/services/chatService';
import { fetchBotInfo } from '@/services/botService';
import { fetchUserInfo } from '@/services/authService';

const botInfoStore = useBotInfoStore();
const userInfoStore = useUserInfoStore();

const chatStatsComprehensiveStore = useChatComprehensiveStatsStore();
onBeforeMount(async () => {
  if (userInfoStore.id === '') {
      const userInfo = await fetchUserInfo();
      userInfoStore.setUserInfo(userInfo);
    }
  if (!botInfoStore.botExists) {
    const botInfo = await fetchBotInfo();
    botInfoStore.setBotInfo(botInfo);
  }
  chatStatsComprehensiveStore.setComprehensiveStats(await getChatStats());
})

</script>

<template>
  <ClassicView>
    <DemoAllert/>
    <div class="p-5">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"
      >
        <DataStatsOne :chat-stats-comprehensive-store="chatStatsComprehensiveStore" />
      </div>

      <div
        class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"
      >
        <ChartOne />
        <ChartTwo />
        <ChartThree :chat-stats-comprehensive-store="chatStatsComprehensiveStore" />
        <MapOne :chat-stats-comprehensive-store="chatStatsComprehensiveStore"/>
        <div class="col-span-12 xl:col-span-8">
          <TableOne :chat-stats-comprehensive-store="chatStatsComprehensiveStore" />
        </div>
      </div>
    </div>
  </ClassicView>
</template>
