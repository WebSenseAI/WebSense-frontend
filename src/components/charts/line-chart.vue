<template>
  <div>
    <Line :id="chartId" :options="options" :data="data || []"></Line>
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs';
import './utils'
import { BarChartData } from '@/components/components.type';

defineProps<{
  chartData: BarChartData,
  chartOptions: Object,
  chartId: String,
}>();


export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}


</script>

<style scoped></style>
