<template>
  <div v-if="renderComponent" class="chat-bubble--container">
    <div
      v-for="item in items"
      :key="item.id"
      class="chat-bubble"
      :class="{ right: item.sender === 'user', left: item.sender !== 'user' }"
    >
      <p v-html="item.text"></p>
    </div>
    <div class="chat-bubble left">
      <p>
        Absolutely! Simply click on the provided link and log in to begin
        crafting your very own bot!
        <span class="link"> <router-link to="/demo">LINK</router-link></span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref, nextTick } from 'vue';

const items = [
  {
    id: 0,
    text: "👋 Welcome! I'm here to help you with any questions you have. Just ask away!",
    sender: 'BOT',
  },
  {
    id: 1,
    text: 'Hello, how are you doing?',
    sender: 'user',
  },
  {
    id: 2,
    text: "I'm doing well, thank you! How can I help you today?",
    sender: 'bot',
  },
  {
    id: 3,
    text: 'Can i have the acccess to WebSenseAI ?',
    sender: 'user',
  },
];

const renderComponent = ref(true);

const forceRerender = async () => {
  // Remove MyComponent from the DOM
  renderComponent.value = false;

  // Wait for the change to get flushed to the DOM
  await nextTick();

  // Add the component back in
  renderComponent.value = true;
};
</script>

<style>
.link {
  color: #4629f2;
  text-decoration: underline;
  cursor: pointer;
}
.chat-bubble--container {
  height: 400px;
  overflow: auto;
  padding-top: 10px;
  overflow: hidden;
}
.chat-bubble--container::-webkit-scrollbar {
  display: none;
}
.chat-bubble.right {
  background-color: #4629f2;
  color: white;
  width: fit-content;
  padding: 10px 15px;
  margin: 10px 15px;
  border-radius: 20px 20px 0px 20px;
  float: right;
  max-width: 70%;
  text-align: right;
  font-size: 14px;
}
.chat-bubble.left {
  background-color: #f1f7ff;
  color: black;
  width: fit-content;
  padding: 10px 15px;
  margin: 10px 15px;
  border-radius: 0px 20px 20px 20px;
  float: left;
  font-size: 14px;
  max-width: 70%;
  text-align: left;
}
p {
  margin: 0;
}
</style>
