<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const props = defineProps<{
  chatStatsComprehensiveStore: any
}>();

let brandData:any = ref([]);

watchEffect(()=>{
  props.chatStatsComprehensiveStore.top_words.forEach((element:any) => {
    brandData.value.push(element);
  });
});

</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
    <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">
      Top messages this week
    </h4>

    <div class="flex flex-col">
      <div
        class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3"
      >
        <div class="p-2.5 xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Word</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Number</h5>
        </div>
        <!-- <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Variation</h5>
        </div> -->
      </div>

      <div
        v-for="(brand, key) in brandData"
        :key="key"
        :class="`grid grid-cols-3 sm:grid-cols-3 ${
          key === brandData.length - 1
            ? ''
            : 'border-b border-stroke dark:border-strokedark'
        }`"
      >
        <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <p class="hidden text-black dark:text-white sm:block">
            {{ brand.word }}
          </p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">{{ brand.occurence }}</p>
        </div>
        <!-- <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">{{ brand.conversion }}%</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
