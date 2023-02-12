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
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({} as ChartData),
  label: ''
})

const { store } = useContext()

const pageWidth = computed(() => {
  return window.innerWidth
})
// watch(pageWidth, (newVal) => {
//   console.log('TEST', newVal)
//   if(newVal < 750) {
//     let canvas = document.getElementById( "target" ) ;
//     (canvas as any).height = 300
//   }
// })

const canvasRef = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  if(pageWidth.value < 750) {
    if(canvasRef.value) {
      canvasRef.value.height = 300
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
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
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
