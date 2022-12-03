<template>
<div>
  <div style="position:relative;">
    <div class="body">
      <div class="body_wrap pb-10">
        <div class="pa-5" style="text-align: center;">
          <nuxt-link to="/tomoko/0" style="display: inline-block;">
            <v-btn height="50" width="200" color="blue" class="white--text">新しく追加する</v-btn>
          </nuxt-link>
        </div>
        <div class="case_list">
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
                <li>{{item.job}}</li>
                <li>活動期間{{item.term}}ヶ月</li>
                <li>お相手は{{item.partnerAge}}歳{{changeSex(item.sex)}}</li>
              </ol>
              <div v-if="item.isPublic" class="green--text text-h4">現在公開中です</div>
              <div v-if="!item.isPublic" class="red--text text-h4">現在非公開中です</div>
              </div>
              <div class="link_wrap">
                <div v-if="!item.isInterview" class="link red--text text-h6">インタービューはありません</div>
              </div>
            </div>
            <div class="case_img">
              <div class="img_wrap">
                <img class="img" :src="item.url" :style="{objectPosition: `center calc(50% - ${item.imagePosition}px)`}">
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
 layout: "sub"
});
</script>

<script setup  lang="ts">
import { computed, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter, useAsync } from '@nuxtjs/composition-api'
import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where } from "firebase/firestore"
import { firestore, storage } from '~/plugins/firebase.js'
import { CaseList, Interview, Interviewer, DisplayInterviewer } from '~/types/index'


const interviewer = ref([] as DisplayInterviewer[])
const displayCaseList = computed(() => {
  return interviewer.value.map((val) => {
    return {
      id: val.id,
      isPublic: val.isPublic,
      url: val.url,
      imagePosition: val.imagePosition,
      ...val.caseList
    }
  })
})

watch(interviewer,(val) => {
  console.log(val)
})
watch(displayCaseList,(val) => {
  console.log(val)
})

useAsync(async () => {
  const querySnapshot = await getDocs(collection(firestore, "interviewer"));
  
  interviewer.value = await Promise.all(
    querySnapshot.docs.map(async(doc) => {
      const url = await getDownloadURL(REF(storage, `images/${doc.id}`))
      .catch((error) => {
        console.log(error)
      })
      return {
        id: doc.id,
        url: url ?? '',
        ...doc.data() as Interviewer
      }
    })
  )
})


const changeSex = (sex: '' | '男性' | '女性') => {
  return !sex ? '' : sex === '男性' ? '女性' : '男性'
}
</script>

<style lang="sass" scoped>
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
          flex: 0 0 35%

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