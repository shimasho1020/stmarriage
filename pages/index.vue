<template>
  <div class="top_page_body" ref="pageObserver">
    <div class="hero" >
      <h1 class="page-title">
        <div class="page-title__block">
          <div class="page-title__block--sp">
            <span class="page-title__character" v-for="text in Array.from('お客様の個性にあわせた')" :key="text">
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
          <div class="page-title__block--sp">
            <span class="page-title__character" v-for="text in Array.from('最高の婚活を')" :key="text">
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
        </div>
        <div class="page-title__block">
          <div class="page-title__block--sp">
            <span class="page-title__character" v-for="text in Array.from('全力でサポートします')" :key="text">
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
        </div>
      </h1>
      <div class="img_block" >
        <img class="hero_img" src="~/assets/images/jewelry_hero.webp" alt="メイン写真">
      </div>
      <div class="intro">
        <div class="intro-card">
          <h1 class="intro-title">セントマリアージュ青山について</h1>
          <div class="intro-cont">
            <div class="img_block left"><img class="img" src="~/assets/images/marriage-gate.webp" alt="ダイヤモンドファミリークラブ"></div>
            <div class="text">東京青山の結婚相談所エクセレンス青山の婚活は、ご成婚第一主義。一人ひとりにあったお相手探しで、お客様の個性にあわせたオンリーワンの婚活をご提案いたします。当社が掲げる「オンリーワンのご成婚」は、お客様一人ひとりの個性にあわせて最適なパートナーをご紹介いたします。</div>
            <div class="img_block right"><img class="img" src="~/assets/images/clean_bouquet.webp" alt="ダイヤモンドファミリークラブ"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="section --1">
        <div class="section-wrap">
          <div class="section_title_block --1">
            <h1 class="title">Interview</h1>
            <div class="title__border"></div>
            <p class="title__sub">ご成婚者様からの声</p>
          </div>
          <div class="case_list">
            <nuxt-link
                class="case-item case-wrap"
                v-for="(item, index) of displayCaseList"
                :to="`/interview/${item.id}`"
                :key="index"
            >
              <div class="case-card">
                <div class="case-item__image_block">
                  <img class="case-item__image" :src="item.url" alt="インタビュー">
                </div>
                <div class="card">
                  <div class="__link">
                    <p class="__title"><span class="inline-block">{{item.age}}歳の{{item.sex}}会員様が</span><span class="inline-block">ご成婚されました！</span></p>
                    <ArrowImage class="right-arrow" direction="right"></ArrowImage>
                  </div>
                  <p class="__title">
                    <span class="inline-block">インタビュー内容はこちら</span>
                  </p>
                </div>
              </div>
            </nuxt-link>
            <div class="case-item empty"></div>
            <div class="case-item empty"></div>
          </div>
          <div class="link-block">
            <div class="link-wrap">
              <nuxt-link class="list-link" to="/interview">
                <div class="list-link-wrap" ref="linkPos3">
                  <span class="list-link-text inline-block">インタービューを全て見る</span>
                </div>
                <ArrowImage class="right-arrow" direction="right"></ArrowImage>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section --3">
        <div class="section-wrap">
          <div class="section_title_block --3">
            <h1 class="title">Self Introduction</h1>
            <div class="title__border"></div>
            <p class="title__sub">カウンセラーからのご挨拶</p>
          </div>
          <div class="self">
            <div class="self-cont">
              <div class="self-pic">
                <div class="img_block">
                  <img src="~/assets/images/ShimadaTomoko.webp" class="img" alt="カウンセラーの写真">
                </div>	
              </div>
              <div class="self-p">
                <div class="self-p_wrap">
                  <span class="inline-block">はじめまして。代表カウンセラーの島田智子です。<br>三菱系の結婚相談所「ダイヤモンドファミリークラブ」のカウンセラーとして、約10年勤務しておりました。<br>延べ1000人以上の会員様を担当し、20代から50代までの幅広い年齢層の方々のご成婚実績が多数ございます。　豊富な経験・知識を生かして、年齢、性別を問わず、お一人お一人に寄り添ったサポートをいたします。<br>「お見合いを成功させる秘訣」「異性に好かれる身だしなみ、行動、会話」「仮交際から真剣交際への進め方」「ご成婚への最後の一押し」等、幅広く丁寧にアドバイスいたします。<br>過去のご成婚者の方々から近況報告をいただいたり、元会員様から恋愛相談を受けたりと、現在でも長くお付き合いを続けさせていただいています。結婚後（成婚退会後）も何か悩みを抱えた時、いつでもご相談いただけるような身近な存在でありたいと思っております。<br>随時、無料相談（電話、zoom）を行っておりますので、お気軽にお問い合わせください。</span>
                </div>
              </div>
              <div class="self-body">
                <div class="self-comment 1">入会1ヵ月以内のお見合い成立率100%</div>
                <div class="self-comment 2">入会1カ月以内の交際成立率93%</div>
                <div class="self-table">
                  <div class="text">※セントマリアージュ青山で活動中の会員様（2022年5月現在）</div>
                  <div class="table --1">
                    <h4 class="table_title">職業一覧</h4>
                    <ul class="table_list">
                      <li class="list_item th">会員数</li>
                      <li class="list_item">80852名</li>
                      <li class="list_item th">最も多い会員層</li>
                      <li class="list_item">35才～39才</li>
                      <li class="list_item th">男性平均年収</li>
                      <li class="list_item">500～699万</li>
                    </ul>
                  </div>
                  <div class="table --2">
                    <h4 class="table_title">職業一覧</h4>
                    <ul class="table_list">
                      <li class="list_item">弁護士</li>
                      <li class="list_item">サラリーマン</li>
                      <li class="list_item">医師</li>
                      <li class="list_item">公認会計士</li>
                      <li class="list_item">金融</li>
                      <li class="list_item">商社</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="award_wrap">
                <div class="award-title">
                  <span class="inline-block">セントマリアージュ青山が</span>
                  <span class="inline-block">IBJ AWARD 2021年下期</span>
                  <span class="inline-block">を受賞しました！</span>
                </div>
                <div class="content_wrap --2">
                  <div class="content_body img">
                    <div class="top-service__img">
                      <div class="c-img">
                        <!-- <div class="c-img__border"></div> -->
                        <img src="~/assets/images/IBJ-award.webp" class="c-img__img" alt="ibjアワード">
                      </div>	
                    </div> 
                    <div class="top-service__img">
                      <div class="c-img">
                        <!-- <div class="c-img__border"></div> -->
                        <img src="~/assets/images/IBJ-award.webp" class="c-img__img" alt="ibjアワード">
                      </div>	
                    </div> 
                  </div>
                  <div class="content_body text">
                    <p>IBJ AWARD とは、日本結婚相談所連盟（IBJ)の加盟店3,362社の中で、過去６か月間で特に顕著な実績を残した結婚相談所に贈られる賞です。<br>
                      選定基準は、「入会数、成婚数」「地域への貢献度」「ガイドライン、法令の遵守」「クレームやトラブルがない事」等になります。<br>
                      これらの厳しい選定基準をクリアし、日本結婚相談所連盟(IBJ)がお勧めできる優良結婚相談所としてお墨付きをいただいたことになります。<br>
                      これからも、お一人でも多くの方々に幸せになっていただくために、心のこもったサポートをさせていただきたいと思っております。<br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section --4">
        <div class="section-wrap">
          <div class="section_title_block --4">
            <h1 class="title">Strangth</h1>
            <div class="title__border"></div>
            <p class="title__sub">選ばれる理由</p>
          </div>
          <ul class="content_wrap">
            <li class="content_body ---1 top-our_strengths__container">
              <div class="top-our_strengths__container--body">
                <h2 class="top-our_strengths__container--point">1</h2>
                <p class="top-our_strengths__container--heading">お一人お一人の<br>お気持ちに寄り添った<br>丁寧なサポート</p>
                <p class="top-our_strengths__container--about">
                  通信状況が悪い環境でも安定してコンテンツを 配信する技術で、安心してコンテンツを配信、視聴可能です。（特許出願済み）
                </p>
              </div>
              <div class="top-our_strengths__container--img">
                <div class="img_block">
                  <img src="~/assets/images/black_wedding.webp" class="img" alt="丁寧なサポート">
                </div>	
              </div> 
            </li>
            <li class="content_body ---2 top-our_strengths__container">
              <div class="top-our_strengths__container--body">
                <h2 class="top-our_strengths__container--point">2</h2>
                <p class="top-our_strengths__container--heading">お一人お一人の<br>お気持ちに寄り添った<br>丁寧なサポート</p>
                <p class="top-our_strengths__container--about">
                  通信状況が悪い環境でも安定してコンテンツを 配信する技術で、安心してコンテンツを配信、視聴可能です。（特許出願済み）
                </p>
              </div>
              <div class="top-our_strengths__container--img">
                <div class="img_block">
                  <img src="~/assets/images/wedding_hall.webp" class="img" alt="満足度">
                </div>	
              </div> 
            </li>
          </ul>
        </div>
      </div>
      <div class="section --5">
        <div class="section-wrap">
          <div class="section_title_block --5">
            <h1 class="title">Access</h1>
            <div class="title__border"></div>
            <p class="title__sub">アクセス</p>
          </div>
          <div class="access-comment">住所：〒107-0052東京都港区赤坂8-4-14　青山タワープレイス８F<br>（青山一丁目駅から徒歩3分）</div>
          <div class="access-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.175124146428!2d139.72407744999748!3d35.672689687952186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5e792882ab%3A0xc5ac8cc58a36ceef!2z6Z2S5bGx44K_44Ov44O844OX44Os44Kk44K5!5e0!3m2!1sja!2sjp!4v1657282738557!5m2!1sja!2sjp" 
            width="100%"
            height="400" 
            style="border:0;" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
import { computed, defineComponent, ref, watch, reactive, onMounted, onUnmounted, onBeforeUnmount, useContext, getCurrentInstance, useRoute, useRouter, useAsync } from '@nuxtjs/composition-api'
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where, limit } from "firebase/firestore"
import { firestore, storage } from '~/plugins/firebase.js'
import { CaseList,Interview, Interviewer, DisplayInterviewer } from '~/types/index'


const trigger: string[] = [
  '.intro',
  '.section_title_block.--1',
  '.case_list',
  '.link-block',
  '.section_title_block.--3',
  '.self-pic',
  '.self-p',
  '.self-body',
  '.award-title',
  '.content_body.img',
  '.content_body.text',
  '.section_title_block.--4',
  '.content_body.---1',
  '.content_body.---2',
  '.section_title_block.--5',
  '.access-comment',
  '.access-map',
]

const { app, store } = useContext()

const interviewer = ref([] as DisplayInterviewer[])
const displayCaseList = computed(() => {
  return interviewer.value.map((val, index) => {
      return {
        id: val.id,
        url: selectImg(index),
        ...val.caseList
      }
    })
})
const selectImg = (index: number):string => {
  if(index == 0) {return '/_nuxt/assets/images/sample_couple_1.webp'}
  else if(index == 1) {return '/_nuxt/assets/images/sample_couple_2.webp'}
  else {return '/_nuxt/assets/images/sample_couple_3.webp'}
}

useAsync(async () => {
  const q = query(collection(firestore, "interviewer"), where("isPublic", "==", true),where("caseList.isInterview", "==", true), limit(3))
  const querySnapshot = await getDocs(q)

  interviewer.value = querySnapshot.docs.map((doc) => {
  return {
      id: doc.id,
      ...doc.data() as Interviewer
    }
  })
})

let circleAnim: gsap.core.Tween 
let headerAnim: gsap.core.Tween
let fuwaAnim = ref<gsap.core.Tween[]>([])

let isLoadingEnabled = computed<boolean>(() => store.getters['isLoadingEnabled'])

  const myObserver = ref<ResizeObserver>({} as ResizeObserver)
  const pageObserver = ref()

onMounted(() => {
  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      fuwaAnim.value.forEach((val) => {
        val.scrollTrigger?.refresh()
      })
    }
  })
  myObserver.value = resizeObserver
  myObserver.value.observe(pageObserver.value)

  if(isLoadingEnabled.value) {
    store.dispatch('startLoading')
  }
  circleAnim = gsap.fromTo(".flow_block",{
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: '.body',
      start: 'top bottom',
      end: 'bottom bottom',
      toggleActions: 'play reverse play reverse',
    },
    opacity: 1,
    duration: .3, 
  })
  
  headerAnim = gsap.to(".header_wrap",{
    scrollTrigger: {
      trigger: '.intro',
      start: 'top 40%',
      toggleActions: 'play none none reverse',
    },
    onStart: () => store.commit('changeHeaderToBlue'),
    onReverseComplete: () => store.commit('changeHeaderToTrans'),
  })

  trigger.forEach(value => {
    let array: gsap.core.Tween = gsap.to(value, {
      scrollTrigger: {
        trigger: value,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
      },
      opacity: 1,
      transform: 'translateY(0)',
      duration: 1, 
    })
    fuwaAnim.value.push(array)
  })
})

onBeforeUnmount(() => {
  myObserver.value.unobserve(pageObserver.value)

  circleAnim.scrollTrigger?.disable()
  headerAnim.scrollTrigger?.disable()
  fuwaAnim.value.forEach(value => {
    value.scrollTrigger?.disable()
  })
})
  
</script>


<style lang="sass" scoped>
.hero
  position: relative

  > .page-title
    position: absolute
    top: 50vh
    left: 50vw
    transform: translate(-50%,-50%)
    text-align: center
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    +text-subtitle(54px)
    color: var(--sub)

    +sp-view
      +text-subtitle(27px)
      color: var(--sub)

    > .page-title__block
      display: flex
      flex-wrap: wrap
      justify-content: center
      > .page-title__block--sp
        display: flex
        justify-content: center
        padding: 8px 0
        .page-title__character
          //overflow: hidden
          > .page-title__child
            transform: translateY(32px)
            display: block

  > .img_block
    width: 100vw
    height: 100vh
    z-index: -50
    position: sticky
    top: 0

    > .hero_img
      width: 100%
      height: 100%
      object-fit: cover

      +sp-view
        object-position: 80% center

  > .intro
    padding: 240px 0 160px
    opacity: 0,
    transform: translateY(40px)

    +sp-view
      padding: 100px 0 80px

    > .intro-card
      width: 1080px
      max-width: calc(100% - 10vw)
      margin: auto
      text-align: center
      box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%)
      border-radius: 20px
      padding: 30px 40px 40px
      background-color: rgba(255, 255, 255, 0.9)
      background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
      background-position: left 2px top 2px, right 2px top 2px, left 2px bottom 2px, right 2px bottom 2px
      background-size: 66px 66px

      +sp-view
        padding: 30px 30px 40px

      > .intro-title
        +text-title(36px)
        color: var(--sub)
        display: inline-block
        position: relative
        text-align: center
        margin-bottom: 10px
        padding: 0 17%

        +sp-view
          font-size: 24px
          padding: 0

        &::before,&::after 
          content: ''
          position: absolute
          top: 50%
          display: inline-block
          width: 15%
          height: 2px
          background-color: #000875

          +sp-view
            display: none
          
        &::before 
          left:0
          background: linear-gradient(-45deg, transparent, #000875 10%, #000875 30%, transparent)
        &::after 
          right: 0
          background: linear-gradient(-45deg, transparent, #000875 70%, #000875 90%, transparent)

      > .intro-cont
        display: flex
        justify-content: space-between
        align-items: center

        > .text
          +text-body(16px)
          padding: 0 20px

        > .img_block
          flex: 0 0 25%
          position: relative

          +sp-view
            display: none

          &::after
            content: ''
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%

          &.left
            &::after
              background-image: linear-gradient(90deg, transparent 0 60%, #FFF 100%), linear-gradient(0deg, transparent 0 60%, #FFF 100%)
          
          &.right
            &::after
              background-image: linear-gradient(270deg, transparent 0 40%, #FFF 100%),linear-gradient(0deg, transparent 0 60%, #FFF 100%)
          
          > .img
            width: 100%
            height: 20vw
            object-fit: cover

.body
  height: auto
  position: relative
  background-image: url("/images/luxury-2.jpg")
  background-size: 25%
  background-repeat: repeat
  
  > .section
    // padding: 150px 0 150px
    > .section-wrap
      margin: auto
      width: 1080px
      max-width: calc(100% - 10vw)
      position: relative
      padding: 40px 0 80px

      +sp-view
        padding: 80px 0 80px

      > .section_title_block
        display: flex
        justify-content: center
        flex-wrap: wrap
        width:100%
        margin: 60px 0 60px
        text-align: center
        opacity: 0,
        transform: translateY(40px)

        > .title
          +text-title(64px)

          +sp-view
            width: 100%
            +text-title(48px)

        > .title__border
          width: 70px
          height: 2px
          background: var(--main)
          transform: rotate(-33deg)
          margin: 50px 20px 0

          +sp-view
            transform: rotate(0)
            margin: 3% 0

        > .title__sub
          +text-subtitle(20px)
          margin-top: 60px

          +sp-view
            +text-subtitle(16px)
            width: 100%
            margin-top: 0
            margin-bottom: 5%
    &.--1
      // background-color: var(--white-1)
      > .section-wrap
        > .case_list
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          gap: 0 5px
          opacity: 0,
          transform: translateY(40px)

          +sp-view
            width: 100%
            flex-direction: column

          > .case-item
            min-width: 280px
            flex: 1
            margin-bottom: 40px
            border-radius: 8px

            &.empty
              width: 100%
              height: 0
              margin-bottom: 0px
              padding: 0px
              border-top: 0

            +sp-view
              min-width: 240px
              
              &:nth-child(2)
                display: none
              &:nth-child(3)
                display: none

            > .case-card
              width: 100%
              
              > .case-item__image_block
                position: relative
                width: 100%
                overflow: hidden
                border-radius: 8px 8px 0px 0px

                &::before
                  content:""
                  display: block
                  padding-top: 63%    // (縦220px / 横350px)より

                  +sp-view
                    display: none

                > .case-item__image
                  display: block
                  position: absolute
                  height: 100%
                  width: 100%
                  top: 0
                  object-fit: cover

                  +sp-view
                    position: relative
                    height: auto
                    width: 100%

              > .card
                display: block
                background-color: white
                height: fit-content
                flex-shrink: 0
                width: 100%
                border-radius: 0 0 8px 8px
                padding: 30px

                +sp-view
                  padding: 24px 5vw

                > .__link
                  padding: 8px 0
                  display: flex
                  align-items: center
                  justify-content: space-between

                  > .__title
                    +text-title(24px)

                    +sp-view
                      +text-title(24px)

                  > .right-arrow
                    color: var(--main)
                > .__logo
                  height: 32px
                  width: auto
                  margin-top: 12px

                > .__title
                  margin-top: 12px
                  +text-subtitle(16px)

        > .link-block
          text-align: right
          opacity: 0,
          transform: translateY(40px)

          > .link-wrap
            display: inline-block

            > .list-link
              display: flex
              align-items: center
              gap: 15px

              > .list-link-wrap
                overflow: hidden
                display: flex
                align-items: center

                >.list-link-text
                  +text-title(32px)
                  display: inline-block
                  // padding-right: 24px
                  white-space: nowrap

                  +sp-view
                    +text-title(24px)

              > .right-arrow
                height: 11px
                width: 27px
                color: var(--main)

                +sp-view
                  +text-title(32px)

    &.--3
      background-color: var(--main)
      > .section-wrap
        border-bottom: 1px solid black
        > .section_title_block
          > .title
            color: var(--white-1)
          > .title__border
            background: var(--white-1)
          > .title__sub
            color: var(--white-1)
        > .self
          > .self-cont
            display: flex
            flex-wrap: wrap
            justify-content: space-between
            gap: 60px
            margin: 20px 0 0
            padding: 20px

            +sp-view
              padding: 0

            > .self-pic
              flex: 0 0 30%
              opacity: 0,
              transform: translateY(40px)

              +sp-view
                flex: 0 0 100%

              > .img_block
                position: relative
                width: 100%
                border-radius: 20px
                overflow: hidden

                +sp-view
                  width: 80%
                  margin: auto

                &::before
                  content:""
                  display: block
                  padding-top: 160%

                  +sp-view
                  padding-top: 140%

                &::after
                  content: ''
                  position: absolute
                  top: 0
                  left: 0
                  width: 100%
                  height: 100%
                  background-image: linear-gradient(90deg, transparent 0 95%, var(--main) 100%), linear-gradient(0deg, transparent 0 95%, var(--main) 100%), linear-gradient(180deg, transparent 0 95%, var(--main) 100%), linear-gradient(270deg, transparent 0 95%, var(--main) 100%)
                  // background-image: linear-gradient(90deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(0deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(180deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(270deg, transparent 0 95%, white 95%, transparent 100%)

                > .img
                  display: block
                  position: absolute
                  height: 100%
                  width: 100%
                  top: 0
                  object-fit: cover

            > .self-p
              +text-body(16px)
              color: var(--white-1)
              position: relative
              line-height: 2
              flex: 0 0 60%
              opacity: 0,
              transform: translateY(40px)

              +sp-view
                flex: 0 0 100%

              > .self-p_wrap
                // padding: 4% 5%
                // background-color: var(--white-1)

                &::after
                  content: ''
                  position: absolute
                  top: 0
                  left: 0
                  width: 100%
                  height: 100%
                  // background-image: linear-gradient(90deg, transparent 0 95%, var(--main) 100%), linear-gradient(0deg, transparent 0 95%, var(--main) 100%), linear-gradient(180deg, transparent 0 95%, var(--main) 100%), linear-gradient(270deg, transparent 0 95%, var(--main) 100%)
                  // background-image: linear-gradient(90deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(0deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(180deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(270deg, transparent 0 95%, white 95%, transparent 100%)


                > .inline-block
                  // background-color: var(--white-1)
                  // padding: 20px 0

            > .self-body
              flex: 70%
              opacity: 0
              transform: translateY(40px)

              > .self-comment
                text-align: center
                +text-title(40px)
                background-image: linear-gradient(135deg, #b8751e 0%, #ffce08 37%,  #e1ce08 63%, #b8751e 100%)
                background-clip: text
                -webkit-text-fill-color: transparent
                margin-bottom: 20px

                +sp-view
                  font-size: 24px

              > .self-table
                width: 100%
                margin: 40px auto
                +text-subtitle(16px)
                display: flex
                justify-content: space-between
                flex-wrap: wrap

                +sp-view
                  width: 100%
                
                > .text
                  width: 100%
                  text-align: center
                  color: var(--white-1)

                > .table
                  border-radius: 10px
                  padding: 20px
                  box-sizing: border-box
                  width: 48%
                  margin: auto
                  border: 1px solid var(--white-1)
                  background-color: white

                  +sp-view
                    width: 100%
                    margin: 0 0 20px

                  > .table_title
                    +text-title(24px)
                    color: var(--main)
                    text-align: center
                    margin: 0 0 20px
                    line-height: 1.3
                    border-bottom: 1px solid var(--main)
                    padding-bottom: 10px
                  > .table_list
                    display: flex
                    justify-content: space-between
                    flex-wrap: wrap
                    list-style: none
                    > .list_item
                      +text-body(16px)
                      font-weight: bold
                      width: 49%
                      text-align: center
                      padding: 10px
                      box-sizing: border-box
                      border-radius: 5px
                      background: #efecdd
                      margin-bottom: 5px
                  
                  &.--1
                    > .table_list
                      > .list_item
                        background: var(--skyBlue)
                        &.th
                          background: var(--main)
                          color: var(--white-1)

            > .award_wrap
              > .award-title
                text-align: center
                width: 100%
                +text-title(40px)
                margin-bottom: 10px
                background-image: linear-gradient(135deg, #b8751e 0%, #ffce08 37%,  #e1ce08 63%, #b8751e 100%)
                background-clip: text
                -webkit-text-fill-color: transparent
                margin: 0 0 80px
                opacity: 0,
                transform: translateY(40px)

                +sp-view
                  font-size: 28px

              > .content_wrap
                display: flex
                // flex-direction: column
                justify-content: space-between
                flex-wrap: wrap
                row-gap: 40px

                > .content_body
                  width: calc(50% - 30px)
                  opacity: 0,
                  transform: translateY(40px)

                  +sp-view
                    width: 100%

                  > .top-service__img
                    width: 40%
                    margin: auto

                    +sp-view
                      // width: 300px
                      // margin: auto

                    > .c-img
                      position: relative
                      width: 100%
                      border-radius: 20px
                      overflow: hidden

                      &::before
                        content:""
                        display: block
                        padding-top: 100%

                      > .c-img__img
                        display: block
                        position: absolute
                        height: 100%
                        width: 100%
                        object-fit: cover
                        top: 0
                        box-shadow: 3px 3px 6px rgba(0,0,0,.6)
                        // margin: 5% 0 0 5%
                        z-index: 2

                  &.img
                    display: flex
                    // flex-direction: column
                    gap: 40px
                  &.text
                    text-align: center
                    +text-body(16px)
                    color: var(--white-1)
                    letter-spacing: .1em
                    line-height: 1.8em
                    // margin: 5% 0 0

                    +sp-view
                      +text-body(16px)
                      color: var(--white-1)
                      margin-bottom: 20%

    &.--4
      background-color: var(--white-1)
      > .section-wrap
        border-bottom: 1px solid black
        // padding: 0 0 300px
        > .content_wrap
          display: flex
          justify-content: space-between
          flex-wrap: wrap
          padding: 40px 0 0

          +sp-view
            gap: 40px
            padding: 0

          > .content_body
            width: 45%
            // transform: translateY(60px)
            list-style: none
            color: #707070
            text-align: left
            padding: 10px
            opacity: 0
            transform: translateY(40px)

            +sp-view
              width: 100%
              display: flex
              flex-wrap: wrap-reverse
              gap: 10px

            > .top-our_strengths__container--body
              > .top-our_strengths__container--point
                +text-title(40px)
                background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)
                background-clip: text
                -webkit-text-fill-color: transparent

                +sp-view
                  &::after
                    margin: 3% 0 5%

                &::before
                  content: "Point"
                  +text-subtitle(30px)
                  color: var(--sub)
                  margin-right: 10px

                  +sp-view
                    font-size: 20px

                &::after
                  content: ""
                  width: 50px
                  height: 3px
                  background: var(--sub)
                  display: block 
                  margin: 5% 0 8%

                  +sp-view
                    margin: 0% 0 8%

              > .top-our_strengths__container--heading
                +text-title(40px)
                line-height: 1.4em
                background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)
                background-clip: text
                -webkit-text-fill-color: transparent

                +sp-view
                  +text-title(30px)

              > .top-our_strengths__container--about
                +text-body(20px)
                line-height: 1.4em
                margin: 8% 0 13%

                +sp-view
                  margin:5% 0 5%
                  +text-body(16px)
            
            > .top-our_strengths__container--img
              width: 95%
              // height: 25vw

              +sp-view
                width: 65vw
                // height: 40vw
                margin: 0 0 0 auto
                padding: 0 5% 0 0

              > .img_block
                position: relative
                width: 100%

                &::before
                  content:""
                  display: block
                  padding-top: 100%

                  +sp-view
                  padding-top: 70%

                &::after
                  content: ''
                  position: absolute
                  top: 0
                  left: 0
                  width: 100%
                  height: 100%
                  background-image: linear-gradient(90deg, transparent 0 90%, var(--white-1) 100%), linear-gradient(0deg, transparent 0 90%, var(--white-1) 100%), linear-gradient(180deg, transparent 0 90%, var(--white-1) 100%), linear-gradient(270deg, transparent 0 90%, var(--white-1) 100%)

                > .img
                  display: block
                  position: absolute
                  height: 100%
                  width: 100%
                  top: 0
                  object-fit: cover
              
    &.--5
      background-color: var(--white-1)
      > .section-wrap
        width: 100%
        max-width: 100%

        +sp-view
          width: 1080px
          max-width: calc(100% - 10vw)

        > .access-comment
          text-align: center
          margin: 40px 0 40px
          +text-body(16px)
          opacity: 0,
          transform: translateY(40px)
          
        > .access-map
          width: 100%
          height: 400px
          object-fit: cover
          opacity: 0,
          transform: translateY(40px)

</style>
