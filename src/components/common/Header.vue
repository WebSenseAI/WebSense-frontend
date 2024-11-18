<template>
  <div class="top-0 left-0 navbar bg-base-100 border-b border-base-200">
    <div class="flex-1">
      <router-link class=" mt-4 w-32" to="/">
        <img src="@/assets/logos/WTextLogo.svg" alt="Chatbot" />
      </router-link>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" :src="picture" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li @click="logout"><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { logout } from '@/services/authService';

defineProps<{
  picture: string;
}>();
</script>

<style scoped lang="scss"></style>
