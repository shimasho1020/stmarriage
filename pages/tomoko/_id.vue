<template>
<div v-if="user.login">
  <h1 class="text-center pa-5">ご成婚事例編集ページ</h1>
  <div style="position:relative;" class="py-10">
    <div v-if="completeMessage" class="message">{{completeMessage}}</div>
    <div class="backButoon">
      <v-btn 
        class="white--text indigo darken-4" 
        x-large
        @click="backEditPage"
      >戻る</v-btn>
    </div>
    <div class="saveButoon">
      <v-btn 
        class="white--text green darken-1" 
        x-large
        :disabled="!activeButton"
        @click="onSubmit"
      >保存する</v-btn>
    </div>
    <div class=".inline-block mx-auto" style="width:160px">
      <div class="green--text text-h5 text-center" v-if="isPublic">現在公開中</div>
      <div class="red--text text-h5 text-center" v-if="!isPublic">現在非公開中</div>
      <v-switch
      v-model="isPublic"
      inset
      :label="isPublic ? '公開': '非公開'"
    ></v-switch>
    </div>
    <div class="pa-5 d-flex justify-space-around">
      <div style="flex: 0 0 30%;border: 1px solid black;" class="rounded-lg">
        <v-form onsubmit="return false">
          <div class="pa-5">
            <h1 class="subtitle">インタビューの有無<span class="necessary">(必須)</span></h1>
            <v-switch
              v-model="caseList.isInterview"
              :label="caseList.isInterview ? 'インタビュー有り': 'インタビュー無し'"
            ></v-switch>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="caseList.name"
              placeholder="名前"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">性別<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="caseList.sex"
              :items="itemsSex"
              placeholder="性別"
            ></v-autocomplete>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">年齢<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="caseList.age"
              :items="itemsAge"
              placeholder="年齢"
              style="width:100px;display: inline-block"
            ></v-autocomplete>
            <span>歳</span>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">職業</h1>
            <v-text-field
              v-model="caseList.job"
              placeholder="職業"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">活動期間<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="caseList.term"
              :items="itemsTerm"
              placeholder="期間"
              style="width:100px;display: inline-block"
            ></v-autocomplete>
            <span>ヶ月</span>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">交際期間<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="caseList.datingTerm"
              :items="itemsTerm"
              placeholder="期間"
              style="width:100px;display: inline-block"
            ></v-autocomplete>
            <span>ヶ月</span>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">相手の年齢<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="caseList.partnerAge"
              :items="itemsAge"
              placeholder="相手の年齢"
              style="width:120px;display: inline-block"
            ></v-autocomplete>
            <span>歳</span>
          </div>
        </v-form>
      </div>


      <div style="flex: 0 0 65%">
        <div style="border: 1px solid black;" class="rounded-lg pa-5 mb-5">
          <div>
            <h1 class="subtitle pb-5">画像を選択<span class="necessary">(初回は必須)</span></h1>
            <label class="file_input_wrap" style="display:inline-block">
              <input 
                type="file" 
                @change="previewFile" 
                accept="image/*"
                class="file_input"
              >画像を選択、または変更
            </label>
          </div>
        </div>
        <div style="border: 1px solid black;" class="interview_editer rounded-lg pa-5" :class="{active:caseList.isInterview}">
          <div class="section">
            <div class="section_title_block">
              <h1 class="section_title">{{caseList.age}}歳の{{caseList.sex}}会員様がご成婚されました！</h1>
            </div>
            <div class="section_img">
              <img class="img profImg" :src="imageURL">
            </div>
            {{imagePosition}}
            <div class="d-flex flex-column" style="gap:10px;">
              <v-btn @click="addCount">アップ</v-btn>
              <v-btn @click="subtractCount">ダウン</v-btn>
              <v-btn @click="clearCount">クリア</v-btn>
            </div>
            <div class="section_block">
              <div class="text">
                <v-textarea
                  outlined
                  label="この方の簡単な説明や結婚までの経緯"
                  v-model="aboutText"
                ></v-textarea>
                <div style="white-space: pre-wrap;">当社の{{caseList.age}}歳{{caseList.sex}}会員様がご成婚されました。お相手は{{caseList.partnerAge}}歳の{{changeSex(caseList.sex)}}会員様です。<br><br>{{aboutText}}</div>
              </div>
              <div class="about">
                <h1 class="title">ご成婚者様の声</h1>
                <div class="list">
                  <div class="list_item" v-for="n of interviewCount" :key="n">
                    <h1 class="subtitle">
                      <div style="white-space: pre-wrap;" v-text="questionTitle[n-1]"></div>
                    </h1>
                    <v-text-field
                      outlined
                      label="インタビュータイトル入力"
                      v-model="questionTitle[n-1]"
                    ></v-text-field>
                    <div class="text">
                      <div style="white-space: pre-wrap;" v-text="questionText[n-1]"></div>
                    </div>
                    <v-textarea
                      outlined
                      label="インタビューの内容入力"
                      v-model="questionText[n-1]"
                    ></v-textarea>
                  </div>
                  <div class="plus_button">
                    <div class="text">インタービュー内容を追加</div>
                    <div class="my-parts" @click="interviewCount++"><span></span></div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div style="border-top: 1px solid black" class="my-10"></div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { resolve } from 'path';
export default defineComponent({
 layout: "signin",
 name: "editInterview",
});
</script>

<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter, useAsync } from '@nuxtjs/composition-api'
import { useEditIndividualData } from '~/composables/useEditIndividualData'

const { store } = useContext()
const router = useRouter()
const route = useRoute()
const { 
  isNew, 
  isPublic, 
  interviewCount, 
  aboutText, 
  questionTitle, 
  questionText, 
  interview, 
  caseList, 
  imageURL, 
  imagePosition, 
  isSending,
  isError,
  completeMessage,
  uploadImageFileData,
  onSubmit,
  previewFile,
  addCount, 
  subtractCount, 
  clearCount 
} = useEditIndividualData(route.value.params.id)

let user = computed(() => store.getters['user'])

const itemsSex = ['男性', '女性']
const itemsAge:number[] = []
for(let i=20;i<=65;i++){
  itemsAge.push(i)
}
const itemsTerm:number[] = []
for(let i=1;i<=60;i++){
  itemsTerm.push(i)
}
const changeSex = (sex: '' | '男性' | '女性') => {
  return sex === '男性' ? '女性' : '男性'
}

watch(imagePosition,(val) => {
  moveImg(val)
})
const moveImg = (count:number) => {
  document.querySelectorAll('.profImg').forEach((element:any) => {
    element.style.objectPosition = `center ${50 + count}%`;
  })
}

const activeButton = computed(() => {
  return !!caseList.value.name && 
          !!caseList.value.age && 
          !!caseList.value.sex &&
          !!caseList.value.term &&
          !!caseList.value.datingTerm &&
          !!caseList.value.partnerAge &&
          !!imageURL
})

const backEditPage = () => {
  clearCount()
  router.push({path: '/tomoko'})
}

onMounted(() => {
  moveImg(imagePosition.value)
})

</script>

<style lang="sass" scoped>
.file_input_wrap
  padding: 10px 40px
  color: #ffffff
  background-color: #384878
  cursor: pointer
  >.file_input 
    display: none

.message
  position: fixed
  top: 0px
  left: 0
  z-index: 50
  width: 100vw
  background-color: var(--main)
  text-align: center
  +text-subtitle(32px)
  color: var(--white-1)
  padding: 20px

.necessary
  color: #ff0000a0
.subtitle
  +text-body(20px)

.saveButoon
  position: fixed
  top: 50px
  right: 100px
  z-index: 10

.backButoon
  position: fixed
  top: 50px
  left: 100px
  z-index: 10
.interview_editer
  opacity: .3
  pointer-events: none
  &.active
    opacity: 1
    pointer-events: auto

.plus_button
  text-align: center

  > .text
    +text-title(20px)
  >.my-parts 
    display: inline-block
    margin: auto
    width: 32px
    height: 32px
    position: relative
    border: 1px solid var(--main)
    border-radius: 50%
    cursor: pointer
    
    span
      &::before,&::after
        display: block
        content: ""
        position: absolute
        top: 50%
        left: 50%
        width: 84%
        height: 16%
        margin: -8% 0 0 -42%
        background: var(--main)
        border-radius: 30%
      
      &::after
        transform: rotate(90deg)



.section
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
    > .section_title
      +text-title(32px)
      position: relative
      margin-left: 40px
      padding-right: 10px
      display: inline-block
      background: linear-gradient(transparent 70%, #a7d6ff 70%)
      // color: var(--white-1)
      text-shadow: 0 0 2px white
      // background: var(--w)
      z-index: 1
      border-radius: 0 10px 10px

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

  > .section_img
    position: relative
    width: 400px
    margin: auto
    overflow: hidden
    border-radius: 20px

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
      padding: 0 10% 40px
      +text-body(20px)
      color: var(--sub2)

    > .about
      > .title
        +text-title(28px)
        position: relative
        margin: 0 0 20px  7%
        // padding: 0 0 20px
        background: linear-gradient(transparent 70%, #a7d6ff 70%)
        display: inline-block
        
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
            color: var(--sub2)
</style>