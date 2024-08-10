<template>
  <div class="google_button__container">
    <p
      class="login_button flex"
      @click="loginWithService('google')"
    >
      <span
        ><img
          class="login_button_img"
          src="@/assets/logos/google_logo.svg"
          alt=""
      /></span>
      Login with Google
    </p>
    <p
      class="login_button flex"
      @click="loginWithService('github')"
    >
      <span
        ><img
          class="login_button_img"
          src="@/assets/logos/github_logo.svg"
          alt=""
      /></span>
      Login with Github
    </p>
  </div>
</template>

<script setup lang="ts">
import { SERVER_URL } from '@/utils/url';
import { useAxios } from '@/composables/axios';

const { get, data } = useAxios(SERVER_URL);

const loginWithService = async (service: string) => {
  await get(`${SERVER_URL}/auth/register/oauth/${service}`);
  const { url } = data.value;
  window.location.href = url;
};
</script>

<style lang="scss" scoped>
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
  display: flex;
  &__text {
    font-size: 18px;
    margin-top: 10px;
    color: #cacaca;
  }
  border: 1px solid #cacaca;
}
.login_button_img {
  width: 24px;
  height: 24px;
}
</style>
