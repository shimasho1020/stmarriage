<template>
  <ArrowLeft class="arrow" :class="{'right': direction === 'right'}"></ArrowLeft>
</template>

<script>
import ArrowLeft from '~/assets/images/arrow-horizontal-left.svg'

export default {
  name: "ArrowImage",
  components: {
    ArrowLeft
  },
  props: {
    direction: {
      type: String,
      default: 'left',
    //   validator: (value) => {
    //     return ['left', 'right'].indexOf(value) !== -1
    //   }
    }
  },
}
</script>

<style scoped lang="sass">
.arrow
  &.right
    transform: rotate(180deg)
</style>
