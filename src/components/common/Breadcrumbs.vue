<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li v-for="item in list">
        <component :is="item.isCurrent ? 'p' : 'router-link'" :to="item.href">
            {{ item.text }}
        </component>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Breadcrumb {
  text: string;
  href: string;
  isCurrent: boolean;
}

defineProps({
  list: {
    type: Array as () => Breadcrumb[],
    default: [
      {
        text: 'Home',
        href: '/',
        isCurrent: false,
      },
    ],
  },
});
</script>

<style scoped lang="scss"></style>
