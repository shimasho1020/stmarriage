<template>
<div class="body login" v-if="!(user.login)">
  <div class="wrap">
    <h3 class="title">Log In</h3>
    <v-form>
      <v-text-field
        v-model="text"
        placeholder="名"
      ></v-text-field>
    </v-form>
  </div>
  <div class="button_block">
    <div class="button_wrap">
      <v-btn
        width="100"
        @click="submit"
        class="button"
        >登録</v-btn
      >
    </div>
  </div>
  <div>
    <label class="label">
      <span class="label">
        email
      </span>
      <input
        class="input"
        type="text"
        v-model="email"
      />
    </label>
    <label class="label">
      <span class="label">
        password
      </span>
      <input
        class="input"
        type="password"
        v-model="password"
      />
    </label>
    <v-btn
      width="100"
      @click="login"
      class="button"
      >login</v-btn
    >
  </div>
</div>
</template>

<script setup lang="ts">
import { computed,  ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter } from '@nuxtjs/composition-api'

const { app, store } = useContext()
let text = ref('')
let user = computed(() => store.getters['user'])

const submit = async() => {
  try {
    app.$fire.firestore.collection('sample')
      .add({
        text: text.value
      })
      .then((r: any) => {
        console.log('Add ID: ', r.id)
      })
  } catch (e) {
    console.log(e)
  }
}

let email = ref('')
let password = ref('')

const createAccount = async() => {
  try {
    await app.$fire.auth
      .createUserWithEmailAndPassword( email.value, password.value)
      .then(() => {
        console.log('done!')
      })
  } catch (e) {
    console.log(e)
  }
}

const login = () => {
  store.dispatch('login', {email: 'shimasho1020@gmail.com', password: 'Damashi991020'})
}

</script>

<style scoped lang="sass">
.body
  // display: flex
  // flex-direction: column
  // align-items: center
  // justify-content: center
  padding: 200px 0 0
.wrap
  width: 200px
  margin: auto
.title
  text-align: center
.button_block
  text-align: center
.button_wrap
  display: inline-block
  margin: auto
  text-align: center
.button
  margin: auto
</style>