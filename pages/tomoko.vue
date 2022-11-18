<template>
<v-app>
  <div>
    <h1 class="text-center pa-5">ご成婚事例編集ページ</h1>
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
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="name"
              placeholder="名前"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="name"
              placeholder="名前"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="name"
              placeholder="名前"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="name"
              placeholder="名前"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="name"
              placeholder="名前"
            ></v-text-field>
          </div>
          <div class="pa-5">
            <h1 class="subtitle">名前<span class="necessary">(必須)</span></h1>
            <v-text-field
              v-model="name"
              placeholder="名前"
            ></v-text-field>
          </div>
        </v-form>
      </div>
      <div style="flex: 0 0 65%">

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
// import { userApi } from '@/api/user'

interface CaseList {
  num: number,
  age: number,
  term?: number,
  partnerAge?: number,
  sex: '男性' | '女性'
  name?: string,
  job?: string,
  img?: string,
  isInterview: boolean,
}

const { app, store, $config } = useContext()
let isPublic = ref(false)
let num = ref(0)
let age = ref(0)
let term = ref(0)
let partnerAge = ref(0)
let sex = ref('男性')
let name = ref('')
let job = ref('')
let img = ref('')
let isInterview = ref('')

let isSubmit = ref(false)
let isSending = ref(false)
let isError = ref(false)
let completeMessage = ref('')

let activeButton = computed(() => {
  return 
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

</script>

<style lang="sass" scoped>
.necessary
  color: #ff0000a0
.subtitle
  +text-body(20px)


.p-contact
  padding: 40px 0 80px
  > .p-contact__form
    width: 800px
    max-width: calc(100% - 10vw)
    margin: auto
    padding: 5%
    background-color: var(--white-1)
    border-radius: 20px

    > .title
      text-align: center
      +text-title(40px)
      padding: 0 0 20px

    > .p-contact__item
      padding: 20px 0 20px
      &.radio
        padding: 20px 0 0 
        > input
          height: auto
          width: auto
      > label
        +text-body(16px)
        font-weight: bold
        padding: 0 0 10px
        display: inline-block

      > input
        border: 1px solid var(--sub)
        border-radius: 5px
        padding: 10px
        background-color: snow
        width: 50%
        height: 32px
        line-height: 1.2
        outline: none
        &::placeholder
          color: #aaa

      > textarea
        border: 1px solid var(--sub)
        border-radius: 10px
        padding: 10px
        background-color: snow
        width: 100%
        height: 120px
        line-height: 1.2
        outline: none
        &::placeholder
          color: #aaa

    > .message
      position: fixed
      bottom: 0px
      left: 0
      z-index: 50
      width: 100vw
      background-color: var(--main)
      text-align: center
      +text-subtitle(32px)
      color: var(--white-1)
      padding: 20px
    > .p-contact__submit
      width: 100%
      > button
        width: 100%
        text-align: center
        border-radius: 10px
        background-color: var(--main)
        +text-title(24px)
        color: var(--white-1)
        padding: 10px 0 10px
        display: inline-block
        &:disabled
          opacity: .1
</style>