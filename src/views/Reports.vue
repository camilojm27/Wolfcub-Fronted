<template>
<section>
  <h1>Report Appointment by day</h1>
  <LineChart :chartData="daysData" />
  <h1>Report Appointment by type</h1>
  <DoughnutChart :chartData="typeData" />
</section>
</template>

<script>
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "Reports",
  components: { LineChart, DoughnutChart },
  setup() {
    let days = []
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    const daysData = {
      labels: days,
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };
    const typeData = {
      labels: ['Citas', 'Baños'],
      datasets: [
        {
          data: [30, 40],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { daysData, typeData };
  },
}
</script>

<style scoped>
section{
  text-align: center;
  width: 90%;
  margin: auto;
}
</style>
