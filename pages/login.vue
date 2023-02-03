<template>
<div class="body">
  <p v-if="user.login" class="text">
    {{ user }}
  </p>
  <!-- <login></login> -->
  <div class="button_wrap" v-if="user.login">
    <v-btn
      width="100"
      @click="logout"
      class="button"
      >ログアウト</v-btn
    >
  </div>
</div>
</template>

<script setup lang="ts">
import { computed, useContext} from '@nuxtjs/composition-api'
const { store } = useContext()

let user = computed(() => store.getters['user'])

const logout = () => {
  store.dispatch('logout')
}
</script>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
 layout: "signin"
});
</script>

<style scoped lang="sass">

</style>