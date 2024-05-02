<template>
  <div id="demo">
    <h1>WebSense AI</h1>
    <Button>Ciao</Button>
    <p>
      Although our product hasn't been released yet, we invite you to explore a
      demo that has absorbed insights from this page: .

      <span
        ><a class="link" href="https://luisbeqja.com/"
          >https://luisbeqja.com/</a
        ></span
      >
      Try it out!
    </p>
    <web-sense id="ebfd25cb-c056-46d0-8fd8-ae55f7536ea5" />
  </div>
</template>

<script setup lang="ts">
import WebSenseVue from '../components/websense/WebSense.vue';
import '@luisbeqja/web-sense/web-sense.js';
import { Button } from '@/components/ui/button';
</script>

<style>
#demo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
