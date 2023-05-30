<template>
<div v-if="user.login">
  <div style="position:relative;">
    <div class="button_wrap">
      <v-btn
        width="100"
        @click="logout"
        class="button"
        >ログアウト</v-btn
      >
    </div>
    <div class="body">
      <h1 class="text-center pa-5">ご成婚事例編集ページ</h1>
      <div class="body_wrap pb-10">
        <div v-if="!isDragMode" class="pa-5" style="text-align: center;">
          <nuxt-link to="/tomoko/0" style="display: inline-block;">
            <v-btn height="50" width="200" color="blue" class="white--text">新しく追加する</v-btn>
          </nuxt-link>
        </div>
        <div class="pa-5" style="text-align: center;">
          <v-btn v-if="!isDragMode" height="50" width="200" class="green--text font-weight-bold" @click="isDragMode = true">順番を変更する</v-btn>
          <v-btn v-else height="50" width="200" color="green" class="white--text" :loading="loading" @click="handleClickSave">保存する</v-btn>
        </div>
        <draggable v-if="isDragMode" :list="displayCaseList" draggable=".item" class="case_list">
          <div
            class="case_item item dragMode"
            v-for="item of displayCaseList"
            :class="{moya: !item.isPublic}"
            :key="item.id"
          >
            <div class="case_block">
              <h1 class="case_title">{{item.name}}</h1>
              <div class="text">
                
              </div>
              <div class="about">
                <ol class="special_list">
                <li>{{item.age}}歳{{item.sex}}</li>
                <li v-if="!!item.job">{{item.job}}</li>
                <li>交際期間{{item.datingTerm}}ヶ月</li>
                <li>活動期間{{item.term}}ヶ月</li>
              </ol>
              <div v-if="item.isPublic" class="green--text text-h5">現在公開中です</div>
              <div v-if="!item.isPublic" class="red--text text-h5">現在非公開中です</div>
              </div>
              <div class="link_wrap">
                <div v-if="!item.isInterview" class="link red--text text-h6">インタービューはありません</div>
              </div>
            </div>
            <div class="case_img">
              <div class="img_wrap">
                <img class="img" :src="item.url" :style="{objectPosition: `center ${50 + (item.imagePosition ?? 0)}%`}">
              </div>
            </div>
          </div>
        </draggable>
        <div v-else class="case_list">
          <nuxt-link
            class="case_item"
            v-for="(item, index) of displayCaseList"
            :class="{moya: !item.isPublic}"
            :to="`/tomoko/${item.id}`"
            :key="index"
          >
            <div class="case_block">
              <h1 class="case_title">{{item.name}}</h1>
              <div class="text">
                
              </div>
              <div class="about">
                <ol class="special_list">
                <li>{{item.age}}歳{{item.sex}}</li>
                <li v-if="!!item.job">{{item.job}}</li>
                <li>交際期間{{item.datingTerm}}ヶ月</li>
                <li>活動期間{{item.term}}ヶ月</li>
              </ol>
              <div v-if="item.isPublic" class="green--text text-h5">現在公開中です</div>
              <div v-if="!item.isPublic" class="red--text text-h5">現在非公開中です</div>
              </div>
              <div class="link_wrap">
                <div v-if="!item.isInterview" class="link red--text text-h6">インタービューはありません</div>
              </div>
            </div>
            <div class="case_img">
              <div class="img_wrap">
                <img class="img" :src="item.url" :style="{objectPosition: `center ${50 + (item.imagePosition ?? 0)}%`}">
              </div>
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
 layout: "signin"
});
</script>

<script setup  lang="ts">
import { computed, useContext, ref } from '@nuxtjs/composition-api'
import { useCaseList } from '~/composables/useCaseList'
import draggable from 'vuedraggable'
import { editCaseOrder } from '~/services/FirebaseService'

const { store } = useContext()
const { displayCaseList } = useCaseList(true)

const user = computed(() => store.getters['user'])
const logout = () => {
  store.dispatch('logout')
}

const changeSex = (sex: '' | '男性' | '女性') => {
  return !sex ? '' : sex === '男性' ? '女性' : '男性'
}

const isDragMode = ref(false)
const loading = ref(false)
const handleClickSave = async() => {
  loading.value = true
  await Promise.all(
    displayCaseList.value.map((element, index) => {
      return editCaseOrder(element.id, index + 1)
    })
  )
  loading.value = false
  isDragMode.value = false
}
</script>

<style lang="sass" scoped>
.button_wrap
  position: fixed
  top: 50px
  left: 100px
.moya
  opacity: 0.3
.body
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

        &.dragMode
          border: 2px solid lightGreen

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
          flex: 0 0 220px

          > .img_wrap
            position: relative
            width: 100%

            &::before
              content:""
              display: block
              padding-top: 100%

            > .img
              display: block
              position: absolute
              height: 100%
              width: 100%
              object-fit: cover
              top: 0
              border-radius: 20px

</style>