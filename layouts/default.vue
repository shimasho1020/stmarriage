<template>
  <div class="all"> 
    <header class="header active" ref="pageHeader"
            id="header"
            :class="{'side-active': false}">
      <nuxt-link @click.native.prevent="nuxtLinkTrigger" to="/" class="logo">
        <div class="logo-sub">日本結婚所連盟（ＩＢＪ）　正規加盟店</div>
        <div class="logo-main">セントマリアージュ青山</div>
      </nuxt-link>
      <div class="menu pc pc-header" id="header-menu-pc">
        <nuxt-link class="menu--link" to="/mediasheet">
          <div class="link-wrap"><span class="link-text">Media sheet</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/calendar">
          <div class="link-wrap"><span class="link-text">Ads calendar</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/news">
          <div class="link-wrap"><span class="link-text">News</span></div>
        </nuxt-link>
        <div class="spacer"></div>
        <nuxt-link class="menu--link" to="/case-study">
          <div class="link-wrap"><span class="link-text">Case study</span></div>
        </nuxt-link>
        <nuxt-link class="menu--link" to="/faq">
          <div class="link-wrap"><span class="link-text">FAQ/Contact</span></div>
        </nuxt-link>
      </div>
      <div
          class="menu sp"
          @click="toggleMenu"
      >
        <span></span>
      </div>
    </header>
    <div class="sp-menu" ref="sideMenu">
      <div class="sp-menu-wrap">
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/mediasheet">Media sheet</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/calendar">Ads calendar</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/news">News</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/case-study">Case study</nuxt-link>
        <nuxt-link @click.native.prevent="nuxtLinkTrigger" class="menu--link" to="/faq">FAQ/Contact</nuxt-link>
      </div>
    </div>  
    <div class="flow_block">
      <div class="circle_form man"><span class="inline-block">無料相談<br>男性用</span></div>
      <div class="circle_form woman"><span class="inline-block">無料相談<br>女性用</span></div>
    </div>

    <div class="body">
      <nuxt/>
    </div>

    <footer class="footer">
      <div class="footer-wrap">
        <!-- <get-in-touch class="get-in-touch" v-show="isGetInTouchVisible"></get-in-touch> -->
        <div class="bottom">
          <div class="bottom-block">Copyright ©️ 2020 St. Marriage Aotama</div>
        </div>
      </div>
    </footer>
  </div>
</template>

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

<style lang="sass">
@keyframes text-roll-animation
  0%
    transform: translateX(0%)

  100%
    transform: translateX(-100%)

::selection
  background-color: var(--color-red-200)
  color: var(--color-white-300)

.inline-block
  display: inline-block

.header
  position: fixed
  z-index: 100
  top: 0
  left: 50%
  transform: translateX(-50%)
  width: calc(100% - 160px)
  min-width: calc(100% - 10vw)
  height: 100px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 35px 0px 20px
  opacity: 0
  border-bottom: 1px solid var(--color-black-100)

  +sp-view
    height: 64px
    padding: 20px 0 15px

  &.active
    opacity: 1
    transition: .3s

  > .logo
    > .logo-sub
      +text-subtitle(10px)

    > .logo-main
      +text-title(35px)
      text-shadow: 2px 2px 2px rgb(255, 255, 255),-2px -2px 2px rgb(255, 255, 255)

  > .menu
    width: 660px
    display: flex
    justify-content: flex-end
    column-gap: 23px

    +pc-sm-view
      flex-wrap: wrap
      justify-content: flex-end
      row-gap: 4px

    > .spacer
      display: none

      +pc-sm-view
        display: inline-block
        width: 100%

    > .menu--link
      +text-title(20px)
      text-decoration: none
      display: inline-block
      overflow: hidden

      > .link-wrap
        overflow: hidden
        display: flex
        align-items: center

        > .link-text
          display: inline-block
          padding-right: 23px
          white-space: nowrap

        &::after
          display: inline-block
          padding-right: 23px
          white-space: nowrap

        &:hover
          > .link-text, &::after
            animation: text-roll-animation 1.6s infinite linear

      &:nth-child(1)
        flex: 0 0 105px

        .link-wrap
          &::after
            content: 'Media sheet'

      &:nth-child(2)
        flex: 0 0 116px

        .link-wrap
          &::after
            content: 'Ads calendar'

      &:nth-child(3)
        flex: 0 0 47px

        .link-wrap
          &::after
            content: 'News'

      &:nth-child(5)
        flex: 0 0 95px

        .link-wrap
          &::after
            content: 'Case study'

      &:nth-child(6)
        flex: 0 0 111px

        .link-wrap
          &::after
            content: 'FAQ/Contact'

    &.pc
      transition: .3s

      +sp-view
        display: none

    &.sp
      display: none

      +sp-view
        display: block
        position: relative
        width: 20px
        height: 1px
        padding: 20px 0
        cursor: pointer
        color: var(--color-red-200)

        &.white
          color: var(--color-white-300)

        > span, span:before, span:after
          position: absolute
          content: ''
          width: 100%
          display: block
          height: 1px
          background: currentColor
          transform: rotate(0deg)

        > span:before
          transition: .3s
          transform: translateY(-7px)

        > span:after
          transition: .3s
          transform: translateY(7px)

  &.side-active
    border-bottom: 1px solid var(--color-red-200) !important

    > .sp
      > span
        background: rgba(255, 255, 255, 0)

      > span:before, span:after
        background: var(--color-white-300)
        transform-origin: center center

      > span:before
        transform: rotate(-45deg) translateY(0px)

      > span:after
        transform: rotate(45deg) translateY(0px)

.sp-menu
  position: fixed
  top: 0
  left: 0
  transform: translateX(-100vw)
  transition: .3s
  width: 100vw
  height: 100vh
  z-index: 50

  display: none

  &.active
    display: block
    transform: translateX(0)

    > .sp-menu-wrap
      opacity: 0
      height: 100%
      width: 100%
      padding: 0 20px
      +text-title(40px)
      line-height: 1.5
      color: var(--color-white-300)
      background-color: var(--color-red-200)
      display: flex
      flex-direction: column
      justify-content: center

      > .menu--link
        color: currentColor

.flow_block
  display: flex
  align-items: center
  position: fixed
  bottom: 20px
  right: min(80px, 5vw)
  z-index: 100

  > .circle_form
    height: 120px
    width: 120px
    margin-left: 10px
    box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%)
    border-radius: 60px
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    +text-subtitle(20px)
    color: var(--white-1)
    
    &.man
      background: linear-gradient(to bottom, #5f51e0, rgb(195, 242, 248))
    &.woman
      background: linear-gradient(to bottom, #e051bc, rgb(195, 242, 248))

.footer
  // background-color: var(--color-white-300)

  > .footer-wrap
    // padding: 120px 0 0

    > .bottom
      position: relative
      z-index: 10
      background-color: var(--main)
      padding: 30px 0 10px
      text-align: center
      +text-subtitle(14px)
      color: var(--white-1)

      +sp-view
        padding: 25px 5vw

      > .bottom-block


</style>

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
  color: var(--main);
}
.logo-main{
  font-weight: bold;
  font-size: 30px;
  color: var(--main);
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
  color: var(--main);
  // text-shadow: 0 0 2px black,0 0 2px black;
  font-size: 1vw;
  text-align: left;
}
.form{
  padding: 10px;
  align-items: center;
  display: flex;
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

  .site-header.transform{
    // background: rgba(255, 255, 255, 0.8);
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
  height: 100vh;
  width: 100vw;
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