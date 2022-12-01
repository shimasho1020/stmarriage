<template>
<div class="">
  <div class="body">
    <div class="body_wrap">
      <div class="section">
        <div class="section_title_block">
          <h1 class="section_title"><span class="inline-block">{{displayCaseList.age}}歳の{{displayCaseList.sex}}会員様が</span><span class="inline-block">ご成婚されました！</span></h1>
        </div>
        <div class="section_img">
          <img class="img" :src="imageURL" alt="本人写真">
        </div>
        <div class="section_block">
          <div class="text">
            <div style="white-space: pre-wrap;">当社の{{displayCaseList.age}}歳{{displayCaseList.sex}}会員様がご成婚されました。お相手は{{displayCaseList.partnerAge}}歳の{{changeSex(displayCaseList.sex)}}会員様です。<br>{{displayInterview.aboutText}}</div>
          </div>
          <div class="about">
            <h1 class="title">ご成婚者様の声</h1>
            <div class="list">
              <div class="list_item" v-for="(item, index) in displayInterview.interviewContents" :key="index">
                <h1 class="subtitle">{{item.title}}</h1>
                <div class="text">{{item.text}}</div>
              </div>  
            </div>
          </div>
        </div>
        <div class="backButoon">
          <button @click="router.go(-1)">戻る</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
 name: "editInterview",
});
</script>

<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter, useAsync } from '@nuxtjs/composition-api'
import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where } from "firebase/firestore"
import { firestore, storage } from '~/plugins/firebase.js'
import { CaseList, Interview, Interviewer, DisplayInterviewer } from '~/types/index'


const router = useRouter()
const route = useRoute()
const displayInterview = ref({} as Interview)
const displayCaseList = ref({} as CaseList)
const imageURL = ref()

useAsync(async () => {
  const thisPageId = route.value.params.id
  const docRef = doc(firestore, "interviewer", thisPageId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data())
    const result = docSnap.data() as Interviewer
    displayInterview.value = result.interview
    displayCaseList.value = result.caseList
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    router.push({path: '/'})
  }

  getDownloadURL(REF(storage, `images/${thisPageId}`))
  .then((url) => {
    imageURL.value = url
  })
  .catch((error) => {
    console.log(error)
  })
})

const changeSex = (sex: '' | '男性' | '女性') => {
  return sex === '男性' ? '女性' : '男性'
}

</script>

<style lang="sass" scoped>
.backButoon
  width: 150px
  margin: auto
  > button
    width: 100%
    text-align: center
    border-radius: 10px
    background-color: var(--main)
    +text-title(20px)
    color: var(--white-1)
    padding: 10px 0 10px
    display: inline-block

.body
  padding: 64px 0
  +sp-view
    padding: 20px 0 64px
  > .body_wrap
    margin: auto
    width: 820px
    max-width: calc(100% - 10vw)
    > .section
      padding: 30px
      border-radius: 20px
      background-color: var(--white-1)
      background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
      background-position:  left 2px top 2px, right 2px top 2px, left 2px bottom 2px, right 2px bottom 2px
      background-size: 50px 50px
      display: flex
      flex-direction: column
      gap: 40px
      // justify-content: center

      > .section_title_block
        +sp-view
          text-align: center
        > .section_title
          +text-title(32px)
          position: relative
          margin-left: 40px
          padding-right: 10px
          display: inline-block
          z-index: 1

          > .inline-block
            background: linear-gradient(transparent 70%, #a7d6ff 70%)
            text-shadow: 0 0 2px white

          +sp-view
            margin-left: 0
            +text-title(28px)
            text-align: center

          &::before 
            content: ""
            position: absolute
            background: var(--skyBlue)
            width: 50px
            height: 50px
            border-radius: 50%
            top: 50%
            left: -15px
            -webkit-transform: translateY(-50%)
            transform: translateY(-50%)
            z-index: -1

            +sp-view
              display: none

      > .section_img
        position: relative
        width: 400px
        margin: auto
        overflow: hidden
        border-radius: 20px

        +sp-view
          width: 90%
          max-width: 400px

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

      > .section_block
        > .text
          padding: 0 8% 40px
          +text-body(18px)

          +sp-view
            padding: 0 0 40px

        > .about
          > .title
            +text-title(28px)
            position: relative
            margin: 0 0 20px 7%
            // padding: 0 0 20px
            background: linear-gradient(transparent 70%, #a7d6ff 70%)
            display: inline-block

            +sp-view
              margin: 0 0 20px 0
              +text-title(24px)
            
          > .list
            margin-left: 10%

            > .list_item
              > .subtitle
                +text-title(24px)
                position: relative
                padding: 20px 0 10px

                &::after,&::before
                  content: ""
                  position: absolute
                  border-radius: 50%

                &::before
                  left: -32px
                  width: 20px
                  height: 20px
                  background: var(--skyBlue)
                  top: 50%
                  -moz-transform: translateY(-50%)
                  -webkit-transform: translateY(-50%)
                  -o-transform: translateY(-50%)
                  -ms-transform: translateY(-50%)
                  transform: translateY(-50%)
                
                &::after
                  top: 45%
                  left: -24px
                  width: 16px
                  height: 16px
                  background: var(--sub)

              > .text
                +text-body(16px)




</style>