<script setup lang="ts">
import { ref, watchEffect,reactive } from 'vue'
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts'
const props = defineProps<{
  chatStatsComprehensiveStore: any;
}>();

const chartData = reactive({
  series: [0, 0, 0, 0],
  labels: ['Morning', 'Afternoon', 'Evening', 'Late Night'],
  percentages: [0,0,0,0]
});

const chart = ref(null)

const apexOptions = {
  chart: {
    type: 'donut',
    width: 380
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
  labels: chartData.labels,
  legend: {
    show: false,
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200
        }
      }
    }
  ]
}


watchEffect(()=>{
  const time_periods = {...props.chatStatsComprehensiveStore.time_periods};
  chartData.series = [
    time_periods["Morning"],
    time_periods["Afternoon"],
    time_periods["Evening"],
    time_periods["Late Night"]
  ]
  const total = props.chatStatsComprehensiveStore.message_count;
  chartData.percentages = [
    total ? Math.round(time_periods["Morning"] / total * 1000) / 10 : 0,
    total ? Math.round(time_periods["Afternoon"] / total * 1000) /10 : 0,
    total ? Math.round(time_periods["Evening"] / total * 1000) /10 : 0,
    total ? Math.round(time_periods["Late Night"] / total * 1000) / 10 : 0
  ]
})

</script>

<template>
  <div
    class="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5"
  >
    <div class="mb-3 justify-between gap-4 sm:flex">
      <div>
        <h4 class="text-xl font-bold text-black dark:text-white">Timing Usage</h4>
      </div>
      <div>
      </div>
    </div>
    <div class="mb-2">
      <div id="chartThree" class="mx-auto flex justify-center">
        <VueApexCharts
          type="donut"
          width="340"
          :options="apexOptions"
          :series="chartData.series"
          ref="chart"
        />
      </div>
    </div>
    <div class="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
     
      <div class="w-full px-8 sm:w-1/2">
        <div class="flex w-full items-center">
          <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
          <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
            <span> Morning </span>
            <span> {{chartData.percentages[0]}}% </span>
          </p>
        </div>
      </div>
      <div class="w-full px-8 sm:w-1/2">
        <div class="flex w-full items-center">
          <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
          <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
            <span> Afternoon </span>
            <span> {{chartData.percentages[1]}}% </span>
          </p>
        </div>
      </div>
      <div class="w-full px-8 sm:w-1/2">
        <div class="flex w-full items-center">
          <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
          <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
            <span> Evening </span>
            <span> {{chartData.percentages[2]}}% </span>
          </p>
        </div>
      </div>
      <div class="w-full px-8 sm:w-1/2">
        <div class="flex w-full items-center">
          <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
          <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
            <span> Late Night </span>
            <span> {{chartData.percentages[3]}}% </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
