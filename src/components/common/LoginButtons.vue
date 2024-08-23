<template>
  <div class="google_button__container">
    <p
      class="login_button flex"
      @click="loginWithOauth('google')"
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
      @click="loginWithOauth('github')"
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
import { loginWithOauth } from '@/services/loginService';
import { supabase } from '@/services/supabaseService';
import { ref, onMounted } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

onMounted(async () => {
  if (window.location.hash) {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Error during OAuth redirect handling:', error.message);
    } else {
      console.log('Session stored:', data.session);
      session.value = data.session;
      router.push('/home'); // Redirect after handling
    }
  }
})

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
