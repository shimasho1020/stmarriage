<template>
<div>   
 

  <nuxt/>
  
</div>
</template>


<style lang="scss" scoped>

</style>

<script>
  export default {
    data() {
      return {
        drawer: false,
        menus: [
          { title: 'top', icon: 'mdi-web', url: '/' },
          { title: 'company', icon: 'mdi-information-variant', url: '/company' },
          { title: 'sample', icon: 'mdi-web', url: '/sample' },
        ],
        scroll_top:0,
        dom:'',
        rect:[],
        headerHeight:0,
      }
    },
  }

  
</script>