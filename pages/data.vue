<template>
<div>
  <div class="title_block" style="text-align:center">
    <h1 class="title">IBJ会員データ</h1>
  </div>
  <section class="section">
    <div class="section-wrap">
      <!-- <div class="section_title_block --1">
        <h2 class="title">IBJ会員データ</h2>
      </div> -->
      <div class="section_body">
        <div class="content">
          <h3 class="title">IBJ(日本結婚相談所連盟)について</h3>
          <div class="text">
            全国の結婚相談所3,694社が加盟する日本結婚相談所連盟。<br>
            各加盟相談所に登録して、お見合い結婚をご希望されている会員は81,721名。<br>
            加盟相談所の仲人が協力しながら幸せな成婚を生み出しています。
          </div>
        </div>
        <div class="content --1">
          <h3 class="title">成婚者数</h3>
          <div class="data_table">
            <p class="subtitle">年間成婚者数</p>
            <ul class="list">
              <li>
                <span class="year">2019年</span>
                <span class="number">11,909名</span>
              </li>
              <li>
                <span class="year">2020年</span>
                <span class="number">12,249名</span>
              </li>
              <li>
                <span class="year">2021年</span>
                <span class="number">14,671名</span>
              </li>
            </ul>
          </div>
          <div class="chart_wrap">
            <barChart :data="propSuccessData" label="成婚者数" :height="200" :displayLegend="false"></barChart>
          </div>
        </div>
        <div class="content --2">
          <h3 class="title">年齢別会員数</h3>
          <div class="data_table">
            <p class="subtitle">総会員数(2023年2月現在)</p>
            <div class="list">
              <div class="cell">
                <div class="number">81,721名</div>
              </div>
            </div>
          </div>
          <div class="chart_wrap">
            <barChart :data="propTotalData" label="年齢別会員数"></barChart>
          </div>
        </div>
        <div class="content_wrap">
          <div class="content --3">
            <h3 class="title">男女比率</h3>
            <div class="chart_wrap">
              <circleChart :data="propSexData" label="男女比率"></circleChart>
            </div>
          </div>
          <div class="content --4">
            <h3 class="title">年代別会員比率</h3>
            <div class="chart_wrap">
              <circleChart :data="propAgeData" label="年代別会員比率"></circleChart>
            </div>
          </div>
        </div>
        <div class="content --5">
          <h3 class="title">年収(男性)</h3>
          <div class="chart_wrap">
            <barChart :data="propIncomeData" label="男性の年収" :height="200" :displayLegend="false"></barChart>
          </div>
        </div>
        <div class="content --6">
          <h3 class="title">学歴</h3>
          <div class="chart_wrap">
            <barChart :data="propAcademicData" label="学歴"></barChart>
          </div>
          <!-- <div class="chart_wrap">
            <div class="chart">
              <multiCircleChart :data="propAcademicData" label="学歴" type="doughnut"></multiCircleChart>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
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

const propTotalData: ChartData = {
  labels: ['〜29歳', '30歳〜34歳', '35歳〜39歳', '40歳〜44歳', '45歳〜49歳', '50歳〜54歳', '55歳〜59歳', '60歳〜'],
  datasets: [
    {
    label: '男性',
    data: getRand(8),
    borderColor: '#00CCFF',
    backgroundColor: '#00CCFF',
    },
    {
    label: '女性',
    data: getRand(8),
    borderColor: '#FFCCFF',
    backgroundColor: '#FFCCFF',
    },
  ]
}

const propSuccessData: ChartData = {
  labels: ['2017年', '2018年', '2019年', '2020年', '2021年'],
  datasets: [
    {
      label: '成婚者数',
      data: getRand(5),
      borderColor: '#0066FF',
      backgroundColor: '#0066FF',
    },
  ]
}

const propSexData: ChartData = {
  labels: ['男性', '女性',],
  datasets: [
    {
      data: getRand(2),
      backgroundColor: ['#00CCFF','#FFCCFF'],
    },
  ]
}

const propAgeData: ChartData = {
  labels: ['20代以下','30代','40代','50代','60代以上'],
  datasets: [
    {
    data: getRand(5),
    backgroundColor: ['#FFCCFF','#CCCCFF','#99CCFF', '#66CCFF', '#33CCFF'],
    },
  ]
}

const propIncomeData: ChartData = {
  labels: ['〜399万', '400〜499万', '500〜699万', '700〜999万', '1000万〜'],
  datasets: [
    {
      label: '年収',
      data: getRand(5),
      borderColor: '#0066FF',
      backgroundColor: '#0066FF',
    },
  ]
}

const propAcademicData: ChartData = {
  labels: ['高卒', '専門卒', '四大卒', '院卒', 'その他'],
  datasets: [
    {
      label: '男性',
      data: getRand(5),
      borderColor: '#00CCFF',
      backgroundColor: '#00CCFF',
    },
    {
      label: '女性',
      data: getRand(5),
      borderColor: '#FFCCFF',
      backgroundColor: '#FFCCFF',
    },
  ]
}

</script>

<style lang="sass" scoped>
.section
  padding: 80px 0 
  +sp-view
    padding: 40px 0 
  > .section-wrap
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    position: relative

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

        > .text
          +text-body(16px)
          padding: 10px 20px 0

        > .data_table
          margin: 20px 0 
          background-color: #fff
          padding: 20px
          border-radius: 8px
          overflow: hidden
          > .subtitle
            +text-title(20px)
            text-align: center
            padding: 0 0 20px

          > .list
            padding: 10px 0
            margin-bottom: 10px
            background-color: #f5f5f5
            display: flex

            +sp-view
              flex-direction: column
              padding: 0 10px


            > li
              width: 33%
              display: flex
              justify-content: space-between
              align-items: center
              padding: 15px 20px
              border-right: 1px solid #ddd

              &:nth-child(3)
                border-right: none

                +sp-view
                  border-bottom: none

              +sp-view
                width: 100%
                border-bottom: 1px solid #ddd
                border-right: none

              > .year
                +text-body(16px)
              > .number
                +text-title(20px)

            > .cell
              text-align: center
              padding: 8px
              width: 100%

              > .number
                +text-title(22px)
                text-align: center


.content_wrap
  display: flex
  flex-wrap: wrap
  justify-content: space-between

  > .content
    flex: 0 0 45%

    +sp-view
      flex: 0 0 100%
</style>