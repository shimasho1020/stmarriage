<template>
  <div class="error-page">
    <div class="over_wrap"></div>
    <div class="detail">
      <h1 class="detail__title">{{ error.statusCode }}</h1>
      <h1 class="detail__subtitle" v-if="error.statusCode === 404">Page not found</h1>
      <h1 class="detail__subtitle" v-else>An error occurred</h1>
      <p class="detail__text">
        <span class="inline-block">お探しのページは</span>
        <span class="inline-block">見つかりませんでした。</span>
      </p>
      <NuxtLink class="detail__link back-link" to="/">
        <div class="back-link__text">
          <p class="back-link__title">Back To Top</p>
          <ArrowImage class="back-link__icon" direction="right"></ArrowImage>
        </div>
        <p class="back-link__subtitle">トップページに戻る</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, useContext, useAsync, useRoute, useRouter } from '@nuxtjs/composition-api'

const router = useRouter()
const route = useRoute()
const { app, store } = useContext()

defineProps<{
  error: any;
}>();

const isLoadingEnabled = computed<boolean>(() => store.getters['isLoadingEnabled'])

useAsync(async () => {
  router.push({path: '/'})
})

// onMounted(() => {
//   router.push({path: '/'})
// })

</script>

<style scoped lang="sass">
.over_wrap
  position: fixed
  width: 100vw
  height: 100vh
  background-color: var(--main)
  top: 0px
  left: 0
  z-index: 110
.error-page
  padding: 120px 0 80px
  width: 1060px
  max-width: calc(100% - 10vw)
  height: calc(100vh - 131px)
  display: flex
  margin: auto

.detail
  margin: auto
  text-align: center

  &__title
    +text-title(240px)

    +sp-view
      font-size: 160px

  &__subtitle
    +text-title(32px)

  &__text
    +text-body(16px)
    margin-top: 4px

  &__link
    margin: 40px auto

.back-link
  display: block
  width: fit-content
  max-width: 100%

  &__text
    display: flex
    justify-content: center
    align-items: center
    gap: 16px

  &__title
    +text-title(44px)

    +sp-view
      font-size: 36px

  &__subtitle
    +text-body(16px)
    text-align: left
</style>
