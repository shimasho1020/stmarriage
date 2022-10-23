<template>
  <div>
    <h1>{{ state.text }}</h1>
    <p>{{ state.count }}</p>
    <button @click="changeText">button</button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

interface State {
  text: string
  count: number
}

  
    const state = reactive<State>({
      text: 'Hello, World!',
      count: 0,
    })

    const { count } = toRefs(state)

    const changeText = () => {
      state.text = 'Hello, Nuxt!'
      count.value++
    }
</script>