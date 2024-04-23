<template>
  <div>
    <h1>WebSense AI</h1>
    <h3>Welcome, here you can configure your new Chat Assistant.</h3>
    <NewBotInput msg="Vite + Vue" />
    <web-sense id="luisbeqja_collection"></web-sense>
  </div>
</template>

<script setup>
import NewBotInput from '../components/NewBotInput.vue';
import { onBeforeMount, onMounted } from 'vue';
import axios from 'axios';

const fetchUserInfo = async () => {
  try {
    // Make a GET request to the Flask server to fetch user info
    const response = await axios.get('http://localhost:5000/userinfo', {
      withCredentials: true,
    });
    // Set user data in component state
    console.log(response)
  } catch (error) {
    console.error('Error fetching user information:', error);
  }
};

onBeforeMount(() => {
  fetchUserInfo(); 
});
</script>

<style></style>
