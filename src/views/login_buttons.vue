<template>
  <div id="demo">
    <h1>{{ $t('website.web_sense_ai') }}</h1>
    <div class="google_button__container">
      <a class="login_button flex" :href="`${SERVER_URL}/login`">
        <span><img class="login_button_img" src="../assets/google_logo.svg" alt="" /></span>
        {{ $t('website.login_with_google') }}
      </a>
      <a class="login_button flex" :href="`${SERVER_URL}/login`">
        <span><img class="login_button_img" src="../assets/github_logo.svg" alt="" /></span>
        {{ $t('website.login_with_github') }}
      </a>
    </div>
  </div>
</template>

<script setup>
import WebSenseVue from '../components/websense/WebSense.vue';
import '@luisbeqja/web-sense/web-sense.js';
import { SERVER_URL } from '../utils';
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
.login_button {
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
.login_button_img {
  width: 24px;
  height: 24px;
}
.login_button__text {
  font-size: 18px;
  margin-top: 10px;
  color: #cacaca;
}
</style>
