<template>
<div 
  :style="{marginTop:- extra+'px'}"
  class="all"
>
  <div
    ref="header"
    class="menus"
  >
    <div
      class="lists"
      v-for="(value, index) in menus" v-bind:key="index"
    >
      <div class="cards">
        <h3>{{value.name}}</h3>
        <div class="pic">
          <img :src="value.img">
        </div>
        <!-- <div class="note">{{value.note}}</div> -->
      </div>
    </div>
  </div>
  <div class="body">
    <div class="first-body">
      <div class="news">
        <div class="box30">
          <div class="box-title">Information</div>
          <div class="box-cont">
            <ul>
              <li class="box-news" v-for="(value,index) in news" :key="index">
                <div class="news-date">{{value.date}}</div>
                <div class="news-cont">{{value.cont}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="emblem">
        <div class="emblem-card">
          <div class="emblem-img">
            <img src="/images/ibj-certificate.png">
          </div>
          <div class="emblem-cont">
            <div class="emblem-title">会員数・成婚数No.1*選ばれるのには理由があります</div>
            <div class="emblem-p">日本結婚相談所連盟（IBJ）は、会員数・成婚数で業界No.1*となりました。※日本マーケティングリサーチ機構調べ（2021年調査、大手結婚相談所・連盟を対）<br>今後も、当社は登録会員数No.1の結婚相談所として皆様のスムースな婚活とご成婚を生み出して参ります。</div>
          </div>
        </div>
      </div>
      <div class="award">
        <div class="award-card">
          <div class="award-title">セントマリアージュ青山が IBJ AWARD 2021年下期 を受賞しました！</div>
          <div class="award-img">
            <img src="/images/IBJ-award.png">
          </div>
          <div class="award-cont">
            <div class="award-p">IBJ AWARD とは、日本結婚相談所連盟（IBJ)の加盟店3021社の中で、過去６か月間で特に顕著な実績を残した結婚相談所に贈られる賞です。当社は、2020年以降に開業した結婚相談所の中で、特に目覚ましい活躍をした相談所に贈られる「BEST ROOKIE部門」で受賞いたしました。こちらの受賞率は僅か10.2％（123社／1204社）になります。選定基準は、「入会数、成婚数」「地域への貢献度」「ガイドライン、法令の遵守」「クレームやトラブルがない事」等になります。これらの厳しい選定基準をクリアし、日本結婚相談所連盟(IBJ)がお勧めできる優良結婚相談所としてお墨付きをいただいたことになります。セントマリアージュ青山は開業から約1年ではございますが、多くの方々にご入会いただき、続々とご成婚が出ております。これからも、お一人でも多くの方々に幸せになっていただくために、心のこもったサポートをさせていただきたいと思っております。</div>
          </div>
        </div>
      </div>
    </div>
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
        <div class="intro">
          <div class="intro-card">
            <h1>セントマリアージュ青山について</h1>
            <div class="intro-cont">
              <div class="left-pic"><img src="/images/marriage-gate.webp"></div>
              <div class="center-p">東京青山の結婚相談所エクセレンス青山の婚活は、ご成婚第一主義。一人ひとりにあったお相手探しで、お客様の個性にあわせたオンリーワンの婚活をご提案いたします。当社が掲げる「オンリーワンのご成婚」は、お客様一人ひとりの個性にあわせて最適なパートナーをご紹介いたします。ご納得いくまでお相手をお選びいただいたうえで、お見合いをしていただき、交際～ご成婚へと繋げてまいります。私たちは、お客様の結婚という明確なゴールに向けて、全力でサポートさせていただいております。</div>
              <div class="right-pic"><img src="/images/marriage-bouquet.jpeg"></div>
            </div>
          </div>
        </div>
        <div class="PR">
          <div class="PR-card">
            <h1><span>選ばれる理由</span></h1>
            <hr>
            <div class="pr-list"
              v-for="(value, index) in pr" v-bind:key="index"
              v-bind:class="{even:index%2==1}"
            >
              <div class="pr-pic">
                <img v-bind:src="value.photoUrl">
              </div>
              <div class="pr-cont">
                <h2>{{index+1}}. {{value.name}}</h2>
                <div class="pr-cont-p">{{value.explation}}</div>
                <button 
                  @click="moveIDpage(value.id)" 
                  v-bind:class="{selected:activeName===value.name}" 
                  @mouseover="activeName=value.name" 
                  @mouseout="activeName=''"
                >
                  詳細をみる&ensp;&#8811;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="self">
          <h1 class="self-title">カウンセラーからのご挨拶</h1>
          <div class="self-cont">
            <div class="self-p"></div>
            <div class="self-pic"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.menus{
  display: flex;
  width: 100%;
  justify-content: center;
}
.lists{
  flex: 0 0 25%;
  padding: 20px;
}
.cards{
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 0 20px 20px;
  height: 100%;
  text-align:center;
  background-color: rgb(240, 240, 255,0.9);
  background-image:url("/images/luxury-2.jpg");
  background-size: 50%;
  background-repeat: repeat;
  background-position: right bottom;
}
.cards h3{
  padding: 15px 0 5px;
  color: #000000;
  font-family:serif;
  background-color: white;
}
.cards .pic{
  height: 10vw;
  position: relative;
}
.cards .pic::after{
  content: '';
	position: absolute;
	top: 0;
	left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, transparent 0 60%, #FFF 100%);
}

.cards img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cards .note{
  text-align: left;
}

.body{
  background-image:url("/images/luxury-2.jpg");
  background-size: 25%;
  background-repeat: repeat;
  padding-top: 20px;
}

.news{
  padding: 0 20%;
}
.box30 {
  width: 100%;
  margin: 2em 0;
  background: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  font-family: serif;
  border-radius: 10px;
}
.box30 .box-title {
  width: 100%;
  font-size: 1.2em;
  background: rgba(112, 124, 233, 0.534);
  padding: 4px;
  text-align: center;
  color: #FFF;
  font-weight: bold;
  letter-spacing: 0.05em;
}
.box30 .box-cont{
    padding: 10px 20px 15px;
    margin: 0;
}
.box30 ul{
  list-style-type: none;
}
.box30 li{
  padding: 5px 0;
  border-bottom: dashed 1px gray;
  display: flex;
}
.box30 .news-date{
  color: #5fc2f5;
  margin-right: 10px;
}

.emblem{
  width: 100%;
  padding: 0% 15%;
}
.emblem-card{
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(255, 255, 255,0.9);
  display: flex;
  align-items: center;

}
.emblem-img{
  flex: 0 0 30%;
}
.emblem-img img{
  width: 100%;
  object-fit: cover;
}
.emblem-cont{
  flex: 0 0 70%;
  font-family: serif;
  padding-left: 20px;
}
.emblem-title{
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 10px;
  color: transparent;
  background: repeating-linear-gradient(0deg, #B67B03 0.1em, #DAAF08 0.2em, #FEE9A0 0.3em, #DAAF08 0.4em, #B67B03 0.5em); 
	background-clip: text;
}
.award{
  width: 100%;
  padding: 3% 15%;
}
.award-card{
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(255, 255, 255,0.9);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: serif;
}
.award-title{
  width: 100%;
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 10px;
  color: #10a7f3;
  //background-image: -webkit-linear-gradient(315deg, #b8751e 0%, #ffce08 37%, #fefeb2 47%, #fafad6 50%, #fefeb2 53%, #e1ce08 63%, #b8751e 100%);
  background-image: linear-gradient(135deg, #b8751e 0%, #ffce08 37%,  #e1ce08 63%, #b8751e 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.award-img{
  flex: 0 0 30%;
}
.award-img img{
  width: 100%;
  object-fit: cover;
}
.award-cont{
  flex: 0 0 70%;
  padding-left: 20px;
}


.colum{
  display: flex;
}
.side{
  padding: 20px;
  flex: 0 0 20%;
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
  border-bottom: solid 2px black;
}
.side-menu ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.side-menu-a{
  color: #000000;
  padding: 15px;
  text-decoration: none;
  display: block;
  font-weight: bold;
  font-family: serif;
  font-size: 1.5vw;
}
.side-menu-a:hover{
  background-color: rgb(0, 0, 0);
  color: #ffffff;
}


.main{
  padding: 20px 30px;
  flex: 0 0 80%;
}
.intro{
  margin-bottom: 20px;
}
.intro-card{
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 30px;
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
  background-size: 66px 66px;
}
.intro-card h1{
  font-family:serif;
  text-align: center;
  margin-bottom: 10px;
  color: #ffffff;
  text-shadow: 2px 2px 2px rgb(0, 0, 0),0 0 2px rgb(0, 0, 0);
  -webkit-box-reflect: below -17px -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0) 10%,rgba(0, 0, 0, 0.3));
}
.intro-cont{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.intro .center-p{
  font-family: serif;
  padding: 0 20px;
}
.intro .left-pic,.intro .right-pic{
  flex: 0 0 25%;
  position: relative;
}
.intro .left-pic::after{
  content: '';
	position: absolute;
	top: 0;
	left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, transparent 0 60%, #FFF 100%), linear-gradient(0deg, transparent 0 60%, #FFF 100%);
}
.intro .right-pic::after{
  content: '';
	position: absolute;
	top: 0;
	left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(270deg, transparent 0 40%, #FFF 100%),linear-gradient(0deg, transparent 0 60%, #FFF 100%);
}
.intro img{
  width: 100%;
  height: 20vw;
  object-fit: cover;
}
// .PR-cont{

// }
.PR-card{
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
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
  background-size: 66px 66px;
}
.PR h1{
  font-family:serif;
  text-align: center;
  margin-bottom: 10px;
  color: #000000;
  -webkit-box-reflect: below -10px -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, .6)), to(transparent));
}
// .PR-cont span {
//   background-image: -webkit-linear-gradient(315deg, #b8751e 0%, #ffce08 37%, #fefeb2 47%, #fafad6 50%, #fefeb2 53%, #e1ce08 63%, #b8751e 100%);
//   background-image: linear-gradient(135deg, #b8751e 0%, #ffce08 37%, #fefeb2 47%, #fafad6 50%, #fefeb2 53%, #e1ce08 63%, #b8751e 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }
.pr-list{
  margin: 10px 0;
  display: flex;
  overflow: scroll;
}
.pr-list.even{
  flex-direction: row-reverse;
}
.pr-pic{
  flex: 0 0 30%;
  padding-top: 30%;
  position: relative;
}
.pr-pic img{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pr-cont{
  padding: 20px;
  flex: 0 0 70%;
  position: relative;
  min-width: 50%;
}
.pr-cont h2{
  color:#000000;
  padding: 20px 0;
  font-family:serif;
}
.pr-cont-p{
  text-align: left;
  font-family:serif;
  font-weight: bold;
}

.self{
  font-family: serif;
}

button{
  font-size: 10px;
  font-weight: bold;
  padding: 3px;
  border-radius: 5px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: rgb(245, 245, 236);
  overflow: scroll;
}
.selected{
  background-color: blueviolet;
  color:#fff;
}
</style>

<script>
export default {
  data () {
  return {
    pr:[
     { 
      name:'経験豊富、成婚実績多数',
      explation:'大手結婚相談所で約10年間勤務し、1000人以上の会員様の担当カウンセラーとして婚活サポートを行ってきました。20代から50代までの幅広い年齢層の方々のご成婚実績が多数ございます。これらの経験を活かし、ご成婚までしっかりサポートさせていただきます。',
      photoUrl:'/images/heart-marriage.jpg' ,
     },
     { 
      name:'お一人お一人のお気持ちに寄り添った丁寧なサポート',
      explation:'会員様お一人お一人のお気持ちに寄り添い、丁寧なサポートをさせていただきます。お見合い後の振り返りや、交際中のデートの状況などを確認しながら、活動状況に応じてアドバイスをさせていただきます。婚活中は誰にも相談できず孤独に陥りがちですが、メール、Line、電話等で、いつでもご相談いただける体制を整えております。また、レスポンスの速さには自信がありますので、時間を無駄にすることなく活動を進めていただく事ができます。',
      photoUrl:'/images/heart-marriage.jpg' ,
     },
     { 
      name:'IBJ正規加盟店',
      explation:'セントマリアージュ青山は、「日本結婚相談所連盟（IBJ）」の正規加盟店です。全国約70,000人の登録者を対象に、スマホやパソコンを使ってスムーズなお相手探しができます。毎月300名以上の新規会員の方が入会していますので、常に新たな出会いが期待できますお見合いのセッティング、交際から成婚まで、カウンセラーがきめ細かくサポートさせていただきます。',
      photoUrl:'/images/heart-marriage.jpg' ,
     },
    ],
    menus:[
      {
        name:'ご成婚者様の声',
        img:'/images/heart-marriage.jpg',
        note:'充実したサポート内容のおススメコースです。当社の多くの会員様がこちらのコースで活動されています。',
      },
      {
        name:'ご入会からご結婚まで',
        img:'/images/heart-marriage.jpg',
        note:'婚活にまだ迷いのある方、とりあえずお試しした方におすすめのコースです。追加料金でフルサポートコースに変更可能です。',
      },
      {
        name:'コース案内、料金',
        img:'/images/heart-marriage.jpg',
        note:'他社で婚活中の方、プライベートな恋愛でお悩みの方が気軽に電話で相談できるコースです。一人で悩んでいないでご相談ください。',
      },
    ],
    list: [
          { title: 'ホーム', icon: 'mdi-web', url: '/' },
          { title: 'ご成婚者様の声', icon: 'mdi-information-variant', url: '/company' },
          { title: 'ご入会からご結婚まで', icon: 'mdi-information-variant', url: '/company' },
          { title: 'コース案内、料金', icon: 'mdi-web', url: '/sample' },
        ],
    news:[
      {date:'2022/06/01',cont:'ご成婚者様からの声を追加しました'},
      {date:'2022/06/02',cont:'ホームページを新しくしました'},
      {date:'2022/06/03',cont:'ブログを更新しました'},
      {date:'2022/06/04',cont:'ご成婚者様からの声を追加しました'},
    ],

    extra:0,
    dom:'',
    rect:[],
    activeName:"",
  }
  },
  mounted() {
      this.dom = this.$refs.header; 
      this.rect = this.dom.getBoundingClientRect(); // 要素の座標と幅と高さを取得
      this.extra = this.rect.height
  },
}
</script>