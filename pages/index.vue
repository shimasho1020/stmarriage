<template>
  <div>
    <div class="hero" >
      <h1 class="page-title">
        <span class="inline-block">都内大規模オフィスビル</span>
        <span class="inline-block">設置台数 No.1</span>
        <span class="inline-block">新体験エレベーターメディア</span>
      </h1>
      <div class="hero_img" >
        <img class="image" src="/images/marriage-header1.jpg" alt="メイン写真">
      </div>
    </div>
    <div ref="header" class="menus">
      <div
        class="lists"
        v-for="(value, index) in menus" v-bind:key="index"
      >
        <div class="cards">
          <router-link class="cards-a" v-bind:to="value.url">
            <h3>{{value.name}}</h3>
            <div class="pic">
              <img :src="value.img">
            </div>
            <!-- <div class="note">{{value.note}}</div> -->
          </router-link>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="first-body">
        <div class="intro">
          <div class="intro-card">
            <h1 class="intro-title">セントマリアージュ青山について</h1>
            <div class="intro-cont">
              <div class="left-pic"><img src="/images/marriage-gate.webp"></div>
              <div class="center-p">東京青山の結婚相談所エクセレンス青山の婚活は、ご成婚第一主義。一人ひとりにあったお相手探しで、お客様の個性にあわせたオンリーワンの婚活をご提案いたします。当社が掲げる「オンリーワンのご成婚」は、お客様一人ひとりの個性にあわせて最適なパートナーをご紹介いたします。ご納得いくまでお相手をお選びいただいたうえで、お見合いをしていただき、交際～ご成婚へと繋げてまいります。私たちは、お客様の結婚という明確なゴールに向けて、全力でサポートさせていただいております。</div>
              <div class="right-pic"><img src="/images/marriage-bouquet.jpeg"></div>
            </div>
          </div>
        </div>
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
        <!-- <div class="emblem">
          <div class="emblem-card">
            <div class="emblem-img">
              <img src="/images/ibj-certificate.png">
            </div>
            <div class="emblem-cont">
              <div class="emblem-title">会員数・成婚数No.1*選ばれるのには理由があります</div>
              <div class="emblem-p">日本結婚相談所連盟（IBJ）は、会員数・成婚数で業界No.1*となりました。※日本マーケティングリサーチ機構調べ（2021年調査、大手結婚相談所・連盟を対）<br>今後も、当社は登録会員数No.1の結婚相談所として皆様のスムースな婚活とご成婚を生み出して参ります。</div>
            </div>
          </div>
        </div> -->
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
          <div class="main-card">
            <!-- <h1 class="main-title"><span>St.Marriage Aoyama</span></h1> -->
            <div class="PR">
              <div class="PR-card">
                <h1 class="pr-title"><span>選ばれる理由</span></h1>
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
                <div class="self-p">はじめまして。代表カウンセラーの島田智子です。<br>三菱系の結婚相談所「ダイヤモンドファミリークラブ」のカウンセラーとして、約10年勤務しておりました。<br>延べ1000人以上の会員様を担当し、20代から50代までの幅広い年齢層の方々のご成婚実績が多数ございます。　豊富な経験・知識を生かして、年齢、性別を問わず、お一人お一人に寄り添ったサポートをいたします。<br>「お見合いを成功させる秘訣」「異性に好かれる身だしなみ、行動、会話」「仮交際から真剣交際への進め方」「ご成婚への最後の一押し」等、幅広く丁寧にアドバイスいたします。<br>過去のご成婚者の方々から近況報告をいただいたり、元会員様から恋愛相談を受けたりと、現在でも長くお付き合いを続けさせていただいています。結婚後（成婚退会後）も何か悩みを抱えた時、いつでもご相談いただけるような身近な存在でありたいと思っております。<br>随時、無料相談（電話、zoom）を行っておりますので、お気軽にお問い合わせください。</div>
                <div class="self-pic"><img src="/images/ShimadaTomoko.jpg"></div>
                <div class="self-comment 1">入会1ヵ月以内のお見合い成立率100%</div>
                <div class="self-comment 2">入会1カ月以内の交際成立率93%</div>
                <div class="self-table">
                  <div>※セントマリアージュ青山で活動中の会員様（2022年5月現在）</div>
                  <table>
                    <tr v-for="(value, index) in tables" v-bind:key="index">
                      <th>{{value.title}}</th>
                      <td>{{value.cont}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="access">
              <h1 class="access-title">アクセス</h1>
              <div class="access-cont">
                <div class="access-comment">住所：〒107-0052東京都港区赤坂8-4-14　青山タワープレイス８F<br>（青山一丁目駅から徒歩3分）</div>
                <div class="access-pic"><img src="/images/aoyamatower.jpeg"></div>
                <div class="access-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.175124146428!2d139.72407744999748!3d35.672689687952186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5e792882ab%3A0xc5ac8cc58a36ceef!2z6Z2S5bGx44K_44Ov44O844OX44Os44Kk44K5!5e0!3m2!1sja!2sjp!4v1657282738557!5m2!1sja!2sjp" 
                  width="400"
                  height="450" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="contact">
            <div class="contact-card">
              <div class="contact-1">CONTACT</div>
              <div class="contact-2">080-7002-0555</div>
              <div class="contact-3">無料カウセリング<br>男性用</div>
              <div class="contact-4">無料カウセリング<br>女性用</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.hero
  position: relative
  height: 100vh

  > .page-title
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    text-align: center
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    color: #ffffff
    font-family: serif
    font-size: 3.5vw

    +sp-view

  > .hero_img
    width: 100vw
    height: 100vh
    z-index: -20

    > .image
      width: 100%
      height: 100%
      object-fit: cover

</style>

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
  color: #000875;
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
  font-family:serif;
  background-color: white;
}
.cards-a:hover{
  color: #aae0f5;
}
.cards-a{
  text-decoration: none;
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

.first-body{
  background-image:url("/images/luxury-2.jpg");
  background-size: 25%;
  background-repeat: repeat;
  padding-top: 20px;
}

.intro{
  margin-bottom: 20px;
}
.intro-card{
  width: 80%;
  margin: auto;
  text-align: center;
  font-family: serif;
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px 30px;
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
.intro-title{
  display: inline-block;
  position: relative;
  font-family:serif;
  text-align: center;
  margin-bottom: 10px;
  padding: 0 17%;
  background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  // -webkit-box-reflect: below -17px -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0) 10%,rgba(0, 0, 0, 0.3));
}
.intro-title:before, .intro-title:after {
	content: '';
	position: absolute;
	top: 50%;
	display: inline-block;
	width: 15%;
	height: 2px;
	background-color: #000875;
}
.intro-title:before {
	left:0;
	background: linear-gradient(-45deg, transparent, #000875 10%, #000875 30%, transparent);
}
.intro-title:after {
	right: 0;
	background: linear-gradient(-45deg, transparent, #000875 70%, #000875 90%, transparent);
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

// .emblem{
//   width: 100%;
//   padding: 0% 15%;
// }
// .emblem-card{
//   box-shadow: 0 0 10px 2px rgb(0 0 0 / 10%);
//   border-radius: 10px;
//   padding: 20px;
//   background-color: rgb(255, 255, 255,0.9);
//   display: flex;
//   align-items: center;

// }
// .emblem-img{
//   flex: 0 0 30%;
// }
// .emblem-img img{
//   width: 100%;
//   object-fit: cover;
// }
// .emblem-cont{
//   flex: 0 0 70%;
//   font-family: serif;
//   padding-left: 20px;
// }
// .emblem-title{
//   font-size: 2vw;
//   font-weight: bold;
//   margin-bottom: 10px;
//   color: transparent;
//   background: repeating-linear-gradient(0deg, #B67B03 0.1em, #DAAF08 0.2em, #FEE9A0 0.3em, #DAAF08 0.4em, #B67B03 0.5em); 
// 	background-clip: text;
// }
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
  background-color: rgba(255, 255, 255, 0.9);
}
.side{
  padding: 20px;
  flex: 0 0 20%;
  color: #000875;
}
.side-card{
  // box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
  height: 500px;
  position: sticky;
  top: 70px;
  // background-color: rgba(255, 255, 255, 0.9);
  // background-image:
  // url("/images/frame-topleft.svg"),
  // url("/images/frame-topright.svg"),
  // url("/images/frame-bottomleft.svg"),
  // url("/images/frame-bottomright.svg");
  // background-position: 
  // left 2px top 2px,
  // right 2px top 2px,
  // left 2px bottom 2px,
  // right 2px bottom 2px;
  // background-size: 50px 50px;
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
// .main-card{
// //   box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
// //   border-radius: 10px;
// //   padding: 20px;
//   // background-color: rgba(255, 255, 255, 0.8);
// //   background-image:
// //   url("/images/frame-topleft.svg"),
// //   url("/images/frame-topright.svg"),
// //   url("/images/frame-bottomleft.svg"),
// //   url("/images/frame-bottomright.svg");
// //   background-position: 
// //   left 2px top 2px,
// //   right 2px top 2px,
// //   left 2px bottom 2px,
// //   right 2px bottom 2px;
// //   background-size: 50px 50px;
// }
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
.pr-list{
  margin: 10px 20px;
  display: flex;
  overflow: scroll;
  text-align: left;
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
  margin: 30px 0 0;
  padding: 20px;
}
.self-title {
	position: relative;
	padding: .1em .3em .1em 1em;
	// border-bottom: 1px solid #00ccff;
  color:#000875;
}
.self-title:before,.self-title:after {
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
.self-title:after {
	top: 35%;
	left: 10px;
	height: 15px;
	width: 15px;
	transform: rotate(45deg);
	border: none;
	background: rgba(0, 60, 255, 0.3);
}
.self-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0 0;
  padding: 20px;
}
.self-p{
  flex: 0 0 70%;
  padding-right: 10px;

}
.self-pic{
  flex: 0 0 30%;
}
.self-pic img{
  width: 100%;
}
.self-comment{
  flex: 70%;
  text-align: center;
  font-size: 2.5vw;
  font-weight: bold;
  background-image: linear-gradient(135deg, #b8751e 0%, #ffce08 37%,  #e1ce08 63%, #b8751e 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;

}
.self-table{
  flex: 0 0 70%;
  margin: 20px 0;
}
.self-table table{
  border-collapse:  collapse;
}
.self-table th,.self-table td{
  border: solid 1px;  
  padding: 10px;
}
.self-table th{
  width: 30%;
}
.self-table td{
  width: 70%;
}

.access{
  font-family: serif;
  padding: 20px;
}
.access-title {
	position: relative;
	padding: .1em .3em .1em 1em;
	// border-bottom: 1px solid #00ccff;
  color:#000875;
  margin: 0 0 10px;
}
.access-title:before,.access-title:after {
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
.access-title:after {
	top: 35%;
	left: 10px;
	height: 15px;
	width: 15px;
	transform: rotate(45deg);
	border: none;
	background: rgba(0, 60, 255, 0.3);
}
.access-cont{
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  margin: 20px;
}
.access-comment{
  flex: 0 0 90%;
}
.access-pic{
  flex: 0 0 338px;
}
.access-pic img{
  height: 450px;
}
.access-map{
  flex: 0 0 20%;
  width: 100%;
  object-fit: cover;
}

.contact{
  font-family: serif;
  margin-top: 30px;
}
.contact-card{
  background: linear-gradient(to top, #21d3f3, rgb(195, 242, 248));
  text-align: center;
  font-size: 2vw;
  color: #000875;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}
.contact-1{
  flex: 0 0 100%;
  font-size: 2.5vw;
  font-weight: bold;
}
.contact-2{
  flex: 0 0 100%;
  font-size: 3vw;
}
.contact-3,.contact-4{
  flex: 0 0 30%;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 10px;
  margin: 10px;
  background-color: rgb(255, 255, 255,0.6);
}
.contact-2:hover,.contact-3:hover,.contact-4:hover{
  color: #fff;
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
      photoUrl:'/images/ibj-certificate.png' ,
     },
    ],
    menus:[
      {
        name:'コース案内、料金',
        img:'/images/heart-marriage.jpg',
        url:'/price',
      },
      {
        name:'ご入会からご結婚まで',
        img:'/images/heart-marriage.jpg',
        url:'/flow',
      },
      {
        name:'ご成婚者様の声',
        img:'/images/heart-marriage.jpg',
        url:'/voice',
      },
    ],
    list: [
          { title: 'ホーム', icon: 'mdi-web', url: '/' },
          { title: 'コース案内、料金', icon: 'mdi-information-variant', url: '/price' },
          { title: 'ご入会からご結婚まで', icon: 'mdi-information-variant', url: '/flow' },
          { title: 'ご成婚者様の声', icon: 'mdi-web', url: '/voice' },
        ],
    news:[
      {date:'2022/06/01',cont:'ご成婚者様からの声を追加しました'},
      {date:'2022/06/02',cont:'ホームページを新しくしました'},
      {date:'2022/06/03',cont:'ブログを更新しました'},
      {date:'2022/06/04',cont:'ご成婚者様からの声を追加しました'},
    ],
    tables:[
      {title:'ご年齢',cont:'20代後半〜50代前半'},
      {title:'男女比',cont:'(約) 7 対 3'},
      {title:'ご職業',cont:'三菱グループ各社、大手通信事業社、大手広告代理店、大手建設会社、大手金融機関、他'},
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