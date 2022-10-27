<template>
<div class="body">
  <div class="top-space" style="height:90px"></div>
  <div style="text-align:center"><h1 class="Title">ご成婚者様の声</h1></div>
  <div class="colum">
    <div class="side">
      <div class="side-card">
        <div class="side-menu">
          <h2>s.t.marriage</h2>
          <ul>
            <li v-for="(menu,index) in list" :key="index">
            <router-link class="side-menu-a" v-bind:to="menu.url">
                {{ menu.title }}
            </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-card">
        <h1 class="main-title"><span>St.Marriage Aoyama</span></h1>
        <div class="PR">
          <div class="PR-card">
            <h1 class="pr-title"><span>選ばれる理由</span></h1>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.body
  background-image: url("/images/luxury-2.jpg")
  background-size: 25%
  background-repeat: repeat
  padding-top: 20px
  font-family: serif
  
</style>

<script>
export default {
  layout:'sub',
  data () {
  return {
    list: [
          { title: 'ホーム', icon: 'mdi-web', url: '/' },
          { title: 'コース案内、料金', icon: 'mdi-information-variant', url: '/price' },
          { title: 'ご入会からご結婚まで', icon: 'mdi-information-variant', url: '/flow' },
          { title: 'ご成婚者様の声', icon: 'mdi-web', url: '/voice' },
        ],
    activeName:"",
  }
  },
  mounted() {
  },
}
</script>