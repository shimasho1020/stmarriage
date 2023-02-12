<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, computed } from '@nuxtjs/composition-api'
import { Chart } from 'chart.js'
import { ChartData } from '~/types/index'

type Props = {
  data: ChartData
  label?: string
  type?: string
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({} as ChartData),
  label: '',
  type: 'pie',
})

const sum = computed(() => {
  let total = 0
  for (let i = 0; i < props.data.datasets[0].data.length; i++) {
    total += props.data.datasets[0].data[i]
  }
  return total
})

const pageWidth = computed(() => {
  return window.innerWidth
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  if(pageWidth.value < 750) {
    if(canvasRef.value) {
      canvasRef.value.height = 400
    }
  }
  createCharts()
})

function createCharts () {
  if (canvasRef.value === null) return
  const canvas = canvasRef.value.getContext('2d')
  if (canvas === null) return
  const c = new Chart(canvas, {
    type: props.type as 'pie', // doughnut
    data: props.data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            generateLabels: function(chart) { 
              return chart.data.datasets.map(function(datasets, i) { 
                return { 
                  datasetIndex: i,
                  text: datasets.label,
                  fillStyle: (datasets.backgroundColor as any)[4], // 例　['#00FFFF', '#00CCFF', '#0099FF', '#0066FF', '#0033FF']
                  strokeStyle: datasets.borderColor,
                  // 表示状態に連動して取り消し線表示
                  hidden: !chart.isDatasetVisible(i),
                }
              }) as any;
            }
          },
          onClick: function(e, legendItem){
            const index = legendItem.datasetIndex;
            const ci = this.chart;
            const meta = ci.getDatasetMeta(index as number);
            meta.hidden = meta.hidden === null ? !ci.data.datasets[index as number].hidden : null as any;
            ci.update();
          },
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
