<template>
    <div class="main">
      <div class="content">
        <div class="red">1</div>
        <div class="green">2</div>
        <div class="blue">3</div>
        <div class="black">4</div>
      </div>
      <img src="/images/test-header.png" alt=""> 
    </div>
</template>

<style scoped>
.content {
  color: #fff;
  margin-top: 100px;
  /* font: 100 24px/100px sans-serif; */
  text-align: center;

  display: flex;
  flex-wrap: wrap;
}
.content div{
  height: 50px;
  flex: 0 0 33%;
  max-width: 33%;

  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 20%);
  border-radius: 10px;
}
</style>

<script>

export default {
  layout:'sample_layout',
  data () {
        return {
          object1:[
              {name: 'moumou', age: '12', title: 'vue'},
              {name: 'moumo', age: '13', title: 'vue'}
          ] ,
          object2:{
              name: 'moumou',
              age: '12',
              title: 'vue'
          },
          menus: [
            { title: 'home', icon: 'mdi-web', url: '/' },
            { title: 'shimasho', icon: 'mdi-information-variant', url: '/about' },
            { title: 'sample', icon: 'mdi-web', url: '/sample' }
          ],
        }
      },
}
</script>