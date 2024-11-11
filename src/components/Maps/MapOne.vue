<script setup lang="ts">
import * as d3 from 'd3';
import { onMounted, watch, watchEffect } from 'vue';
import { getCountryNameByCode } from '@/utils/countries/countryConverter';

const props = defineProps<{
  chatStatsComprehensiveStore: any;
}>();

const processMap = async() => {
  const countries = [...props.chatStatsComprehensiveStore.countries];

console.log('countries', countries)
const countryOccurrences: any = {}
countries.forEach((element: any) => {
  if (!element.country) {
    return;
  }
  const countryName: string | null = getCountryNameByCode(element.country);
  console.log('name', countryName)
  if (!countryName) return;
  countryOccurrences[countryName] = element.occurence;
});

// Create tooltip element
const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("background-color", "white")
  .style("padding", "5px")
  .style("border", "1px solid #ccc")
  .style("font-size", "12px")
  .style("pointer-events", "none")
  .style("display", "none");

// Set up the SVG container with a viewBox for responsiveness
const svg = d3.select("#mapOne")
  .append("svg")
  .attr("viewBox", "0 0 960 500")
  .attr("preserveAspectRatio", "xMidYMid meet")
  .classed("svg-content", true)
  .style("width", "100%")
  .style("height", "100%");

// Create a group element to allow zooming
const g = svg.append("g");

// Set up the projection and path for the map
const projection = d3.geoMercator()
  .scale(130)
  .center([0, 30]) // Adjust center to position North America lower
  .translate([480, 300]);
const path = d3.geoPath().projection(projection);

// Load GeoJSON world data
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then((worldData: any) => {
  // Filter out Antarctica by excluding features with that name
  const filteredData = worldData.features.filter((d: any) => d.properties.name !== "Antarctica");

  // Draw each country in the group element
  g.selectAll("path")
    .data(filteredData)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("class", "country")
    .attr("fill", (d: any) => {
      // Match country name in GeoJSON with countryOccurrences
      return countryOccurrences[d.properties.name] ? "#3056D3" : '#C8D0D8';
    })
    .on("mouseover", function (event, d) {
      const countryName = d.properties.name;
      const occurrence = countryOccurrences[countryName];

      // Show tooltip with country name and occurrence
      tooltip.style("display", "block")
             .html(`<h5>${countryName}</h5><p>Messages: ${occurrence || 0}</p>`);
      d3.select(this).attr("fill", "#a9a9a9"); // Hover color
    })
    .on("mousemove", function (event) {
      // Position tooltip near the cursor
      tooltip.style("top", (event.pageY - 10) + "px")
             .style("left", (event.pageX + 10) + "px");
    })
    .on("mouseout", function () {
      // Hide tooltip and reset color
      tooltip.style("display", "none");
      d3.select(this).attr("fill", (d: any) => {
        return countryOccurrences[d.properties.name] ? "#3056D3" : '#C8D0D8';
      });
    });
});

// Set up zoom behavior
const zoom = d3.zoom()
  .scaleExtent([1, 8]) // Limit zoom levels
  .on("zoom", (event) => {
    g.attr("transform", event.transform); // Apply zoom transform to the group
  });

// Attach zoom behavior to the SVG
svg.call(zoom);
}

watchEffect(async()=> {
  await processMap();
})
</script>

<template>
  <div
    class="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7"
  >
    <h4 class="mb-2 text-xl font-bold text-black dark:text-white">Region labels</h4>
    <div id="mapOne" class="mapOne map-btn !h-90"></div>
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  background-color: white;
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 12px;
  pointer-events: none;
}
.country {
  stroke: #fff;
  stroke-width: 0.5;
}
#mapOne {
  width: 100%;
  height: 100%;
}
</style>
