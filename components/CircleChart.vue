<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, computed } from '@nuxtjs/composition-api'
import { Chart } from 'chart.js'
import { ChartData } from '~/types/index'
import chartjsPluginDatalabels from 'chartjs-plugin-datalabels'

type Props = {
  data: ChartData
  label?: string
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({} as ChartData),
  label: ''
})

const sum = computed(() => {
  let total = 0
  for (let i = 0; i < props.data.datasets[0].data.length; i++) {
    total += props.data.datasets[0].data[i]
  }
  return total
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  createCharts()
})

function createCharts () {
  if (canvasRef.value === null) return
  const canvas = canvasRef.value.getContext('2d')
  if (canvas === null) return
  const c = new Chart(canvas, {
    type: 'pie', // doughnut
    data: props.data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: props.label
        },
        datalabels: {
            color: '#000',
            font: {
              weight: 'bold',
              size: 10,
            },
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels ? ctx.chart.data.labels[ctx.dataIndex] : null
              return label + '\n' + Math.round((value / sum.value) * 100) + '%';
            },
        },
      }
    },
  })
}
</script>
