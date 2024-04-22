<template>
  <div id="demo">
    <h1>WebSense AI</h1>
    <div class="google_button__container">
      <a class="google_button flex" href="http://localhost:5000/login">
        <span><img src="../assets/google_logo.svg" alt=""></span>
        Sign In with Google
      </a>
      <p class="google_button__text">
        I know...just google? we spent all our energy on the bot...more login
        option coming soon
      </p>
    </div>
  </div>
</template>

<script setup>
import WebSenseVue from '../components/websense/WebSense.vue';
import '@luisbeqja/web-sense/web-sense.js';
</script>

<style>
#demo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.google_button__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.google_button {
  gap: 10px;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  width: fit-content;
}
.google_button__text {
  font-size: 18px;
  margin-top: 10px;
  color: #cacaca;
}
</style>
