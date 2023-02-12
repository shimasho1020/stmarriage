<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, computed, useContext, watch } from '@nuxtjs/composition-api'
import { Chart } from 'chart.js'
import { ChartData } from '~/types/index'


type Props = {
  data: ChartData
  label?: string
  height?: number
  displayLegend?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({} as ChartData),
  label: '',
  height: 300,
  displayLegend: true,
})

const { store } = useContext()

const pageWidth = computed(() => {
  return window.innerWidth
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  if(pageWidth.value < 750) {
    if(canvasRef.value) {
      canvasRef.value.height = props.height
    }
  }
  createCharts()
})

function createCharts () {
  if (canvasRef.value === null) return
  const canvas = canvasRef.value.getContext('2d')
  if (canvas === null) return
  const c = new Chart(canvas, {
    type: 'bar',
    data: props.data,
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 1,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: props.displayLegend,
          position: 'top',
          labels:{

          },
        },
        title: {
          display: true,
          text: props.label,
        },
        datalabels: {
          display: false
        },
      }
    }  
  })
}
</script>
