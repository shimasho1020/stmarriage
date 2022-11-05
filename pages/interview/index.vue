<template>
  <div class="">
    <div class="title_block" style="text-align:center">
      <h1 class="title">ご成婚事例</h1>
    </div>
    <div class="body">
      <div class="body_wrap">
        <div class="case_list">
          <nuxt-link
            class="case_item"
            v-for="(item, index) of caseList"
            :to="`/interview/${item.num}`"
            :key="index"
          >
            <div class="case_block">
              <h1 class="case_title">31歳の男性会員様がご成婚されました！</h1>
              <div class="text">
                
              </div>
              <div class="about">
                <ol class="special_list">
                <li>31歳男性</li>
                <li>会社員</li>
                <li>活動期間10ヶ月</li>
                <li>お相手は34歳女性</li>
              </ol>
              </div>
              <div class="link_wrap">
                <div class="link">
                  <arrow class="arrow"></arrow>
                  <span class="form">詳しくはこちら</span>
                </div>
              </div>
            </div>
            <div class="case_img">
              <img class="img" src="/images/marriage-gate.webp">
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </template>

<script setup  lang="ts">
import gsap from "gsap"
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
import Arrow from '~/assets/images/arrow.svg'
components: {
  Arrow
}

interface CaseList {
  num: number,
  name: string,
  img: string,
  url?: string,
}

const caseList: CaseList[] = [
  {
    num: 1,
    name:'xxx xxxx',
    img:'/images/marriage-gate.webp',
  },
  {
    num: 2,
    name:'yyy yyyy',
    img:'/images/marriage-gate.webp',
    url:'/flow',
  },
  {
    num: 3,
    name:'zzz zzzz',
    img:'/images/marriage-gate.webp',
    url:'/voice',
  },
]
</script>

<style lang="sass" scoped>
.arrow
  display: inline-block
  width: 24px
  height: 24px
  circle
    fill: var(--main)
.title_block
  > .title
    +text-title(40px)
    position: relative
    padding: 1.5rem 2rem
    -webkit-box-shadow: 0 2px 14px rgba(0, 0, 0, .1)
    box-shadow: 0 2px 14px rgba(0, 0, 0, .1)
    background-color: rgb(255, 255, 255,0.7)

    &::before,&::after
      position: absolute
      left: 0
      width: 100%
      height: 4px
      content: ''
      background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)

    &::before
      top: 0
    &::after
      bottom: 0

.body
  padding: 64px 0
  > .body_wrap
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)

    > .case_list
      display: flex
      flex-direction: column
      gap: 40px
      > .case_item
        padding: 30px
        border-radius: 20px
        background-color: var(--white-1)
        background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
        background-position:  left 2px top 2px, right 2px top 2px, left 2px bottom 2px, right 2px bottom 2px
        background-size: 50px 50px
        display: flex
        justify-content: space-between

        > .case_block
          > .case_title
            +text-title(24px)
            position: relative
            margin-left: 40px
            
            &::after,&::before
              content: ""
              position: absolute
              border-radius: 50%

            &::before
              left: -32px
              width: 24px
              height: 24px
              background: var(--skyBlue)
              top: 50%
              -moz-transform: translateY(-50%)
              -webkit-transform: translateY(-50%)
              -o-transform: translateY(-50%)
              -ms-transform: translateY(-50%)
              transform: translateY(-50%)
            
            &::after
              top: 8px
              left: -24px
              width: 20px
              height: 20px
              background: var(--sub)

          > .about
            padding: 20px 0

            > .ol.original_list
              >li
                background-color: rgba(0, 0, 0, 0)

          > .link_wrap
            width: 100%
            text-align: right
            > .link
              text-align: right

              > .arrow
                position: relative
                top: 8px
              > .form
                +text-body(16px)
          

        > .case_img
          flex: 0 0 45%

          > .img
            width: 100%

            border-radius: 20px

</style>