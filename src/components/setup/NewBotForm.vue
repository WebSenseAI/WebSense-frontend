<template>
  <span class="text-base font-thin text-rose-900">
    As of today, our system can handle websites with up to 100 pages. If your
    site contains more than 100 pages, the bot will only process and learn from
    the first 100 pages listed in your sitemap.
  </span>
  <form
    v-if="!loading"
    class="flex flex-col gap-4"
    action=""
    @submit.prevent="handleCreateChatBot"
  >
    <input
      v-model="assistantName"
      type="text"
      placeholder="Assistant Name"
      class="input input-bordered input-primary w-full max-w-xs"
    />
    <input
      v-if="!props.isEdit"
      v-model="websiteUrl"
      type="text"
      placeholder="Website URL"
      class="input input-bordered input-primary w-full max-w-xs"
    />
    <textarea
      v-model="firstMessage"
      type="text"
      placeholder="First message"
      class="textarea textarea-primary w-full max-w-xs"
    />
    <textarea
      v-model="websiteDescription"
      type="text"
      placeholder="Explain your website briefly"
      class="textarea textarea-primary w-full max-w-xs"
    />
    <input
      v-model="openAIKey"
      type="text"
      placeholder="OpenAI API Key"
      class="input input-bordered input-primary w-full max-w-xs"
    />
    <button v-if="props.isEdit" class="btn btn-primary w-fit">
      Edit your bot info 🤖
    </button>
    <button v-else class="btn btn-primary w-fit">Create you bot 🤖</button>
  </form>
  <NewBotLoading v-else />
</template>

<script setup lang="ts">
import NewBotLoading from '@/components/setup/NewBotLoading.vue';
import { onUnmounted, ref } from 'vue';
import { createChatBot } from '@/services/botService';
import { useUserInfoStore } from '@/store/index';
import { SERVER_URL } from '@/utils/url';
const userInfoStore = useUserInfoStore();

const assistantName = ref('');
const websiteUrl = ref('');
const firstMessage = ref('');
const websiteDescription = ref('');
const openAIKey = ref('');

const loading = ref(false);

function handleCreateChatBot() {
  loading.value = true;
  const botInfo = {
    name: assistantName.value,
    website: websiteUrl.value,
    description: websiteDescription.value,
    message: firstMessage.value,
    key: openAIKey.value,
  };
  createChatBot(botInfo, userInfoStore.id).finally(() => {
    loading.value = false;
    window.location.href = '/setup';
  });
}
export interface Props {
  isEdit?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isEdit: false,
});
</script>

<style scoped lang="scss"></style>
