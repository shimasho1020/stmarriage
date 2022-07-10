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

<style lang="scss" scoped>
.body{
  background-image:url("/images/luxury-2.jpg");
  background-size: 25%;
  background-repeat: repeat;
  padding-top: 20px;
}

.Title {
  font-family: 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'Hiragino Mincho ProN', 'HGS明朝E', 'ＭＳ Ｐ明朝', serif;
  position: relative;
  padding: 1.5rem 2rem;
  -webkit-box-shadow: 0 2px 14px rgba(0, 0, 0, .1);
  box-shadow: 0 2px 14px rgba(0, 0, 0, .1);
  background-color: rgb(255, 255, 255,0.7);
  color: #000875;
}
.Title:before,
.Title:after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  content: '';
  background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%);
}
.Title:before {
  top: 0;
}
.Title:after {
  bottom: 0;
}

.colum{
  display: flex;
}
.side{
  padding: 20px;
  flex: 0 0 20%;
  color: #000875;
}
.side-card{
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
  height: 500px;
  position: sticky;
  top: 70px;
  background-color: rgba(255, 255, 255, 0.9);
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
.side-menu h2{
  text-align: center;
  font-family: serif;
  border-bottom: solid 2px #000875;
}
.side-menu ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.side-menu-a{
  padding: 15px;
  text-decoration: none;
  display: block;
  font-weight: bold;
  font-family: serif;
  font-size: 1.5vw;
  position: relative;
}
.side-menu-a:hover{
  color: #aae0f5;
}


.main{
  padding: 20px 30px;
  flex: 0 0 80%;
}
.main-card{
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
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
.main-title{
  position: relative;
  font-family: serif;
  text-align: center;
  color:  #000875;
}
.main-title:before{
  position: absolute;
  top: calc(50% - 4px);
  left: 0;
  width: 100%;
  height: 8px;
  content: '';
  border-radius: 3px;
  // background-image: linear-gradient(135deg,   #17aaee 0%, #000875 37%,#000875 63%, #17aaee 100%);
  background-image: repeating-linear-gradient(45deg, #000875 0, #000875 1px, transparent 0, transparent 50%), repeating-linear-gradient(135deg, #ccc 0, #ccc 1px, transparent 0, transparent 50%);
  background-size: 8px 8px;
  background-repeat: repeat;
}
.main-title span {
  position: relative;
  padding: 0 1em;
  background: #fff;
}

.PR{
  font-family: serif;
  padding: 20px;
}
.pr-title {
	position: relative;
	padding: .1em .3em .1em 1em;
	// border-bottom: 1px solid #00ccff;
  color:#000875;
  margin: 0 0 10px;
}
.pr-title:before,.pr-title:after {
	position: absolute;
	content: "";
	display: block;
	width: 15px;
	height: 15px;
	border: 2px solid #000875;
	top: 35%;
	left: 3px;
	transform: rotate(45deg);
}
.pr-title:after {
	top: 35%;
	left: 10px;
	height: 15px;
	width: 15px;
	transform: rotate(45deg);
	border: none;
	background: rgba(0, 60, 255, 0.3);
}

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