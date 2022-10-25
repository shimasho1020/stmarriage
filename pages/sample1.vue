<template>
  <div>
    <h1>{{ text }}</h1>
    <button @click="changeText">button</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useStore, SetupContext, getCurrentInstance } from '@nuxtjs/composition-api';

export default defineComponent({
  layout: 'sub',
  setup(_props, context) {
    // const scrolmagic = (context.root as any).$sleep
    const UseContextReturn = useContext()
    const { app, store } = useContext()
    // const store  = useStore ();

    // UseContextReturn.app.context.$test()
    // UseContextReturn.app.$test()
    // UseContextReturn.$test()
    console.log(store)
    // console.log(UseContextReturn.store.getters['pageWidth'])
    // app.$text()

    // console.log(getCurrentInstance())

    const text = ref('Hello, World!')

    const changeText = () => {
      text.value = 'Hello, Nuxt!'
    }

    return {
      text,
      changeText,
    }
  },
})
</script>