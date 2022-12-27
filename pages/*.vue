<template>
  <v-app dark>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, useContext, useAsync, useRoute, useRouter } from '@nuxtjs/composition-api'

const router = useRouter()
const route = useRoute()
const { app, store } = useContext()

const isLoadingEnabled = computed<boolean>(() => store.getters['isLoadingEnabled'])

useAsync(async () => {
  router.push({path: '/'})
})

onMounted(() => {
  router.push({path: '/'})
})

</script>

<style scoped>
</style>
