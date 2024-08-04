<template>
  <div>
    <Pie :id="chartId" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import './utils'
import { PieChartData } from '@/components/components.type';

defineProps<{
  chartData: PieChartData,
  chartOptions: Object,
  chartId: String,
}>();


</script>

<style scoped lang="scss"></style>
