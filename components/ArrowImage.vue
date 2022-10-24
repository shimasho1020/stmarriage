<template>
  <arrow-left class="arrow" :class="{'right': direction === 'right'}"></arrow-left>
  <!-- <img class="arrow right" src="~/assets/images/arrow-horizontal-left.svg" /> -->
</template>

<script setup lang="ts">
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
import ArrowLeft from '~/assets/images/arrow-horizontal-left.svg'

components: {
  ArrowLeft
}
defineProps<{
  direction?: string;
}>();

// export default {
//   name: "ArrowImage",
//   components: {
//     ArrowLeft
//   },
//   props: {
//     direction: {
//       type: String,
//       default: 'left',
//     //   validator: (value) => {
//     //     return ['left', 'right'].indexOf(value) !== -1
//     //   }
//     }
//   },
// }
</script>

<style scoped lang="sass">
.arrow
  path
    fill: currentColor
  &.right
    transform: rotate(180deg)
</style>
