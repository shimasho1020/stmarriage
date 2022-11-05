<template>
<div class="">
  <!-- <div class="title_block" style="text-align:center">
    <h1 class="title">入会から結婚までの流れ</h1>
  </div> -->
  <div class="body">
    <div class="body_wrap">
      <div class="section">
        <div class="section_title_block">
          <h1 class="section_title">31歳の男性会員様がご成婚されました!</h1>
        </div>
        <div class="section_img">
          <img class="img" src="/images/marriage-gate.webp">
        </div>
        <div class="section_block">
          <div class="text">
            当社の31歳の男性会員様がご成婚されました。お相手は29歳の女性会員様です。<br>お見合からお互い好印象で仮交際がスタートし、１カ月半で真剣交際に進み、3カ月でご成婚が決まりました。毎日のようにLineや電話でコミュニケーションを取り、毎週末デートを重ねることでお二人の距離を縮めていかれたそうです。溌溂としたパワーあふれる男性と、おっとり柔らかい雰囲気のお綺麗な女性の大変お似合いのお二人です。末永いお幸せをお祈りいたします♡
          </div>
          <div class="about">
            <h1 class="title">ご成婚者様の声</h1>
            <div class="list">
              <div class="list_item">
                <h1 class="subtitle">婚活を始めたきっかけ</h1>
                <div class="text">
                  30歳を過ぎ、また世の中もコロナ真っ只中の中で、このまま一人でいいのだろうか？家族がいた方がより人生が豊かになるのではないか？と思っていた矢先に、知人からの紹介を受けご縁があったので。
                </div>
              </div>
              <div class="list_item">
                <h1 class="subtitle">こちらの相談所を選んだきっかけ</h1>
                <div class="text">
                  30歳を過ぎ、また世の中もコロナ真っ只中の中で、このまま一人でいいのだろうか？家族がいた方がより人生が豊かになるのではないか？と思っていた矢先に、知人からの紹介を受けご縁があったので。
                </div>
              </div>
              <div class="list_item">
                <h1 class="subtitle">カウンセラーとの思い出のエピソード</h1>
                <div class="text">
                  30歳を過ぎ、また世の中もコロナ真っ只中の中で、このまま一人でいいのだろうか？家族がいた方がより人生が豊かになるのではないか？と思っていた矢先に、知人からの紹介を受けご縁があったので。
                </div>
              </div>
              <div class="list_item">
                <h1 class="subtitle">システムやルールで感じたこと</h1>
                <div class="text">
                  30歳を過ぎ、また世の中もコロナ真っ只中の中で、このまま一人でいいのだろうか？家族がいた方がより人生が豊かになるのではないか？と思っていた矢先に、知人からの紹介を受けご縁があったので。
                </div>
              </div>
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
  padding: 64px 0
  > .body_wrap
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    > .section
      padding: 30px
      border-radius: 20px
      background-color: var(--white-1)
      background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
      background-position:  left 2px top 2px, right 2px top 2px, left 2px bottom 2px, right 2px bottom 2px
      background-size: 50px 50px
      display: flex
      flex-direction: column
      gap: 40px
      // justify-content: center

      > .section_title_block
        > .section_title
          +text-title(32px)
          position: relative
          margin-left: 40px
          padding-right: 10px
          display: inline-block
          background: linear-gradient(transparent 70%, #a7d6ff 70%)
          // color: var(--white-1)
          text-shadow: 0 0 2px white
          // background: var(--w)
          z-index: 1
          border-radius: 0 10px 10px

          &::before 
            content: ""
            position: absolute
            background: var(--skyBlue)
            width: 50px
            height: 50px
            border-radius: 50%
            top: 50%
            left: -15px
            -webkit-transform: translateY(-50%)
            transform: translateY(-50%)
            z-index: -1

      > .section_img
        flex: 60px
        width: 60%
        margin: auto
        > .img
          width: 100%

      > .section_block
        > .text
          padding: 0 10% 40px
          +text-body(20px)

        > .about
          > .title
            +text-title(28px)
            position: relative
            margin: 0 0 20px  7%
            // padding: 0 0 20px
            background: linear-gradient(transparent 70%, #a7d6ff 70%)
            display: inline-block
            
          > .list
            margin-left: 10%

            > .list_item
              > .subtitle
                +text-title(24px)
                position: relative
                padding: 20px 0 10px

                &::after,&::before
                  content: ""
                  position: absolute
                  border-radius: 50%

                &::before
                  left: -32px
                  width: 20px
                  height: 20px
                  background: var(--skyBlue)
                  top: 50%
                  -moz-transform: translateY(-50%)
                  -webkit-transform: translateY(-50%)
                  -o-transform: translateY(-50%)
                  -ms-transform: translateY(-50%)
                  transform: translateY(-50%)
                
                &::after
                  top: 45%
                  left: -24px
                  width: 16px
                  height: 16px
                  background: var(--sub)

              > .text
                +text-body(16px)




</style>