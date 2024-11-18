<template>
  <label :htmlFor="id" className="btn btn-primary">{{ title }}</label>

  <input type="checkbox" :id="id" className="modal-toggle" />
  <div className="modal" role="dialog">
    <div className="modal-box">
      <slot />
      <div className="modal-action">
        <label :htmlFor="id" className="btn">Close!</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
}>();
</script>

<style scoped lang="scss"></style>
