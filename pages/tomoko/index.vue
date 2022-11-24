<template>
<div>
  <div style="position:relative;">
    <div class="body">
      <div class="body_wrap">
        <div class="case_list">
          <nuxt-link
            class="case_item"
            :class="{moya: !isPublic}"
            v-for="(item, index) of caseList"
            :to="`/tomoko/${item.id}`"
            :key="index"
          >
            <div class="case_block">
              <h1 class="case_title">{{item.age}}歳の{{item.sex}}会員様がご成婚されました！</h1>
              <div class="text">
                
              </div>
              <div class="about">
                <ol class="special_list">
                <li>{{item.age}}歳{{item.sex}}</li>
                <li>{{item.job}}</li>
                <li>活動期間{{item.term}}ヶ月</li>
                <li>お相手は{{item.partnerAge}}歳{{changeSex(item.sex)}}</li>
              </ol>
              <div v-if="isPublic" class="green--text text-h4">現在公開中です</div>
              <div v-if="!isPublic" class="red--text text-h4">現在非公開中です</div>
              </div>
              <div class="link_wrap">
                <div v-if="!item.isInterview" class="link red--text text-h6">インタービューはありません</div>
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
</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
 layout: "sub"
});
</script>

<script setup  lang="ts">
import { computed, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
import Arrow from '~/assets/images/arrow.svg'
components: {
  Arrow
}

interface CaseList {
  id: number,
  name?: string,
  age: number,
  sex: '男性' | '女性'
  job?: string,
  term?: number,
  partnerAge?: number,
  img?: string,
  isInterview: boolean,
}

const isPublic = ref(false)

const caseList: CaseList[] = [
  {
    id: 1,
    age: 40,
    sex: '男性',
    job: '弁護士',
    term: 10,
    partnerAge: 35,
    img:'/images/marriage-gate.webp',
    isInterview: true,
  },
  {
    id: 2,
    age: 40,
    sex: '男性',
    job: '弁護士',
    term: 10,
    partnerAge: 35,
    img:'/images/marriage-gate.webp',
    isInterview: false,
  },
  {
    id: 3,
    age: 40,
    sex: '男性',
    job: '弁護士',
    term: 10,
    partnerAge: 35,
    img:'/images/marriage-gate.webp',
    isInterview: true,
  },
]
const changeSex = (sex: '男性' | '女性') => {
  return sex === '男性' ? '女性' : '男性'
}
</script>

<style lang="sass" scoped>
.moya
  opacity: 0.5
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

        > .case_img
          flex: 0 0 45%

          > .img
            width: 100%

            border-radius: 20px

</style>