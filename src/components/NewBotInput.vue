<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/pina';
import { SERVER_URL } from '../utils'
const router = useRouter();
const store = useUserStore();

const props = defineProps({
  userId: String,
});

const assistantName = ref('');
const websiteUrl = ref('');
const websiteDescription = ref('');
const additionalInfo = ref('');
const openAIKey = ref('');

const createChatBot = async () => {
  if (store.bot.id !== null) {
    alert('You already have a chatbot');
    return;
  }
  try {
    const response = await axios.post(`${SERVER_URL}/api/new/bot`, {
      name: assistantName.value.value,
      website: websiteUrl.value.value,
      description: websiteDescription.value.value,
      message: additionalInfo.value.value,
      key: openAIKey.value.value,
      user_id: props.userId.id,
    });
    router.push('/');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <label class="form-control w-full max-w-xs mt-5">
    <div class="label">
      <span class="label-text">Assistant Name</span>
    </div>
    <input
      type="text"
      placeholder="Websense"
      class="input input-bordered w-full max-w-xs"
      ref="assistantName"
    />
  </label>
  <label class="form-control w-full max-w-xs mt-3">
    <div class="label">
      <span class="label-text">Website Url</span>
    </div>
    <input
      type="text"
      placeholder="www.website.com"
      class="input input-bordered w-full max-w-xs"
      ref="websiteUrl"
    />
  </label>
  <label class="form-control w-full max-w-xs mt-3">
    <div class="label">
      <span class="label-text">description</span>
    </div>
    <textarea
      type="text"
      placeholder="information about your website or your business"
      class="textarea textarea-bordered w-full max-w-xs"
      ref="websiteDescription"
    />
  </label>
  <label class="form-control w-full max-w-xs mt-3">
    <div class="label">
      <span class="label-text">message</span>
    </div>
    <textarea
      type="text"
      placeholder="The first message that the chatbot will send to the user"
      class="textarea textarea-bordered w-full max-w-xs"
      ref="additionalInfo"
    />
  </label>
  <label class="form-control w-full max-w-xs mt-3">
    <div class="label">
      <span class="label-text">OpenAI key</span>
    </div>
    <input
      type="text"
      placeholder="OpenAI key"
      class="input input-bordered w-full max-w-xs"
      ref="openAIKey"
    />
  </label>
  <button @click="createChatBot()" class="btn btn-accent mt-10">
    Create your Chat Bot
  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
