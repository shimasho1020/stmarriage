<template>
  <div class="p-contact">
    <form class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
      <h1 class="title">お問い合わせ</h1>
      <input type="hidden" name="form-name" value="contact">
      <div class="p-contact__item">
        <label for="username">お名前<span class="necessary">(必須)</span></label><br>
        <p class="checkUsername" v-if="!checkUsername">※文字を入力してください</p>
        <input type="text" id="username" name="username" v-model="username" autocomplete="name" placeholder="お名前">
      </div>
      <div class="p-contact__item">
        <label for="katakana">フリガナ<span class="necessary">(必須)</span></label><br>
        <input type="text" id="katakana" name="katakana" v-model="katakana" placeholder="オナマエ">
      </div>
      <div class="p-contact__item">
        <label for="age">年齢<span class="necessary">(必須)</span></label><br>
        <input type="text" id="age" name="age" v-model="age" placeholder="35歳">
      </div>
      <div class="p-contact__item">
        <label for="salary">年収<span class="necessary">(必須)</span></label><br>
        <input type="text" id="salary" name="salary" v-model="salary" placeholder="400万円">
      </div>
      <div class="p-contact__item">
        <label for="number">電話番号<span class="necessary">(必須)</span></label><br>
        <input type="text" id="number" name="number" v-model="number" placeholder="090-1234-5678">
      </div>
      <div class="p-contact__item">
        <label for="useremail">メールアドレス<span class="necessary">(必須)</span></label><br>
        <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email" placeholder="your@example.com">
      </div>
      <div class="p-contact__item">
        <label for="message">お問い合わせ内容</label><br>
        <textarea id="message" name="message" v-model="message" placeholder="お問い合わせ内容です"></textarea>
      </div>
      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField"/>
      </div>
      <div v-if="completeMessage" class="message">{{completeMessage}}</div>
      <div class="p-contact__submit">
        <button type="submit">送信</button>
      </div>
    </form>
  </div>
</template>


<script setup lang="ts">
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
// import { userApi } from '@/api/user'
import axios from 'axios'

const { app, store } = useContext()
let username = ref('')
let katakana = ref('')
let age = ref('')
let salary = ref('')
let number = ref('')
let useremail = ref('')
let message = ref('')
let botField = ref('')
let isSubmit = ref(false)
let isSending = ref(false)
let isError = ref(false)
let completeMessage = ref('')

let checkUsername = computed(() => {
  return username.value.length > 0 &&  username.value.length < 30
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
  const params = new URLSearchParams();
  params.append('form-name', 'contact');
  params.append('username', username.value);
  params.append('katakana', katakana.value);
  params.append('age', age.value);
  params.append('salary', salary.value);
  params.append('number', number.value);
  params.append('useremail', useremail.value);
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
  username.value        = '';
  katakana.value        = '';
  age.value        = '';
  salary.value        = '';
  number.value        = '';
  useremail.value       = '';
  message.value         = '';
  isError.value         = false;
}

</script>

<style lang="sass" scoped>
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
      text-align: center
      border-radius: 10px
      background-color: var(--main)
      +text-title(24px)
      color: var(--white-1)
      padding: 10px 0 10px
      display: inline-block
      > button
        width: 100%
</style>