<template>
  <div class="p-contact">
    <form class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
      <h1 class="title">無料相談フォーム</h1>
      <input type="hidden" name="form-name" value="contact">
      <input type="hidden" name="subject" value="Sales inquiry from mysitename.netlify.app" />
      <div class="p-contact__item radio">
        <label for="sex">性別<span class="necessary">(必須)</span></label><br>
        <input type="radio" id="sex" name="sex" value="男性" v-model="sex"> 男性
        <input type="radio" id="sex" name="sex" value="女性" v-model="sex"> 女性
      </div>
      <div class="p-contact__item">
        <label for="username">お名前<span class="necessary">(必須)</span></label><br>
        <p class="necessary" v-if="username.length >= 30">※30文字以下で書いてください</p>
        <input type="text" id="username" name="username" v-model="username" autocomplete="name" placeholder="姓名">
      </div>
      <div class="p-contact__item">
        <label for="katakana">フリガナ<span class="necessary">(必須)</span></label><br>
        <p class="necessary" v-if="katakana.length >= 30">※30文字以下で書いてください</p>
        <input type="text" id="katakana" name="katakana" v-model="katakana" placeholder="フリガナ">
      </div>
      <div class="p-contact__item">
        <label for="useremail">メールアドレス<span class="necessary">(必須)</span></label><br>
        <p class="necessary" v-if="useremail.length !== 0 &&!checkEmailString(useremail)">※メールアドレス形式で入力してください</p>
        <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email" placeholder="your@example.com">
      </div>
      <div class="p-contact__item">
        <label for="number">電話番号</label><br>
        <p class="necessary" v-if="number.length >= 30">※30文字以下で書いてください</p>
        <input type="text" id="number" name="number" v-model="number" placeholder="090-1234-5678">
      </div>
      <div class="p-contact__item">
        <label for="age">年齢<span class="necessary">(必須)</span></label><br>
        <p class="necessary" v-if="age.length >= 30">※30文字以下で書いてください</p>
        <input type="text" id="age" name="age" v-model="age" placeholder="35歳">
      </div>
      <div class="p-contact__item" v-show="sex === '男性'">
        <label for="salary">年収</label><br>
        <p class="necessary" v-if="salary.length >= 30">※30文字以下で書いてください</p>
        <input type="text" id="salary" name="salary" v-model="salary" placeholder="400万円">
      </div>
      <div class="p-contact__item radio">
        <label for="method">面談方法<span class="necessary">(必須)</span></label><br>
        <input type="radio" id="method" name="method" value="対面" v-model="method"> 対面
        <input type="radio" id="method" name="method" value="オンライン" v-model="method"> オンライン
      </div>
      <div class="p-contact__item">
        <label for="date">面談希望日付<span class="necessary">(必須)</span></label><br>
        <date-picker class="date_input" id="date" input-class="date_input" v-model="date" format='yyyy-MM-dd' placeholder="日付を選択してください"></date-picker>
      </div>
      <div class="p-contact__item">
        <label for="message">質問・その他</label><br>
        <p class="necessary" v-if="message.length >= 500">※500文字以下で書いてください</p>
        <textarea id="message" name="message" v-model="message" placeholder="その他、質問などです。"></textarea>
      </div>
      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField"/>
      </div>
      <div v-if="completeMessage" class="message">{{completeMessage}}</div>
      <div class="p-contact__submit">
        <button type="submit" :disabled="!activeButton">送信</button>
      </div>
    </form>
  </div>
</template>


<script setup lang="ts">
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
import axios from 'axios'


const { app, store } = useContext()
let sex = ref('')
let username = ref('')
let katakana = ref('')
let age = ref('')
let salary = ref('')
let number = ref('')
let useremail = ref('')
let method = ref('')
let date = ref<Date>()
let message = ref('')
let botField = ref('')
let isSubmit = ref(false)
let isSending = ref(false)
let isError = ref(false)
let completeMessage = ref('')

const  getStringFromDate = (date: Date) => {
  let year_str = date.getFullYear().toString()
  //月だけ+1すること
  let month_str = (1 + date.getMonth()).toString()
  let day_str = date.getDate().toString()
  let format_str = 'YYYY-MM-DD';
  format_str = format_str.replace(/YYYY/g, year_str);
  format_str = format_str.replace(/MM/g, month_str);
  format_str = format_str.replace(/DD/g, day_str);
  return format_str;
 };
const formatDate = computed(() => {
  if(!date.value) return ''
  return getStringFromDate(date.value)
})
watch(formatDate,(val) => {
  console.log(val)
})


let activeButton = computed(() => {
  return sex.value.length > 0
  && username.value.length > 0 &&  username.value.length < 30
  && katakana.value.length > 0 &&  katakana.value.length < 30
  && age.value.length > 0 &&  age.value.length < 30
  && method.value.length > 0
  && formatDate.value.length > 0
  && message.value.length < 500
  && checkEmailString(useremail.value)
})

const checkEmailString =  (inputdata: string) => {
  var regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
  return regex.test(inputdata);
}

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
  const params = new URLSearchParams();
  params.append('form-name', 'contact');
  params.append('sex', sex.value);
  params.append('username', username.value);
  params.append('katakana', katakana.value);
  params.append('age', age.value);
  params.append('salary', salary.value);
  params.append('number', number.value);
  params.append('useremail', useremail.value);
  params.append('method', method.value);
  params.append('date', formatDate.value);
  params.append('message', message.value);
  if(botField.value){
    params.append('bot-field', botField.value);
  }
  
  axios.
  post('/', params)
  .then(() => {
    completeMessage.value = 'お問い合わせを送信しました！';
    resetForm();
    isSubmit.value  = true;
  })
  .catch((err: any)=> {
    completeMessage.value = 'お問い合わせの送信が失敗しました';
    isError.value   = true;
  })
  .finally(() => {
    isSending.value = false;
    setTimeout(() => {
      completeMessage.value = ''
    }, 3000)
  });
}
const resetForm = () => {
  sex.value        = '';
  username.value        = '';
  katakana.value        = '';
  age.value        = '';
  salary.value        = '';
  number.value        = '';
  useremail.value       = '';
  method.value       = '';
  date.value         = undefined;
  message.value         = '';
  isError.value         = false;
}

</script>

<style lang="sass" scoped>
.date_input
  background-color: white !important
  border: 1px solid var(--sub)
  border-radius: 5px
  width: 180px

.necessary
  color: #ff0000a0
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

        +sp-view
          width: 100%

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