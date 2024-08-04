<template>
  <div>
    <Line :id="chartId" :options="chartOptions" :data="chartData || []"></Line>
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import './utils'
import { BarChartData } from '@/components/components.type';

defineProps<{
  chartData: BarChartData,
  chartOptions: Object,
  chartId: String,
}>();

</script>

<style scoped></style>
