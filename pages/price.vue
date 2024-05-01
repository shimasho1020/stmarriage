<template>
  <div class="">
    <div class="title_block" style="text-align: center">
      <h1 class="title">料金プラン</h1>
      <!-- <div class="coution">
        ※4月1日より料金改定をいたします。<br />新規入会金　33,000円 →
        55,000円<br />※3月31日までにご契約いただいた方には、現行通りとさていただきます。
      </div> -->
    </div>
    <div class="body">
      <div class="menu">
        <div class="lists">
          <div class="cards">
            <a class="cards_wrap" href="#full">
              <h2 class="cards_title">フルサポートコース</h2>
              <div class="cards_pic">
                <img
                  class="img"
                  src="~/assets/images/wedding-table-desserts.webp"
                  alt="コース案内"
                />
              </div>
              <div class="cards_note">
                充実したサポート内容のおススメコースです。当社の多くの会員様がこちらのコースで活動されています。
              </div>
            </a>
          </div>
        </div>
        <!-- <div class="lists">
          <div class="cards">
            <a class="cards_wrap" href="#casual">
              <h2 class="cards_title">カジュアルコース</h2>
              <div class="cards_pic">
                <img
                  class="img"
                  src="~/assets/images/casual.webp"
                  alt="コース案内"
                />
              </div>
              <div class="cards_note">
                婚活にまだ迷いのある方、とりあえずお試しした方におすすめのコースです。追加料金でフルサポートコースに変更可能です。
              </div>
            </a>
          </div>
        </div> -->
        <div class="lists">
          <div class="cards">
            <a class="cards_wrap" href="#counseling">
              <h2 class="cards_title">カウンセリングコース</h2>
              <div class="cards_pic">
                <img
                  class="img"
                  src="~/assets/images/counseling.webp"
                  alt="コース案内"
                />
              </div>
              <div class="cards_note">
                他社で婚活中の方、プライベートな恋愛でお悩みの方が気軽に電話で相談できるコースです。一人で悩んでいないでご相談ください。
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="colum">
        <div class="section_wrap" id="full">
          <div class="section full">
            <h1 class="title"><span>フルサポートコース</span></h1>
            <div class="subtitle">
              充実したサポート内容をリーズナブルに提供しているおすすめコースです。
            </div>
            <!-- <div class="subtitle">
              当社のほとんど会員様が、こちらのコースで活動されています。
            </div> -->
            <div class="content">
              <div class="content_img">
                <img
                  class="img"
                  src="~/assets/images/wedding-table-desserts.webp"
                  alt="フルサポートコース"
                />
              </div>
              <table class="color_table">
                <tr v-for="(value, index) in fullTables" v-bind:key="index">
                  <th>{{ value.title }}</th>
                  <td>{{ value.price }}</td>
                </tr>
              </table>
              <div class="list_block">
                <h3 class="list_title">入会時サポート内容</h3>
                <ol class="original_list">
                  <li>プロフィールシート作成サポート</li>
                  <li>写真館への同行（希望者のみ）</li>
                </ol>
              </div>
              <div class="list_block">
                <h3 class="list_title">活動時サポート内容</h3>
                <ol class="original_list">
                  <li>
                    お申し込み：月 <span class="highlight">50件</span>まで無料
                  </li>
                  <li>お申し受け：無制限</li>
                  <li>カウンセラーからの紹介：月数名</li>
                  <li>
                    お見合い料：<span class="highlight">無料</span
                    >（月８回まで）
                  </li>
                  <li>お見合いセッティング（お店の代行予約等）</li>
                  <li>電話、メールでのご相談：無制限</li>
                  <li>面談（対面orZOOM)：月１回</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="section_wrap" id="casual">
          <div class="section casual">
            <h1 class="title"><span>カジュアルコース</span></h1>
            <div class="subtitle">
              活動に迷いがある方、とりあえずお試ししたい方におすすめのコースです。
            </div>
            <div class="content">
              <div class="content_img">
                <img src="~/assets/images/casual.webp" alt="カジュアルコース" />
              </div>
              <table class="color_table">
                <tr v-for="(value, index) in casualTables" v-bind:key="index">
                  <th>{{ value.title }}</th>
                  <td>{{ value.price }}</td>
                </tr>
              </table>
              <div class="list_block">
                <h3 class="list_title">入会時サポート内容</h3>
                <ol class="original_list">
                  <li>プロフィールシート作成サポート</li>
                </ol>
              </div>
              <div class="list_block">
                <h3 class="list_title">活動時サポート内容</h3>
                <ol class="original_list">
                  <li>
                    お申し込み：月 <span class="highlight">30件</span>まで無料
                  </li>
                  <li>お申し受け：無制限</li>
                  <li>お見合い料：あり（１回　3,300円）</li>
                  <li>お見合いセッティング（お店の代行予約等）</li>
                  <li>電話、メールでのご相談：無制限</li>
                  <li>
                    フルサポートコースへの変更：可能（入会金の差額をお支払いいただきます）
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div> -->
        <div class="section_wrap" id="counseling">
          <div class="section counseling">
            <h1 class="title"><span>カウンセリングコース</span></h1>
            <div class="subtitle">
              他社で活動している方、プライベートな恋愛、結婚でお悩みを抱えている方、<br />お気軽にご相談ください。
            </div>
            <div class="content">
              <div class="content_img">
                <img
                  src="~assets/images/counseling.webp"
                  alt="カウンセリングコース"
                />
              </div>
              <table class="color_table">
                <div><span>電話でのご相談</span></div>
                <tr
                  v-for="(value, index) in counselingTables"
                  v-bind:key="index"
                >
                  <th>{{ value.title }}</th>
                  <td>{{ value.price }}</td>
                </tr>
                <div>※　電話料金：無料<br />（当社負担）</div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useContext } from '@nuxtjs/composition-api'

const { app, store } = useContext()

const fullTables = [
  { title: '入会金', price: '55,000円' },
  { title: '登録料', price: '33,000円' },
  { title: '月会費', price: '11,000円' },
  { title: 'お見合い料', price: '0円' },
  { title: 'ご成婚費', price: '198,000円' },
]
const casualTables = [
  { title: '入会金', price: '0円' },
  { title: '登録料', price: '33,000円' },
  { title: '月会費', price: '6,600円' },
  { title: 'お見合い料', price: '3,300円' },
  { title: 'ご成婚費', price: '165,000円' },
]
const counselingTables = [
  { title: '30分間', price: '2,200円' },
  { title: '1時間', price: '3,300円' },
  { title: '2時間', price: '5,500円' },
]
</script>

<style lang="sass" scoped>

.highlight
  // background-color: var(--main)
  font-size: 20px
  color: yellow
  color: orange

.coution
  +text-body(16px)
  color: red
  +sp-view
    font-size: 14px
.body
  > .menu
    padding: 64px 0
    display: flex
    width: 100%
    justify-content: center

    +pc-sm-view
      display: none

    > .lists
      flex: 0 0 30%
      padding: 20px

      > .cards
        // border: solid 1px #00000033
        border-radius: 12px
        padding: 0 25px 20px
        height: 100%
        text-align: center
        background-color: white
        background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
        background-position:  left 4px top 4px, right 4px top 4px, left 4px bottom 4px, right 4px bottom 4px
        background-size: 50px 50px
        transition-duration: .3s
        box-shadow: 0 2px 14px rgba(0, 0, 0, .1)

        &:hover
          transform: scale(1.1)

        > .cards_wrap
          text-decoration: none

          > .cards_title
            padding: 15px 0 5px
            +text-subtitle(24px)

          > .cards_pic
            height: 180px
            position: relative

            &::after
              content: ''
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              background-image: linear-gradient(0deg, transparent 0 60%, #FFF 100%),linear-gradient(180deg, transparent 0 60%, #FFF 100%)

            > .img
              width: 100%
              height: 100%
              object-fit: cover
              object-position: 50% 10%

          > .cards_note
            +text-body(16px)
            margin-top: 10px
            text-align: left


  > .colum
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)

    > .section_wrap
      padding: 40px 0 20px

      > .section
        border-radius: 30px
        padding: 40px 20px
        background-color: white
        background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
        background-position:  left 8px top 8px, right 8px top 8px, left 8px bottom 8px, right 8px bottom 8px
        background-size: 70px 70px
        margin: 20px 0
        box-shadow: 0 2px 14px rgba(0, 0, 0, .1)

        +sp-view
          background-size: 50px 50px

        > .title
          +text-subtitle(36px)
          position: relative
          text-align: center
          margin: 0 0 20px

          +sp-view
            +text-subtitle(28px)

          &::before
            position: absolute
            bottom: -10px
            left: calc(50% - 50px)
            width: 100px
            height: 5px
            content: ''
            border-radius: 3px
            background-image: linear-gradient(135deg, #000875 0%, #176dee 50%,  #17aaee 100%, )

        > .subtitle
          +text-body(16px)
          text-align: center


        > .content
          display: flex
          flex-wrap: wrap
          justify-content: space-around
          padding: 20px
          margin: 20px 0 0

          +sp-view
            flex-direction: column
            gap: 20px
            padding: 0

          > .content_img
            flex: 0 0 47%

            +sp-view
              width: 100%

            img
              width: 100%
              border-radius: 15px

          > .color_table
            width: 400px

            +sp-view
              width: 100%

          > .list_block
            flex: 0 0 60%
            text-align: left
            margin: 20px 0

            +sp-view
              margin: 0

            > .list_title
              +text-title(24px)
              position: relative
              margin: 0 0 16px

              +sp-view
                +text-title(20px)
                margin: 0 36px 0

              &::after,&::before
                content: ""
                position: absolute
                border-radius: 50%

              &::before
                left: -28px
                width: 17px
                height: 17px
                background: var(--skyBlue)
                top: 50%
                -moz-transform: translateY(-50%)
                -webkit-transform: translateY(-50%)
                -o-transform: translateY(-50%)
                -ms-transform: translateY(-50%)
                transform: translateY(-50%)

              &::after
                top: 10px
                left: -20px
                width: 14px
                height: 14px
                background: var(--sub)

            > .original_list
              padding:  10px 20px
</style>
