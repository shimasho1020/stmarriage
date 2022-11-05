<template>
  <div class="all"> 
    <div class="header_wrap" :class="{'top-page': $route.name === 'index'}">
    <header class="header active"
            ref="pageHeader"
            id="header"
            :class="{'side-active': false}">
      <nuxt-link @click.native.prevent="nuxtLinkTrigger" to="/" class="logo" :class="{'top-page': $route.name === 'index'}">
        <div class="logo-sub">日本結婚所連盟（ＩＢＪ）　正規加盟店</div>
        <div class="logo-main">セントマリアージュ青山</div>
      </nuxt-link>
      <div class="menu pc pc-header" id="header-menu-pc" :class="{'top-page': $route.name === 'index'}">
        <nuxt-link class="menu--link" to="/" :class="{'highlight': $route.name === 'index'}">
          <div class="link-wrap"><span class="link-text">ホーム</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/price" :class="{'highlight': $route.name === 'price'}">
          <div class="link-wrap"><span class="link-text">コース案内</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/flow" :class="{'highlight': $route.name === 'flow'}">
          <div class="link-wrap"><span class="link-text">入会から結婚まで</span></div>
        </nuxt-link>
        <div class="spacer"></div>
        <nuxt-link class="menu--link" to="/interview" :class="{'highlight': $route.name === 'interview'}">
          <div class="link-wrap"><span class="link-text">成婚者の声</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/">
          <div class="link-wrap"><span class="link-text">お問い合せ</span></div>
        </nuxt-link>
      </div>
      <div
          class="menu sp"
          @click="toggleMenu"
      >
        <span></span>
      </div>
    </header>
    </div>
    <div class="sp-menu" ref="sideMenu">
      <div class="sp-menu-wrap">
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/price">Media sheet</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/price">Ads calendar</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/price">News</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/price">Case study</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="//price">FAQ/Contact</nuxt-link>
      </div>
    </div>  
    <div class="flow_block" :class="{'top-page': $route.name === 'index'}">
      <div class="circle_form man"><span class="inline-block">無料相談<br>男性用</span></div>
      <div class="circle_form woman"><span class="inline-block">無料相談<br>女性用</span></div>
    </div>

    <div class="Body" :class="{'not-top-page': $route.name !== 'index'}">
      <nuxt/>
    </div>

    <footer class="footer">
      <div class="footer-wrap">
        <get-in-touch class="get-in-touch"></get-in-touch>
        <div class="bottom">
          <div class="bottom-block">Copyright ©️ 2020 St. Marriage Aotama</div>
        </div>
      </div>
    </footer>
  </div>
</template>



<script setup lang="ts">
import gsap from "gsap"
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'


const router = useRouter()
const route = useRoute()
const { app, store } = useContext()

let sideActive= ref<boolean>(false)
let pageWidth = ref<number>(900)
const sideMenu = ref()
const pageHeader = ref()

const nuxtLinkTrigger = (event: any) => {
  if (sideActive.value) {
    toggleMenu()
  }
  router.push({path: event.target.pathname || '/'})
}

const toggleMenu = () => {
  const classList = sideMenu.value.classList
  const headerClassList = pageHeader.value.classList
  if (sideActive.value) {
    sideActive.value = false
    gsap.to('.sp-menu-wrap', {
      duration: .7,
      autoAlpha: 0,
      onComplete: () => {
        classList.remove('active')
      },
    })
    headerClassList.remove('side-active')
  } else {
    sideActive.value = true
    headerClassList.add('side-active')
    classList.add('active')
    gsap.to('.sp-menu-wrap', {
      duration: .7,
      autoAlpha: 1,
    })
  }
}

const watchWidth = () => {
  pageWidth.value = window.innerWidth
  store.commit('getWidth', pageWidth.value)
}

watch(pageWidth, (newVal, oldVal) => {
  if (newVal > 770 && sideActive.value) toggleMenu()
})

let headerColor = computed<boolean>(() => store.getters['headerScrollTriggerActive'])
let formDisplay = computed<boolean>(() => store.getters['formDisplayActive'])

watch(headerColor, (newVal, oldVal) => {
  const color = '#010146'
  if(newVal){
    gsap.to(".header_wrap", {
      'background-color': color,
      // duration: .3, 
    })
    gsap.to(".logo", {
      color: '#eff4f4',
      // duration: .3, 
    })
    gsap.to(".menu", {
      color: '#eff4f4',
      // duration: .3, 
    })
  } else {
    gsap.to(".header_wrap", {
      'background-color': '#00000000',
      // duration: .3, 
    })
    gsap.to(".logo", {
      color: color,
      // duration: .3, 
    })
    gsap.to(".menu", {
      color: color,
      // duration: .3, 
    })
  }
})
watch(formDisplay, (newVal, oldVal) => {
  if(newVal){
    gsap.to(".flow_block", {
      opacity: 1,
      duration: .3, 
    })
  } else {
    gsap.to(".flow_block", {
      opacity: 0,
      duration: .3, 
    })
  }
})

onMounted(() => {
  watchWidth()
  window.addEventListener('resize', watchWidth, false)
})

onUnmounted(() => {
  window.removeEventListener('resize', watchWidth, false)
})

</script>

<style lang="sass">
@keyframes text-roll-animation
  0%
    transform: translateX(0%)

  100%
    transform: translateX(-100%)

::selection
  background-color: var(--main)
  color: var(--white-1)

.inline-block
  display: inline-block

.header_wrap
  position: fixed
  z-index: 100
  top: 0
  background-color: var(--main)
  width: 100%
  border-radius: 0 0 30px 30px

  &.top-page
    background-color: #00000000

.header
  margin: auto
  width: calc(100% - 160px)
  min-width: calc(100% - 10vw)
  height: 90px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 20px 0px 20px
  opacity: 0
  border-bottom: 1px solid var(--color-black-100)
  // background-color: var(--main)

  +sp-view
    height: 64px
    padding: 20px 0 15px

  &.active
    opacity: 1

  > .logo
    color: var(--white-1)

    &.top-page
      color: var(--main)

    > .logo-sub
      +text-subtitle(10px)
      color: currentColor
      
      +sp-view
        display: none

    > .logo-main
      +text-title(36px)
      color: currentColor
      // text-shadow: 1px 1px 1px rgb(255, 255, 255),-1px -1px 1px rgb(255, 255, 255)

      +sp-view
        +text-title(28px)
        color: var(--white-1)

  > .menu
    max-width: 640px
    display: flex
    justify-content: flex-end
    column-gap: 23px
    color: var(--white-1)
    padding: 5px 0 0

    +pc-sm-view
      max-width: 400px
      flex-wrap: wrap
      justify-content: flex-end
      row-gap: 4px
      column-gap: 20px

    &.top-page
      color: var(--main)

    > .spacer
      display: none

      +pc-sm-view
        display: inline-block
        width: 100%

    > .menu--link
      +text-title(18px)
      color: currentColor
      text-decoration: none
      display: inline-block
      position: relative

      &.highlight
        &::before 
          position: absolute
          bottom: -10px
          left: calc(50%)
          transform: translateX(-50%)
          width: 50%
          height: 5px
          content: ''
          border-radius: 3px
          background-image: linear-gradient(135deg, #17aaee 0%, #176dee 50%,  #17aaee 100%, )

      // &::after 
      //   position: absolute
      //   bottom: -10px
      //   left: calc(50% - 15px)
      //   width: 30px
      //   height: 3px
      //   content: ''
      //   border-radius: 3px
      //   background-color: var(--main)

      > .link-wrap
        overflow: hidden
        display: flex
        align-items: center
        position: relative
          
        > .link-text
          display: inline-block
          white-space: nowrap

    &.pc
      // transition: .3s

      +sp-view
        display: none

    &.sp
      display: none

      +sp-view
        display: block
        position: relative
        width: 20px
        height: 1px
        padding: 20px 0
        cursor: pointer
        color: var(--main)

        &.white
          color: var(--white-1)

        > span, span:before, span:after
          position: absolute
          content: ''
          width: 100%
          display: block
          height: 1px
          background: currentColor
          transform: rotate(0deg)

        > span:before
          transition: .3s
          transform: translateY(-7px)

        > span:after
          transition: .3s
          transform: translateY(7px)

  &.side-active
    border-bottom: 1px solid var(--main) !important

    > .sp
      > span
        background: rgba(255, 255, 255, 0)

      > span:before, span:after
        background: var(--white-1)
        transform-origin: center center

      > span:before
        transform: rotate(-45deg) translateY(0px)

      > span:after
        transform: rotate(45deg) translateY(0px)

.sp-menu
  position: fixed
  top: 0
  left: 0
  transform: translateX(-100vw)
  transition: .3s
  width: 100vw
  height: 100vh
  z-index: 50

  display: none

  &.active
    display: block
    transform: translateX(0)

    > .sp-menu-wrap
      opacity: 0
      height: 100%
      width: 100%
      padding: 0 20px
      +text-title(40px)
      line-height: 1.5
      color: var(--white-1)
      background-color: var(--main)
      display: flex
      flex-direction: column
      justify-content: center

      > .menu--link
        color: currentColor

.flow_block
  display: flex
  align-items: center
  position: fixed
  bottom: 20px
  right: min(80px, 5vw)
  z-index: 100
  opacity: 1

  &.top-page
    opacity: 0

  > .circle_form
    height: 120px
    width: 120px
    margin-left: 10px
    box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%)
    border-radius: 60px
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    +text-subtitle(20px)
    color: var(--white-1)
    
    &.man
      background: linear-gradient(to bottom, #5f51e0, rgb(195, 242, 248))
    &.woman
      background: linear-gradient(to bottom, #e051bc, rgb(195, 242, 248))

.Body
  &.not-top-page
    padding: 120px 0 0
    background-image: url("/images/luxury-2.jpg")
    background-size: 25%
    background-repeat: repeat
    background-color: var(--white-1)

.footer
  background-color: var(--white-1)

  > .footer-wrap
    // padding: 120px 0 0

    > .bottom
      position: relative
      z-index: 10
      background-color: var(--main)
      padding: 30px 0 10px
      text-align: center
      +text-subtitle(14px)
      color: var(--white-1)

      +sp-view
        padding: 25px 5vw

</style>

