<template>
    <div>
      <p>User FullName: {{ fullName }}</p>
      <p>User Message: {{ message }}</p>
    </div>
  </template> 
  <script lang="ts">
  import Vue, { PropOptions } from 'vue'
  
  interface User {
    familyName: string
    givenName: number
  }
  
  export default Vue.extend({
    name: 'UserName',
    props: {
      user: {
        type: Object,
        required: true
      } as PropOptions<User>
    },
    data() {
      return {
        message: 'This is a message.'
      }
    },
    computed: {
      fullName(): string {
        return `${this.user.familyName} ${this.user.givenName}`
      }
    }
  })
  </script> 
  <style>
  .user-name {
    font-size: 16px;
    color: #35495e;
  }
  </style>