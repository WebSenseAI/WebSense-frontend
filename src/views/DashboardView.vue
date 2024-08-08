<script setup lang="ts">
import DataStatsOne from '@/components/DataStats/DataStatsOne.vue';
import ChartOne from '@/components/Charts/ChartOne.vue';
import ChartThree from '@/components/Charts/ChartThree.vue';
import ChartTwo from '@/components/Charts/ChartTwo.vue';
import MapOne from '@/components/Maps/MapOne.vue';
import TableOne from '@/components/Tables/TableOne.vue';
import ClassicView from '@/layouts/ClassicView.vue';
import DemoAllert from '@/components/common/DemoAllert.vue';
</script>

<template>
  <ClassicView>
    <DemoAllert/>
    <div class="p-5">
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"
      >
        <DataStatsOne />
      </div>

      <div
        class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"
      >
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div class="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
      </div>
    </div>
  </ClassicView>
</template>
