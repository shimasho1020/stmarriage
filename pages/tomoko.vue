<template>
<v-app>
  <div style="position:relative;">
    <h1 class="text-center pa-5">ご成婚事例編集ページ</h1>
    <div class="saveButoon">
      <v-btn 
        class="white--text green darken-1" 
        x-large
        :disabled="!activeButton"
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
              v-model="isInterview"
              :label="isInterview ? 'インタビュー有り': 'インタビュー無し'"
            ></v-switch>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="name"
              placeholder="名前"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">性別<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="sex"
              :items="itemsSex"
              placeholder="性別"
            ></v-autocomplete>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">年齢<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="age"
              :items="itemsAge"
              placeholder="年齢"
              style="width:100px;display: inline-block"
            ></v-autocomplete>
            <span>歳</span>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">職業</h1>
            <v-text-field
              v-model="job"
              placeholder="職業"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">活動期間<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="term"
              :items="itemsTerm"
              placeholder="期間"
              style="width:100px;display: inline-block"
            ></v-autocomplete>
            <span>ヶ月</span>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">相手の年齢<span class="necessary">(必須)</span></h1>
            <v-autocomplete
              v-model="partnerAge"
              :items="itemsAge"
              placeholder="相手の年齢"
              style="width:120px;display: inline-block"
            ></v-autocomplete>
            <span>歳</span>
          </div>
        </v-form>
      </div>


      <div style="flex: 0 0 65%;border: 1px solid black;" class="left_edit_side rounded-lg pa-5" :class="{active:isInterview}">
        <div class="section">
          <div class="section_title_block">
            <h1 class="section_title">{{age}}歳の{{sex}}会員様がご成婚されました！</h1>
          </div>
          <input 
            type="file" 
            @change="previewFile" 
            accept="image/*"
          >
          <div class="section_img">
            <img class="img" :src="uploadFile">
          </div>
          <div class="section_block">
            <div class="text">
              <v-textarea
                outlined
                label="この方の簡単な説明や結婚までの経緯"
                v-model="aboutText"
              ></v-textarea>
              <div style="white-space: pre-wrap;" v-text="aboutText"></div>
            </div>
            <div class="about">
              <h1 class="title">ご成婚者様の声</h1>
              <div class="list">
                <div class="list_item">
                  <h1 class="subtitle">婚活を始めたきっかけ</h1>
                  <div class="text">
                    <v-textarea
                      outlined
                      label="婚活を始めたきっかけ"
                      v-model="questionText1"
                    ></v-textarea>
                    <div style="white-space: pre-wrap;" v-text="questionText1"></div>
                  </div>
                </div>
                <div class="list_item">
                  <h1 class="subtitle">こちらの相談所を選んだきっかけ</h1>
                  <div class="text">
                    <v-textarea
                      outlined
                      label="こちらの相談所を選んだきっかけ"
                      v-model="questionText2"
                    ></v-textarea>
                    <div style="white-space: pre-wrap;" v-text="questionText2"></div>
                  </div>
                </div>
                <div class="list_item">
                  <h1 class="subtitle">カウンセラーとの思い出のエピソード</h1>
                  <div class="text">
                    <v-textarea
                      outlined
                      label="カウンセラーとの思い出のエピソード"
                      v-model="questionText3"
                    ></v-textarea>
                    <div style="white-space: pre-wrap;" v-text="questionText3"></div>
                  </div>
                </div>
                <div class="list_item">
                  <h1 class="subtitle">システムやルールで感じたこと</h1>
                  <div class="text">
                    <v-textarea
                      outlined
                      label="システムやルールで感じたこと"
                      v-model="questionText4"
                    ></v-textarea>
                    <div style="white-space: pre-wrap;" v-text="questionText4"></div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!-- <v-btn
          :disabled="!isActiveSubmit"
          width="100"
          :loading="loading"
          @click="handleClickSearch"
          >検索</v-btn> -->
      </div>
      <div style="border-top: 1px solid black" class="my-10"></div>
    </div>
  </div>
</v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
 layout: "sub"
});
</script>

<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
import axios from 'axios'
import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";

interface CaseList {
  num: number,
  age: number,
  term?: number,
  partnerAge?: number,
  sex: '男性' | '女性' | ''
  name?: string,
  job?: string,
  img?: string,
  isInterview: boolean,
}

const itemsSex = ['男性', '女性']
const itemsAge:number[] = []
for(let i=20;i<=65;i++){
  itemsAge.push(i)
}
const itemsTerm:number[] = []
for(let i=1;i<=60;i++){
  itemsTerm.push(i)
}
const { app, store, $config } = useContext()
console.log(app.$fire.storage)

let isPublic = ref(false)
let num = ref(0)
let age = ref(0)
let term = ref(0)
let partnerAge = ref(0)
let sex = ref('')
let name = ref('')
let job = ref('')
let img = ref('')
let isInterview = ref('')

let aboutText = ref('')
let questionText1 = ref('')
let questionText2 = ref('')
let questionText3 = ref('')
let questionText4 = ref('')

let isSubmit = ref(false)
let isSending = ref(false)
let isError = ref(false)
let completeMessage = ref('')

let activeButton = computed(() => {
  return !!name.value && 
          !!age.value && 
          !!sex.value &&
          !!term.value &&
          !!partnerAge.value &&
          !!isInterview.value
})

let sendingClass = computed(() => {
  return {
    'is-sending'  : isSending,
    'is-error'    : isError,
    'is-complete' : isSubmit
  }
})

const onSubmit = () => {
  if(isSending.value){
    return;
  }
  isSending.value = true;
  completeMessage.value = '送信処理中…';
  
  // axios.
  // post('/', params)
  // .then(() => {
  //   completeMessage.value = 'お問い合わせを送信しました！';
  //   resetForm();
  //   isSubmit.value  = true;
  // })
  // .catch((err: any)=> {
  //   completeMessage.value = 'お問い合わせの送信が失敗しました';
  //   isError.value   = true;
  // })
  // .finally(() => {
  //   isSending.value = false;
  //   setTimeout(() => {
  //     completeMessage.value = ''
  //   }, 3000)
  // });
}

let fileUrl = ref('')
const resetForm = () => {
  num.value        = 0;
  age.value        = 0;
  term.value        = 0;
  partnerAge.value        = 0;
  sex.value        = '男性';
  name.value        = '';
  job.value        = '';
  img.value        = '';
  isInterview.value        = '';
  isError.value         = false;
}

const uploadFile = ref()
function previewFile(event: Event) {
  const file = (event.target as HTMLInputElement).files;
  if(file === null) return
  const blob = new Blob(file as any, { type: "image/*" });
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    // 画像ファイルを base64 文字列に変換します
    uploadFile.value = reader.result;
  }, false);
  reader.readAsDataURL(blob)


  const metadata = {
    contentType: 'image/*'
  }
  const storage = getStorage();
  const storageRef = REF(storage, 'images/' + file[0].name);

  const uploadTask = uploadBytesResumable(storageRef, file[0], metadata)
  uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  });
}

// watch(profImg,(neeVal) => {
//   console.log(neeVal)
// })

</script>

<style lang="sass" scoped>
.necessary
  color: #ff0000a0
.subtitle
  +text-body(20px)

.saveButoon
  position: fixed
  top: 50px
  right: 100px
  z-index: 10

.left_edit_side
  opacity: .3
  pointer-events: none
  &.active
    opacity: 1
    pointer-events: auto




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
    flex: 60px
    width: 60%
    margin: auto
    > .img
      width: 100%

  > .section_block
    > .text
      padding: 0 10% 40px
      +text-body(20px)

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
</style>