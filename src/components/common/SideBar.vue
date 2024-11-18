<template>
  <div class="sidebar">
    <ul class="menu p-4 w-full text-base">
      <li class="menu-title opacity-70">MENU</li>
      <li v-for="item in list">
        <router-link class="cursor-pointer menu-links" :to="item.href">
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
  { text: 'Dashboard', href: '/dashboard' },
];
</script>

<style scoped lang="scss">
.menu {
  list-style: none;
  li {
    margin-top: 5px;
    .router-link-active {
      color: #5A6ACF;
      background-color: #c9d0ff;
    }
    .menu-links {
      padding: 12px 20px;
      border-radius: 5px;
      &:hover {
        color: #5A6ACF;
      }
      &:active {
        background-color: #c9d0ff;
      }  
    }
  }
}
</style>
