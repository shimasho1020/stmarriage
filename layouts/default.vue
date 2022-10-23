<template>
  <div class="all"> 
    <div class="header_wrap">
    <header class="header active" ref="pageHeader"
            id="header"
            :class="{'side-active': false}">
      <nuxt-link @click.native.prevent="nuxtLinkTrigger" to="/" class="logo">
        <div class="logo-sub">日本結婚所連盟（ＩＢＪ）　正規加盟店</div>
        <div class="logo-main">セントマリアージュ青山</div>
      </nuxt-link>
      <div class="menu pc pc-header" id="header-menu-pc">
        <nuxt-link class="menu--link" to="/mediasheet">
          <div class="link-wrap"><span class="link-text">コース案内</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/calendar">
          <div class="link-wrap"><span class="link-text">入会から結婚まで</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/news">
          <div class="link-wrap"><span class="link-text">あいさつ</span></div>
        </nuxt-link>
        <div class="spacer"></div>
        <nuxt-link class="menu--link" to="/case-study">
          <div class="link-wrap"><span class="link-text">成婚者の声</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/faq">
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
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/mediasheet">Media sheet</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/calendar">Ads calendar</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/news">News</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/case-study">Case study</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/faq">FAQ/Contact</nuxt-link>
      </div>
    </div>  
    <div class="flow_block">
      <div class="circle_form man"><span class="inline-block">無料相談<br>男性用</span></div>
      <div class="circle_form woman"><span class="inline-block">無料相談<br>女性用</span></div>
    </div>

    <div class="body">
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

<script>
import { nextTick } from 'vue'
export default {
  data() {
    return {
      drawer: false,
      menus: [
        { title: 'top', icon: 'mdi-web', url: '/' },
        { title: 'company', icon: 'mdi-information-variant', url: '/company' },
        { title: 'sample', icon: 'mdi-web', url: '/sample' },
      ],
      sideActive: false,
      fuwaTrigger: [],
      trigger: [
        '.intro',
        '.title_block.--1',
        '.case_list',
        '.link-block',
        '.title_block.--2',
        '.award-title',
        '.content_body.img',
        '.content_body.text',
        '.title_block.--3',
        '.content_body.---1',
        '.content_body.---2',
        '.title_block.--4',
        '.self-pic',
        '.self-p',
        '.title_block.--5',
        '.access-comment',
        '.access-map',
      ],
    }
  },
  methods: {
    nuxtLinkTrigger(event) {
      if (this.sideActive) {
        this.toggleMenu()
      }
      this.$router.push({path: event.target.pathname || '/'})
    },
    toggleMenu() {
      const classList = this.$refs.sideMenu.classList
      const headerClassList = this.$refs.pageHeader.classList
      if (this.sideActive) {
        this.sideActive = false
        this.$gsap.to('.sp-menu-wrap', {
          duration: .7,
          autoAlpha: 0,
          onComplete: () => {
            classList.remove('active')
          },
        })
        headerClassList.remove('side-active')
      } else {
        this.sideActive = true
        headerClassList.add('side-active')
        classList.add('active')
        this.$gsap.to('.sp-menu-wrap', {
          duration: .7,
          autoAlpha: 1,
        })
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll); //スクロールのするたびに関数を呼びだす処理
    this.headerHeight = document.documentElement.clientHeight 

    this.$gsap.to(".circle_form",{
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      duration: .3, 
    })
    this.$gsap.to(".header_wrap",{
      scrollTrigger: {
        trigger: '.intro',
        start: 'top 30%',
        toggleActions: 'play none none reverse',
      },
      'background-color': '#000875',
      duration: .3, 
    })
    this.$nextTick( () => {
      this.trigger.forEach(value => {
        this.fuwaTrigger[value] = this.$gsap.fromTo(value, 1, {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: value,
            start: 'top 70%',
          },
          opacity: 1,
        })
      })
    });
  },
}

  
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
  background-color: rgba(33, 33, 33, 0)
  width: 100%
  border-radius: 0 0 30px 30px

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
    transition: .3s

  > .logo
    > .logo-sub
      +text-subtitle(10px)
      color: var(--white-1)
      

      +sp-view
        display: none

    > .logo-main
      +text-title(36px)
      color: var(--white-1)
      // text-shadow: 1px 1px 1px rgb(255, 255, 255),-1px -1px 1px rgb(255, 255, 255)

      +sp-view
        +text-title(28px)
        color: var(--white-1)

  > .menu
    width: 660px
    display: flex
    justify-content: flex-end
    column-gap: 23px

    +pc-sm-view
      width: 400px
      flex-wrap: wrap
      justify-content: flex-end
      row-gap: 4px

    > .spacer
      display: none

      +pc-sm-view
        display: inline-block
        width: 100%

    > .menu--link
      +text-title(20px)
      color: var(--white-1)
      // text-shadow: 1px 1px 1px rgb(255, 255, 255),-1px -1px 1px rgb(255, 255, 255)
      text-decoration: none
      display: inline-block
      overflow: hidden

      > .link-wrap
        overflow: hidden
        display: flex
        align-items: center

        > .link-text
          display: inline-block
          padding-right: 20px
          white-space: nowrap

        &::after
          display: inline-block
          padding-right: 20px
          white-space: nowrap

        &:hover
          > .link-text, &::after
            animation: text-roll-animation 1.6s infinite linear

      &:nth-child(1)
        flex: 0 0 100px

        .link-wrap
          &::after
            content: 'Media sheet'

      &:nth-child(2)
        flex: 0 0 160px

        .link-wrap
          &::after
            content: 'Ads calendar'

      &:nth-child(3)
        flex: 0 0 80px

        .link-wrap
          &::after
            content: 'News'

      &:nth-child(5)
        flex: 0 0 100px

        .link-wrap
          &::after
            content: 'Case study'

      &:nth-child(6)
        flex: 0 0 100px

        .link-wrap
          &::after
            content: 'FAQ/Contact'

    &.pc
      transition: .3s

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

