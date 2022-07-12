<template>
<div class="all">   
  <nav 
    class="site-header" 
    v-bind:class="{transform : this.scroll_top > 0}"
  >
  <div class="nav-inside">
    <!-- <div class="menu-button" @click="drawer = !drawer"><span></span></div>
    <ul class="bar-nav">
      <li class="bar-nav-menu" v-for="(menu,index) in menus" :key="index">
        <router-link class="var-menu-a" v-bind:to="menu.url">
          {{ menu.title }}
        </router-link>
      </li>
    </ul> -->

    <div class="topleft">
      <div class="logo">
        <!-- <img src="/images/logo-6.png" alt=""> -->
        <div class="logo-sub">日本結婚所連盟（ＩＢＪ）　正規加盟店</div>
        <div class="logo-main">セントマリアージュ青山</div>
      </div>
    </div>
    <div class="topright">
      <div class="imfo">
        <div class="top-time">営業時間：11:00~18:00</div>
        <div class="top-access">アクセス：青山一丁目駅から徒歩３分</div>
      </div>
      <div class="form">
        <div class="form-card man" style="backgroundColor: #51b3e0">無料カウンセリング<br>男性用</div>
        <div class="form-card woman">無料カウンセリング<br>女性用</div>
      </div>
    </div>
  </div>
  </nav>

  <aside 
    @click="drawer = !drawer" 
    class="drawer-menu" 
    v-bind:class="{active_nav : drawer}"
  >
    <h2 >株式会社東京</h2>
    <ul>
      <li v-for="(menu,index) in menus" :key="index">
        <router-link class="drawer-menu-a" v-bind:to="menu.url">
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </aside>
  <div 
    class="menu-background" 
    @click="drawer = !drawer" 
    v-bind:class="{active_bg : drawer}"
  >
  </div> 
  
  <header  
   class="header-img" 
   ref="header"
   v-bind:style="{maxHeight: headerHeight +'px'}"
  >
    <img src="/images/marriage-header1.jpg" alt="">
    <div class="message1">あなたの真剣な思いをサポートします</div>
    <div class="message2" >
      <div class="message2-1">結婚相談所</div>
      <div class="message2-2">セントマリアージュ青山</div>
      <div class="message2-3">St. Marriage Aoyama</div>
    </div>
  </header>
  <!-- <div class="headerBottom" v-bind:style="{height: this.headerHeight +'px'}">
  </div> -->

  <nuxt/>
  
</div>
</template>


<style lang="scss" scoped>
.site-header{
  // background-image:url("/images/luxury-2.jpg");
  // background-size: 25%;
  // background-repeat: repeat;
  background-position: right bottom;
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 55px;
}
.nav-inside{
  position: relative;
  width: 100%;
  height: 100%;
}
// .nav-inside::after{
//   content: '';
// 	position: absolute;
// 	top: 90px;
// 	left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: linear-gradient(0deg, transparent 0 60%, rgb(235, 247, 246) 100%);
// }

.topleft{
  float: left;
  height: 55px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
}
.logo{
  font-family: serif;
}
// .logo img{
//   display: block;
//   height: 100%;
//   filter: drop-shadow(5px 5px 2px rgb(130, 217, 243));
// }
.logo-sub{
  font-size: 10px;
  color: #000875;
}
.logo-main{
  font-weight: bold;
  font-size: 30px;
  color: #000875;
  text-shadow: 2px 2px 2px rgb(255, 255, 255),-2px -2px 2px rgb(255, 255, 255);
}
.topcenter{
  display: flex;
  align-items: center;
  font-family: serif;
  font-weight:bold;
}
.topright{
  float: right;
  font-size: 2vw;
  color: white;
  font-weight: bold;
  font-family: serif;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}
.imfo{
  color: #000875;
  // text-shadow: 0 0 2px black,0 0 2px black;
  font-size: 1vw;
  text-align: left;
}
.form{
  padding: 10px;
  align-items: center;
  display: flex;
}
.form-card{
  padding: 0 20px;
  margin-left: 10px;
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 20px;
  align-items: center;
}
.form-card.man{
  background: linear-gradient(to bottom, #5f51e0, rgb(195, 242, 248));
  // background: radial-gradient(rgb(195, 242, 248),#51b3e0);
}
.form-card.woman{
  background: linear-gradient(to bottom, #e051bc, rgb(244, 195, 248));
  // background: radial-gradient(rgb(248, 195, 245),#e051d9);
}
.form-card:hover{
  color: rgb(185, 177, 177);
}

/* レスポンシブ対応　*/
@media screen and (min-width: 755px){
  .site-header{
    background-color: rgba(255, 255, 255, 0);
    height: 90px;
    transition-property:height,background-color;
    transition-duration: 0.7s;
  }
  .topleft{
    height: 90px;
    transition-property:height;
    transition-duration: 0.7s;
  }
  .logo-main{
    font-size: 35px;
    transition-property:font-size;
    transition-duration: 0.7s;
  }
  .topright{
    // line-height: 35px;
    transition-property:line-height,font-size,border-radius;
    transition-duration: 0.7s;
    font-size: 1.5vw;
    color: white;
  }
  .form-card{
    transition-property:border-radius,margin-left;
    transition-duration: 0.7s;
    border-radius: 30px;
    margin-left: 10px;
  }

  .site-header.transform{
    background: rgba(255, 255, 255, 0.8);
    height: 65px;
  }
  .transform .topleft{
    height: 65px;
  }
  .transform .logo-main{
    font-size: 30px;
  }
  .transform .topright{
    // line-height: 23px;
    font-size: 1.2vw;
  }
  .transform .form-card{
    margin-left: 15px;
  }
}
/* ----------------*/

/* メニューボタンの装飾 */
.menu-button {
  display: block;
  position: relative;
  top: 20px;
  left: 20px;
  z-index: 200;
  height: 15px;
  width: 25px;
  cursor: pointer;
}
.menu-button::before,
.menu-button::after {
  content: '';
}
.menu-button::before,
.menu-button::after,
.menu-button span {
  display: block;
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #ffffff;
}
.menu-button::before {
  top: 0;
  margin-top: -1px;
}
.menu-button::after {
  bottom: 0;
}
.menu-button span {
  top: 50%;
  margin-top: -2px;
}
/* ------------ */

.drawer-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  z-index: 200;
  transform: translateX(-100%);
  transition: .5s;
  background-color: #000000;
}
.drawer-menu.active_nav{
  transform: translateX(0);
}

.drawer-menu h2{
  color: #ffffff;
  text-align: center;
  padding: 10px;
  font-family: serif;
}
.drawer-menu ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.drawer-menu-a{
  padding: 15px;
  color:white;
  text-decoration: none;
  display: block;
  font-weight: bold;
  font-family: serif;
}
.drawer-menu-a:hover{
  background-color: rgb(255, 255, 255);
  color: #000000;
}
.menu-background {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
  cursor: pointer;
}
.active_bg{
  display: block;
}

.header-img{
  z-index: -100;
  width: 100%;
  position: relative;
  top: 0px;
  text-align: center;
}
.header-img img{
  width: 100%;
  // object-position: 0px -100px;
}
.header-img .message1{
  width: 100%;
  text-align: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #ffffff;
  font-family: serif;
  // font-weight: bold;
  font-size: 3.5vw;
  text-shadow: 2px 2px 5px rgb(68, 0, 255),2px 2px 5px rgb(17, 0, 255);

}
.header-img .message2{
  padding: 10px 50px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.6);
  // border: solid 3px white;
  background-color: rgb(255, 255, 255,0.9);
  color: #2e31ec;
  background-image:
  url("/images/frame-topleft.svg"),
  url("/images/frame-topright.svg"),
  url("/images/frame-bottomleft.svg"),
  url("/images/frame-bottomright.svg");
  background-position: 
  left 2px top 2px,
  right 2px top 2px,
  left 2px bottom 2px,
  right 2px bottom 2px;
  background-size: 50px 50px;
}
.header-img .message2-1{
  font-family: serif;
  font-size: 1.5vw;
}
.header-img .message2-2{
  font-family: serif;
  font-size: 2.5vw;
}
.header-img .message2-3{
  font-family: cursive;
  font-size: 2vw;
  filter: drop-shadow(0 0 5px rgb(47, 0, 255));
}
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
    methods: {
      getScroll() {
        this.scroll_top = window.scrollY
      },
    },
    mounted() {
      window.addEventListener("scroll", this.getScroll); //スクロールのするたびに関数を呼びだす処理
      this.headerHeight = document.documentElement.clientHeight 

      // window.addEventListener('resize', this.resizeWindow); //画面サイズが変わるたびに関数実行
      // this.dom = this.$refs.header; 
      // this.rect = this.dom.getBoundingClientRect(); // 要素の座標と幅と高さを取得
      // this.headerHeight = this.rect.height
    },
  }

  
</script>