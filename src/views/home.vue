<template>
  <div id="home">
    <h1>{{ $t('website.web_sense_ai') }}</h1>
    <h2 class="mt-20 text-3xl">
      {{ $t('website.landing_description') }}
    </h2>
    <h4>
      {{ $t('website.landing_description_2') }}
    </h4>
    <WebSenseVue />
  </div>
</template>

<script setup>
import WebSenseVue from '../components/websense/WebSense.vue';
</script>

<style>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
