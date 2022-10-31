<template>
  <div class="loading-page active" v-if="$route.name === 'index' && isLoadingEnabled === true" ref="loadingBD">
    <div class="loading-body" v-if="loading">
     
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap"
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter, nextTick } from '@nuxtjs/composition-api'

const { app, store } = useContext()

let loading = ref(false)
const loadingBD = ref()
let isLoadingEnabled = computed<boolean>(() => store.getters['isLoadingEnabled'])

const startLoading = () => {
  setTimeout(() => loading.value = true, 100)
}
const finishLoading = () => {
  gsap.to('.loading-page', {
    duration: .5,
    autoAlpha: 0,
    onComplete: () => {
      const classList = loadingBD.value.classList
      classList.remove('active')
      loading.value = false
    },
  })
}

let isPageLoading = computed<boolean>(() => store.getters['isPageLoading'])
watch(isPageLoading, (newVal, oldVal) => {
  if(newVal) {
    nextTick(() => {
      console.log('start')
      startLoading()
    })
  } else {
    console.log('finish')
    finishLoading()
  }
})

onMounted(() => {
  setTimeout(() => store.dispatch('finishLoading'), 2000)
}) 

</script>
<!-- <script>
import {mapGetters} from "vuex";

export default {
  data: () => ({
    loading: false
  }),
  computed: {
    ...mapGetters(['isPageLoading','isLoadingEnabled']),
    // isLoadingEnabled(){
    //   return this.$store.getters['isLoadingEnabled']
    // },
  },
  watch: {
    // isPageLoading(val) {
    //   if(val) {
    //     this.$nextTick(() => {
    //       this.startLoading()
    //     })
    //   } else {
    //     this.finishLoading()
    //   }
    // },
  },
  methods: {
    // start() {
    //   this.loading = true
    // },
    // finish() {
    //   this.loading = false
    // }
    startLoading() {
      setTimeout(() => this.loading = true, 100)
    },
    finishLoading() {
      this.$gsap.to('.loading-page', {
        duration: .5,
        autoAlpha: 0,
        onComplete: () => {
          const classList = this.$refs.loadingBD.classList
          classList.remove('active')
          this.loading = false
        },
      })
    },
  },
  mounted(){
    // console.log(this.isLoadingEnabled)
  },
}
</script> -->

<style lang="sass" scoped>
.loading-page 
  display: none
  background-color: var(--main)
  position: fixed
  width: 100vw
  height: 100vh
  top: 0px
  left: 0
  z-index: 110

  &.active
    display: block

  > .loading-body
    opacity: 0
</style>