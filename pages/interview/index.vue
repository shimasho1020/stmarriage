<template>
  <div class="">
    <div class="title_block" style="text-align:center">
      <h1 class="title">ご成婚事例</h1>
    </div>
    <div class="body">
      <div class="body_wrap">
        <div class="case_list">
          <component
            :is=" item.isInterview ? 'nuxt-link' : 'div'"
            class="case_item"
            v-for="(item, index) of displayCaseList"
            :to=" item.isInterview ? `/interview/${item.id}` : ''"
            :key="index"
          >
            <div class="img_wrap">
              <img class="img" :src="item.url" alt="本人写真">
            </div>
            <div class="case_block">
              <h1 class="case_title"><span class="inline-block">{{item.age}}歳の{{item.sex}}会員様が</span><span class="inline-block">ご成婚されました！</span></h1>
              <div class="about">
                <ol class="special_list">
                <li>{{item.age}}歳{{item.sex}}</li>
                <li>{{item.job}}</li>
                <li>活動期間{{item.term}}ヶ月</li>
                <li>お相手は{{item.partnerAge}}歳{{changeSex(item.sex)}}</li>
              </ol>
              </div>
              <div class="link_wrap">
                <div v-if="item.isInterview" class="link">
                  <arrow class="arrow"></arrow>
                  <span class="form">ご成婚インタビューはこちら</span>
                </div>
              </div>
            </div>
          </component>
        </div>
      </div>
    </div>
  </div>
  </template>

<script setup  lang="ts">
import gsap from "gsap"
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter, useAsync } from '@nuxtjs/composition-api'
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where } from "firebase/firestore"
import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestore, storage } from '~/plugins/firebase.js'
import { CaseList, Interview, Interviewer, DisplayInterviewer } from '~/types/index'
import Arrow from '~/assets/images/arrow.svg'
components: {
  Arrow
}

const interviewer = ref([] as DisplayInterviewer[])
const displayCaseList = computed(() => {
  return interviewer.value.map((val) => {
    return {
      id: val.id,
      url: val.url,
      isPublic: val.isPublic,
      ...val.caseList
    }
  })
})

useAsync(async () => {
  const q = query(collection(firestore, "interviewer"), where("isPublic", "==", true))
  const querySnapshot = await getDocs(q)

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
  return sex === '男性' ? '女性' : '男性'
}
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
    background-color: var(--white-1)

.body
  padding: 64px 0

  +sp-view
    background-color: var(--main)
  > .body_wrap
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)

    > .case_list
      display: flex
      flex-direction: column
      gap: 40px
      
      +sp-view
        flex-wrap: wrap
        width: 100%

      > .case_item
        padding: 30px
        border-radius: 20px
        background-color: var(--white-1)
        background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
        background-position:  left 2px top 2px, right 2px top 2px, left 2px bottom 2px, right 2px bottom 2px
        background-size: 50px 50px
        display: flex
        justify-content: space-between
        flex-direction: row-reverse

        +sp-view
          padding: 0
          display: block
          border-radius: 20px
          background-image: none

        > .img_wrap
          position: relative
          flex: 0 0 35%
          overflow: hidden
          border-radius: 20px


          +sp-view
            width: 100%
            border-radius: 20px 20px 0px 0px

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

        > .case_block
          padding: 20px
          > .case_title
            +text-title(24px)
            position: relative
            margin-left: 40px

            +sp-view
              margin-left: 0
              text-align: center
            
            &::after,&::before
              content: ""
              position: absolute
              border-radius: 50%

              +sp-view
                display: none

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
            padding: 32px

            +sp-view
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
          


</style>