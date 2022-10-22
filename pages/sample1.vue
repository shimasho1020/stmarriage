<template>
  <div class="container">
    <div class="wrap">
      <h1 class="title">
        nuxt_typescript_app
      </h1>
      <h2 class="subtitle">
        My epic Nuxt.js project
      </h2>
      <user-name :user="userName" />
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
         Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import UserName from '~/components/UserName.vue'

export default {
  components: {
    UserName
  },
  data() {
    return {
      userName: {
        familyName: '田中',
        givenName: '1234'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  padding: 100px 0 0
</style>