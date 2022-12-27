<template>
  <v-app dark>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, useAsync, useRoute, useRouter } from '@nuxtjs/composition-api'

const router = useRouter()
const route = useRoute()

useAsync(async () => {
  router.push({path: '/'})
})

</script>

<style scoped>
</style>
