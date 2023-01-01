<template>
  <div class="loading-page active" v-if="(route.name === 'index' || route.name === '*') && isLoadingEnabled" ref="loadingBD">
    <hanabira id="kaze" class="hanabira --1"></hanabira>
    <hanabira id="kaze" class="hanabira --2"></hanabira>
    <hanabira id="kaze" class="hanabira --3"></hanabira>
    <hanabira id="kaze" class="hanabira --4"></hanabira>
    <hanabira id="kaze" class="hanabira --5"></hanabira>
    <hanabira id="kaze" class="hanabira --6"></hanabira>
    <hanabira id="kaze" class="hanabira --7"></hanabira>
    <hanabira id="kaze" class="hanabira --8"></hanabira>
    <hanabira id="kaze" class="hanabira --9"></hanabira>
    <hanabira id="kaze" class="hanabira --10"></hanabira>
    <hanabira id="kaze" class="hanabira --11"></hanabira>
    <hanabira id="kaze" class="hanabira --12"></hanabira>
    <hanabira id="kaze" class="hanabira --13"></hanabira>
    <div class="loading-body" v-if="loading">
      <h1 class="page-title">
        <div class="page-title__block">
          <div class="page-title__block--sp">
            <span class="page-title__character" v-for="text in Array.from('あなたの真剣な想いを')" :key="text">
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
          <div class="page-title__block--sp">
            <span class="page-title__character" v-for="text in Array.from('サポートします')" :key="text">
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
        </div>
        <!-- <div class="page-title__block">
          <div class="page-title__block--sp">
            <span class="page-title__character" v-for="text in Array.from('全力でサポートします')" :key="text">
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
        </div> -->
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap"
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter, nextTick } from '@nuxtjs/composition-api'
import hanabira from '~/assets/images/hanabira.svg'

components: {
  hanabira
}

const router = useRouter()
const route = useRoute()
const { app, store } = useContext()

let loading = ref(true)
const loadingBD = ref()
let isLoadingEnabled = computed<boolean>(() => store.getters['isLoadingEnabled'])

const startLoading = () => {
  setTimeout(() => loading.value = true, 100)
  titleAnimation()
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
      gsap.to(".top_page_body", {
        position: 'fixed'
      })
      startLoading()
    })
  } else {
    gsap.to(".top_page_body", {
      position: 'relative'
    })
    finishLoading()
  }
})

const titleAnimation = () => {
  gsap.to(".page-title__child", {
    y: 0,
    opacity: 1,
    stagger: {
      amount: 2,
      ease: "none"
    },
    onComplete: () => {
      store.dispatch('finishLoading')
    },
  })
}

onMounted(() => {
  // titleAnimation()
}) 

</script>

<style lang="sass" scoped>

.hitohana 
  transform-box: fill-box
  transform-origin: center

@keyframes hitohana1 
  to 
    transform: rotateZ(1turn) rotateY(0.5turn)

@keyframes hitohana2
  to 
    transform: rotateZ(0.5turn) rotateY(0.5turn)

@keyframes hitohana3 
  to 
    transform: rotateX(1turn) rotateY(1turn)

@keyframes hitohana4 
  to 
    transform: rotateZ(1turn) rotateX(0.5turn)

#kaze 
  animation: kaze1 5s linear infinite

@keyframes kaze1 
  from 
    transform: translate(-30%,-150%)
  to 
    transform: translate(30%,150%)

.hanabira
  width: 30px
  height: 30px
  position: absolute
  top: 100px
  left: 100px

  &.--1
    top: 10%
    left: 5%
    .hitohana 
      animation: hitohana2 4s linear infinite
  &.--2
    top: 30%
    left: 30%
    .hitohana 
      animation: hitohana1 4s linear infinite
  &.--3
    top: 25%
    left: 50%
    .hitohana 
      animation: hitohana4 4s linear infinite
  &.--4
    top: 5%
    left: 70%
    .hitohana 
      animation: hitohana3 4s linear infinite
  &.--5
    top: 35%
    left: 90%
    .hitohana 
      animation: hitohana2 4s linear infinite
  &.--6
    top: 80%
    left: 10%
    .hitohana 
      animation: hitohana1 4s linear infinite
  &.--7
    top: 70%
    left: 35%
    .hitohana 
      animation: hitohana4 4s linear infinite
  &.--8
    top: 90%
    left: 55%
    .hitohana 
      animation: hitohana3 4s linear infinite
  &.--9
    top: 70%
    left: 75%
    .hitohana 
      animation: hitohana2 4s linear infinite
  &.--10
    top: 75%
    left: 95%
    .hitohana 
      animation: hitohana1 4s linear infinite
  &.--11
    top: 5%
    left: 40%
    .hitohana 
      animation: hitohana4 4s linear infinite
  &.--12
    top: 45%
    left: 17%
    .hitohana 
      animation: hitohana3 4s linear infinite
  &.--13
    top: 55%
    left: 60%
    .hitohana 
      animation: hitohana2 4s linear infinite

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

.loading-body
  position: relative

  > .page-title
    position: absolute
    top: 50vh
    left: 50vw
    transform: translate(-50%,-50%)
    text-align: center
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    +text-subtitle(54px)
    color: var(--white-1)

    +sp-view
      +text-subtitle(27px)
      color: var(--white-1)

    > .page-title__block
      display: flex
      flex-wrap: wrap
      justify-content: center
      > .page-title__block--sp
        display: flex
        justify-content: center
        padding: 8px 0
        .page-title__character
          //overflow: hidden
          > .page-title__child
            transform: translateY(32px)
            display: block
            opacity: 0
</style>