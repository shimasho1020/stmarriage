<template>
  <div class="footer">
    <div class="footer__contact base">
      <nuxt-link to="/contact" class="contact-link">
        <p class="contact-link__text">
          <span class="inline-block big">Contact Form</span>
          <span class="inline-block small">無料相談フォームはこちら</span>
        </p>
      </nuxt-link>
    </div>
    <div class="footer__contact overlay" ref="footerTarget" @mouseleave="mouseOutFooter">
      <div class="link-wrap">
      </div>
      <nuxt-link to="/contact" class="contact-link">
        <p class="contact-link__text">
          <span class="inline-block big">Contact Form</span>
          <span class="inline-block small">無料相談フォームはこちら</span>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from "gsap"

const footerTarget = ref()
const mouseOutFooter = (event: MouseEvent) => {
  const posX = event.clientX
  const posY = event.clientY - footerTarget.value.getBoundingClientRect().top
  gsap.to(footerTarget.value, .3, {
    css: {
        "clip-path": `circle(0px at ${posX}px ${posY}px)`
      }
  })
}
const watchFooterCursor = (event: MouseEvent) => {
  const right = footerTarget.value.getBoundingClientRect().right
  const bottom = footerTarget.value.getBoundingClientRect().bottom
  const top = footerTarget.value.getBoundingClientRect().top
  const posX = event.clientX
  const posY = event.clientY - top
  if(posY >= 0 && (bottom - top) >= posY && posX <= (right) && 0 <= posX){
    gsap.to(footerTarget.value, {
      "clip-path": `circle(120px at ${posX}px ${posY}px)`,
      duration: 0.3
    })
  }else{
    gsap.to(footerTarget.value, {
      "clip-path": `circle(0px at ${posX}px ${posY}px)`,
      duration: 0.3
    })
  }
}

onMounted(() => {
  document.addEventListener('mousemove', watchFooterCursor)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', watchFooterCursor)
})

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

    +sp-view
      height: 320px

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
