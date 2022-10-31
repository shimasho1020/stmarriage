<template>
<div class="">
  <div class="title_block" style="text-align:center">
    <h1 class="title">コース案内、料金</h1>
  </div>
  <div class="body">
    <div class="menu">
      <div
        class="lists"
        v-for="(value, index) in courses" v-bind:key="index"
      >
        <div class="cards" :class="{one:index==0,two:index==1,three:index==2}">
          <a class="cards-a" v-bind:href="value.href">
          <h2>{{value.name}}</h2>
          <div class="cards-pic">
            <img :src="value.img">
          </div>
          <div class="cards-note">
            {{value.note}}
          </div>
          </a>
        </div>
      </div>
    </div>
    <div class="colum">
      <div class="section">
        <div class="card_wrap">
          <div class="full-card" id="full">
            <h1 class="full-title"><span>フルサポートコース</span></h1>
            <div class="full-subtitle-1">充実したサポート内容をリーズナブルに提供しているおすすめコースです。</div>
            <div class="full-subtitle-2">当社のほとんど会員様が、こちらのコースで活動されています。</div>
            <div class="full-cont">
              <div class="full-img">
                <img src="/images/marriage-gate.webp">
              </div>
              <table class="full-table">
                <tr v-for="(value, index) in fullTables" v-bind:key="index">
                  <th>{{value.title}}</th>
                  <td>{{value.price}}</td>
                </tr>
              </table>
              <div class="full-p1">
                <h3 class="full-p1-title">入会時サポート内容</h3>
                <ul>
                  <li>プロフィールシート作成サポート</li>
                  <li>写真館への同行（希望者のみ）</li>
                </ul>
              </div>
              <div class="full-p2">
                <h3 class="full-p2-title">活動時サポート内容</h3>
                <ul>
                  <li>お申し込み：月 <span>50件</span>まで無料</li>
                  <li>お申し受け：無制限</li>
                  <li>お見合い料：<span>無料</span>（月８回まで）</li>
                  <li>お見合いセッティング（お店の代行予約等）</li>
                  <li>電話、メールでのご相談：無制限</li>
                  <li>面談（対面orZOOM)：月１回</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card_wwrap">
          <div class="casual-card" id="casual">
            <h1 class="casual-title"><span>カジュアルコース</span></h1>
            <div class="casual-subtitle-1">活動に迷いがある方、とりあえずお試ししたい方におすすめのコースです。</div>
            <div class="casual-cont">
              <table class="casual-table">
                <tr v-for="(value, index) in casualTables" v-bind:key="index">
                  <th>{{value.title}}</th>
                  <td>{{value.price}}</td>
                </tr>
              </table>
              <div class="casual-img">
                <img src="/images/marriage-gate.webp">
              </div>
              <div class="casual-p1">
                <h3 class="casual-p1-title">入会時サポート内容</h3>
                <ul>
                  <li>プロフィールシート作成サポート</li>
                </ul>
              </div>
              <div class="casual-p2">
                <h3 class="casual-p2-title">活動時サポート内容</h3>
                <ul>
                  <li>お申し込み：月 <span>30件</span>まで無料</li>
                  <li>お申し受け：無制限</li>
                  <li>お見合い料：あり（１回　3,300円）</li>
                  <li>お見合いセッティング（お店の代行予約等）</li>
                  <li>電話、メールでのご相談：無制限</li>
                  <li>フルサポートコースへの変更：可能（入会金の差額をお支払いいただきます）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card_wrap">
          <div class="counseling-card" id="counseling">
            <h1 class="counseling-title"><span>カウンセリングコース</span></h1>
            <div class="counseling-subtitle-1">活動に迷いがある方、とりあえずお試ししたい方におすすめのコースです。</div>
            <div class="counseling-cont">
              <div class="counseling-img">
                <img src="/images/marriage-gate.webp">
              </div>
              <table class="counseling-table">
                <div><span>電話でのご相談</span></div>
                <tr v-for="(value, index) in counselingTables" v-bind:key="index">
                  <th>{{value.title}}</th>
                  <td>{{value.price}}</td>
                </tr>
                <div>※　電話料金：無料<br>（当社負担）</div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>

.title_block
  > .title
    +text-title(40px)
    position: relative
    padding: 1.5rem 2rem
    -webkit-box-shadow: 0 2px 14px rgba(0, 0, 0, .1)
    box-shadow: 0 2px 14px rgba(0, 0, 0, .1)
    background-color: rgb(255, 255, 255,0.7)
    color: #000875

    &::before,&::after
      position: absolute
      left: 0
      width: 100%
      height: 4px
      content: ''
      background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)

    &::before
      top: 0
    &::after
      bottom: 0

.body
  > .menu
    padding: 80px 0 80px
    display: flex
    width: 100%
    justify-content: center

    > .lists
      flex: 0 0 30%
      padding: 20px

      > .cards
        color: #000875
        font-family: serif
        border: solid 1px #000875
        border-radius: 10px
        padding: 0 25px 20px
        height: 100%
        text-align: center
        background-color: rgba(255, 255, 255, 0.9)
        background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
        background-position:  left 2px top 2px, right 2px top 2px, left 2px bottom 2px, right 2px bottom 2px
        background-size: 50px 50px

  > .colum
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    > .section
      > .card_wrap
        padding: 20px 0 20px

</style>

<style lang="scss" scoped>
.cards-a:hover{
  color: #aae0f5;
}
.cards-a{
  text-decoration: none;
}
.cards h2{
  padding: 15px 0 5px;
}
.cards-pic{
  height: 10vw;
  position: relative;
}
.cards-pic::after{
  content: '';
	position: absolute;
	top: 0;
	left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, transparent 0 60%, #FFF 100%),linear-gradient(180deg, transparent 0 60%, #FFF 100%);
}
.cards-pic img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cards-note{
  margin-top: 10px;
  text-align: left;
  color: black;
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

.full-card{
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
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
.full-title{
  position: relative;
  font-family: serif;
  text-align: center;
  color:  #000875;
  margin: 0 0 20px;
}
.full-title:before {
  position: absolute;
  bottom: -10px;
  left: calc(50% - 50px);
  width: 100px;
  height: 5px;
  content: '';
  border-radius: 3px;
  background-image: linear-gradient(135deg, #000875 0%, #176dee 50%,  #17aaee 100%, );
}
.full-subtitle-1,.full-subtitle-2{
  text-align: center;
  color: #17aaee;
}
.full-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px;
}
.full-img{
  flex: 0 0 47%;
}
.full-img img{
  width: 100%;

}
.full-table{
  border-collapse:  collapse;
  text-align: center;
  flex: 0 0 47%;
  
}
.full-table th,.full-table td{
  border: solid 1px;  
  padding: 10px;
}
.full-table th{
  width: 50%;
  background-color: #b2e1f7;
}
.full-table td{
  width: 50%;
}
.full-p1{
  flex: 0 0 70%;
  text-align: left;
  margin: 20px 0;
}
.full-p2{
  flex: 0 0 70%;
  text-align: left;
}
.full-p1-title,.full-p2-title{
  color: #000875;
}
.full-cont ul{
  padding-left: 40px ;
}
.full-cont ul span{
  font-weight: bold;
}

.casual-card{
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
  margin: 20px 0;
}
.casual-title{
  position: relative;
  font-family: serif;
  text-align: center;
  color:  #000875;
  margin: 0 0 20px;
}
.casual-title:before {
  position: absolute;
  bottom: -10px;
  left: calc(50% - 50px);
  width: 100px;
  height: 5px;
  content: '';
  border-radius: 3px;
  background-image: linear-gradient(135deg, #000875 0%, #176dee 50%,  #17aaee 100%, );
}
.casual-subtitle-1{
  text-align: center;
  color: #17aaee;
}
.casual-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px;
}
.casual-img{
  flex: 0 0 47%;
}
.casual-img img{
  width: 100%;

}
.casual-table{
  border-collapse:  collapse;
  text-align: center;
  flex: 0 0 47%;
}
.casual-table th,.casual-table td{
  border: solid 1px;  
  padding: 10px;
}
.casual-table th{
  width: 50%;
  background-color: #b2e1f7;
}
.casual-table td{
  width: 50%;
}
.casual-p1{
  flex: 0 0 60%;
  text-align: left;
  margin: 20px 0;
}
.casual-p2{
  flex: 0 0 60%;
  text-align: left;
}
.casual-p1-title,.casual-p2-title{
  color: #000875;
}
.casual-cont ul{
  padding-left: 40px ;
}
.casual-cont ul span{
  font-weight: bold;
}

.counseling-card{
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
  margin: 20px 0;
}
.counseling-title{
  position: relative;
  font-family: serif;
  text-align: center;
  color:  #000875;
  margin: 0 0 20px;
}
.counseling-title:before {
  position: absolute;
  bottom: -10px;
  left: calc(50% - 50px);
  width: 100px;
  height: 5px;
  content: '';
  border-radius: 3px;
  background-image: linear-gradient(135deg, #000875 0%, #176dee 50%,  #17aaee 100%, );
}
.counseling-subtitle-1{
  text-align: center;
  color: #17aaee;
}
.counseling-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px;
}
.counseling-img{
  flex: 0 0 47%;
}
.counseling-img img{
  width: 100%;
}
.counseling-table{
  border-collapse:  collapse;
  text-align: center;
  flex: 0 0 47%;
}
.counseling-table th,.counseling-table td{
  border: solid 1px;  
  padding: 10px;
}
.counseling-table th{
  width: 50%;
  background-color: #b2e1f7;
}
.counseling-table td{
  width: 50%;
}
.counseling-table span{
  font-weight: bold;
}

</style>

<script>
export default {
  data () {
  return {
    courses:[
      {
        name:'フルサポートコース',
        img:'/images/marriage-gate.webp',
        note:'充実したサポート内容のおススメコースです。当社の多くの会員様がこちらのコースで活動されています。',
        href:'#full',
      },
      {
        name:'カジュアルコース',
        img:'/images/marriage-gate.webp',
        note:'婚活にまだ迷いのある方、とりあえずお試しした方におすすめのコースです。追加料金でフルサポートコースに変更可能です。',
        href:'#casual',
      },
      {
        name:'カウンセリングコース',
        img:'/images/marriage-gate.webp',
        note:'他社で婚活中の方、プライベートな恋愛でお悩みの方が気軽に電話で相談できるコースです。一人で悩んでいないでご相談ください。',
        href:'#counseling',
      },
    ],
    list: [
          { title: 'ホーム', icon: 'mdi-web', url: '/' },
          { title: 'コース案内、料金', icon: 'mdi-information-variant', url: '/price' },
          { title: 'ご入会からご結婚まで', icon: 'mdi-information-variant', url: '/flow' },
          { title: 'ご成婚者様の声', icon: 'mdi-web', url: '/voice' },
    ],
    fullTables:[
      {title:'入会金',price:'33,000円'},
      {title:'登録料',price:'33,000円'},
      {title:'月会費',price:'11,000円'},
      {title:'お見合い料',price:'0円'},
      {title:'ご成婚費',price:'165,000円'},
    ],
    casualTables:[
      {title:'入会金',price:'0円'},
      {title:'登録料',price:'33,000円'},
      {title:'月会費',price:'5,500円'},
      {title:'お見合い料',price:'3,300円'},
      {title:'ご成婚費',price:'165,000円'},
    ],
    counselingTables:[
      {title:'30分',price:'0円'},
      {title:'1時間',price:'3,300円'},
      {title:'2時間',price:'5,500円'},
    ],
  }
  },
  mounted() {
  },
}
</script>