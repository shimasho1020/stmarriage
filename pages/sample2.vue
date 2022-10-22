<template>
  <div>
    <div v-for="(name, i) in names" :key="i">
      <input v-model="checkedNames" :value="name" type="checkbox" />
      <label>{{ name }}</label>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const names = ['Jack', 'John', 'Mike']
    const checkedNames = ref<string[]>([])

    // computed版
    const text = computed(() => {
      return 'checkedNames: ' + checkedNames.value.join(', ')
    })

    // // watch版
    // const text = ref('')
    // watch(
    //   checkedNames,
    //   (newValue, oldValue) => {
    //     text.value = 'checkedNames: ' + newValue.join(', ')
    //   },
    //   { immediate: true, deep: false }
    // )

    return {
      names,
      checkedNames,
      text,
    }
  },
})
</script>