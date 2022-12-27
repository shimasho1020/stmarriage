<template>
  <v-app dark>
  </v-app>
</template>

<script>
export default {
  asyncData({ redirect }) {
    this.$router.push('/')
    return redirect('/')
  },
  mounted() {
    this.$router.push('/')
  }
}
</script>

<style scoped>
</style>
