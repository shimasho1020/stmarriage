import { Chart, registerables } from 'chart.js'
import chartjsPluginDatalabels from 'chartjs-plugin-datalabels'
Chart.register(...registerables, chartjsPluginDatalabels)
