<template>
  <div class="footer">
    <div class="footer__contact base">
      <nuxt-link to="/" class="contact-link">
        <p class="contact-link__text">
          <span class="inline-block big">Get in Touch</span>
          <span class="inline-block small">お問い合わせはこちら</span>
        </p>
      </nuxt-link>
    </div>
    <div class="footer__contact overlay" ref="footerTarget" @mouseleave="mouseoutFooter">
      <div class="link-wrap">
      </div>
      <nuxt-link to="/" class="contact-link">
        <p class="contact-link__text">
          <span class="inline-block big">Get in Touch</span>
          <span class="inline-block small">お問い合わせはこちら</span>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// import {TweenMax} from "gsap";

export default {
  name: "GetInTouch",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {
    document.addEventListener('mousemove', this.watchFooterCursor)
  },
  destroyed() {
    document.removeEventListener('mousemove', this.watchFooterCursor)
  },
  methods: {
    watchFooterCursor(event) {
      const targetEle = this.$refs[`footerTarget`]
      const right = targetEle.getBoundingClientRect().right
      const bottom = targetEle.getBoundingClientRect().bottom
      const top = targetEle.getBoundingClientRect().top
      const posX = event.clientX
      const posY = event.clientY - top
      if(posY >= 0 && (bottom - top) >= posY && posX <= (right) && 0 <= posX){
        this.$gsap.to(targetEle, {
          "clip-path": `circle(120px at ${posX}px ${posY}px)`,
          duration: 0.3
        })
      }else{
        this.$gsap.to(targetEle, {
          "clip-path": `circle(0px at ${posX}px ${posY}px)`,
          duration: 0.3
        })
      }
    },
    mouseoutFooter(event){
      const targetEle = this.$refs[`footerTarget`]
      const posX = event.clientX
      const posY = event.clientY - targetEle.getBoundingClientRect().top
      this.$gsap.to(targetEle, .3, {
        css: {
            "clip-path": `circle(0px at ${posX}px ${posY}px)`
          }
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.inline-block
  display: inline-block

.footer
  position: relative

  > .footer__contact
    position: relative
    width: 100%
    height: 550px
    overflow: hidden

    &.base
      z-index: 10

    > .contact-link
      width: 100%
      height: 100%
      display: flex

      > .contact-link__text
        margin: auto
        display: flex
        flex-direction: column
        justify-content: center
        text-align: center

        > .big
          +text-title(100px)
          color: var(--main)

          +sp-view
            +text-title(63px)
            color: var(--main)

        > .small
          +text-subtitle(24px)
          color: var(--main)

          +sp-view
            +text-subtitle(18px)
            color: var(--main)

    &.overlay
      clip-path: circle(0px at 50% 50%)
      z-index: 10
      position: absolute
      top: 0px
      right: 0
      bottom: 0
      left: 0

      +sp-view
       display: none

      > .link-wrap
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        background-color: var(--main)
        z-index: 10

      > .contact-link
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        z-index: 30

        > .contact-link__text
          > .big, .small
            z-index: 30
            color: var(--white-1)

</style>
