<template>
  <h2 class="login-title">Login</h2>
  <LoginButtons />
</template>

<script setup lang="ts">
import LoginButtons from '@/components/common/LoginButtons.vue';
</script>

<style lang="scss" scoped>
.login-title {
  text-align: center;
  margin-top: 50px;
  font-size: 2rem;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
