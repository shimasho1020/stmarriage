<template>
  <div class="error-page">
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

<script>
import {mapGetters} from 'vuex';

export default {
  name: "error",
  components: {},
  props: ['error'],
  data() {
    return {}
  },
  computed: {
    ...mapGetters([])
  },
  watch: {},
  async fetch({store, error}) {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="sass">
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
