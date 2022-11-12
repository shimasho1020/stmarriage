<template>
  <div class="p-contact">
    <form class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
      <input type="hidden" name="form-name" value="contact">

      <div class="p-contact__item">
        <label for="username">お名前</label>
        <input type="text" id="username" name="username" v-model="username" autocomplete="name">
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="katakana">フリガナ</label>
        <input type="text" id="katakana" name="katakana" v-model="katakana">
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="useremail">メールアドレス</label>
        <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email">
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="message">お問い合わせ内容</label>
        <textarea id="message" name="message" v-model="message"></textarea>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField"/>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__submit">
        <button type="submit">送信</button>
      </div>
      <!-- /.p-contact__submit -->
    </form>
    <!-- /.p-contact__form -->
  </div>
</template>


<script setup lang="ts">
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'
// import { userApi } from '@/api/user'
import axios from 'axios'

const { app, store } = useContext()
let username = ref('')
let katakana = ref('')
let useremail = ref('')
let message = ref('')
let botField = ref('')
let isSubmit = ref(false)
let isSending = ref(false)
let isError = ref(false)
let completeMessage = ref('')

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
  });
}
const resetForm = () => {
  username.value        = '';
  katakana.value        = '';
  useremail.value       = '';
  message.value         = '';
  isError.value         = false;
}


let sendingClass = computed(() => {
  return {
    'is-sending'  : isSending,
    'is-error'    : isError,
    'is-complete' : isSubmit
  }
})

</script>