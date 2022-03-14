<template>
  <div>
    <v-subheader> Graph </v-subheader>
    <GChart
      type="AreaChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>

export default {
  name: "GraphComponent",
  props: ['chartData'],

  data() {
    return {
      chartOptions: {
        colors: ["#556600"],
        lineWidth: 6,
        legend: "none",
        backgroundColor: "transparent",
        hAxis: {
          textStyle: { color: "#AAA" },
          gridlines: { color: "transparent" },
        },
        vAxis: {
          textStyle: { color: "#AAA" },
          gridlines: { color: "transparent" },
        },
        width: "100%",
        chartArea: {
          width: "90%",
        },
      },
    };
  },
};
</script>