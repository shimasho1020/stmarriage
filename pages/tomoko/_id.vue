<template>
<div v-if="user.login">
  <h1 class="text-center pa-5">ご成婚事例編集ページ</h1>
  <div style="position:relative;" class="py-10">
    <div v-if="completeMessage" class="message">{{completeMessage}}</div>
    <div class="backButoon">
      <v-btn 
        class="white--text indigo darken-4" 
        x-large
        @click="router.push({path: '/tomoko'})"
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
                <div style="white-space: pre-wrap;">当社の{{caseList.age}}歳{{caseList.sex}}会員様がご成婚されました。お相手は{{caseList.partnerAge}}歳の{{changeSex(caseList.sex)}}会員様です。<br>{{aboutText}}</div>
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
import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where } from "firebase/firestore"
import { firestore, storage } from '~/plugins/firebase.js'
import { CaseList, Interview, Interviewer, DisplayInterviewer } from '~/types/index'


const { app, store } = useContext()
const router = useRouter()
const route = useRoute()

let user = computed(() => store.getters['user'])

const isPublic = ref(false)
const caseList = ref({isInterview: false} as CaseList)
const interview = computed<Interview>(() => {
  return {
    aboutText: aboutText.value,
    interviewContents: questionTitle.value.map((val, index) => {
      return {
        title: val,
        text: questionText.value[index]
      }
    }).filter((val) => {
      return !!val.text && !!val.title
    })
  }
})

const interviewCount = ref(0)
const aboutText = ref('')
const questionTitle = ref<string[]>([])
const questionText = ref<string[]>([])

const isNew = ref(false)
const thisPageId = ref('')

const imageURL = ref()

useAsync(async () => {
  thisPageId.value = route.value.params.id
  if(thisPageId.value == '0') {
    isNew.value = true
    interviewCount.value = 1
    return
  }
  const docRef = doc(firestore, "interviewer", thisPageId.value);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data())
    const result = docSnap.data() as Interviewer
    isPublic.value = result.isPublic
    caseList.value = result.caseList
    aboutText.value = result.interview.aboutText
    store.commit('insertCount', result.imagePosition ?? 0)
    result.interview.interviewContents.forEach((val) => {
      questionTitle.value.push(val.title)
      questionText.value.push(val.text)
      interviewCount.value++
    })
  } else {
    console.log("No such document!");
  }

  getDownloadURL(REF(storage, `images/${thisPageId.value}`))
  .then((url) => {
    imageURL.value = url
  })
  .catch((error) => {
    console.log(error)
  })
})


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

const imagePosition = computed(() => {
  return store.getters['imagePosition'] ?? 0
})
watch(imagePosition,(val) => {
  moveImg(val)
})
const moveImg = (count:number) => {
  document.querySelectorAll('.profImg').forEach((element:any) => {
    // console.log(element.style)
    element.style.objectPosition = `center calc(50% - ${count}px)`;
  })
}

const addCount = () => {
  store.commit('add')
}
const subtractCount = () => {
  store.commit('subtract')
}
const clearCount = () => {
  store.commit('clear')
}

const activeButton = computed(() => {
  return !!caseList.value.name && 
          !!caseList.value.age && 
          !!caseList.value.sex &&
          !!caseList.value.term &&
          !!caseList.value.partnerAge &&
          !!imageURL
})

const isSending = ref(false)
const isError = ref(false)
const completeMessage = ref('')

const onSubmit = async() => {
  const data: Interviewer = {
    isPublic: isPublic.value,
    caseList: caseList.value,
    interview: interview.value,
    imagePosition: imagePosition.value,
  }
  const exampleRef = isNew.value ?
  doc(collection(firestore, "interviewer")) : doc(firestore, "interviewer", thisPageId.value)

  if(isSending.value){
    return;
  }
  isSending.value = true;
  completeMessage.value = '処理中…';

  try{
    await setDoc(exampleRef, data)
    if (uploadImageFileData.value) {
      await uploadImageFile(uploadImageFileData.value, thisPageId.value)
    }
    completeMessage.value = '保存しました';
  } catch(e) {
    completeMessage.value = '失敗しました' + 'ERROR: ' + e;
    isError.value   = true;
  } finally {
    isSending.value = false;
    setTimeout(() => {
      completeMessage.value = ''
    }, 3000)
  }
}

const uploadImageFileData = ref<FileList>()

function previewFile(event: Event) {
  const file = (event.target as HTMLInputElement).files;
  if(file === null) return
  const blob = new Blob(file as any, { type: "image/*" });
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    // 画像ファイルを base64 文字列に変換します
    imageURL.value = reader.result;
  }, false);
  reader.readAsDataURL(blob)

  uploadImageFileData.value = file
}

const uploadImageFile = async(file: FileList, id: string) => {
  const metadata = {
    contentType: 'image/*'
  }
  // const storage = getStorage();
  const storageRef = REF(storage, 'images/' + id);

  const uploadTask = uploadBytesResumable(storageRef, file[0], metadata)
  await new Promise((resolve, reject) => {
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
      reject('画像のアップロードに失敗しました')
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
      resolve('')
    });
  })
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