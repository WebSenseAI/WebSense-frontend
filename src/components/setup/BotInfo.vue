<template>
  <span class="line"></span>
  <div class="divider">You have currently a chat bot set up.</div>
  <div class="stats shadow">
    <div class="stat">
      <router-link to="howtouse" class="text-xs">HOW TO USE</router-link>
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
        <div class="stat-value font-thin">{{chatStatsBasicStore.count}}</div>
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
  <div class="w-full flex gap-2 justify-normal">
    <Modal id="modal-id" title="Edit bot 📝" > 
      <h3>Edit Your bot info</h3>
      <NewBotForm  :is-edit="true" />
    </Modal>
    <button class="btn btn-error" @click="clickDeleteBot">Delete bot 🗑</button>
  </div>
</template>

<script setup lang="ts">
import { deleteBot } from '@/services/botService';
import { getChatCount } from '@/services/chatService';
import { useBotInfoStore, useChatBasicStatsStore } from '@/store/index';
import Modal from '@/components/common/Modal.vue';
import NewBotForm from '@/components/setup/NewBotForm.vue';
import { onBeforeMount } from 'vue';
const botInfoStore = useBotInfoStore();
const chatStatsBasicStore = useChatBasicStatsStore();
onBeforeMount(async () => {
  if (botInfoStore.botExists) {
    chatStatsBasicStore.setBasicStats(await getChatCount());
  }
})

function clickDeleteBot() {
  if (confirm('Are you sure you want to delete this bot?')) {
    deleteBot().finally(() => {
      window.location.href = '/setup';
    });
  } else {
    return;
  }
}
</script>

<style scoped lang="scss"></style>
