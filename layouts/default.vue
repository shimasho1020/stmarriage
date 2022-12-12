<template>
  <div class="all"> 
    <div class="header_wrap" :class="{'top-page': $route.name === 'index'}">
    <header class="header active"
            ref="pageHeader"
            id="header">
      <nuxt-link @click.native.prevent="nuxtLinkTrigger" to="/" class="logo" :class="{'top-page': $route.name === 'index'}">
        <div class="logo-sub">日本結婚所連盟（ＩＢＪ）　正規加盟店</div>
        <div class="logo-main">セントマリアージュ青山</div>
      </nuxt-link>
      <div class="menu pc pc-header" id="header-menu-pc" :class="{'top-page': $route.name === 'index'}">
        <nuxt-link class="menu--link" to="/" :class="{'highlight': $route.name === 'index'}">
          <div class="link-wrap"><span class="link-text">ホーム</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/price" :class="{'highlight': $route.name === 'price'}">
          <div class="link-wrap"><span class="link-text">料金プラン</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/flow" :class="{'highlight': $route.name === 'flow'}">
          <div class="link-wrap"><span class="link-text">入会から結婚まで</span></div>
        </nuxt-link>
        <div class="spacer"></div>
        <nuxt-link class="menu--link" to="/interview" :class="{'highlight': $route.name === 'interview'}">
          <div class="link-wrap"><span class="link-text">ご成婚事例</span></div>
        </nuxt-link>
        <!-- <nuxt-link class="menu--link" to="/contact" :class="{'highlight': $route.name === 'contact'}">
          <div class="link-wrap"><span class="link-text">相談フォーム</span></div>
        </nuxt-link> -->
        <nuxt-link class="menu--link" to="/company" :class="{'highlight': $route.name === 'company'}">
          <div class="link-wrap"><span class="link-text">会社概要</span></div>
        </nuxt-link>
      </div>
      <div
          class="menu sp"
          @click="toggleMenu"
          :class="{'top-page': $route.name === 'index'}"
      >
        <span></span>
        <div class="menu_text">メニュー</div>
      </div>
    </header>
    </div>
    <div class="sp-menu" ref="sideMenu">
      <div class="sp-menu-wrap" :class="{'top-page': $route.name === 'index'}">
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link sp" to="/">ホーム</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link sp" to="/price">料金プラン</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link sp" to="/flow">入会から結婚まで</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link sp" to="/interview">ご成婚事例</nuxt-link>
        <!-- <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link sp" to="/contact">相談フォーム</nuxt-link> -->
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link sp" to="/company">会社概要</nuxt-link>
      </div>
    </div>  
    <div class="flow_block" v-if="$route.name !== 'contact'" :class="{'top-page': $route.name === 'index'}">
      <nuxt-link to="/contact" class="circle_form">
        <span class="inline-block">無料相談<br>フォーム<br></span>
        <div class="mail_icon_wrap"><mail class="mail_icon"></mail></div>
      </nuxt-link>
    </div>

    <div class="BODY" :class="{'not-top-page': $route.name !== 'index', 'interview-page': $route.name === 'interview', 'company-page': $route.name === 'company'}">
      <nuxt/>
    </div>

    <footer class="footer">
      <div class="footer-wrap">
        <get-in-touch v-if="$route.name !== 'contact'" class="get-in-touch"></get-in-touch>
        <div class="bottom">
          <div class="bottom-block">Copyright ©️ 2022 St. Mariage Aoyama</div>
        </div>
      </div>
    </footer>
  </div>
</template>



<script setup lang="ts">
import gsap from "gsap"
import { computed, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
import mail from '~/assets/images/mail_icon.svg'
components: {
  mail
}


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
    // if(route.value.name == 'index') {
    //   store.commit('changeHeaderToTrans')
    // }
    sideActive.value = false
    gsap.to('.menu--link.sp', {
      opacity: 0,
      transform: 'translateY(40px)',
      stagger: {
        each: .1,
      }
    })
    gsap.to('.sp-menu-wrap', {
      duration: .7,
      autoAlpha: 0,
      onComplete: () => {
        classList.remove('active')
      },
    })
    headerClassList.remove('side-active')
  } else {
    if(!headerColor.value){
      store.commit('changeHeaderToBlue')
    }
    sideActive.value = true
    headerClassList.add('side-active')
    classList.add('active')
    gsap.to('.sp-menu-wrap', {
      duration: .7,
      autoAlpha: 1,
    })
    gsap.to('.menu--link.sp', {
      opacity: 1,
      transform: 'translateY(0)',
      stagger: {
        each: .1,
      }
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
      +text-subtitle(12px)
      color: currentColor

    > .logo-main
      +text-logo(36px)
      color: currentColor
      // text-shadow: 1px 1px 1px rgb(255, 255, 255),-1px -1px 1px rgb(255, 255, 255)

      +sp-view
        +text-title(24px)
        color: currentColor


  > .menu
    max-width: 640px
    display: flex
    justify-content: flex-end
    column-gap: 23px
    color: var(--white-1)
    padding: 5px 0 0

    +pc-sm-view
      max-width: 350px
      flex-wrap: wrap
      justify-content: flex-end
      row-gap: 10px
      column-gap: 20px

    &.top-page
      color: var(--main)

      > .menu--link
        &.access
          display: inline-block

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

      &.access
        display: none

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
        width: 24px
        height: 1px
        padding: 22px 0
        cursor: pointer
        color: var(--white-1)

        &.top-page
          color: var(--main)

        > .menu_text
          +text-title(8px)
          color: currentColor
          position: absolute
          bottom: 0
          right: 50%
          transform: translateX(50%)
          white-space: nowrap

        > span, span:before, span:after
          position: absolute
          content: ''
          width: 100%
          display: block
          height: 2px
          background: currentColor
          transform: rotate(0deg)

        > span:before
          transition: .3s
          transform: translateY(-7px)

        > span:after
          transition: .3s
          transform: translateY(7px)

  &.side-active
    .sp
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
      +text-title(24px)
      line-height: 1.5
      color: var(--white-1)
      background-color: var(--main)
      display: flex
      flex-direction: column
      justify-content: center
      gap: 40px
      text-align: center

      > .menu--link
        color: currentColor
        opacity: 0,
        transform: translateY(40px)

        &.access
          display: none
      
      &.top-page
        > .menu--link
          &.access
            display: block

.flow_block
  display: flex
  align-items: center
  position: fixed
  bottom: 20px
  right: min(80px, 5vw)
  z-index: 40
  opacity: 1

  &.top-page
    opacity: 0

  > .circle_form
    height: 140px
    width: 140px
    margin-left: 10px
    box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%)
    border-radius: 80px
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    flex-direction: column
    +text-title(21px)
    color: var(--white-1)
    padding: 10px 0 0
    // background: linear-gradient(to bottom, #e051bc, rgb(195, 242, 248))
    background: linear-gradient(to bottom, #5f51e0, rgb(195, 242, 248))
    transition-duration: .3s

    &:hover
      transform: scale(1.2)

    +sp-view
      height: 120px
      width: 120px
      +text-title(18px)
      color: var(--white-1)

      &:hover
        transform: none

    > .mail_icon_wrap
      width: 35%
      margin: 0
      path
        fill: var(--white-1)

.BODY
  &.not-top-page
    padding: 120px 0 0
    background-image: url("/images/luxury-2.jpg")
    background-size: 25%
    background-repeat: repeat
    background-color: var(--white-1)

  &.interview-page
    background-color: var(--main)
    background-image: none

  &.company-page
    background-color: var(--white-1)
    background-image: none

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

