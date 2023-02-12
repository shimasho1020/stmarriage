<template>
<div>
  <div class="title_block" style="text-align:center">
    <h1 class="title">会員データ</h1>
  </div>
  <section class="section">
    <div class="section-wrap">
      <!-- <div class="section_title_block --1">
        <h2 class="title">IBJ会員データ</h2>
      </div> -->
      <div class="section_body">
        <div class="content --1">
          <h3 class="title">年齢別会員数</h3>
          <div class="chart_wrap">
            <barChart :data="propData" label="年齢別会員数"></barChart>
          </div>
        </div>
        <div class="content_wrap">
          <div class="content --2">
            <h3 class="title">男女比率</h3>
            <div class="chart_wrap">
              <circleChart :data="propIncomeData" label="男女比率"></circleChart>
            </div>
          </div>
          <div class="content --3">
            <h3 class="title">年代別会員比率</h3>
            <div class="chart_wrap">
              <circleChart :data="propAgeData" label="年代別会員比率"></circleChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <button @click="createCharts()">シャッフル</button> -->
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from '@nuxtjs/composition-api'
import { ChartData } from '~/types/index'

// ランダムな数値製造マシーン
function getRand (num: number) {
  const arr: number[] = []
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 1000))
  }
  return arr
}

const propData: ChartData = {
  labels: ['〜29歳', '30歳〜34歳', '35歳〜39歳', '40歳〜44歳', '45歳〜49歳', '50歳〜54歳', '55歳〜59歳', '60歳〜'],
  datasets: [
    {
    label: '男性',
    data: getRand(8),
    borderColor: '#17aaee',
    backgroundColor: '#17aaee',
    },
    {
    label: '女性',
    data: getRand(8),
    borderColor: '#ff0090',
    backgroundColor: '#ff0090',
    },
  ]
}

const propIncomeData: ChartData = {
  labels: ['男性', '女性',],
  datasets: [
    {
    // label: '男性',
    data: getRand(2),
    // borderColor: '#17aaee',
    backgroundColor: ['#17aaee','#ff0090'],
    },
    // {
    // label: '女性',
    // data: getRand(),
    // borderColor: '#ff0090',
    // backgroundColor: '#ff0090',
    // },
  ]
}

const propAgeData: ChartData = {
  labels: ['20代以下','30代','40代','50代','60代以上'],
  datasets: [
    {
    data: getRand(5),
    backgroundColor: ['#FF99FF','#FF99CC','#FF9999','#FF9966','#FF9933'],
    },
  ]
}

</script>

<style lang="sass" scoped>
.section
  padding: 80px 0 0
  +sp-view
    padding: 40px 0 0
  > .section-wrap
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    position: relative
    padding: 40px 0 80px
    +sp-view
      padding: 60px 0 60px
    > .section_title_block
      display: flex
      justify-content: center
      flex-wrap: wrap
      width:100%
      margin: 60px 0 60px
      text-align: center
      +sp-view
        margin: 0 0 20px
      > .title
        +text-subtitle(32px)
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
          background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)

    > .section_body
      width: 90%
      margin: auto

      +sp-view
        width: 100%
      .content
        padding: 0 0 40px
        > .title
          +text-subtitle(24px)
          padding: 0.25em 0.5em
          background: transparent
          border-left: solid 5px #17aaee


.content_wrap
  display: flex
  flex-wrap: wrap
  justify-content: space-between

  > .content
    flex: 0 0 45%

    +sp-view
      flex: 0 0 100%
</style>