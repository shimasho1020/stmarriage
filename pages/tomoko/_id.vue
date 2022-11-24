<template>
<div>
  <div style="position:relative;">
    <div class="message">{{completeMessage}}</div>
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


      <div style="flex: 0 0 65%;border: 1px solid black;" class="left_edit_side rounded-lg pa-5" :class="{active:caseList.isInterview}">
        <div class="section">
          <div class="section_title_block">
            <h1 class="section_title">{{caseList.age}}歳の{{caseList.sex}}会員様がご成婚されました！</h1>
          </div>
          <v-text-field
            v-model="text"
            placeholder="名"
          ></v-text-field>
          <v-btn
            width="100"
            @click="submit"
            class="button"
          >登録</v-btn>
          <v-btn
            width="100"
            @click="firestoreTest"
            class="button"
          >テスト</v-btn>
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
</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
 layout: "sub"
});
</script>

<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where } from "firebase/firestore"
import { firestore, storage } from '~/plugins/firebase.js'

interface CaseList {
  id: number,
  age: number,
  term?: number,
  partnerAge?: number,
  sex: '男性' | '女性' | ''
  name?: string,
  job?: string,
  img?: string,
  isInterview: boolean,
}
type InterviewContent = {
  title: string
  text: string
}
type Interview = {
  aboutText: string
  interviewContents: InterviewContent[]
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

const isPublic = ref(false)
const caseList = ref({id: 1,isInterview: false} as CaseList)
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

const interviewCount = ref(1)
const aboutText = ref('')
const questionTitle = ref<string[]>([])
const questionText = ref<string[]>([])

const activeButton = computed(() => {
  return !!caseList.value.name && 
          !!caseList.value.age && 
          !!caseList.value.sex &&
          !!caseList.value.term &&
          !!caseList.value.partnerAge 
})

const isSending = ref(false)
const isError = ref(false)
const completeMessage = ref('')

const onSubmit = async() => {
  const data = {
    id: 1,
    isPublic: isPublic.value,
    caseList: caseList.value,
    interview: interview.value,
  }
  const exampleRef = doc(firestore, "sample", '1');

  if(isSending.value){
    return;
  }
  isSending.value = true;
  completeMessage.value = '処理中…';

  try{
    await setDoc(exampleRef, data)
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
  // const storage = getStorage();
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


const text = ref('')
const submit = async() => {
  const washingtonRef = doc(firestore, "cities", "DC");
  const frankDocRef = doc(firestore, "users", "frank");
  try {
    // const docRef = await addDoc(collection(firestore, "users"), {
    //   first: text.value,
    //   last: "Lovelace",
    //   born: 1815
    // });
    // console.log("Document written with ID: ", docRef.id);
    const data = {
      name: "Frank",
      favorites: { food: "Pizza", color: "Blue", subject: "recess" },
      age: 12,
    }
    // await setDoc(frankDocRef, data, { merge: true });
    await updateDoc(washingtonRef, {
      // regions: arrayUnion("greater_virginia")
      population: 100
    });
    console.log('Document written')
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  // try {
  //   await runTransaction(firestore, async (transaction) => {
  //     const sfDoc = await transaction.get(washingtonRef);
  //     if (!sfDoc.exists()) {
  //       throw "Document does not exist!";
  //     }

  //     const newPopulation = sfDoc.data().population + 1;
  //     transaction.update(washingtonRef, { population: newPopulation });
  //   });
  //   console.log("Transaction successfully committed!");
  // } catch (e) {
  //   console.log("Transaction failed: ", e);
  // }
}
const firestoreTest = async() => {
  try{
    // const docRef = doc(firestore, "cities", "SF");
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   console.log("No such document!");
    // }

    // const q = query(collection(firestore, "cities"), where("capital", "==", true));
    const citiesRef =  collection(firestore, "cities")
    const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    console.log('Document written')
  } catch(e) {
    console.log("firestore failed: ", e);
  }
}

</script>

<style lang="sass" scoped>
.message
  +text-title(40px)
  text-align: center
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