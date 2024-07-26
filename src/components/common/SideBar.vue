<template>
  <div class="sidebar">
    <ul class="menu p-4 w-full text-base">
      <li v-for="item in list">
        <router-link class="menu-title cursor-pointer" :to="item.href">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const list = [
  { text: 'Home', href: '/' },
  { text: 'Bot', href: '/setup' },
];
</script>

<style scoped lang="scss">
.menu {
  list-style: none;
  li {
    margin-top: 5px;
    .router-link-active {
      background-color: #e5e5e5;
    }
    &:hover {
      background-color: #e5e5e5;
    }
  }
}
</style>
